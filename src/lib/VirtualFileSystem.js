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
                                'notes.txt': { type: 'file', content: 'Welcome to the system.\nDon\'t forget to check the logs.' },
                                'todo.list': { type: 'file', content: '- Learn SQL\n- Defeat the Cyber Monster' }
                            }
                        }
                    }
                },
                'bin': {
                    type: 'dir',
                    name: 'bin',
                    children: {} // Mock binaries could go here if we wanted to be super fancy
                },
                'etc': {
                    type: 'dir',
                    name: 'etc',
                    children: {
                        'passwd': { type: 'file', content: 'root:x:0:0:root:/root:/bin/bash\nguest:x:1000:1000:guest:/home/guest:/bin/bash' },
                        'hostname': { type: 'file', content: 'sql-monster-box' }
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
                                'syslog': { type: 'file', content: 'System initialized...\nDaemon started...' }
                            }
                        }
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

    rm(pathStr) {
        if (!pathStr) return { error: 'usage: rm <file>' };
        const targetPath = this.resolvePath(pathStr);
        const parentPath = targetPath.slice(0, -1);
        const nodeName = targetPath[targetPath.length - 1];

        const parentNode = this.getNode(parentPath);
        const node = this.getNode(targetPath);

        if (!node) {
            return { error: `rm: cannot remove '${pathStr}': No such file or directory` };
        }
        if (node.type === 'dir') {
            return { error: `rm: cannot remove '${pathStr}': Is a directory` };
        }

        delete parentNode.children[nodeName];
        return { success: true };
    }
}
