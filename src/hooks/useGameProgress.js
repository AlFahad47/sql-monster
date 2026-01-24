import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';

const DEFAULT_SAVE_KEY = 'sql-monster-save-v1';

export const useGameProgress = (totalChapters, saveKey = DEFAULT_SAVE_KEY) => {
    const { user } = useAuth();
    const [progress, setProgress] = useState({
        chapterIdx: 0,
        levelIdx: 0,
        unlocked: { '0-0': true }, // simplistic unlock tracking
        coins: 0
    });

    const [isLoaded, setIsLoaded] = useState(false);

    // Load from local storage or API on mount/user change
    useEffect(() => {
        let isMounted = true;

        const loadProgress = async () => {
            setIsLoaded(false);

            // 1. Always load local first for immediate UI
            try {
                const saved = localStorage.getItem(saveKey);
                if (saved) {
                    setProgress(JSON.parse(saved));
                }
            } catch (e) {
                console.error("Failed to load local save", e);
            }

            // 2. If user is logged in, sync with Backend
            if (user) {
                try {
                    const response = await fetch(`/api/progress/${user.uid}/${saveKey}`);

                    if (response.ok) {
                        const cloudData = await response.json();

                        if (isMounted) {
                            setProgress(prev => {
                                // Simple merge: keep max coins, merge unlocked
                                const mergedCoins = Math.max(prev.coins || 0, cloudData.coins || 0);
                                const mergedUnlocked = { ...prev.unlocked, ...cloudData.unlocked };
                                // Take the furthest progress
                                let newChapter = cloudData.chapterIdx;
                                let newLevel = cloudData.levelIdx;

                                if (prev.chapterIdx > newChapter || (prev.chapterIdx === newChapter && prev.levelIdx > newLevel)) {
                                    newChapter = prev.chapterIdx;
                                    newLevel = prev.levelIdx;
                                }

                                // Sync userName if available from Auth and not set in progress
                                let effectiveUserName = cloudData.userName;
                                if (!effectiveUserName && user.displayName) {
                                    effectiveUserName = user.displayName;
                                }

                                return {
                                    ...cloudData,
                                    ...prev,
                                    chapterIdx: newChapter,
                                    levelIdx: newLevel,
                                    unlocked: mergedUnlocked,
                                    coins: mergedCoins,
                                    userName: effectiveUserName || prev.userName
                                };
                            });
                        }
                    } else if (response.status === 404) {
                        // New save file. Initialize with user name from Auth if available.
                        if (user.displayName) {
                            setProgress(prev => ({ ...prev, userName: user.displayName }));
                        }
                    } else {
                        console.error("Failed to load cloud data:", response.statusText);
                    }
                } catch (error) {
                    console.error("Error fetching cloud data:", error);
                }
            }
            if (isMounted) setIsLoaded(true);
        };

        loadProgress();

        return () => { isMounted = false; };
    }, [saveKey, user]);

    // Save whenever progress changes
    useEffect(() => {
        if (!isLoaded) return;

        // 1. Save to Local Storage
        localStorage.setItem(saveKey, JSON.stringify(progress));

        // 2. Save to Backend if user exists
        if (user) {
            const saveToCloud = async () => {
                try {
                    await fetch(`/api/progress/${user.uid}/${saveKey}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(progress),
                    });
                } catch (e) {
                    console.error("Failed to save to cloud", e);
                }
            };
            // Debounce could be added here if updates are very frequent
            saveToCloud();
        }
    }, [progress, isLoaded, saveKey, user]);

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
        const initial = { chapterIdx: 0, levelIdx: 0, unlocked: { '0-0': true }, userName: null, certificateId: null, coins: 0 };
        setProgress(initial);
        // Effect will handle saving to local/cloud
    };

    const setUserName = (name) => {
        const id = 'SQLM-' + Math.random().toString(36).substr(2, 9).toUpperCase();
        setProgress(prev => ({ ...prev, userName: name, certificateId: id }));
    };

    const updateCoins = (amount) => {
        setProgress(prev => {
            const newTotal = (prev.coins || 0) + amount;
            return { ...prev, coins: newTotal < 0 ? 0 : newTotal };
        });
    };

    return {
        progress,
        isLoaded,
        advanceLevel,
        resetProgress,
        setUserName,
        updateCoins
    };
};

