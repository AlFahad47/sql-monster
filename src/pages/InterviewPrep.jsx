import { useState, useEffect } from 'react';
import { questions } from '../data/questions';
import { useLanguage } from '../context/LanguageContext';
import { useGameProgress } from '../hooks/useGameProgress';
import { useSql } from '../context/SqlContext';
import { seedMockDatabase } from '../data/mockDbSeeds';
import ResultTable from '../components/ResultTable';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaRandom, FaCheck, FaTimes, FaDatabase } from 'react-icons/fa';
import CoinPortal from '../components/CoinPortal';

const InterviewPrep = () => {
    const [activeId, setActiveId] = useState(null);
    const [mockMode, setMockMode] = useState(false);

    // Topic Selection State
    const [selectedTopic, setSelectedTopic] = useState('sql');
    const [examMode, setExamMode] = useState('hybrid'); // 'hybrid' | 'code' | 'text'

    // Exam State
    const [examQuestions, setExamQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]); // Stores code answers or "Self-Verified"

    // Grading State
    const [isGradingPhase, setIsGradingPhase] = useState(false);
    const [gradedResults, setGradedResults] = useState({}); // { 0: true, 1: false }
    const [finalScore, setFinalScore] = useState(null);
    const [answerRevealed, setAnswerRevealed] = useState(false); // Only for text questions

    // Immediate Feedback Code State
    const [codeFeedback, setCodeFeedback] = useState(null); // 'correct' | 'incorrect' | null

    const { t, language } = useLanguage();
    const { progress, updateCoins } = useGameProgress(0);
    const { db, runQuery } = useSql();

    // Execution State
    const [executionResult, setExecutionResult] = useState(null);
    const [executionError, setExecutionError] = useState(null);

    const topicData = questions[selectedTopic];
    const currentQuestions = (topicData && (topicData[language] || topicData['en'])) || [];

    const toggleQuestion = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    const startMockInterview = () => {
        let pool = [...currentQuestions];

        // Filter based on mode
        if (examMode === 'code') {
            pool = pool.filter(q => q.type === 'code');
        } else if (examMode === 'text') {
            pool = pool.filter(q => q.type !== 'code');
        }

        if (pool.length === 0) {
            alert(`No questions available for ${examMode} mode in this topic!`);
            return;
        }

        // Seed the mock database if in code mode or hybrid
        if (selectedTopic === 'sql' && (examMode === 'code' || examMode === 'hybrid')) {
            if (db) {
                seedMockDatabase(db);
            } else {
                console.warn("Database not ready for seeding");
            }
        }

        const shuffled = pool.sort(() => 0.5 - Math.random());
        // Limit to 20, or length if smaller
        const questionLimit = Math.min(20, pool.length);
        setExamQuestions(shuffled.slice(0, questionLimit));

        setCurrentQuestionIndex(0);
        setUserAnswers(new Array(questionLimit).fill(''));
        setGradedResults({});
        setFinalScore(null);
        setIsGradingPhase(false);
        setAnswerRevealed(false);
        setCodeFeedback(null);
        setExecutionResult(null);
        setExecutionError(null);
        setMockMode(true);
    };

    const handleInputAnswer = (text) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = text;
        setUserAnswers(newAnswers);
    };

    const normalizeCode = (str) => {
        if (!str) return '';
        return str
            .replace(/\s+/g, ' ')
            .replace(/;\s*$/, '')
            .trim()
            .toLowerCase();
    };

    const handleCodeSubmit = () => {
        const currentQ = examQuestions[currentQuestionIndex];
        const userCode = userAnswers[currentQuestionIndex];

        if (!userCode || userCode.trim() === '') return;

        // 1. Execute Code for Feedback (if SQL)
        if (db && selectedTopic === 'sql') {
            // Remove comments for execution if needed, but sql.js might handle --
            // Just run it
            const { success, results, error } = runQuery(userCode);
            if (success) {
                setExecutionResult(results);
                setExecutionError(null);
            } else {
                setExecutionResult(null);
                setExecutionError(error);
            }
        }

        // 2. Grading (Logic Check)
        // Improved: If execution matched expected output (advanced) vs Simple String Match
        // For now, keep String Match but maybe relax it if execution was successful?
        // Actually, let's keep the reliable normalized string match for "Grading" 
        // but use the execution output to help the user DEBUG why they are wrong.

        if (normalizeCode(userCode) === normalizeCode(currentQ.code)) {
            setCodeFeedback('correct');
            // Save grade immediately
            setGradedResults(prev => ({ ...prev, [currentQuestionIndex]: true }));
        } else {
            setCodeFeedback('incorrect');
        }
    };

    // Effect to run Auto-Grading when entering Grading Phase
    useEffect(() => {
        if (isGradingPhase) {
            const autoGrades = { ...gradedResults };

            examQuestions.forEach((q, idx) => {
                // Determine User Code:
                // If the user skipped, userAnswers[idx] should be "Skipped" (truthy).

                // Only grade if not already graded
                if (q.type === 'code' && autoGrades[idx] === undefined) {
                    const expectedCode = q.code;
                    const userCode = userAnswers[idx];

                    if (expectedCode && userCode && userCode !== "Skipped") {
                        if (normalizeCode(userCode) === normalizeCode(expectedCode)) {
                            autoGrades[idx] = true;
                        } else {
                            autoGrades[idx] = false;
                        }
                    } else {
                        autoGrades[idx] = false;
                    }
                }
            });

            setGradedResults(autoGrades);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isGradingPhase]);

    const handleSkip = () => {
        setGradedResults(prev => ({ ...prev, [currentQuestionIndex]: false }));
        handleInputAnswer("Skipped");
        setTimeout(() => {
            nextQuestion();
        }, 0);
    };

    const handleTextGrade = (isCorrect) => {
        setGradedResults(prev => ({
            ...prev,
            [currentQuestionIndex]: isCorrect
        }));
        handleInputAnswer("Self-Verified (Text Question)");
        nextQuestion();
    };

    const nextQuestion = () => {
        setCodeFeedback(null);
        setExecutionResult(null);
        setExecutionError(null);
        if (currentQuestionIndex < examQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setAnswerRevealed(false);
        } else {
            // End of Exam -> Start Grading Phase
            setIsGradingPhase(true);
        }
    };

    const handleFinalGradeOverride = (index, isCorrect) => {
        setGradedResults(prev => ({
            ...prev,
            [index]: isCorrect
        }));
    };

    const calculateFinalScore = () => {
        const totalQ = examQuestions.length;
        const score = Object.values(gradedResults).filter(Boolean).length;
        setFinalScore(score);

        // Award Coins (Scaled based on 20 q ratio)
        let reward = 0;
        const ratio = score / totalQ;
        if (ratio === 1) reward = 10;
        else if (ratio >= 0.5) reward = 5;

        if (reward > 0) updateCoins(reward);
    };

    const exitMockMode = () => {
        setMockMode(false);
        setExamQuestions([]);
        setFinalScore(null);
    };

    const getTopicName = (key) => {
        switch (key) {
            case 'sql': return 'SQL Database';
            case 'ts': return 'TypeScript';
            case 'cyber': return 'Cyber Security';
            default: return key.toUpperCase();
        }
    };

    const currentQ = examQuestions[currentQuestionIndex];

    return (
        <div className="py-10 max-w-4xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                        {t('interviewTitle')}
                    </h1>
                    <p className="text-slate-400 mt-2">{t('interviewSubtitle')}</p>
                </div>

                {!mockMode && (
                    <div className="flex flex-col gap-3 items-end">
                        {/* Topic Selector */}
                        <div className="flex gap-2 bg-slate-800 p-1 rounded-lg">
                            {['sql', 'ts', 'cyber'].map(topic => (
                                <button
                                    key={topic}
                                    onClick={() => setSelectedTopic(topic)}
                                    className={`px-4 py-2 rounded-md font-bold text-sm transition-all ${selectedTopic === topic
                                        ? 'bg-purple-600 text-white shadow'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-700'
                                        }`}
                                >
                                    {topic === 'ts' ? 'TS' : topic.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        {/* Mode Selector */}
                        <div className="flex gap-2 bg-slate-800 p-1 rounded-lg scale-90 origin-right">
                            {[
                                { id: 'hybrid', label: 'Hybrid' },
                                { id: 'code', label: 'Only Code' },
                                { id: 'text', label: 'Only Interview' }
                            ].map(mode => (
                                <button
                                    key={mode.id}
                                    onClick={() => setExamMode(mode.id)}
                                    className={`px-3 py-1 rounded-md font-bold text-xs transition-all ${examMode === mode.id
                                        ? 'bg-blue-600 text-white shadow'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-700'
                                        }`}
                                >
                                    {mode.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <button
                    onClick={() => {
                        if (!mockMode) {
                            startMockInterview();
                        } else {
                            exitMockMode();
                        }
                    }}
                    className={`px-6 py-3 rounded-lg font-bold transition-all shadow-lg flex items-center gap-2 ${mockMode ? 'bg-red-500/20 text-red-400 border border-red-500/50' : 'bg-purple-600 text-white hover:bg-purple-500'
                        }`}
                >
                    {mockMode ? t('exitMockMode') : <><FaRandom /> Start {getTopicName(selectedTopic)} Exam</>}
                </button>
            </div>

            {mockMode ? (
                <div className="bg-slate-800 border border-purple-500/30 rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                    <CoinPortal coins={progress.coins} color="purple" />

                    {!isGradingPhase ? (
                        /* Exam Phase */
                        <div className="max-w-3xl mx-auto w-full">
                            <div className="flex justify-between items-center mb-6 text-slate-400 text-sm font-mono">
                                <span>Question {currentQuestionIndex + 1} / {examQuestions.length}</span>
                                <div className="flex gap-2">
                                    {userAnswers.map((_, idx) => (
                                        <div key={idx} className={`w-2 h-2 rounded-full ${idx === currentQuestionIndex ? 'bg-purple-500 animate-pulse' : idx < currentQuestionIndex ? 'bg-slate-500' : 'bg-slate-700'}`} />
                                    ))}
                                </div>
                            </div>

                            <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-xs font-bold uppercase tracking-wider mb-4 mx-auto w-fit">
                                {currentQ?.category} Question {currentQ?.type === 'code' && '(Coding)'}
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-6 leading-relaxed">
                                {currentQ?.question}
                            </h2>

                            {/* Render different UI based on Question Type */}
                            {currentQ?.type === 'code' ? (
                                <div className="space-y-6">
                                    <textarea
                                        value={userAnswers[currentQuestionIndex] || ''}
                                        onChange={(e) => handleInputAnswer(e.target.value)}
                                        placeholder="Write your SQL/Code query here..."
                                        disabled={codeFeedback === 'correct'}
                                        className={`w-full h-48 bg-black/30 border ${codeFeedback === 'correct' ? 'border-green-500' : codeFeedback === 'incorrect' ? 'border-red-500' : 'border-purple-500/50'} rounded-xl p-6 text-slate-200 font-mono focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none text-lg`}
                                    />

                                    {codeFeedback === 'correct' ? (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-green-500/20 border border-green-500/50 p-4 rounded-lg text-green-400 font-bold flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-2">
                                                <FaCheck className="text-xl" />
                                                <span>Correct! Great job.</span>
                                            </div>
                                            <button
                                                onClick={nextQuestion}
                                                className="px-6 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg shadow-lg"
                                            >
                                                Next Question
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <div className="flex gap-4 justify-center">
                                            <button
                                                onClick={handleCodeSubmit}
                                                className="flex-1 px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-bold transition-all shadow-lg hover:scale-105"
                                            >
                                                {codeFeedback === 'incorrect' ? 'Try Again' : 'Submit Code'}
                                            </button>
                                            <button
                                                onClick={handleSkip}
                                                className="px-6 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 font-bold transition-all"
                                            >
                                                Skip
                                            </button>
                                        </div>
                                    )}

                                    {codeFeedback === 'incorrect' && (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                            <p className="text-red-400 text-sm text-center font-bold">
                                                ❌ Incorrect Answer. Check your syntax or logic.
                                            </p>

                                            {/* Execution Results / Error View */}
                                            {(executionResult || executionError) && (
                                                <div className="bg-slate-900 rounded-lg p-4 text-left border border-slate-700">
                                                    <h3 className="text-xs font-bold text-slate-400 uppercase mb-2">Output Console</h3>
                                                    <ResultTable result={executionResult} error={executionError} />
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Helper Schema View - Always Visible for Reference */}
                                    <div className="bg-slate-900/50 p-4 rounded-lg text-left border border-slate-800">
                                        <div className="flex items-center gap-2 mb-2 text-slate-400">
                                            <FaDatabase className="text-blue-400" />
                                            <span className="text-xs font-bold uppercase">Available Schemas</span>
                                        </div>
                                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono text-slate-500">
                                            <div>
                                                <strong className="text-slate-300">users</strong>: id, name, email, age, country, active
                                            </div>
                                            <div>
                                                <strong className="text-slate-300">orders</strong>: id, user_id, amount
                                            </div>
                                            <div>
                                                <strong className="text-slate-300">products</strong>: id, name, price
                                            </div>
                                            <div>
                                                <strong className="text-slate-300">employees</strong>: id, name, salary, manager_id, dept
                                            </div>
                                            <div>
                                                <strong className="text-slate-300">customers</strong>: id, name, country, city, email
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Text Question Flow */
                                <div className="space-y-6">
                                    {!answerRevealed ? (
                                        <button
                                            onClick={() => setAnswerRevealed(true)}
                                            className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-200 font-bold transition-all shadow-lg mx-auto block hover:scale-105"
                                        >
                                            {t('revealAnswer')}
                                        </button>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-6 max-w-2xl mx-auto"
                                        >
                                            <div className="bg-green-900/10 p-6 rounded-xl border border-green-500/20 text-left">
                                                <h3 className="text-xs font-bold text-green-500 uppercase mb-2">Answer</h3>
                                                <div className="text-slate-200 leading-relaxed mb-4">
                                                    {currentQ?.answer}
                                                    {currentQ?.code && (
                                                        <div className="mt-4 bg-black/50 p-4 rounded-lg font-mono text-xs text-green-400 border border-slate-700 overflow-x-auto whitespace-pre-wrap">
                                                            {currentQ?.code}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-2 pt-4">
                                                <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Did you get it right?</p>
                                                <div className="flex gap-4 justify-center">
                                                    <button
                                                        onClick={() => handleTextGrade(false)}
                                                        className="px-6 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/50 rounded-lg font-bold transition-colors flex items-center gap-2"
                                                    >
                                                        <FaTimes /> I Missed It
                                                    </button>
                                                    <button
                                                        onClick={() => handleTextGrade(true)}
                                                        className="px-6 py-3 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/50 rounded-lg font-bold transition-colors flex items-center gap-2"
                                                    >
                                                        <FaCheck /> I Knew It
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : finalScore === null ? (
                        /* Grading Phase */
                        <div className="text-left w-full h-[600px] overflow-hidden flex flex-col">
                            <h2 className="text-2xl font-bold text-white mb-2 text-center">Exam Results Dashboard</h2>
                            <p className="text-slate-400 text-center mb-6 text-sm">Review your performance. Verify any auto-graded questions.</p>

                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-8">
                                {examQuestions.map((q, idx) => (
                                    <div key={q.id} className={`border rounded-xl p-6 relative group transition-colors ${gradedResults[idx] === true ? 'bg-green-500/5 border-green-500/20' : gradedResults[idx] === false ? 'bg-red-500/5 border-red-500/20' : 'bg-slate-900/50 border-slate-700'}`}>
                                        <div className="absolute top-4 right-4 text-xs font-mono text-slate-500">#{idx + 1}</div>

                                        <div className="flex gap-2 mb-2">
                                            {q.type === 'code' ?
                                                <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Code Challenge</span>
                                                : <span className="bg-blue-500/20 text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Concept</span>
                                            }
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-200 mb-4 pr-8">{q.question}</h3>

                                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                                            <div className="bg-black/30 p-4 rounded-lg border border-white/5 relative">
                                                <div className="text-xs uppercase text-slate-500 font-bold mb-2">Your Answer</div>
                                                <div className="font-mono text-sm text-slate-300 whitespace-pre-wrap">{userAnswers[idx] || <span className="text-slate-600 italic">No answer provided</span>}</div>
                                            </div>
                                            <div className="bg-green-900/10 p-4 rounded-lg border border-green-500/20">
                                                <div className="text-xs uppercase text-green-500 font-bold mb-2">Correct Answer</div>
                                                <div className="text-sm text-slate-300 whitespace-pre-wrap">{q.answer}</div>
                                                {q.code && <div className="mt-2 bg-black/50 p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">{q.code}</div>}
                                            </div>
                                        </div>

                                        <div className="flex justify-end gap-3 items-center">
                                            {/* Auto-Grade Badge/Text for Code Questions */}
                                            {q.type === 'code' ? (
                                                <>
                                                    {normalizeCode(userAnswers[idx]) === normalizeCode(q.code) ? (
                                                        <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded mr-auto border border-green-500/20">
                                                            🤖 Auto-Matched
                                                        </span>
                                                    ) : (
                                                        <span className="text-xs font-bold text-red-400 bg-red-500/10 px-2 py-1 rounded mr-auto border border-red-500/20">
                                                            🚫 Auto-Incorrect
                                                        </span>
                                                    )}

                                                    {/* LOCKED Buttons for ALL Code Questions */}
                                                    <button
                                                        disabled
                                                        className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all cursor-not-allowed ${gradedResults[idx] === false ? 'bg-red-500 text-white opacity-100' : 'bg-red-500/10 text-red-400 opacity-30'}`}
                                                    >
                                                        <FaTimes /> Incorrect
                                                    </button>
                                                    <button
                                                        disabled
                                                        className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all cursor-not-allowed ${gradedResults[idx] === true ? 'bg-green-500 text-white opacity-100' : 'bg-green-500/10 text-green-400 opacity-30'}`}
                                                    >
                                                        <FaCheck /> Correct
                                                    </button>
                                                </>
                                            ) : (
                                                /* Manual Override for Text Questions */
                                                <>
                                                    <button
                                                        onClick={() => handleFinalGradeOverride(idx, false)}
                                                        className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${gradedResults[idx] === false ? 'bg-red-500 text-white' : 'bg-red-500/10 text-red-400 hover:bg-red-500/20'}`}
                                                    >
                                                        <FaTimes /> Incorrect
                                                    </button>
                                                    <button
                                                        onClick={() => handleFinalGradeOverride(idx, true)}
                                                        className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${gradedResults[idx] === true ? 'bg-green-500 text-white' : 'bg-green-500/10 text-green-400 hover:bg-green-500/20'}`}
                                                    >
                                                        <FaCheck /> Correct
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6 mt-4 border-t border-white/10 text-center bg-slate-800 z-10">
                                <div className="flex justify-between items-center mb-4 px-4 text-sm text-slate-400 max-w-lg mx-auto">
                                    <span>Graded: <span className="text-white font-bold">{Object.keys(gradedResults).length}</span>/{examQuestions.length}</span>
                                    <span>Correct: <span className="text-green-400 font-bold">{Object.values(gradedResults).filter(Boolean).length}</span></span>
                                </div>
                                {Object.keys(gradedResults).length === examQuestions.length ? (
                                    <button
                                        onClick={calculateFinalScore}
                                        className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold shadow-lg animate-bounce"
                                    >
                                        Submit Assessment & See Score
                                    </button>
                                ) : (
                                    <p className="text-slate-500">Please mark all answers as Correct or Incorrect to finish.</p>
                                )}
                            </div>
                        </div>
                    ) : (
                        /* Result Phase */
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center"
                        >
                            <h2 className="text-3xl font-bold mb-4">Exam Completed!</h2>
                            <div className="text-6xl font-black mb-6 flex justify-center items-center gap-4">
                                <span className={finalScore >= examQuestions.length / 2 ? "text-green-400" : "text-red-400"}>{finalScore}</span>
                                <span className="text-2xl text-slate-500">/ {examQuestions.length}</span>
                            </div>

                            <p className="text-xl text-slate-300 mb-8">
                                {finalScore === examQuestions.length ? "🎉 Perfect Score! +10 Coins! 🎉" :
                                    finalScore >= examQuestions.length / 2 ? "👍 Good Job! Passed! +5 Coins! 🪙" :
                                        "Better luck next time! Keep practicing."}
                            </p>

                            <button
                                onClick={exitMockMode}
                                className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold shadow-lg transition-transform hover:scale-105"
                            >
                                Back to Study Mode
                            </button>
                        </motion.div>
                    )}
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
                                            {q.code && (
                                                <div className="mt-4 bg-black/50 p-4 rounded-lg font-mono text-sm text-green-400 border border-slate-700 overflow-x-auto whitespace-pre-wrap">
                                                    {q.code}
                                                </div>
                                            )}
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
