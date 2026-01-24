import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSql } from '../context/SqlContext';
import { useAudio } from '../context/AudioContext';
import SqlConsole from '../components/SqlConsole';
import ResultTable from '../components/ResultTable';
import CharacterDisplay from '../components/CharacterDisplay';
import SchemaBar from '../components/SchemaBar';
import Certificate from '../components/Certificate';
import { useGameProgress } from '../hooks/useGameProgress';
import { chapters } from '../data/chapters';
import { validateLevel } from '../lib/levelValidator';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaLightbulb, FaCheckCircle, FaExclamationCircle, FaCoins } from 'react-icons/fa';
import PlanetProgress from '../components/PlanetProgress';
import CoinPortal from '../components/CoinPortal';

const Typewriter = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        setDisplayedText(''); // Reset on new text
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
                if (onComplete) onComplete();
            }
        }, 30); // Speed of typing

        return () => clearInterval(intervalId);
    }, [text]);

    return <span>{displayedText}</span>;
};

const StoryMode = () => {
    const { runQuery, db, isLoading, error: ctxError } = useSql();
    const { language, t } = useLanguage();
    const localizedChapters = chapters[language] || chapters['en'];
    const { progress, isLoaded, advanceLevel, resetProgress, setUserName, updateCoins } = useGameProgress(localizedChapters.length);

    // Derived state from progress
    const currentChapterIdx = progress.chapterIdx;
    const currentLevelIdx = progress.levelIdx;

    // State for current level interaction
    const [result, setResult] = useState(null);
    const [executionError, setExecutionError] = useState(null);
    const [validationMsg, setValidationMsg] = useState(null);
    const [isSolved, setIsSolved] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const [hintSeen, setHintSeen] = useState(false);
    const [answerRevealed, setAnswerRevealed] = useState(false);

    // Dialogue State
    const [dialogueStep, setDialogueStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const dialogueScrollRef = useRef(null);
    const consoleRef = useRef(null);
    const nextLevelBtnRef = useRef(null);

    // Mascot Mood State
    const [mascotMood, setMascotMood] = useState('idle');

    // Navigation Safety State
    const [isReadyToAdvance, setIsReadyToAdvance] = useState(false);

    const currentChapter = localizedChapters[currentChapterIdx];
    const currentLevel = currentChapter?.levels[currentLevelIdx];

    // Reset interaction state when level changes
    useEffect(() => {
        if (currentLevel) {
            setResult(null);
            setExecutionError(null);
            setValidationMsg(null);
            setIsSolved(false);
            setShowHint(false);
            setHintSeen(false);
            setAnswerRevealed(false);
            setMascotMood('idle');
            setDialogueStep(0);
            setIsTyping(false);
            setIsReadyToAdvance(false);
        }
    }, [currentLevel]);

    // Safety delay for "Enter" key after solving
    useEffect(() => {
        let timeout;
        if (isSolved) {
            timeout = setTimeout(() => {
                setIsReadyToAdvance(true);
            }, 1000); // 1 second delay
        } else {
            setIsReadyToAdvance(false);
        }
        return () => clearTimeout(timeout);
    }, [isSolved]);

    // Audio Hook
    const { speak, cancel } = useAudio();

    // Auto-scroll to bottom of dialogue
    useEffect(() => {
        if (dialogueScrollRef.current) {
            dialogueScrollRef.current.scrollTop = dialogueScrollRef.current.scrollHeight;
        }
    }, [dialogueStep, isTyping]);

    // Handle Speech
    useEffect(() => {
        if (currentLevel?.dialogue?.[dialogueStep]) {
            const { text, speaker } = currentLevel.dialogue[dialogueStep];
            // Small delay to ensure text is engaging
            const timer = setTimeout(() => {
                speak(text, speaker);
            }, 100);
            return () => {
                clearTimeout(timer);
                cancel();
            };
        }
    }, [dialogueStep, currentLevel, speak, cancel]);

    const handleAdvanceDialogue = () => {
        if (isTyping) {
            setIsTyping(false);
            return;
        }

        if (currentLevel.dialogue && dialogueStep < currentLevel.dialogue.length - 1) {
            setDialogueStep(prev => prev + 1);
            setIsTyping(true);
        } else {
            // Dialogue finished, focus console
            consoleRef.current?.focus();
        }
    };

    const isDialogueActive = currentLevel?.dialogue && dialogueStep < currentLevel.dialogue.length - 1;

    // Auto-focus console when dialogue finishes (button disappears)
    useEffect(() => {
        if (!isDialogueActive && currentLevel) {
            // Small timeout to allow UI to settle
            const timer = setTimeout(() => {
                consoleRef.current?.focus();
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isDialogueActive, currentLevel]);

    // Global Keydown Listener for advancing dialogue and next level
    useEffect(() => {
        const handleGlobalKeyDown = (e) => {
            // If enter is pressed and dialogue is active
            if (e.key === 'Enter' && !e.ctrlKey && !e.metaKey) {
                if (isDialogueActive) {
                    e.preventDefault(); // Prevent accidental form submissions or other unwanted behaviors
                    handleAdvanceDialogue();
                } else if (isSolved && isReadyToAdvance) {
                    e.preventDefault();
                    handleNextLevel();
                }
            }
        };

        window.addEventListener('keydown', handleGlobalKeyDown);
        return () => window.removeEventListener('keydown', handleGlobalKeyDown);
    }, [isDialogueActive, isSolved, isReadyToAdvance, isTyping, dialogueStep]);

    // Auto-scroll to next level button on success
    useEffect(() => {
        if (isSolved && nextLevelBtnRef.current) {
            nextLevelBtnRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isSolved]);

    const handleExecute = (query) => {
        if (!db || !currentLevel) return;

        const { success, results, error, message } = validateLevel(db, query, currentLevel);

        if (success) {
            setResult(results);
            setExecutionError(null);

            // Calculate Reward
            let reward = 0;
            if (answerRevealed) {
                reward = 0;
            } else if (hintSeen) {
                reward = 2;
            } else {
                reward = 10;
            }

            // Only award if not previously solved (checking isSolved here is tricky as it sets true now)
            // But usually we just award. 
            // In a real game we'd check if level was ALREADY completed in saved progress to prevent farming.
            // For now, let's assume one-time reward per session play of level or just always award for fun.
            // Let's prevent farming by checking !isSolved
            if (!isSolved) {
                updateCoins(reward);
            }

            setValidationMsg({ type: 'success', text: `${message} (+${reward} Coins)` });
            setIsSolved(true);
            setMascotMood('success');
            // isReadyToAdvance will be set by useEffect after delay
        } else {
            setResult(results);
            setExecutionError(error);
            setValidationMsg({
                type: 'error',
                text: error === "The result doesn't match the objective. Try again!"
                    ? t('incorrectResult')
                    : (error || t('defaultError'))
            });
            setIsSolved(false);
            setMascotMood('error');
        }
    };

    // Hint & Reveal Handlers
    const handleRequestHint = () => {
        if (!showHint) {
            setHintSeen(true);
        }
        setShowHint(!showHint);
    };

    const handleRevealAnswer = () => {
        if (progress.coins >= 20) {
            updateCoins(-20);
            setAnswerRevealed(true);
        } else {
            // Shake effect or toast could go here
            alert("Not enough coins! You need 20 coins to reveal the answer.");
        }
    };

    const handleNextLevel = () => {
        advanceLevel(currentChapterIdx, currentChapter.levels.length);
    };

    if (!isLoaded || isLoading) return <div className="text-center py-20 animate-pulse text-blue-400">Loading Story Engine...</div>;
    if (ctxError) return <div className="text-center py-20 text-red-500">{ctxError}</div>;

    // Show Certificate if game is complete
    if (progress.isComplete) {
        if (!progress.userName) {
            return (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 text-white">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-slate-200 dark:border-slate-700 text-center"
                    >
                        <div className="flex justify-center mb-4">
                            <CharacterDisplay mood="success" />
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Campaign Complete!</h2>
                        <p className="text-slate-400 mb-6">You have mastered the SQL arts. Enter your name to receive your certification.</p>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const name = formData.get('name');
                            if (name && name.trim()) setUserName(name.trim());
                        }}>
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded px-4 py-3 text-lg focus:outline-none focus:border-monster-accent mb-4 text-center text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                autoFocus
                                required
                                maxLength={30}
                                autoComplete="off"
                            />
                            <button type="submit" className="w-full bg-monster-accent hover:bg-blue-600 text-white font-bold py-3 rounded transition-colors uppercase tracking-wider">
                                Generate Certificate
                            </button>
                        </form>
                    </motion.div>
                </div>
            );
        }
        return <Certificate onReset={resetProgress} userName={progress.userName} certificateId={progress.certificateId} />;
    }

    if (!currentLevel) {
        return <div className="text-center py-20 text-slate-400">Chapter Content Coming Soon...</div>;
    }

    // Determine current speaker safely
    const currentSpeaker = currentLevel?.dialogue?.[dialogueStep]?.speaker || 'Glitch';

    return (
        <div className="flex flex-col lg:h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] h-auto max-w-7xl mx-auto relative">

            {/* Planet Progress Bar */}
            <div className="px-4 pt-4">
                <PlanetProgress
                    totalChapters={localizedChapters.length}
                    currentChapterIdx={currentChapterIdx}
                />
                <CoinPortal coins={progress.coins} color="yellow" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col lg:flex-row gap-6 p-4 pt-0 lg:overflow-hidden">


                {/* Left Panel: Narrative (Speech Bubble + Character) */}
                <div className="lg:w-1/3 flex flex-col min-h-0 relative shrink-0">


                    {/* Speech Bubble Container */}
                    <div
                        className="flex-1 overflow-y-auto mb-4 custom-scrollbar pr-2 flex flex-col"
                        ref={dialogueScrollRef}
                    >
                        {/* The Bubble */}
                        <div className="bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 p-6 rounded-2xl rounded-bl-sm shadow-lg mb-2 relative border-4 border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            {/* Header in Bubble */}
                            <div className="border-b border-slate-200 dark:border-slate-700 pb-2 mb-4 flex justify-between items-end">
                                <div>
                                    <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                                        Chapter {currentChapterIdx + 1} - Level {currentLevelIdx + 1}
                                    </h2>
                                    <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                                        {currentLevel.title}
                                    </h1>
                                </div>
                            </div>

                            {/* Dialogue / Story Renderer */}
                            <div className="mb-6 cursor-pointer" onClick={handleAdvanceDialogue}>
                                {currentLevel.dialogue ? (
                                    <div className="space-y-4">
                                        {currentLevel.dialogue.slice(0, dialogueStep + 1).map((msg, idx) => (
                                            <div key={idx} className={`flex ${msg.speaker === 'You' ? 'justify-end' : 'justify-start'}`}>
                                                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.speaker === 'You'
                                                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800 rounded-tr-none'
                                                    : 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 rounded-tl-none'
                                                    } shadow-sm transition-all duration-300 ease-in-out`}>
                                                    <div className="text-xs font-bold mb-1 opacity-50 uppercase tracking-wider">{msg.speaker}</div>
                                                    <div>
                                                        {idx === dialogueStep && isTyping ? (
                                                            <Typewriter text={msg.text} onComplete={() => setIsTyping(false)} />
                                                        ) : (
                                                            msg.text
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {isDialogueActive && (
                                            <div className="flex justify-center animate-bounce pt-2">
                                                <div className="bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs px-3 py-1 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 select-none transition-colors">
                                                    Click or Press Enter to continue...
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="prose prose-sm prose-slate">
                                        <div dangerouslySetInnerHTML={{ __html: currentLevel.story }} />
                                    </div>
                                )}
                            </div>

                            {/* Objective */}
                            <div className="bg-slate-50/80 dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 mb-4">
                                <h3 className="text-monster-dark font-bold mb-1 flex items-center gap-2 text-sm">
                                    <FaCheckCircle className="text-monster-accent" /> Mission:
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 italic">{currentLevel.objective}</p>
                            </div>

                            {/* Dynamic Feedback (In Bubble) */}
                            <AnimatePresence mode='wait'>
                                {validationMsg && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`p-3 rounded-lg border text-sm font-bold mb-4 ${validationMsg.type === 'success'
                                            ? 'bg-green-100 dark:bg-green-900/20 border-green-300 dark:border-green-800 text-green-700 dark:text-green-300'
                                            : 'bg-red-100 dark:bg-red-900/20 border-red-300 dark:border-red-800 text-red-700 dark:text-red-300'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {validationMsg.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                                            {validationMsg.text}
                                        </div>
                                        {isSolved && (
                                            <button
                                                ref={nextLevelBtnRef}
                                                onClick={handleNextLevel}
                                                className="mt-2 text-xs bg-green-600 text-white px-3 py-1 rounded shadow hover:bg-green-500 transition-colors w-full flex items-center justify-center gap-2 whitespace-nowrap"
                                            >
                                                Next Level (Press Enter) <FaChevronRight />
                                            </button>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Hint Section (In Bubble) */}
                            <div className="mt-2 border-t border-slate-200 dark:border-slate-700 pt-2">
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={handleRequestHint}
                                        className="text-monster-accent hover:text-blue-600 text-xs font-bold flex items-center gap-1"
                                    >
                                        <FaLightbulb /> {showHint ? "Hide Hint" : "I'm stuck..."}
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {showHint && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-2 text-xs text-slate-600 dark:text-slate-300 font-mono bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded border border-yellow-200 dark:border-yellow-800"
                                        >
                                            <div className="mb-2">
                                                <strong>Hint:</strong> {currentLevel.hint}
                                            </div>
                                            {currentLevel.solution && (
                                                <div className="mt-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                                                    {answerRevealed ? (
                                                        <div className="mt-1 p-2 bg-slate-800 text-green-400 rounded">
                                                            {currentLevel.solution || currentLevel.expectedQuery}
                                                        </div>
                                                    ) : (
                                                        <button
                                                            onClick={handleRevealAnswer}
                                                            className="text-white bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition-colors flex items-center gap-2"
                                                        >
                                                            Buy Answer (20 Coins) <FaCoins />
                                                        </button>
                                                    )}
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* Character Display (Below Bubble) */}
                    <div className="h-56 flex items-end pl-8 relative z-0 pointer-events-none -mt-10 lg:mt-0">
                        <div className="transform origin-bottom-left">
                            <CharacterDisplay speaker={currentSpeaker} mood={mascotMood} />
                        </div>
                    </div>
                </div>

                {/* Right Panel: Console & Results */}
                <div className="lg:w-2/3 flex flex-col gap-4 min-h-[500px] lg:min-h-0">
                    <div className="flex-none">
                        <SqlConsole
                            ref={consoleRef}
                            onExecute={handleExecute}
                            initialQuery={currentLevel.initSql ? "" : ""}
                            key={currentLevel.id}
                        />
                    </div>
                    <div className="flex-1 overflow-auto min-h-0 bg-white/90 dark:bg-slate-900/90 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-sm">
                        <ResultTable
                            result={result}
                            error={executionError && validationMsg?.text !== executionError ? executionError : null}
                        />
                    </div>
                </div>
            </div>

            {/* Footer: Schema Bar */}
            <div className="flex-none">
                <SchemaBar initSql={currentLevel.initSql} />
            </div>
        </div>
    );
};

export default StoryMode;
