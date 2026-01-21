export class VirtualFileSystem {
    constructor() {
        this.root = {
            type: 'dir',
            name: '/',
            children: {
                'home': {
                    type: 'dir',
                    name: 'home',
                    children: {
                        'guest': {
                            type: 'dir',
                            name: 'guest',
                            children: {
                                'notes.txt': { type: 'file', content: 'Welcome to the system.\nRemember: Knowledge is power.\nUse the force... or just SQL.\n' },
                                'todo.list': { type: 'file', content: '- Learn SQL\n- Defeat the Cyber Monster\n- Backup system logs\n- Find the secret key\n' },
                                'credentials.tmp': { type: 'file', content: 'user: guest\naccess_level: low\n' }
                            }
                        }
                    }
                },
                'bin': {
                    type: 'dir',
                    name: 'bin',
                    children: {} // Binaries are simulated, no real content needed yet
                },
                'etc': {
                    type: 'dir',
                    name: 'etc',
                    children: {
                        'passwd': { type: 'file', content: 'root:x:0:0:root:/root:/bin/bash\nguest:x:1000:1000:guest:/home/guest:/bin/bash\nmonster:x:666:666:cyber-monster:/dev/null:/bin/false\n' },
                        'hostname': { type: 'file', content: 'sql-monster-box\n' },
                        'issue': { type: 'file', content: 'Cyber Monster OS v1.0 \n \l\n' },
                        'motd': { type: 'file', content: 'Authorized uses only. All activity may be monitored.\n' }
                    }
                },
                'var': {
                    type: 'dir',
                    name: 'var',
                    children: {
                        'log': {
                            type: 'dir',
                            name: 'log',
                            children: {
                                'syslog': { type: 'file', content: 'Jan 1 00:00:01 systemd[1]: Started Cyber Monster OS.\nJan 1 00:00:02 auth: User guest logged in.\nJan 1 12:00:00 kernel: [Warning] Intrusion attempt detected.\nJan 1 12:05:00 auth: Validating credentials...\n' },
                                'auth.log': { type: 'file', content: 'Accepted password for guest from 127.0.0.1 port 22 ssh2\n' }
                            }
                        }
                    }
                },
                'tmp': {
                    type: 'dir',
                    name: 'tmp',
                    children: {
                        'debug.log': { type: 'file', content: 'Error: Connection refused.\nRetrying...\nSuccess.\n' }
                    }
                }
            }
        };
        this.currentPath = ['home', 'guest'];
    }

    resolvePath(pathStr) {
        if (!pathStr) return this.currentPath;

        let pathParts = pathStr.split('/').filter(p => p.length > 0);
        let startNode = this.root;
        let startPath = [];

        if (pathStr.startsWith('/')) {
            startPath = [];
        } else {
            startPath = [...this.currentPath];
        }

        // Traverse to start node
        let currentNode = this.root;
        for (const part of startPath) {
            currentNode = currentNode.children[part];
        }

        // Traverse logic
        const finalPath = [...startPath];

        for (const part of pathParts) {
            if (part === '.') continue;
            if (part === '..') {
                if (finalPath.length > 0) finalPath.pop();
                continue;
            }

            // Check if child exists (just for validation, though we might want to return the canonical path even if it doesn't exist yet for some ops)
            // For now, we just construct the theoretical path
            finalPath.push(part);
        }

        return finalPath;
    }

    getNode(pathArr) {
        let current = this.root;
        for (const part of pathArr) {
            if (current.type !== 'dir') return null;
            if (!current.children[part]) return null;
            current = current.children[part];
        }
        return current;
    }

    // --- Operations ---

    ls(pathStr) {
        const targetPath = pathStr ? this.resolvePath(pathStr) : this.currentPath;
        const node = this.getNode(targetPath);

        if (!node) {
            return { error: `ls: cannot access '${pathStr}': No such file or directory` };
        }
        if (node.type !== 'dir') {
            return { output: [pathStr] }; // Listing a file just shows the file
        }

        const children = Object.keys(node.children).map(name => {
            const child = node.children[name];
            return { name, type: child.type };
        });
        return { output: children };
    }

    cd(pathStr) {
        if (!pathStr) {
            this.currentPath = ['home', 'guest']; // default to home
            return { success: true };
        }
        const targetPath = this.resolvePath(pathStr);
        const node = this.getNode(targetPath);

        if (!node) {
            return { error: `bash: cd: ${pathStr}: No such file or directory` };
        }
        if (node.type !== 'dir') {
            return { error: `bash: cd: ${pathStr}: Not a directory` };
        }

        this.currentPath = targetPath;
        return { success: true };
    }

    pwd() {
        return '/' + this.currentPath.join('/');
    }

    cat(pathStr) {
        if (!pathStr) return { error: 'usage: cat <file>' };
        const targetPath = this.resolvePath(pathStr);
        const node = this.getNode(targetPath);

        if (!node) {
            return { error: `cat: ${pathStr}: No such file or directory` };
        }
        if (node.type === 'dir') {
            return { error: `cat: ${pathStr}: Is a directory` };
        }

        return { output: node.content };
    }

    mkdir(pathStr) {
        if (!pathStr) return { error: 'usage: mkdir <directory>' };
        // This requires dealing with the parent directory
        const targetPath = this.resolvePath(pathStr);
        const parentPath = targetPath.slice(0, -1);
        const newDirName = targetPath[targetPath.length - 1];

        const parentNode = this.getNode(parentPath);
        if (!parentNode) {
            return { error: `mkdir: cannot create directory '${pathStr}': No such file or directory` }; // Simplified
        }
        if (parentNode.type !== 'dir') {
            return { error: `mkdir: cannot create directory '${pathStr}': Not a directory` };
        }
        if (parentNode.children[newDirName]) {
            return { error: `mkdir: cannot create directory '${pathStr}': File exists` };
        }

        parentNode.children[newDirName] = {
            type: 'dir',
            name: newDirName,
            children: {}
        };
        return { success: true };
    }

    touch(pathStr) {
        if (!pathStr) return { error: 'usage: touch <file>' };
        const targetPath = this.resolvePath(pathStr);
        const parentPath = targetPath.slice(0, -1);
        const fileName = targetPath[targetPath.length - 1];

        const parentNode = this.getNode(parentPath);
        if (!parentNode || parentNode.type !== 'dir') {
            return { error: `touch: cannot touch '${pathStr}': No such file or directory` };
        }

        if (!parentNode.children[fileName]) {
            parentNode.children[fileName] = {
                type: 'file',
                content: ''
            };
        } else {
            // Technically touch updates timestamp, but we ignore that for now
        }
        return { success: true };
    }

    cp(sourcePath, destPath) {
        if (!sourcePath || !destPath) return { error: 'usage: cp <source> <dest>' };

        const srcRes = this.resolveNode(sourcePath);
        if (!srcRes.node) return { error: `cp: cannot stat '${sourcePath}': No such file or directory` };
        if (srcRes.node.type === 'dir') return { error: `cp: -r not specified; omitting directory '${sourcePath}'` };

        // Check destination
        const destRes = this.resolveNode(destPath); // Might be null if new file

        let targetParentNode, targetName;

        if (destRes.node && destRes.node.type === 'dir') {
            // copy into directory
            targetParentNode = destRes.node;
            targetName = srcRes.name; // Use source filename
        } else {
            // copy as new file or overwrite
            const destAbsPath = this.resolvePath(destPath);
            const parentPath = destAbsPath.slice(0, -1);
            targetName = destAbsPath[destAbsPath.length - 1];
            const parentRes = this.getNode(parentPath);

            if (!parentRes || parentRes.type !== 'dir') {
                return { error: `cp: cannot create regular file '${destPath}': No such file or directory` };
            }
            targetParentNode = parentRes;
        }

        // Perform copy (clone content)
        targetParentNode.children[targetName] = {
            type: 'file',
            content: srcRes.node.content
        };

        return { success: true };
    }

    mv(sourcePath, destPath) {
        if (!sourcePath || !destPath) return { error: 'usage: mv <source> <dest>' };

        const srcRes = this.resolveNode(sourcePath);
        if (!srcRes.node) return { error: `mv: cannot stat '${sourcePath}': No such file or directory` };

        // Determine destination parent and name
        const destRes = this.resolveNode(destPath);
        let targetParentNode, targetName;

        if (destRes.node && destRes.node.type === 'dir') {
            // move into directory
            targetParentNode = destRes.node;
            targetName = srcRes.name;
        } else {
            // rename or move to new path
            const destAbsPath = this.resolvePath(destPath);
            const parentPath = destAbsPath.slice(0, -1);
            targetName = destAbsPath[destAbsPath.length - 1];
            const parentRes = this.getNode(parentPath);

            if (!parentRes || parentRes.type !== 'dir') {
                return { error: `mv: cannot move '${sourcePath}' to '${destPath}': No such file or directory` };
            }
            targetParentNode = parentRes;
        }

        // Check if moving folder into itself (simple check)
        // Note: Real check is harder, but we can skip for now or checking path prefixes if needed.

        // Perform move: Link to new, delete old
        targetParentNode.children[targetName] = srcRes.node;
        delete srcRes.parentNode.children[srcRes.name];

        return { success: true };
    }

    // Helper to get node + its parent + name
    resolveNode(pathStr) {
        const fullPath = this.resolvePath(pathStr);
        if (fullPath.length === 0) return { node: this.root, parentNode: null, name: '/' };

        const parentPath = fullPath.slice(0, -1);
        const name = fullPath[fullPath.length - 1];
        const parentNode = this.getNode(parentPath);

        if (!parentNode || !parentNode.children[name]) return { node: null, parentNode, name };
        return { node: parentNode.children[name], parentNode, name };
    }
}
