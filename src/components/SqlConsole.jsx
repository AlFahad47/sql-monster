import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

const SqlConsole = ({ onExecute, initialQuery = "" }) => {
    const [query, setQuery] = useState(initialQuery);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        onExecute(query);
    };

    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/5">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-600 dark:text-slate-400">SQL Terminal</span>
                    <span className="text-xs text-slate-500">Ctrl + Enter to run</span>
                </div>
                <form onSubmit={handleSubmit} className="relative">
                    <textarea
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full h-32 bg-slate-50 dark:bg-transparent text-slate-800 dark:text-slate-200 font-mono text-sm p-4 outline-none resize-y placeholder:text-slate-400 dark:placeholder:text-slate-600"
                        placeholder="SELECT * FROM monsters;"
                        spellCheck="false"
                    />
                    <button
                        type="submit"
                        className="absolute bottom-4 right-4 bg-monster-accent text-white p-3 rounded-full hover:bg-blue-500 transition-colors shadow-lg active:scale-95"
                        title="Run Query"
                    >
                        <FaPlay className="ml-1 text-sm" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SqlConsole;
