import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import { FaCoins } from 'react-icons/fa';

const CoinPortal = ({ coins, color = "yellow" }) => {
    const portalTarget = document.getElementById('navbar-coins-portal');

    if (!portalTarget) return null;

    const colors = {
        yellow: "text-yellow-600 dark:text-yellow-400 border-yellow-400 dark:border-yellow-400",
        purple: "text-purple-600 dark:text-purple-400 border-purple-400 dark:border-purple-400",
        green: "text-green-500 dark:text-green-400 border-green-500 dark:border-green-500",
    };

    const activeColor = colors[color] || colors.yellow;

    return createPortal(
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            key={coins} // Re-animate on change
            className={`px-3 py-1 rounded-full border-2 ${activeColor} font-bold shadow-sm flex items-center gap-2 bg-white/50 dark:bg-black/50 backdrop-blur-sm mx-4`}
        >
            <FaCoins className="text-lg" />
            <span>{coins || 0}</span>
        </motion.div>,
        portalTarget
    );
};

export default CoinPortal;
