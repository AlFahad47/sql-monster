import { useState } from 'react';
import { questions } from '../data/questions';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaRandom, FaClock } from 'react-icons/fa';

const InterviewPrep = () => {
    const [activeId, setActiveId] = useState(null);
    const [mockMode, setMockMode] = useState(false);
    const [currentMockQ, setCurrentMockQ] = useState(null);
    const { t, language } = useLanguage();
    const currentQuestions = questions[language] || questions['en'];

    const toggleQuestion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    const startMockInterview = () => {
        setMockMode(true);
        nextMockQuestion();
    };

    const nextMockQuestion = () => {
        const randomQ = currentQuestions[Math.floor(Math.random() * currentQuestions.length)];
        setCurrentMockQ(randomQ);
        setActiveId(null); // Reset answer view
    };

    return (
        <div className="py-10 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        {t('interviewTitle')}
                    </h1>
                    <p className="text-slate-400 mt-2">{t('interviewSubtitle')}</p>
                </div>

                <button
                    onClick={() => {
                        if (!mockMode) {
                            startMockInterview();
                        } else {
                            setMockMode(false);
                            setCurrentMockQ(null);
                        }
                    }}
                    className={`px-6 py-3 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2 ${mockMode ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'bg-purple-600 text-white hover:bg-purple-500'
                        }`}
                >
                    {mockMode ? t('exitMockMode') : <><FaRandom /> {t('mockInterview')}</>}
                </button>
            </div>

            {mockMode && currentMockQ ? (
                <div className="bg-slate-800 border border-purple-500/30 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                    <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        {currentMockQ.category} Question
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-8 leading-relaxed">
                        {currentMockQ.question}
                    </h2>

                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={() => setActiveId(activeId === currentMockQ.id ? null : currentMockQ.id)}
                            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 font-medium transition-colors"
                        >
                            {activeId === currentMockQ.id ? t('hideAnswer') : t('revealAnswer')}
                        </button>
                        <button
                            onClick={nextMockQuestion}
                            className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-bold transition-colors shadow-lg shadow-purple-500/20"
                        >
                            {t('nextQuestion')}
                        </button>
                    </div>

                    <AnimatePresence>
                        {activeId === currentMockQ.id && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-8 text-left bg-slate-900/50 p-6 rounded-xl border border-white/5 text-slate-300 leading-relaxed"
                            >
                                {currentMockQ.answer}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ) : (
                <div className="space-y-4">
                    {currentQuestions.map((q) => (
                        <div
                            key={q.id}
                            onClick={() => toggleQuestion(q.id)}
                            className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden cursor-pointer group hover:border-slate-600 transition-colors"
                        >
                            <div className="p-6 flex justify-between items-center">
                                <div>
                                    <span className={`text-xs font-bold uppercase tracking-wider px-2 py-1 rounded-md mr-3 ${q.category === 'Basic' ? 'bg-green-500/10 text-green-400' :
                                        q.category === 'Intermediate' ? 'bg-blue-500/10 text-blue-400' :
                                            'bg-purple-500/10 text-purple-400'
                                        }`}>
                                        {q.category}
                                    </span>
                                    <span className="font-semibold text-lg text-slate-200 group-hover:text-white transition-colors">
                                        {q.question}
                                    </span>
                                </div>
                                <div className="text-slate-500">
                                    {activeId === q.id ? <FaChevronUp /> : <FaChevronDown />}
                                </div>
                            </div>
                            <AnimatePresence>
                                {activeId === q.id && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: 'auto' }}
                                        exit={{ height: 0 }}
                                        className="overflow-hidden bg-slate-900/50 border-t border-slate-700"
                                    >
                                        <div className="p-6 text-slate-300 leading-relaxed">
                                            {q.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InterviewPrep;
