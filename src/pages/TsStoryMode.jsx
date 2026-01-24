import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTs } from '../context/TsContext';
import { useAudio } from '../context/AudioContext';
import TsConsole from '../components/TsConsole';
import TsResult from '../components/TsResult';
import CharacterDisplay from '../components/CharacterDisplay';
import Certificate from '../components/Certificate';
import { useGameProgress } from '../hooks/useGameProgress';
import { tsChapters } from '../data/ts_chapters';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaLightbulb, FaCheckCircle, FaExclamationCircle, FaCoins } from 'react-icons/fa';
import PlanetProgress from '../components/PlanetProgress'; // Reusing this, might need slight label tweaks if it says "SQL"
import CoinPortal from '../components/CoinPortal';

const Typewriter = ({ text, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        setDisplayedText('');
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
                if (onComplete) onComplete();
            }
        }, 30);

        return () => clearInterval(intervalId);
    }, [text]);

    return <span>{displayedText}</span>;
};

const TsStoryMode = () => {
    const { runCode, isLoading } = useTs();
    const { language, t } = useLanguage(); // Might need to update t() for TS specific strings or just use hardcoded for now

    // Use dynamic language selection
    const localizedChapters = tsChapters[language] || tsChapters['en'];

    const { progress, isLoaded, advanceLevel, resetProgress, setUserName, updateCoins } = useGameProgress(localizedChapters.length, 'ts-monster-save-v1');

    const currentChapterIdx = progress.chapterIdx;
    const currentLevelIdx = progress.levelIdx;

    const [logs, setLogs] = useState(null);
    const [executionError, setExecutionError] = useState(null);
    const [validationMsg, setValidationMsg] = useState(null);
    const [isSolved, setIsSolved] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const [hintSeen, setHintSeen] = useState(false);
    const [answerRevealed, setAnswerRevealed] = useState(false);

    const [dialogueStep, setDialogueStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const dialogueScrollRef = useRef(null);
    const [mascotMood, setMascotMood] = useState('idle');

    // Navigation Safety State
    const [isReadyToAdvance, setIsReadyToAdvance] = useState(false);
    const consoleRef = useRef(null);

    const currentChapter = localizedChapters[currentChapterIdx];
    const currentLevel = currentChapter?.levels[currentLevelIdx];

    useEffect(() => {
        if (currentLevel) {
            setLogs(null);
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

    const { speak, cancel } = useAudio();

    useEffect(() => {
        if (dialogueScrollRef.current) {
            dialogueScrollRef.current.scrollTop = dialogueScrollRef.current.scrollHeight;
        }
    }, [dialogueStep, isTyping]);

    // Handle Speech
    useEffect(() => {
        if (currentLevel?.dialogue?.[dialogueStep]) {
            const { text, speaker } = currentLevel.dialogue[dialogueStep];
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
            // Focus terminal when dialogue ends
            consoleRef.current?.focus();
        }
    };

    const isDialogueActive = currentLevel?.dialogue && dialogueStep < currentLevel.dialogue.length - 1;

    // Auto-focus logic when dialogue finishes (button disappears)
    useEffect(() => {
        if (!isDialogueActive && currentLevel) {
            const timer = setTimeout(() => {
                consoleRef.current?.focus();
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isDialogueActive, currentLevel]);

    // Global Keydown Listener
    useEffect(() => {
        const handleGlobalKeyDown = (e) => {
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

    const handleExecute = async (code) => {
        if (!currentLevel) return;

        setMascotMood('thinking');
        const result = await runCode(code);

        setLogs(result.logs);

        if (!result.success) {
            setExecutionError(result.error);
            setValidationMsg({ type: 'error', text: 'Compilation Error!' });
            setMascotMood('error');
            return;
        }

        setExecutionError(null);

        // Validation Logic
        let solved = false;
        let msg = '';

        if (currentLevel.expectedOutput) {
            // Check if any log matches expected assertions
            // For simplicity, just check if expected string is IN the logs joined together
            const fullLog = result.logs.join('\n');
            const allMatch = currentLevel.expectedOutput.every(expect => fullLog.includes(expect));

            if (allMatch) {
                solved = true;
                msg = currentLevel.successMessage || 'Correct!';
            } else {
                msg = "Output doesn't match expectation. Check the objective!";
            }
        } else {
            // Fallback validation if no strictly defined output (shouldn't happen with current data)
            solved = true;
            msg = "Code ran successfully!";
        }

        if (solved) {
            // Calculate Reward
            let reward = 0;
            if (answerRevealed) {
                reward = 0;
            } else if (hintSeen) {
                reward = 2;
            } else {
                reward = 10;
            }

            if (!isSolved) {
                updateCoins(reward);
            }

            setValidationMsg({ type: 'success', text: `${msg} (+${reward} Coins)` });
            setIsSolved(true);
            setMascotMood('success');
            // isReadyToAdvance will be set by useEffect after delay
        } else {
            setValidationMsg({ type: 'error', text: msg });
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
            alert("Not enough coins! You need 20 coins to reveal the answer.");
        }
    };

    const handleNextLevel = () => {
        advanceLevel(currentChapterIdx, currentChapter.levels.length);
    };

    if (!isLoaded) return <div className="text-center py-20 animate-pulse text-purple-400">Loading Compiler...</div>;

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
                        <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">TypeScript Mastery!</h2>
                        <p className="text-slate-400 mb-6">You have tamed the Type System.</p>
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
                                className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded px-4 py-3 text-lg focus:outline-none focus:border-purple-500 mb-4 text-center text-slate-800 dark:text-white"
                                autoFocus
                                required
                                maxLength={30}
                                autoComplete="off"
                            />
                            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded transition-colors uppercase tracking-wider">
                                Generate Certificate
                            </button>
                        </form>
                    </motion.div>
                </div>
            )
        }
        return <Certificate onReset={resetProgress} userName={progress.userName} certificateId={progress.certificateId} title="TypeScript Master" />;
    }

    if (!currentLevel) return <div>Data Error</div>;

    const currentSpeaker = currentLevel?.dialogue?.[dialogueStep]?.speaker || 'Compiler';

    return (
        <div className="flex flex-col lg:h-[calc(100vh-80px)] min-h-[calc(100vh-80px)] h-auto max-w-7xl mx-auto relative">
            <div className="px-4 pt-4">
                <PlanetProgress
                    totalChapters={localizedChapters.length}
                    currentChapterIdx={currentChapterIdx}
                />
                <CoinPortal coins={progress.coins} color="purple" />
            </div>

            <div className="flex-1 flex flex-col lg:flex-row gap-6 p-4 pt-0 lg:overflow-hidden">
                {/* Left Panel: Narrative */}
                <div className="lg:w-1/3 flex flex-col min-h-0 relative shrink-0">
                    <div
                        className="flex-1 overflow-y-auto mb-4 custom-scrollbar pr-2 flex flex-col"
                        ref={dialogueScrollRef}
                    >
                        <div className="bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-100 p-6 rounded-2xl rounded-bl-sm shadow-lg mb-2 relative border-4 border-slate-200 dark:border-slate-700 transition-colors duration-300">
                            <div className="border-b border-slate-200 dark:border-slate-700 pb-2 mb-4 flex justify-between items-end">
                                <div>
                                    <h2 className="text-xs uppercase tracking-widest text-slate-500 mb-1">
                                        Module {currentChapterIdx + 1} - Unit {currentLevelIdx + 1}
                                    </h2>
                                    <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                                        {currentLevel.title}
                                    </h1>
                                </div>
                            </div>

                            <div className="mb-6 cursor-pointer" onClick={handleAdvanceDialogue}>
                                {currentLevel.dialogue && (
                                    <div className="space-y-4">
                                        {currentLevel.dialogue.slice(0, dialogueStep + 1).map((msg, idx) => (
                                            <div key={idx} className={`flex ${msg.speaker === 'You' ? 'justify-end' : 'justify-start'}`}>
                                                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.speaker === 'You'
                                                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-100 border border-purple-200 dark:border-purple-800 rounded-tr-none'
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
                                                    Click to continue...
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="bg-slate-50/80 dark:bg-slate-900/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 mb-4">
                                <h3 className="text-purple-600 dark:text-purple-400 font-bold mb-1 flex items-center gap-2 text-sm">
                                    <FaCheckCircle /> Mission:
                                </h3>
                                <p className="text-slate-700 dark:text-slate-300 italic">{currentLevel.objective}</p>
                            </div>

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
                                                onClick={handleNextLevel}
                                                className="mt-2 text-xs bg-green-600 text-white px-3 py-1 rounded shadow hover:bg-green-500 transition-colors w-full flex items-center justify-center gap-2 whitespace-nowrap"
                                            >
                                                Next Unit <FaChevronRight />
                                            </button>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-2 border-t border-slate-200 dark:border-slate-700 pt-2">
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={handleRequestHint}
                                        className="text-purple-500 hover:text-purple-600 text-xs font-bold flex items-center gap-1"
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
                                                        <pre className="mt-1 p-2 bg-slate-800 text-green-400 rounded overflow-x-auto">
                                                            {currentLevel.solution}
                                                        </pre>
                                                    ) : (
                                                        <button
                                                            onClick={handleRevealAnswer}
                                                            className="text-white bg-slate-700 hover:bg-slate-600 px-3 py-1 rounded transition-colors flex items-center gap-2"
                                                        >
                                                            Buy Code (20 Coins) <FaCoins />
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
                    {/* Character Display */}
                    <div className="h-56 flex items-end pl-8 relative z-0 pointer-events-none -mt-10 lg:mt-0">
                        <div className="transform origin-bottom-left">
                            <CharacterDisplay speaker={currentSpeaker} mood={mascotMood} />
                        </div>
                    </div>
                </div>

                {/* Right Panel: Code & Results */}
                <div className="lg:w-2/3 flex flex-col gap-4 min-h-[500px] lg:min-h-0">
                    <div className="flex-1 min-h-[50%]">
                        <TsConsole
                            ref={consoleRef}
                            onExecute={handleExecute}
                            initialCode={currentLevel.initCode || ""}
                            key={currentLevel.id}
                        />
                    </div>
                    <div className="h-1/3 min-h-[150px] bg-slate-900 rounded-lg border border-slate-700 shadow-xl overflow-auto">
                        <TsResult
                            logs={logs}
                            error={executionError}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TsStoryMode;
