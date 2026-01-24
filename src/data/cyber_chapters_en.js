export const cyberChaptersEn = [
    {
        id: 'cyber-chapter-1',
        title: 'Chapter I: The Terminal',
        description: 'Master the command line—your primary weapon.',
        levels: [
            {
                id: '1-1',
                title: 'Navigation (ls)',
                dialogue: [
                    { speaker: 'Operator', text: "Welcome to the grid. To survive, you must know where you are." },
                    { speaker: 'Operator', text: "The `ls` command lists all files in your current directory. It's your eyes in the dark." },
                    { speaker: 'System', text: "Terminal initialized. Awaiting input." }
                ],
                story: "The cursor blinks. you stand in a dark room. You need to verify your location and see what's around you.",
                objective: 'List files in the current directory.',
                hint: 'Type "ls" and press Enter.',
                initCode: ``,
                expectedCommand: "ls",
                expectedOutput: ["sys_core", "data_logs", "readme.txt", ".hidden_config"],
                successMessage: "Visibility confirmed. You see a few files and a hidden config.",
                type: 'terminal',
            },
            {
                id: '1-1-b',
                title: 'Hidden Files (ls -a)',
                dialogue: [
                    { speaker: 'Operator', text: "Wait, I detected a faint signal. Some files are hidden." },
                    { speaker: 'Operator', text: "Files starting with a DOT (.) are hidden by default." },
                    { speaker: 'Operator', text: "Use `ls -a` to see EVERYTHING (all)." }
                ],
                story: "Shadows obscure your vision. You need the full picture.",
                objective: 'List ALL files, including hidden ones.',
                hint: 'Type "ls -a"',
                initCode: ``,
                expectedCommand: "ls -a",
                expectedOutput: [".", "..", "sys_core", "data_logs", "readme.txt", ".hidden_config"],
                successMessage: "There it IS! The .hidden_config file revealed itself.",
                type: 'terminal',
            },
            {
                id: '1-2',
                title: 'Reading Files (cat, less)',
                dialogue: [
                    { speaker: 'Operator', text: "There is a 'readme.txt' file. It might contain instructions." },
                    { speaker: 'Operator', text: "Use 'cat' to display its contents." }
                ],
                story: "A text file lies before you. Decode it.",
                objective: 'Read the content of "readme.txt".',
                hint: 'Type "cat readme.txt"',
                initCode: ``,
                expectedCommand: "cat readme.txt",
                expectedOutput: ["Welcome, User 01.", "Mission: Infiltrate the mainframe."],
                successMessage: "Information acquired.",
                type: 'terminal',
            },
            {
                id: '1-3',
                title: 'File Manipulation (cp, mv)',
                dialogue: [
                    { speaker: 'Operator', text: "We need a backup of the logs before we tamper with them." },
                    { speaker: 'System', text: "Target: 'data_logs'. Destination: 'data_logs.bak'" }
                ],
                story: "Preserve the evidence.",
                objective: 'Copy "data_logs" to "data_logs.bak".',
                hint: 'Type "cp data_logs data_logs.bak"',
                initCode: ``,
                expectedCommand: "cp data_logs data_logs.bak",
                expectedOutput: [],
                successMessage: "Backup created.",
                type: 'terminal',
            },
            {
                id: '1-4',
                title: 'Manual Pages (man)',
                dialogue: [
                    { speaker: 'Operator', text: "I don't know what this NEXT command does. Ask the manual." },
                    { speaker: 'Operator', text: "Use `man ls` to read the manual for 'ls'." }
                ],
                story: "Knowledge is power.",
                objective: 'Read the manual for ls.',
                hint: 'Type "man ls"',
                initCode: ``,
                expectedCommand: "man ls",
                expectedOutput: ["LS(1) User Commands", "NAME", "ls - list directory contents"],
                successMessage: "RTFM protocol complete.",
                type: 'terminal',
            }
        ]
    },
    {
        id: 'cyber-chapter-2',
        title: 'Chapter II: The File System',
        description: 'Create, manipulate, and secure files/directories.',
        levels: [
            {
                id: '2-1',
                title: 'Creation (touch)',
                dialogue: [
                    { speaker: 'Operator', text: "We need a localized test file. The `touch` command creates empty files instantly." },
                    { speaker: 'System', text: "Command available: touch [filename]" }
                ],
                story: "Manifest a new digital object into existence.",
                objective: 'Create a file named "exploit.py".',
                hint: 'Type "touch exploit.py"',
                initCode: ``,
                expectedCommand: "touch exploit.py",
                expectedOutput: [],
                successMessage: "File created successfully.",
                type: 'terminal',
            },
            {
                id: '2-1-b',
                title: 'Directories (mkdir)',
                dialogue: [
                    { speaker: 'Operator', text: "Good. Now we need a folder to organize our tools." },
                    { speaker: 'Operator', text: "Use `mkdir` (make directory) to create a folder." }
                ],
                story: "Build a structure to hold your arsenal.",
                objective: 'Create a directory named "exploit_dev".',
                hint: 'Type "mkdir exploit_dev"',
                initCode: ``,
                expectedCommand: "mkdir exploit_dev",
                expectedOutput: [],
                successMessage: "Directory created.",
                type: 'terminal',
            },
            {
                id: '2-2',
                title: 'Management (cp, mv, rm)',
                dialogue: [
                    { speaker: 'Operator', text: "Clean up your tracks. Remove the 'data_logs.bak' file we made earlier." }
                ],
                story: "Leave no trace.",
                objective: 'Remove "data_logs.bak".',
                hint: 'Type "rm data_logs.bak"',
                initCode: ``,
                expectedCommand: "rm data_logs.bak",
                expectedOutput: [],
                successMessage: "File deleted.",
                type: 'terminal',
            },
            {
                id: '2-3',
                title: 'Permissions (chmod)',
                dialogue: [
                    { speaker: 'Operator', text: "The script 'attack.sh' is not executable. Fix it." },
                    { speaker: 'System', text: "Current permissions: rw-r--r--" }
                ],
                story: "Grant execution rights.",
                objective: 'Make "attack.sh" executable.',
                hint: 'Type "chmod +x attack.sh"',
                initCode: ``,
                expectedCommand: "chmod +x attack.sh",
                expectedOutput: [],
                successMessage: "Permissions updated.",
                type: 'terminal',
            },
            {
                id: '2-4',
                title: 'Ownership (chown)',
                dialogue: [
                    { speaker: 'Operator', text: "This file belongs to root. Take it back." },
                    { speaker: 'System', text: "Change owner to 'user'." }
                ],
                story: "Claim what is yours.",
                objective: 'Change owner of "exploit_dev" to "user".',
                hint: 'Type "chown user exploit_dev"',
                initCode: ``,
                expectedCommand: "chown user exploit_dev",
                expectedOutput: [],
                successMessage: "Ownership transferred.",
                type: 'terminal',
            },
            {
                id: '2-5',
                title: 'Locating (find, locate)',
                dialogue: [
                    { speaker: 'Operator', text: "I hid a backdoor somewhere. Find any file ending in '.php'." }
                ],
                story: "Search the filesystem tree.",
                objective: 'Find files ending with .php',
                hint: 'Type "find . -name *.php"',
                initCode: ``,
                expectedCommand: "find . -name *.php",
                expectedOutput: ["./var/www/html/shell.php"],
                successMessage: "Backdoor located.",
                type: 'terminal',
            }
        ]
    },
    {
        id: 'cyber-chapter-3',
        title: 'Chapter III: The Network',
        description: 'Reach out and communicate between machines.',
        levels: [
            {
                id: '3-1',
                title: 'Connectivity (ping)',
                dialogue: [
                    { speaker: 'Operator', text: "We need to verify if the target server is active." },
                    { speaker: 'Operator', text: "The `ping` command sends a signal to a remote machine." }
                ],
                story: "Echo request. Echo reply.",
                objective: 'Ping 10.10.10.5',
                hint: 'ping 10.10.10.5',
                expectedCommand: "ping 10.10.10.5",
                expectedOutput: ["64 bytes from 10.10.10.5: icmp_seq=1 ttl=64 time=1.2ms"],
                successMessage: "Target is up and responding.",
                type: 'terminal'
            },
            {
                id: '3-1-b',
                title: 'Target Analysis (ping verify)',
                dialogue: [
                    { speaker: 'Operator', text: "Good. Now let's try a different target." },
                    { speaker: 'Operator', text: "Ping Google's primary DNS to check internet access." }
                ],
                story: "Expand your reach beyond the local network.",
                objective: 'Ping 8.8.8.8',
                hint: 'ping 8.8.8.8',
                expectedCommand: "ping 8.8.8.8",
                expectedOutput: ["64 bytes from 8.8.8.8: icmp_seq=1 ttl=54 time=14.2ms"],
                successMessage: "Internet connectivity confirmed.",
                type: 'terminal'
            },
            {
                id: '3-2',
                title: 'IP Config (ifconfig)',
                dialogue: [{ speaker: 'Operator', text: "What is your IP address?" }],
                story: "Identify your network interface.",
                objective: 'Run ifconfig to see network details.',
                hint: 'ifconfig',
                expectedCommand: "ifconfig",
                expectedOutput: ["eth0: inet 192.168.1.5 netmask 255.255.255.0"],
                successMessage: "Network configuration displayed.",
                type: 'terminal'
            },
            {
                id: '3-3',
                title: 'The Swiss Army Knife (netcat)',
                dialogue: [{ speaker: 'Operator', text: "Connect to the listening service on port 1337 of 10.10.10.5." }],
                story: "Raw TCP connection.",
                objective: 'Use netcat to connect to 10.10.10.5 1337',
                hint: 'nc 10.10.10.5 1337',
                expectedCommand: "nc 10.10.10.5 1337",
                expectedOutput: ["Flag{NC_IS_AWESOME}"],
                successMessage: "Connected successfully.",
                type: 'terminal'
            },
            {
                id: '3-4',
                title: 'Remote Access (ssh)',
                dialogue: [{ speaker: 'Operator', text: "Login to the server securely." }],
                story: "Encrypted tunnel establishment.",
                objective: 'SSH into user@10.10.10.5',
                hint: 'ssh user@10.10.10.5',
                expectedCommand: "ssh user@10.10.10.5",
                expectedOutput: ["user@10.10.10.5's password:"],
                successMessage: "SSH session initiated.",
                type: 'terminal'
            },
            {
                id: '3-5',
                title: 'DNS Lookup (nslookup)',
                dialogue: [{ speaker: 'Operator', text: "Who owns 'google.com'?" }],
                story: "Resolving names to numbers.",
                objective: 'Lookup DNS record for google.com',
                hint: 'nslookup google.com',
                expectedCommand: "nslookup google.com",
                expectedOutput: ["Address: 142.250.183.14"],
                successMessage: "Resolution complete.",
                type: 'terminal'
            }
        ]
    },
    {
        id: 'cyber-chapter-4',
        title: 'Chapter IV: Reconnaissance',
        description: 'Gather intelligence ethically before striking.',
        levels: [
            { id: '4-1', title: 'Port Scanning (nmap)', dialogue: [{ speaker: 'Operator', text: 'Scan the target for open ports.' }], story: 'Mapping the attack surface.', objective: 'Scan 10.10.10.5', hint: 'nmap 10.10.10.5', expectedCommand: 'nmap 10.10.10.5', expectedOutput: ['PORT STATE SERVICE', '22/tcp open ssh', '80/tcp open http'], successMessage: 'Ports identified.', type: 'terminal' },
            { id: '4-2', title: 'Service Details', dialogue: [{ speaker: 'Operator', text: 'Get service versions.' }], story: 'Fingerprinting services.', objective: 'Deep scan 10.10.10.5', hint: 'nmap -sV 10.10.10.5', expectedCommand: 'nmap -sV 10.10.10.5', expectedOutput: ['22/tcp open ssh OpenSSH 7.6p1'], successMessage: 'Versions detected.', type: 'terminal' },
            { id: '4-3', title: 'OS Fingerprinting', dialogue: [{ speaker: 'Operator', text: 'Guess the Operating System.' }], story: 'Is it Linux or Windows?', objective: 'OS scan 10.10.10.5', hint: 'nmap -O 10.10.10.5', expectedCommand: 'nmap -O 10.10.10.5', expectedOutput: ['Running: Linux 4.X'], successMessage: 'OS identified.', type: 'terminal' },
        ]
    }
];
