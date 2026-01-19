import { motion, AnimatePresence } from 'framer-motion';

/**
 * CharacterDisplay Component
 * Displays different characters based on the speaker prop.
 * Falls back to the default Mascot (Glitch) behaviors for 'Glitch' or unknown speakers.
 * 
 * @param {string} speaker - Name of the current speaker (e.g., 'Glitch', 'Elder', 'Guardian')
 * @param {string} mood - 'idle' | 'success' | 'error' (mostly for Glitch)
 */
const CharacterDisplay = ({ speaker = 'Glitch', mood = 'idle' }) => {

    const getCharacterSrc = () => {
        // Normalize speaker name to handle potential case variations
        const normalizedSpeaker = speaker?.toLowerCase() || 'glitch';

        switch (normalizedSpeaker) {
            case 'elder':
                return '/characters/elder_character.png';
            case 'guardian':
                return '/characters/guardian_character.png';
            case 'librarian':
                return '/characters/librarian_character.png';
            case 'dragon':
                return '/characters/dragon_boss_character.png';
            case 'shadow':
            case 'monster':
                return '/characters/shadow_minion_character.png';
            case 'glitch':
            case 'you': // 'You' usually doesn't have a portrait, but we'll show Glitch listening or keep Glitch visible
            default:
                // Fallback to Glitch (Mascot) behavior based on mood
                switch (mood) {
                    case 'success': return '/mascot/success.png';
                    case 'error': return '/mascot/confused.png';
                    case 'confused': return '/mascot/confused.png';
                    default: return '/mascot/idle.png';
                }
        }
    };

    // Determine if we should apply specific animations based on character type
    const isGlitch = !['elder', 'guardian', 'librarian', 'dragon', 'shadow', 'monster'].includes(speaker?.toLowerCase());

    return (
        <div className="relative w-40 h-40 md:w-56 md:h-56 flex items-end justify-center">
            <AnimatePresence mode="wait">
                <motion.img
                    key={speaker + mood} // Re-animate when speaker or mood changes
                    src={getCharacterSrc()}
                    alt={`Character ${speaker}`}
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        y: 0,
                        // Add a subtle breathing animation for alive feel
                        rotate: isGlitch ? [0, -2, 2, 0] : 0
                    }}
                    exit={{ scale: 0.9, opacity: 0, y: 10, transition: { duration: 0.2 } }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        opacity: { duration: 0.2 }
                    }}
                    className={`object-contain drop-shadow-2xl filter ${
                        // specific styling adjustments per character if needed
                        speaker?.toLowerCase() === 'dragon' ? 'scale-110' : ''
                        } max-h-full max-w-full`}
                />
            </AnimatePresence>
        </div>
    );
};

export default CharacterDisplay;
