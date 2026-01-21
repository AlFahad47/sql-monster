import { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { FaDragon, FaCog, FaExclamationTriangle, FaSun, FaMoon, FaBars, FaTimes, FaGlobe, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { useGameProgress } from '../hooks/useGameProgress';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { useAudio } from '../context/AudioContext';
import { motion, AnimatePresence } from 'framer-motion';

const MainLayout = () => {
    const [showResetModal, setShowResetModal] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

    const { resetProgress } = useGameProgress(0);
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const { isAudioEnabled, toggleAudio } = useAudio();
    const navigate = useNavigate();

    const handleConfirmReset = () => {
        resetProgress();
        setShowResetModal(false);
        setShowSettingsDropdown(false);
        window.location.href = '/story';
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
            <nav className="border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md fixed top-0 w-full z-50 transition-colors duration-300">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-monster-accent hover:text-blue-400 transition-colors">
                        <FaDragon className="text-3xl" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                            SQL Monster
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6 font-medium text-slate-600 dark:text-slate-300">
                        <Link to="/story" className="hover:text-monster-accent dark:hover:text-white transition-colors">{t('storyMode')}</Link>
                        <Link to="/typescript" className="text-purple-500 hover:text-purple-400 font-bold transition-colors">TypeScript</Link>
                        <Link to="/interview" className="hover:text-monster-accent dark:hover:text-white transition-colors">{t('interviewPrep')}</Link>

                        {/* Language Toggle */}
                        <button
                            onClick={toggleLanguage}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-blue-500 dark:text-blue-400 font-bold text-sm flex items-center gap-1"
                            title="Switch Language"
                        >
                            <FaGlobe /> {language === 'en' ? 'BN' : 'EN'}
                        </button>

                        {/* Audio Toggle */}
                        <button
                            onClick={toggleAudio}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-600 dark:text-slate-300"
                            title={isAudioEnabled ? "Mute Audio" : "Enable Audio"}
                        >
                            {isAudioEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-yellow-500 dark:text-yellow-300"
                            title="Toggle Theme"
                        >
                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                        </button>

                        {/* Settings Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
                                className="text-slate-600 dark:text-slate-400 hover:text-monster-accent dark:hover:text-white transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/5"
                                title="Settings"
                            >
                                <FaCog />
                            </button>

                            <AnimatePresence>
                                {showSettingsDropdown && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setShowSettingsDropdown(false)}></div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-1 z-20 overflow-hidden"
                                        >
                                            <button
                                                onClick={() => setShowResetModal(true)}
                                                className="w-full text-left px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-2"
                                            >
                                                <FaExclamationTriangle /> {t('resetProgress')}
                                            </button>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-yellow-500 dark:text-yellow-300"
                        >
                            {theme === 'dark' ? <FaSun /> : <FaMoon />}
                        </button>
                        <button
                            onClick={() => setShowMobileMenu(!showMobileMenu)}
                            className="text-slate-600 dark:text-slate-300 text-2xl"
                        >
                            {showMobileMenu ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {showMobileMenu && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden border-t border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md overflow-hidden"
                        >
                            <div className="flex flex-col p-4 gap-4 font-medium text-slate-600 dark:text-slate-300">
                                <Link to="/story" onClick={() => setShowMobileMenu(false)} className="hover:text-monster-accent dark:hover:text-white py-2">{t('storyMode')}</Link>
                                <Link to="/typescript" onClick={() => setShowMobileMenu(false)} className="text-purple-500 dark:text-purple-400 font-bold py-2">TypeScript</Link>
                                <Link to="/interview" onClick={() => setShowMobileMenu(false)} className="hover:text-monster-accent dark:hover:text-white py-2">{t('interviewPrep')}</Link>
                                <button
                                    onClick={toggleLanguage}
                                    className="text-left w-full hover:text-monster-accent dark:hover:text-white py-2"
                                >
                                    {language === 'en' ? 'Switch to Bangla' : 'ইংরেজিতে পরিবর্তন করুন'}
                                </button>
                                <button
                                    onClick={toggleAudio}
                                    className="text-left w-full hover:text-monster-accent dark:hover:text-white py-2 flex items-center gap-2"
                                >
                                    {isAudioEnabled ? <><FaVolumeUp /> Mute Audio</> : <><FaVolumeMute /> Enable Audio</>}
                                </button>
                                <button
                                    onClick={() => { setShowResetModal(true); setShowMobileMenu(false); }}
                                    className="text-left py-2 text-red-600 dark:text-red-400 flex items-center gap-2"
                                >
                                    {t('resetProgress')}
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            <main className="pt-20 container mx-auto px-4 min-h-[calc(100vh-60px)]">
                <Outlet />
            </main>

            <footer className="border-t border-white/10 py-6 text-center text-slate-500 text-sm">
                {t('footer')} &copy; {new Date().getFullYear()}
            </footer>

            {/* Reset Confirmation Modal */}
            <AnimatePresence>
                {showResetModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-slate-800 border border-slate-600 p-6 rounded-lg shadow-2xl max-w-sm w-full"
                        >
                            <div className="flex items-center gap-3 text-red-500 mb-4">
                                <FaExclamationTriangle className="text-2xl" />
                                <h3 className="text-xl font-bold">{t('confirmResetTitle')}</h3>
                            </div>
                            <p className="text-slate-300 mb-6">
                                {t('confirmResetText')}
                            </p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setShowResetModal(false)}
                                    className="px-4 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded transition-colors"
                                >
                                    {t('cancel')}
                                </button>
                                <button
                                    onClick={handleConfirmReset}
                                    className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded font-bold transition-colors"
                                >
                                    {t('confirm')}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MainLayout;
