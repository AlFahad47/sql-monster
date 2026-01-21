import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useAudio } from '../context/AudioContext';
import CyberTerminal from '../components/CyberTerminal';
import CharacterDisplay from '../components/CharacterDisplay';
import Certificate from '../components/Certificate';
import { useGameProgress } from '../hooks/useGameProgress';
import { cyberChapters } from '../data/cyber_chapters';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaLightbulb, FaCheckCircle, FaExclamationCircle, FaCoins } from 'react-icons/fa';
import PlanetProgress from '../components/PlanetProgress';
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

const CyberStoryMode = () => {
    // Hardcode to English for now as per data structure
    const localizedChapters = cyberChapters['en'];

    const { progress, isLoaded, advanceLevel, resetProgress, setUserName, updateCoins } = useGameProgress(localizedChapters.length, 'cyber-monster-save-v1');

    const currentChapterIdx = progress.chapterIdx;
    const currentLevelIdx = progress.levelIdx;

    const [validationMsg, setValidationMsg] = useState(null);
    const [isSolved, setIsSolved] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [hintSeen, setHintSeen] = useState(false);
    const [answerRevealed, setAnswerRevealed] = useState(false);

    const [dialogueStep, setDialogueStep] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const dialogueScrollRef = useRef(null);
    const terminalRef = useRef(null);
    const nextLevelBtnRef = useRef(null);
    const [mascotMood, setMascotMood] = useState('idle');

    // Navigation Safety State
    const [isReadyToAdvance, setIsReadyToAdvance] = useState(false);

    const currentChapter = localizedChapters[currentChapterIdx];
    const currentLevel = currentChapter?.levels[currentLevelIdx];

    useEffect(() => {
        if (currentLevel) {
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
            terminalRef.current?.focus();
        }
    };

    const isDialogueActive = currentLevel?.dialogue && dialogueStep < currentLevel.dialogue.length - 1;

    // Auto-focus logic when dialogue finishes (button disappears)
    useEffect(() => {
        if (!isDialogueActive && currentLevel) {
            const timer = setTimeout(() => {
                terminalRef.current?.focus();
            }, 50);
            return () => clearTimeout(timer);
        }
    }, [isDialogueActive, currentLevel]);

    // Global Keydown Listener
    useEffect(() => {
        const handleGlobalKeyDown = (e) => {
            if (e.key === 'Enter' && !e.ctrlKey && !e.metaKey) {
                if (isDialogueActive) {
                    e.preventDefault();
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

    const handleCommand = async (cmd) => {
        if (!currentLevel) return;

        setMascotMood('thinking');

        // Simple exact match validation for now
        const isCorrect = cmd.trim() === currentLevel.expectedCommand;

        let outputLines = [];

        if (isCorrect) {
            outputLines = currentLevel.expectedOutput || ["Command success."];
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

            setValidationMsg({ type: 'success', text: `${currentLevel.successMessage || 'Correct!'} (+${reward} Coins)` });
            setIsSolved(true);
            setMascotMood('success');
        } else {
            // Provide some feedback if it's the wrong command
            setValidationMsg(null);
            setMascotMood('error');
            return null;
        }

        return { output: outputLines, success: isCorrect };
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
            // Basic alert for now
            alert("Insufficient Crypto Credits! Need 20 coins to decrypt.");
        }
    };

    const handleNextLevel = () => {
        advanceLevel(currentChapterIdx, currentChapter.levels.length);
    };

    if (!isLoaded) return <div className="text-center py-20 animate-pulse text-green-400">Initializing Uplink...</div>;

    if (progress.isComplete) {
        if (!progress.userName) {
            return (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 text-white">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-black border border-green-500 p-8 rounded-none shadow-[0_0_50px_rgba(0,255,0,0.3)] max-w-md w-full text-center font-mono"
                    >
                        <div className="flex justify-center mb-4">
                            <CharacterDisplay mood="success" />
                        </div>
                        <h2 className="text-3xl font-bold mb-2 text-green-500 uppercase glitch-text">System Breached</h2>
                        <p className="text-green-300 mb-6">You have mastered the network.</p>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const name = formData.get('name');
                            if (name && name.trim()) setUserName(name.trim());
                        }}>
                            <input
                                name="name"
                                type="text"
                                placeholder="ENTER CODENAME"
                                className="w-full bg-slate-900 border border-green-700 rounded-none px-4 py-3 text-lg focus:outline-none focus:border-green-500 mb-4 text-center text-green-500 placeholder-green-800 font-mono"
                                autoFocus
                                required
                                maxLength={30}
                                autoComplete="off"
                            />
                            <button type="submit" className="w-full bg-green-900 hover:bg-green-800 border border-green-500 text-green-100 font-bold py-3 rounded-none transition-colors uppercase tracking-wider font-mono">
                                Generate Credentials
                            </button>
                        </form>
                    </motion.div>
                </div>
            )
        }
        return <Certificate onReset={resetProgress} userName={progress.userName} certificateId={progress.certificateId} title="Cyber Security Expert" />;
    }

    if (!currentLevel) return <div>Data Integrity Error</div>;

    const currentSpeaker = currentLevel?.dialogue?.[dialogueStep]?.speaker || 'System';

    return (
        <div className="flex flex-col h-[calc(100vh-80px)] max-w-7xl mx-auto relative font-mono">
            <div className="px-4 pt-4">
                <PlanetProgress
                    totalChapters={localizedChapters.length}
                    currentChapterIdx={currentChapterIdx}
                />
                <CoinPortal coins={progress.coins} color="green" />
            </div>

            <div className="flex-1 flex flex-col lg:flex-row gap-6 p-4 pt-0 overflow-hidden">
                {/* Left Panel: Narrative */}
                <div className="lg:w-1/3 flex flex-col min-h-0 relative">
                    <div
                        className="flex-1 overflow-y-auto mb-4 custom-scrollbar pr-2 flex flex-col"
                        ref={dialogueScrollRef}
                    >
                        <div className="bg-slate-900/90 text-green-500 p-6 rounded-sm shadow-lg mb-2 relative border border-green-800 transition-colors duration-300">
                            <div className="border-b border-green-900 pb-2 mb-4 flex justify-between items-end">
                                <div>
                                    <h2 className="text-xs uppercase tracking-widest text-green-700 mb-1">
                                        Sector {currentChapterIdx + 1} - Node {currentLevelIdx + 1}
                                    </h2>
                                    <h1 className="text-xl font-bold text-green-400">
                                        {currentLevel.title}
                                    </h1>
                                </div>
                            </div>

                            <div className="mb-6 cursor-pointer" onClick={handleAdvanceDialogue}>
                                {currentLevel.dialogue && (
                                    <div className="space-y-4">
                                        {currentLevel.dialogue.slice(0, dialogueStep + 1).map((msg, idx) => (
                                            <div key={idx} className={`flex ${msg.speaker === 'You' ? 'justify-end' : 'justify-start'}`}>
                                                <div className={`max-w-[80%] p-3 rounded-sm text-sm ${msg.speaker === 'You'
                                                    ? 'bg-green-900/30 text-green-300 border border-green-800'
                                                    : 'bg-slate-800 text-slate-300 border border-slate-700'
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
                                            <div className="flex justify-center animate-pulse pt-2">
                                                <div className="bg-green-900/50 text-green-500 text-xs px-3 py-1 border border-green-800 hover:bg-green-900 select-none transition-colors">
                                                    [Click or Press Enter to continue]
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <div className="bg-black/50 rounded-sm p-4 border border-green-900/50 mb-4">
                                <h3 className="text-green-500 font-bold mb-1 flex items-center gap-2 text-sm">
                                    <FaCheckCircle /> Objective:
                                </h3>
                                <p className="text-green-400/80 italic">{currentLevel.objective}</p>
                            </div>

                            <AnimatePresence mode='wait'>
                                {validationMsg && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className={`p-3 rounded-sm border text-sm font-bold mb-4 ${validationMsg.type === 'success'
                                            ? 'bg-green-900/40 border-green-600 text-green-400'
                                            : 'bg-red-900/40 border-red-600 text-red-400'
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
                                                className="mt-2 text-xs bg-green-700 text-white px-3 py-2 rounded-sm shadow hover:bg-green-600 transition-colors w-full flex items-center justify-center gap-2 whitespace-nowrap uppercase tracking-widest"
                                            >
                                                Next Node (Press Enter) <FaChevronRight />
                                            </button>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-2 border-t border-green-900 pt-2">
                                <div className="flex items-center justify-between">
                                    <button
                                        onClick={handleRequestHint}
                                        className="text-yellow-600 hover:text-yellow-500 text-xs font-bold flex items-center gap-1"
                                    >
                                        <FaLightbulb /> {showHint ? "Terminating Hint Process" : "Request Hint"}
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {showHint && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="mt-2 text-xs text-yellow-500 font-mono bg-yellow-900/10 p-2 rounded-sm border border-yellow-900"
                                        >
                                            <div className="mb-2">
                                                <strong>Hint:</strong> {currentLevel.hint}
                                            </div>
                                            {currentLevel.solution && (
                                                <div className="mt-2 pt-2 border-t border-green-900/50">
                                                    {answerRevealed ? (
                                                        <div className="mt-1 p-2 bg-black border border-green-800 text-green-400 font-mono">
                                                            &gt; {currentLevel.solution || currentLevel.expectedCommand}
                                                        </div>
                                                    ) : (
                                                        <button
                                                            onClick={handleRevealAnswer}
                                                            className="text-black bg-green-700 hover:bg-green-600 border border-green-500 px-3 py-1 transition-colors flex items-center gap-2 uppercase tracking-wide text-[10px]"
                                                        >
                                                            Decrypt Answer (20 Coins) <FaCoins />
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
                </div>

                {/* Right Panel: Terminal */}
                <div className="lg:w-2/3 flex flex-col gap-4 min-h-0">
                    <div className="flex-1 h-full">
                        <CyberTerminal
                            ref={terminalRef}
                            onCommand={handleCommand}
                            key={currentLevel.id}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CyberStoryMode;
