import { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { FaPlay } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const TsConsole = ({ initialCode = "", onExecute }) => {
    const editorRef = useRef(null);
    const { theme } = useTheme();

    // Initial configuration for the editor
    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;

        // Configure TypeScript compiler options if needed
        monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.ES2020,
            allowNonTsExtensions: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            esModuleInterop: true,
        });

        // Add command for Ctrl+Enter to run code
        editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
            handleSubmit();
        });
    };

    // Update editor value when initialCode changes (e.g. level change)
    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.setValue(initialCode);
        }
    }, [initialCode]);

    const handleSubmit = () => {
        if (editorRef.current) {
            const code = editorRef.current.getValue();
            if (!code.trim()) return;
            onExecute(code);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full h-full">
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl flex flex-col h-full relative">
                <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-white/5 flex-none">
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-600 dark:text-slate-400">TypeScript Terminal</span>
                    <span className="text-xs text-slate-500">Ctrl + Enter to run</span>
                </div>

                <div className="flex-1 overflow-hidden bg-slate-50 dark:bg-[#1e1e1e] relative">
                    <Editor
                        height="100%"
                        defaultLanguage="typescript"
                        defaultValue={initialCode}
                        theme={theme === 'dark' ? 'vs-dark' : 'light'}
                        onMount={handleEditorDidMount}
                        options={{
                            minimap: { enabled: false },
                            fontSize: 14,
                            fontFamily: '"Fira Code", "Fira Mono", monospace',
                            scrollBeyondLastLine: false,
                            automaticLayout: true,
                            tabSize: 2,
                            padding: { top: 16, bottom: 16 },
                            contextmenu: true,
                        }}
                    />
                </div>

                <div className="absolute bottom-6 right-6 z-10">
                    <button
                        onClick={handleSubmit}
                        className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-500 transition-colors shadow-lg active:scale-95 z-50"
                        title="Run Code"
                    >
                        <FaPlay className="ml-1 text-sm" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TsConsole;
