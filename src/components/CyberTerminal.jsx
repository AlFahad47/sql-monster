import React, { useState, useEffect, useRef, useMemo, useImperativeHandle, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ShellInterpreter } from '../lib/ShellInterpreter';

const CyberTerminal = forwardRef(({ onCommand, initialOutput = [], user = 'guest', host = 'cyber-monster' }, ref) => {
    const [history, setHistory] = useState(initialOutput);
    const [currentInput, setCurrentInput] = useState('');
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    // Initialize shell only once
    const shell = useMemo(() => new ShellInterpreter(), []);
    const [currentPath, setCurrentPath] = useState('~');

    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus();
        }
    }));

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    useEffect(() => {
        // Focus input on mount and keep focus
        const focusInput = () => inputRef.current?.focus();
        focusInput();
        window.addEventListener('click', focusInput);
        return () => window.removeEventListener('click', focusInput);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const cmd = currentInput.trim();

            // Add to display history
            const newEntry = { type: 'command', text: cmd, user, path: currentPath };
            setHistory(prev => [...prev, newEntry]);

            if (cmd) {
                // Add to command history for up/down navigation
                setCommandHistory(prev => [...prev, cmd]);
                setHistoryIndex(-1);

                // Process command
                processCommand(cmd);
            } else {
                // Just an empty line
                setHistory(prev => [...prev, { type: 'output', text: '' }]);
            }

            setCurrentInput('');
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setCurrentInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex !== -1) {
                const newIndex = historyIndex + 1;
                if (newIndex < commandHistory.length) {
                    setHistoryIndex(newIndex);
                    setCurrentInput(commandHistory[newIndex]);
                } else {
                    setHistoryIndex(-1);
                    setCurrentInput('');
                }
            }
        }
    };

    const processCommand = async (cmd) => {
        // Pass to parent to check against level objectives first
        // The parent might return specific output overrides or success status
        const levelResult = await onCommand(cmd);

        if (levelResult && levelResult.output) {
            // If parent provided output (simulated file contents etc), use it
            levelResult.output.forEach(line => {
                setHistory(prev => [...prev, { type: 'output', text: line }]);
            });
        } else if (levelResult === true) {
            // Level completed or handled, but no specific output returned, maybe just 'Correct'
            // Do nothing special, or maybe show a success tick?
        } else {
            // Use internal Shell Interpreter
            const result = shell.execute(cmd);

            if (result) {
                if (result.type === 'clear') {
                    setHistory([]);
                    return;
                }

                if (result.output) {
                    result.output.forEach(line => {
                        setHistory(prev => [...prev, { type: 'output', text: line }]);
                    });
                }
            }

            // Update path after command execution
            setCurrentPath(shell.getPath());
        }
    };

    return (
        <div className="w-full h-full bg-black text-green-500 font-mono text-sm p-4 overflow-y-auto rounded-lg border border-green-800 shadow-[0_0_20px_rgba(0,255,0,0.2)]">
            <div className="mb-2 text-xs opacity-50">Cyber Monster Terminal v1.0.0</div>

            {history.map((entry, idx) => (
                <div key={idx} className="mb-1 break-words">
                    {entry.type === 'command' ? (
                        <div className="flex gap-2">
                            <span className="text-green-300 font-bold">[{entry.user}@{host} {entry.path}]$</span>
                            <span className="text-white">{entry.text}</span>
                        </div>
                    ) : (
                        <div className="text-green-400 whitespace-pre-wrap pl-2">{entry.text}</div>
                    )}
                </div>
            ))}

            <div className="flex gap-2 items-center mt-2">
                <span className="text-green-300 font-bold min-w-fit">[{user}@{host} {currentPath}]$</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-white caret-green-500"
                    autoComplete="off"
                    autoFocus
                />
            </div>
            <div ref={bottomRef} />
        </div>
    );
});

CyberTerminal.displayName = 'CyberTerminal';

export default CyberTerminal;
