import { useState, useEffect } from 'react';

const SAVE_KEY = 'sql-monster-save-v1';

export const useGameProgress = (totalChapters) => {
    const [progress, setProgress] = useState({
        chapterIdx: 0,
        levelIdx: 0,
        unlocked: { '0-0': true } // simplistic unlock tracking
    });

    const [isLoaded, setIsLoaded] = useState(false);

    // Load from local storage on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem(SAVE_KEY);
            if (saved) {
                setProgress(JSON.parse(saved));
            }
        } catch (e) {
            console.error("Failed to load save", e);
        }
        setIsLoaded(true);
    }, []);

    // Save whenever progress changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(SAVE_KEY, JSON.stringify(progress));
        }
    }, [progress, isLoaded]);

    const advanceLevel = (currentChapter, currentChapterLevelCount) => {
        setProgress(prev => {
            let nextLevel = prev.levelIdx + 1;
            let nextChapter = prev.chapterIdx;

            if (nextLevel >= currentChapterLevelCount) {
                // Next chapter
                nextLevel = 0;
                nextChapter = prev.chapterIdx + 1;
            }

            // Check completion
            if (nextChapter >= totalChapters) {
                return { ...prev, isComplete: true };
            }

            return {
                ...prev,
                chapterIdx: nextChapter,
                levelIdx: nextLevel,
                unlocked: { ...prev.unlocked, [`${nextChapter}-${nextLevel}`]: true }
            };
        });
    };

    const resetProgress = () => {
        const initial = { chapterIdx: 0, levelIdx: 0, unlocked: { '0-0': true }, userName: null, certificateId: null };
        setProgress(initial);
        localStorage.setItem(SAVE_KEY, JSON.stringify(initial));
    };

    const setUserName = (name) => {
        const id = 'SQLM-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        setProgress(prev => ({ ...prev, userName: name, certificateId: id }));
    };

    return {
        progress,
        isLoaded,
        advanceLevel,
        resetProgress,
        setUserName
    };
};
