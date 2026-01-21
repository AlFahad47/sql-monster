import { createContext, useContext, useEffect, useState, useRef } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isAudioEnabled, setIsAudioEnabled] = useState(() => {
        const saved = localStorage.getItem('sql-monster-audio');
        return saved ? JSON.parse(saved) : true;
    });

    const [availableVoices, setAvailableVoices] = useState([]);
    const synth = useRef(window.speechSynthesis);

    useEffect(() => {
        const loadVoices = () => {
            const voices = synth.current.getVoices();
            setAvailableVoices(voices);
        };

        loadVoices();

        // Chrome loads voices asynchronously
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }
    }, []);

    const toggleAudio = () => {
        setIsAudioEnabled(prev => {
            const newState = !prev;
            localStorage.setItem('sql-monster-audio', JSON.stringify(newState));
            if (!newState) {
                synth.current.cancel();
            }
            return newState;
        });
    };

    const getVoiceForCharacter = (characterName) => {
        if (!availableVoices.length) return null;

        const normName = characterName?.toLowerCase() || '';

        // Helper to find voice by name, prioritizing "natural" variants
        const findVoice = (keywords) => {
            // Priority 1: Check for keywords + "natural"
            const naturalMatch = availableVoices.find(v =>
                keywords.some(k => v.name.toLowerCase().includes(k)) &&
                v.name.toLowerCase().includes('natural') &&
                v.lang.startsWith('en')
            );
            if (naturalMatch) return naturalMatch;

            // Priority 2: Check for just keywords
            return availableVoices.find(v =>
                keywords.some(k => v.name.toLowerCase().includes(k)) &&
                v.lang.startsWith('en')
            );
        };

        // Fallback: Try to find ANY "natural" English voice
        const anyNatural = availableVoices.find(v =>
            v.name.toLowerCase().includes('natural') &&
            v.lang.startsWith('en')
        );

        if (normName.includes('glitch') || normName.includes('compiler') || normName === 'system') {
            // Robotic / Mechanical - but clear
            // Use standard clear voices, slightly pitched up but less extreme than before
            const robotVoice = findVoice(['google us english', 'microsoft zira', 'samantha', 'daniel']);
            return {
                voice: robotVoice || anyNatural || availableVoices[0],
                pitch: 1.05,
                rate: 1.05
            };
        }

        if (normName.includes('monster') || normName.includes('boss')) {
            // Deeper voice - softened pitch shift to avoid "robot" artifacting
            const deepVoice = findVoice(['google uk english male', 'microsoft david', 'moira', 'daniel']);
            return {
                voice: deepVoice || anyNatural || availableVoices[0],
                pitch: 0.9,
                rate: 0.95
            };
        }

        if (normName === 'you' || normName.includes('hero')) {
            // Hero / Default - prioritize natural sounding voices
            const heroVoice = findVoice(['google us english', 'microsoft mark', 'samantha', 'karen']);
            return {
                voice: heroVoice || anyNatural || availableVoices[0],
                pitch: 1.0,
                rate: 1.0
            };
        }

        // Default fallback
        const defaultVoice = findVoice(['google us english', 'microsoft zira']);
        return {
            voice: defaultVoice || anyNatural || availableVoices.find(v => v.lang.startsWith('en')) || availableVoices[0],
            pitch: 1.0,
            rate: 1.0
        };
    };

    const speak = (text, characterName = 'System') => {
        if (!isAudioEnabled) return;

        // Cancel previous speech to avoid queue buildup
        synth.current.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        const { voice, pitch, rate } = getVoiceForCharacter(characterName);

        if (voice) utterance.voice = voice;
        utterance.pitch = pitch;
        utterance.rate = rate;
        utterance.volume = 0.8;

        synth.current.speak(utterance);
    };

    const cancel = () => {
        synth.current.cancel();
    };

    return (
        <AudioContext.Provider value={{ isAudioEnabled, toggleAudio, speak, cancel }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);
