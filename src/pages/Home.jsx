import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const { t } = useLanguage();
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 mb-6 drop-shadow-xl"
            >
                {t('title')}
            </motion.h1>
            <p className="text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed">
                {t('description')}
            </p>

            <div className="flex gap-6 flex-wrap justify-center">
                <Link to="/story" className="group relative px-8 py-4 bg-blue-600 rounded-lg font-bold text-lg text-white overflow-hidden shadow-lg hover:shadow-blue-500/30 transition-all">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    {t('startAdventure')}
                </Link>
                <Link to="/typescript" className="group relative px-8 py-4 bg-purple-600 rounded-lg font-bold text-lg text-white overflow-hidden shadow-lg hover:shadow-purple-500/30 transition-all">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    TypeScript Mode
                </Link>
                <Link to="/cyber-story" className="group relative px-8 py-4 bg-green-700 rounded-lg font-bold text-lg text-white overflow-hidden shadow-lg hover:shadow-green-500/30 transition-all font-mono">
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                    CYBER.SEC
                </Link>
                <Link to="/interview" className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-lg font-bold text-lg text-white hover:bg-slate-700 hover:border-slate-600 transition-all">
                    {t('practiseInterview')}
                </Link>
            </div>
        </div>
    );
};

export default Home;
