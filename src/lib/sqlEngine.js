import initSqlJs from 'sql.js';

// Singleton instance to avoid multiple loads
let SQL = null;

export const loadSqlEngine = async () => {
    if (!SQL) {
        SQL = await initSqlJs({
            // The wasm file is in the public folder, so we can point to it directly
            // Vite handles serving files from public/ at root
            locateFile: file => `/${file}`
        });
    }
    return SQL;
};

export const createDatabase = (SQL, data = null) => {
    if (data) {
        return new SQL.Database(data);
    }
    return new SQL.Database();
};

export const executeQuery = (db, query) => {
    try {
        const results = db.exec(query);
        // results is an array of object {columns:['a','b'], values:[[0,1],[2,3]]}
        return { success: true, results };
    } catch (error) {
        return { success: false, error: error.message };
    }
};
