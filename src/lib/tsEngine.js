import * as ts from 'typescript';

/**
 * Transpiles TypeScript code to JavaScript.
 * @param {string} code TypeScript code
 * @returns {string} JavaScript code
 */
export const transpile = (code) => {
    try {
        const result = ts.transpileModule(code, {
            compilerOptions: {
                module: ts.ModuleKind.CommonJS,
                target: ts.ScriptTarget.ES2015,
                noImplicitAny: false
            }
        });
        return result.outputText;
    } catch (e) {
        console.error("Transpilation failed:", e);
        throw e;
    }
};

/**
 * Executes TypeScript code safely in the browser.
 * Captures console.log and errors.
 * @param {string} code TypeScript code
 * @returns {Promise<{logs: string[]; result: any; error: string | null}>}
 */
export const executeTs = async (code) => {
    const logs = [];
    const originalLog = console.log;

    // Capture logs
    console.log = (...args) => {
        logs.push(args.map(a =>
            typeof a === 'object' ? JSON.stringify(a) : String(a)
        ).join(' '));
        // originalLog(...args); // Optional: keep logging to dev console
    };

    try {
        const jsCode = transpile(code);

        // Wrap in async IIFE to allow await if needed (though target is ES2015)
        // and to isolate scope slightly.
        // using new Function is safer than eval for scope, but still runs in window context conceptually
        const safeRunner = new Function('console', `
            return (async () => {
                ${jsCode}
            })();
        `);

        await safeRunner(console);

        return { logs, result: null, error: null };
    } catch (err) {
        return { logs, result: null, error: err.toString() };
    } finally {
        console.log = originalLog;
    }
};
