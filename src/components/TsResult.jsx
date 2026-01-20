import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle, FaTerminal } from 'react-icons/fa';

const TsResult = ({ logs, error }) => {
    if (!logs && !error) return (
        <div className="h-full flex flex-col items-center justify-center text-slate-400 opacity-50">
            <FaTerminal className="text-4xl mb-2" />
            <p>Ready to compile...</p>
        </div>
    );

    return (
        <div className="h-full flex flex-col font-mono text-sm p-4">
            <h3 className="text-xs uppercase font-bold text-slate-500 mb-2 border-b border-slate-700 pb-1">Console Output</h3>

            <div className="space-y-1">
                {logs && logs.map((log, i) => (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={i}
                        className="text-green-400 break-words"
                    >
                        <span className="opacity-50 mr-2">&gt;</span>{log}
                    </motion.div>
                ))}
            </div>

            {error && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-red-400 bg-red-900/20 p-2 rounded border border-red-800 flex items-start gap-2"
                >
                    <FaExclamationTriangle className="mt-1 flex-none" />
                    <span className="break-words whitespace-pre-wrap">{error}</span>
                </motion.div>
            )}
        </div>
    );
};

export default TsResult;
