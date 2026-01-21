import { motion } from 'framer-motion';

const ResultTable = ({ result, error }) => {
    // Helper to render error banner
    const ErrorBanner = () => (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 font-mono text-sm flex items-start gap-2">
            <span className="mt-0.5">⚠️</span>
            <span>{error}</span>
        </div>
    );

    if (!result) {
        return error ? <ErrorBanner /> : null;
    }

    // sql.js exec returns an array of result objects. usually we just care about the first one for single queries
    const data = result[0];

    // If no data (e.g. empty set), show message OR just the error if present
    if (!data) {
        return (
            <div>
                {error && <ErrorBanner />}
                <div className="p-4 text-slate-400 italic text-sm">
                    Query executed successfully. No results returned.
                </div>
            </div>
        );
    }

    return (
        <div className="font-mono">
            {error && <ErrorBanner />}

            <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700 shadow-xl mt-2">
                <table className="w-full text-left text-sm text-slate-700 dark:text-slate-300">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-xs uppercase font-bold text-slate-500 dark:text-slate-400">
                        <tr>
                            {data.columns.map((col, idx) => (
                                <th key={idx} className="px-6 py-3 whitespace-nowrap border-b border-slate-200 dark:border-slate-700">
                                    {col}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800">
                        {data.values.map((row, rowIdx) => (
                            <motion.tr
                                key={rowIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: rowIdx * 0.05 }}
                                className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                            >
                                {row.map((cell, cellIdx) => (
                                    <td key={cellIdx} className="px-6 py-4 whitespace-nowrap text-slate-700 dark:text-slate-300">
                                        {cell === null ? <span className="text-slate-400 dark:text-slate-600 italic">NULL</span> : cell}
                                    </td>
                                ))}
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
                <div className="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-xs text-slate-500 dark:text-slate-500 text-right">
                    {data.values.length} rows returned
                </div>
            </div>
        </div>
    );
};

export default ResultTable;
