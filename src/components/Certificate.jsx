import { motion } from 'framer-motion';
import { FaDownload, FaRedo } from 'react-icons/fa';

const Certificate = ({ onReset, userName, certificateId }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-slate-100 text-slate-900 p-8 md:p-12 rounded-lg shadow-2xl max-w-2xl w-full border-8 border-yellow-500 relative my-auto"
            >
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-yellow-600 -mt-2 -ml-2"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-8 border-r-8 border-yellow-600 -mt-2 -mr-2"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-8 border-l-8 border-yellow-600 -mb-2 -ml-2"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-yellow-600 -mb-2 -mr-2"></div>

                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 uppercase tracking-widest font-serif">Certificate</h1>
                    <p className="text-xl text-slate-600 font-serif italic">of Competence</p>

                    <div className="py-4">
                        <p className="text-lg text-slate-700">This certifies that</p>
                        <div className="text-3xl font-bold text-monster-accent border-b-2 border-slate-300 inline-block px-8 py-2 mt-2 font-mono">
                            {userName || "SQL Monster"}
                        </div>
                        {certificateId && (
                            <div className="text-xs font-mono text-slate-400 mt-2">ID: {certificateId}</div>
                        )}
                    </div>

                    <p className="text-slate-700 leading-relaxed max-w-md mx-auto">
                        Has successfully demonstrated mastery of SQL by defeating all challenges in the SQL Monster realms.
                    </p>

                    <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-slate-300">
                        <div className="text-center">
                            <div className="font-dancing text-2xl text-blue-600">The Mascot</div>
                            <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">Chief Database Officer</div>
                        </div>
                        <div className="w-24 h-24 rounded-full bg-yellow-500/20 flex items-center justify-center border-4 border-yellow-500 text-yellow-600 font-bold text-xs uppercase rotation-12 transform rotate-12 relative overflow-hidden">
                            <img src="/characters/shadow_minion_character.png" alt="Seal" className="absolute inset-0 w-full h-full object-contain opacity-80 mix-blend-multiply" />
                            <span className="relative z-10 bg-white/80 px-1">Official Seal</span>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center mt-8 no-print">
                        <button onClick={() => window.print()} className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white rounded hover:bg-slate-700">
                            <FaDownload /> Print
                        </button>
                        <button onClick={onReset} className="flex items-center gap-2 px-6 py-2 bg-red-100 text-red-600 rounded hover:bg-red-200">
                            <FaRedo /> Restart Game
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Certificate;
