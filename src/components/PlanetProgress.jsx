import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaFlag, FaDragon, FaLock } from 'react-icons/fa';

const PlanetProgress = ({ totalChapters, currentChapterIdx }) => {
    return (
        <div className="w-full bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl p-4 mb-6 overflow-x-auto custom-scrollbar shadow-sm">
            <div className="flex items-center justify-between min-w-[max-content] md:min-w-0 md:justify-around px-4 gap-8 md:gap-4">
                {Array.from({ length: totalChapters }).map((_, idx) => {
                    const isCompleted = idx < currentChapterIdx;
                    const isCurrent = idx === currentChapterIdx;
                    const isLocked = idx > currentChapterIdx;

                    return (
                        <div key={idx} className="relative flex flex-col items-center group">
                            {/* Connecting Line */}
                            {idx < totalChapters - 1 && (
                                <div className={`absolute top-1/2 left-full w-full h-1 -translate-y-1/2 -z-10 
                                    ${idx < currentChapterIdx ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-700'}`}
                                    style={{ width: 'calc(100% + 2rem)' }} // Adjust based on gap
                                />
                            )}

                            {/* Status Indicator (Top) */}
                            <div className="mb-2 h-6">
                                {isCompleted && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="text-green-400"
                                    >
                                        <FaFlag />
                                    </motion.div>
                                )}
                                {isCurrent && (
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="text-red-500 text-xl drop-shadow-lg"
                                    >
                                        <FaDragon />
                                    </motion.div>
                                )}
                            </div>

                            {/* Planet Icon */}
                            <motion.div
                                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-2xl border-2 transition-colors duration-300
                                    ${isCompleted ? 'bg-blue-600 border-green-400 text-green-100 shadow-[0_0_15px_rgba(74,222,128,0.5)]' : ''}
                                    ${isCurrent ? 'bg-blue-500 border-blue-300 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse' : ''}
                                    ${isLocked ? 'bg-slate-100 border-slate-300 text-slate-400 dark:bg-slate-800 dark:border-slate-600 dark:text-slate-600' : ''}
                                `}
                                whileHover={{ scale: 1.1 }}
                            >
                                {isLocked ? <FaLock className="text-sm" /> : <FaGlobeAmericas />}
                            </motion.div>

                            {/* Label */}
                            <div className={`mt-2 text-xs font-bold uppercase tracking-wider
                                ${isCurrent ? 'text-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-500'}
                            `}>
                                {isCurrent ? 'Current' : `Ch ${idx + 1}`}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PlanetProgress;
