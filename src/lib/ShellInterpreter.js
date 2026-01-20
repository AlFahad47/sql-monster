import { VirtualFileSystem } from './VirtualFileSystem';

export class ShellInterpreter {
    constructor() {
        this.fs = new VirtualFileSystem();
        this.user = 'guest';
        this.hostname = 'cyber-monster';
        this.history = [];
    }

    execute(commandStr) {
        if (!commandStr.trim()) return null;

        const parts = commandStr.trim().split(/\s+/);
        const cmd = parts[0];
        const args = parts.slice(1);

        switch (cmd) {
            case 'ls':
                // Simple support for ls [path]
                // TODO: Support flags like -la if needed, for now just ignore them or treat as path
                let path = args.length > 0 && !args[0].startsWith('-') ? args[0] : null;
                const lsRes = this.fs.ls(path);
                if (lsRes.error) return { output: [lsRes.error] };

                // Format output
                const items = lsRes.output.map(item => {
                    if (typeof item === 'string') return item; // It was a file path listing
                    return item.type === 'dir' ? `${item.name}/` : item.name;
                });
                return { output: [items.join('  ')] };

            case 'cd':
                const cdRes = this.fs.cd(args[0]);
                if (cdRes.error) return { output: [cdRes.error] };
                return { output: [] };

            case 'pwd':
                return { output: [this.fs.pwd()] };

            case 'cat':
                const catRes = this.fs.cat(args[0]);
                if (catRes.error) return { output: [catRes.error] };
                return { output: [catRes.output] };

            case 'mkdir':
                const mkdirRes = this.fs.mkdir(args[0]);
                if (mkdirRes.error) return { output: [mkdirRes.error] };
                return { output: [] };

            case 'touch':
                const touchRes = this.fs.touch(args[0]);
                if (touchRes.error) return { output: [touchRes.error] };
                return { output: [] };

            case 'rm':
                // Basic rm
                const rmRes = this.fs.rm(args[0]);
                if (rmRes.error) return { output: [rmRes.error] };
                return { output: [] };

            case 'whoami':
                return { output: [this.user] };

            case 'date':
                return { output: [new Date().toString()] };

            case 'echo':
                return { output: [args.join(' ')] };

            case 'history':
                // We'll let the UI handle history display usually, but standard shell history is just the commands
                // We can't easily access the UI's history state from here unless passed in.
                // For now, return a placeholder or implement internal history tracking if needed.
                return { output: ['History not implemented in this shell session. Use Up/Down arrows.'] };

            case 'clear':
                return { type: 'clear' };

            case 'help':
                return {
                    output: [
                        'Cyber Monster Shell v1.0',
                        'Available commands:',
                        '  File Operations: ls, cat, touch, mkdir, rm',
                        '  Navigation: cd, pwd',
                        '  System: whoami, date, echo, clear, help'
                    ]
                };

            case 'sudo':
                return { output: [`[sudo] password for ${this.user}: `, 'Sorry, try again.'] };

            default:
                return { output: [`-bash: ${cmd}: command not found`] };
        }
    }

    getPath() {
        return this.fs.pwd().replace('/home/guest', '~');
    }
}
