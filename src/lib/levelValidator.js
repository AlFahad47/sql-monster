import { executeQuery } from "./sqlEngine";

/**
 * Validates the user's result against the expected result.
 * 
 * Strategy:
 * 1. Run the level's setup SQL (initSql) to ensure fresh state.
 * 2. Run the EXPECTED query to get the target answer.
 * 3. Run the USER query.
 * 4. Compare the results (deep equality of values).
 * 
 * @param {Object} db - The sql.js database instance
 * @param {String} userQuery - The query the user typed
 * @param {Object} level - The level object containing initSql and expectedQuery
 */
export const validateLevel = (db, userQuery, level) => {
    try {
        // 1. Reset/Setup state (Always fresh state for validation)
        if (level.initSql) {
            // Drop common tables to ensure clean slate
            db.exec("DROP TABLE IF EXISTS items; DROP TABLE IF EXISTS villagers; DROP TABLE IF EXISTS paths; DROP TABLE IF EXISTS destinations; DROP TABLE IF EXISTS books; DROP TABLE IF EXISTS events; DROP TABLE IF EXISTS codes; DROP TABLE IF EXISTS treasures;");
            db.exec(level.initSql);
        }

        // 2. Run User Query
        let userRes;
        try {
            userRes = executeQuery(db, userQuery);
        } catch (err) {
            return { success: false, error: err.message };
        }

        if (!userRes.success) {
            return { success: false, error: userRes.error };
        }

        // 3. Validation Strategy
        let userRows = [];
        let expectedRows = [];
        let resultForUI = []; // We need to return the full result object (with columns) for the UI

        if (level.type === 'dml') {
            // For DML (INSERT, UPDATE, DELETE), we don't check the user's query output (which is usually empty).
            // We verify the STATE of the table after their query.
            // level.expectedQuery should be a SELECT statement that verifies the table state.

            // Re-run setup on a temporary shadow DB or just assume the user modified the current DB instance correctly.
            // Since we just reset the DB in step 1, the DB is now in the state *after* user query.
            // We just need to run the verification query on this state.

            const verificationRes = executeQuery(db, level.expectedQuery);
            if (!verificationRes.success) {
                console.error("DML Verification Query failed", verificationRes.error);
                return { success: false, error: "System Error: Verification query failed." };
            }
            userRows = verificationRes.results[0]?.values || [];

            // To get the EXPECTED rows, we would ideally need a "correct state" DB.
            // But to save complexity, let's hardcode that for DML levels, `level.expectedQuery` IS the verification,
            // and `level.solution` produces the correct state.
            // Actually, simplest way: Run setup, Run Solution, Run ExpectedQuery -> Store that as 'Target'.
            // Then Run setup, Run UserQuery, Run ExpectedQuery -> Compare.
            // But we already ran UserQuery on fresh DB. 
            // So we need to calculate 'Target' separately? 
            // Optimization: Let's assume the level author provided the *Expected Result Data* directly? No, that's brittle.
            // Better: We calculate expected rows by matching against the solution.

            // Undo user changes? No, DB is in-memory.
            // Let's rely on a 2-pass approach:
            // Pass A (Target): Reset DB -> Run Solution -> Run Verification Query -> Get Rows.
            // Pass B (User): Reset DB -> Run User Query -> Run Verification Query -> Get Rows.
            // This is robust.

            // RE-RESET for Target Calculation (Since we dirty-wrote with user query)
            if (level.initSql) {
                db.exec("DROP TABLE IF EXISTS items; DROP TABLE IF EXISTS villagers; DROP TABLE IF EXISTS paths; DROP TABLE IF EXISTS destinations; DROP TABLE IF EXISTS books; DROP TABLE IF EXISTS events; DROP TABLE IF EXISTS codes; DROP TABLE IF EXISTS treasures;");
                db.exec(level.initSql);
            }

            // Run Solution
            executeQuery(db, level.solution);
            // Run Verification to get Target
            const targetRes = executeQuery(db, level.expectedQuery);
            expectedRows = targetRes.results[0]?.values || [];

            // RE-RESET for User Clean Run (Wait, we already ran user query? No we need to re-run to be fair if we just reset)
            // Actually, we ran user query at start.
            // Let's flip order: 
            // 1. Calc Target (Reset -> Solution -> Verify -> Store).
            // 2. Calc User (Reset -> UserQuery -> Verify -> Store).
            // 3. Compare.

            // OK, let's do User Run NOW (since we just reset).
            if (level.initSql) {
                // Clear again
                db.exec("DROP TABLE IF EXISTS items; DROP TABLE IF EXISTS villagers; DROP TABLE IF EXISTS paths; DROP TABLE IF EXISTS destinations; DROP TABLE IF EXISTS books; DROP TABLE IF EXISTS events; DROP TABLE IF EXISTS codes; DROP TABLE IF EXISTS treasures;");
                db.exec(level.initSql);
            }
            executeQuery(db, userQuery);
            const userVerifyRes = executeQuery(db, level.expectedQuery);
            if (!userVerifyRes.success) {
                // If verification fails (e.g. table deleted?), user failed.
                return { success: false, error: "Verification failed. Did you destroy the table?" };
            }
            userRows = userVerifyRes.results[0]?.values || [];
            resultForUI = userVerifyRes.results; // <--- FIX: Return the full object from verification query

        } else {
            // Standard SELECT validation
            // Setup again to be safe
            if (level.initSql) {
                db.exec("DROP TABLE IF EXISTS items; DROP TABLE IF EXISTS villagers; DROP TABLE IF EXISTS paths; DROP TABLE IF EXISTS destinations; DROP TABLE IF EXISTS books; DROP TABLE IF EXISTS events; DROP TABLE IF EXISTS codes; DROP TABLE IF EXISTS treasures;");
                db.exec(level.initSql);
            }

            // Get Expected Result
            const expectedRes = executeQuery(db, level.expectedQuery);
            if (!expectedRes.success) {
                return { success: false, error: "System Error: Expected query failed." };
            }
            expectedRows = expectedRes.results[0]?.values || [];

            // Run User Query
            if (level.initSql) {
                db.exec("DROP TABLE IF EXISTS items; DROP TABLE IF EXISTS villagers; DROP TABLE IF EXISTS paths; DROP TABLE IF EXISTS destinations; DROP TABLE IF EXISTS books; DROP TABLE IF EXISTS events; DROP TABLE IF EXISTS codes; DROP TABLE IF EXISTS treasures;");
                db.exec(level.initSql);
            }
            const runRes = executeQuery(db, userQuery);
            if (!runRes.success) return { success: false, error: runRes.error };
            userRows = runRes.results[0]?.values || [];
            resultForUI = runRes.results;
        }

        // 4. Compare
        const matches = JSON.stringify(userRows) === JSON.stringify(expectedRows);

        if (matches) {
            return { success: true, results: resultForUI, message: level.successMessage };
        } else {
            return {
                success: false,
                results: resultForUI,
                error: "The result doesn't match the objective. Try again!"
            };
        }

    } catch (e) {
        return { success: false, error: e.message };
    }
};
