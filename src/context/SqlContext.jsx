import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { loadSqlEngine, createDatabase, executeQuery } from '../lib/sqlEngine';

const SqlContext = createContext();

export const SqlProvider = ({ children }) => {
    const [db, setDb] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [SQL, setSQL] = useState(null);

    // Initialize the database engine
    useEffect(() => {
        const init = async () => {
            try {
                const sqlInstance = await loadSqlEngine();
                setSQL(sqlInstance);
                const database = createDatabase(sqlInstance);
                setDb(database);

                // Initial test query
                database.run("CREATE TABLE test (id int, message text);");
                database.run("INSERT INTO test VALUES (1, 'Hello from SQL Monster!');");

                setIsLoading(false);
            } catch (err) {
                console.error("Failed to load SQL Engine:", err);
                setError("Failed to load SQL Engine. Please reload.");
                setIsLoading(false);
            }
        };

        init();
    }, []);

    const runQuery = useCallback((query) => {
        if (!db) return { success: false, error: "Database not ready" };
        return executeQuery(db, query);
    }, [db]);

    const resetDatabase = useCallback(() => {
        if (SQL) {
            const newDb = createDatabase(SQL);
            setDb(newDb);
            // potentially re-seed data here
        }
    }, [SQL]);

    return (
        <SqlContext.Provider value={{ db, isLoading, error, runQuery, resetDatabase }}>
            {children}
        </SqlContext.Provider>
    );
};

export const useSql = () => useContext(SqlContext);
