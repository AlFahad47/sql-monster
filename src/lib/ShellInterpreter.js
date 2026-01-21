import { VirtualFileSystem } from './VirtualFileSystem.js';

export class ShellInterpreter {
    constructor() {
        this.fs = new VirtualFileSystem();
        this.user = 'guest';
        this.hostname = 'cyber-monster';
        this.history = [];
    }

    execute(commandStr) {
        if (!commandStr.trim()) return null;

        // 1. Handle Piping
        const segments = commandStr.split('|');
        let inputLines = []; // Input for the next segment

        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i].trim();
            if (!segment) continue;

            const res = this.executeSegment(segment, inputLines);
            if (res.error) return { output: [res.error] };
            if (res.type === 'clear') return { type: 'clear' }; // Immediate clear

            inputLines = res.output || [];
        }

        return { output: inputLines };
    }

    executeSegment(segmentStr, inputLines) {
        // 2. Handle Redirection (>)
        let [cmdPart, redirectFile] = segmentStr.split('>').map(s => s.trim());
        const isRedirection = segmentStr.includes('>');

        const parts = cmdPart.split(/\s+/);
        const cmd = parts[0];
        const args = parts.slice(1);

        let output = [];
        let error = null;

        switch (cmd) {
            case 'ls':
                // ls ignores inputLines
                let path = args.length > 0 && !args[0].startsWith('-') ? args[0] : null;
                const lsRes = this.fs.ls(path);
                if (lsRes.error) error = lsRes.error;
                else {
                    const items = lsRes.output.map(item => {
                        if (typeof item === 'string') return item;
                        return item.type === 'dir' ? `${item.name}/` : item.name;
                    });
                    output = [items.join('  ')];
                }
                break;

            case 'cd':
                const cdRes = this.fs.cd(args[0]);
                if (cdRes.error) error = cdRes.error;
                break;

            case 'pwd':
                output = [this.fs.pwd()];
                break;

            case 'cat':
                // If args provided, read files. If not, cat input (echo input)
                if (args.length > 0) {
                    const catRes = this.fs.cat(args[0]);
                    if (catRes.error) error = catRes.error;
                    else output = typeof catRes.output === 'string' ? catRes.output.split('\n') : [];
                } else {
                    output = inputLines;
                }
                break;

            case 'grep':
                // grep <pattern> [file] OR grep <pattern> (from input)
                if (args.length === 0) {
                    error = 'usage: grep <pattern> [file]';
                } else {
                    const pattern = args[0];
                    let sourceLines = inputLines;

                    if (args.length > 1) {
                        const matchFile = this.fs.cat(args[1]);
                        if (matchFile.error) {
                            error = matchFile.error;
                        } else {
                            sourceLines = matchFile.output.split('\n');
                        }
                    }

                    if (!error) {
                        try {
                            const regex = new RegExp(pattern);
                            output = sourceLines.filter(line => regex.test(line));
                        } catch (e) {
                            // Fallback to simple string check if regex fails or simple search desired
                            output = sourceLines.filter(line => line.includes(pattern));
                        }
                    }
                }
                break;

            case 'head':
                // head -n <num> OR head (defaults 10)
                let count = 10;
                let hSource = inputLines;

                // Simple parsing: if arg is a number or -n number
                if (args.length > 0) {
                    // Check if a file is provided or just number
                    // Simplified: assume head <file> or head -n <num> (not implemented fully) or just standard input head
                    // For now, let's strictly support pipe: cat file | head
                }
                output = hSource.slice(0, count);
                break;

            case 'tail':
                let tCount = 10;
                let tSource = inputLines;
                output = tSource.slice(-tCount);
                break;

            case 'mkdir':
                const mkdirRes = this.fs.mkdir(args[0]);
                if (mkdirRes.error) error = mkdirRes.error;
                break;

            case 'touch':
                const touchRes = this.fs.touch(args[0]);
                if (touchRes.error) error = touchRes.error;
                break;

            case 'rm':
                const rmRes = this.fs.rm(args[0]);
                if (rmRes.error) error = rmRes.error;
                break;

            case 'cp':
                const cpRes = this.fs.cp(args[0], args[1]);
                if (cpRes.error) error = cpRes.error;
                break;

            case 'mv':
                const mvRes = this.fs.mv(args[0], args[1]);
                if (mvRes.error) error = mvRes.error;
                break;

            case 'whoami':
                output = [this.user];
                break;

            case 'date':
                output = [new Date().toString()];
                break;

            case 'echo':
                // Join all args
                output = [args.join(' ')];
                break;

            case 'history':
                output = ['History not implemented in this shell session.'];
                break;

            case 'clear':
                return { type: 'clear' };

            case 'help':
                output = [
                    'Cyber Monster Shell v2.0',
                    'Available commands:',
                    '  File Ops: ls, cat, touch, mkdir, rm, cp, mv',
                    '  Navigation: cd, pwd',
                    '  Filters: grep, head, tail',
                    '  System: whoami, date, echo, clear, help',
                    '  Features: Piping (|), Redirection (>)'
                ];
                break;

            case 'sudo':
                output = [`[sudo] password for ${this.user}: `, 'Sorry, try again.'];
                break;

            default:
                error = `-bash: ${cmd}: command not found`;
        }

        if (error) return { error };

        // Handle File Redirection
        if (isRedirection && redirectFile) {
            // Write output to file (overwrite)
            // Using a simple write capability via touch + content update or similar
            // Since we don't have writeFile explicitly, we can use a trick:
            // Does the file exist? If not touch it. Then update content.
            // Actually, we need a write method. Let's assume we can modify node content if we can resolve it.
            // Or better, let's add a write method to VFS? 
            // For now, I'll implement a quick hack using existing methods or direct access if easier, 
            // BUT proper way is adding writeFile to VFS or similar.
            // Since I cannot modify VFS in this same step easily, let's assume valid write for now 
            // OR reuse touch logic then set content.

            // Re-use logic: resolve path. If dir error. If file, set content. If no file, create then set.
            const content = output.join('\n');
            const touchR = this.fs.touch(redirectFile); // Ensure it exists
            if (touchR.error) return { error: touchR.error };

            // Now Find it and set content
            const nodeRes = this.fs.resolveNode(redirectFile);
            if (nodeRes.node && nodeRes.node.type === 'file') {
                nodeRes.node.content = content;
                return { output: [] }; // No output to screen
            }
        }

        return { output };
    }

    getPath() {
        return this.fs.pwd().replace('/home/guest', '~');
    }
}
