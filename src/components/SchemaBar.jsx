import React, { useMemo } from 'react';

const SchemaBar = ({ initSql }) => {
    const tables = useMemo(() => {
        if (!initSql) return [];

        // Simple regex to extract CREATE TABLE statements
        // Matches: CREATE TABLE tableName (colDefs)
        const regex = /CREATE\s+TABLE\s+(\w+)\s*\(([^)]+)\)/gi;
        const matches = [];
        let match;

        while ((match = regex.exec(initSql)) !== null) {
            const tableName = match[1];
            const colDefString = match[2];

            // Split columns by comma, but simplistic for now (won't handle complex types with commas nicely)
            const columns = colDefString.split(',').map(c => {
                const parts = c.trim().split(/\s+/);
                return parts[0]; // First part is usually the name
            });

            matches.push({ name: tableName, columns });
        }
        return matches;
    }, [initSql]);

    if (!tables.length) return null;

    return (
        <div className="w-full bg-white dark:bg-slate-900 border-t-4 border-slate-200 dark:border-slate-700/50 p-2 font-mono text-xs md:text-sm text-slate-600 dark:text-slate-300 flex flex-wrap gap-6 justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.5)] z-10 transition-colors duration-300">
            {tables.map(table => (
                <div key={table.name} className="flex items-center gap-2">
                    <span className="font-bold text-blue-600 dark:text-monster-accent uppercase tracking-wider">{table.name}</span>
                    <span className="text-slate-400 dark:text-slate-500">(</span>
                    <span className="text-slate-500 dark:text-slate-400">
                        {table.columns.join(', ')}
                    </span>
                    <span className="text-slate-400 dark:text-slate-500">)</span>
                </div>
            ))}
        </div>
    );
};

export default SchemaBar;
