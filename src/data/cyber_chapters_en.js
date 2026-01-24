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
    },
    {
        id: 'cyber-chapter-5',
        title: 'Chapter V: Cryptography',
        description: 'Encode, decode, and verify secrets.',
        levels: [
            { id: '5-1', title: 'Base64', dialogue: [{ speaker: 'Operator', text: 'Decode this string: SGVsbG8=' }], story: 'Simple encoding.', objective: 'Decode SGVsbG8=', hint: 'echo SGVsbG8= | base64 -d', expectedCommand: 'echo SGVsbG8= | base64 -d', expectedOutput: ['Hello'], successMessage: 'Decoded.', type: 'terminal' },
            { id: '5-2', title: 'Hashing (MD5)', dialogue: [{ speaker: 'Operator', text: 'Hash the word "secret".' }], story: 'One-way function.', objective: 'MD5 hash "secret"', hint: 'echo -n "secret" | md5sum', expectedCommand: 'echo -n "secret" | md5sum', expectedOutput: ['5ebe2294ecd0e0f08eab7690d2a6ee69  -'], successMessage: 'Hashed.', type: 'terminal' },
            { id: '5-3', title: 'Cracking (John)', dialogue: [{ speaker: 'Operator', text: 'Crack the hash file.' }], story: 'Brute force hash.', objective: 'Run john on hash.txt', hint: 'john hash.txt', expectedCommand: 'john hash.txt', expectedOutput: ['password123'], successMessage: 'Cracked.', type: 'terminal' },
            { id: '5-4', title: 'GPG Encryption', dialogue: [{ speaker: 'Operator', text: 'Encrypt the message.' }], story: 'Privacy established.', objective: 'Encrypt msg.txt', hint: 'gpg -c msg.txt', expectedCommand: 'gpg -c msg.txt', expectedOutput: ['msg.txt.gpg created'], successMessage: 'Encrypted.', type: 'terminal' },
            { id: '5-5', title: 'Steganography', dialogue: [{ speaker: 'Operator', text: 'Hide data in image.jpg.' }], story: 'Hidden in plain sight.', objective: 'Embed secret.txt', hint: 'steghide embed -cf image.jpg -ef secret.txt', expectedCommand: 'steghide embed -cf image.jpg -ef secret.txt', expectedOutput: ['embedded.jpg created'], successMessage: 'Hidden.', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-6',
        title: 'Chapter VI: The Breach',
        description: 'Exploit system vulnerabilities.',
        levels: [
            { id: '6-1', title: 'Metasploit Intro', dialogue: [{ speaker: 'Operator', text: 'Launch the framework.' }], story: 'The ultimate weapon.', objective: 'Start msfconsole', hint: 'msfconsole', expectedCommand: 'msfconsole', expectedOutput: ['msf6 >'], successMessage: 'Console ready.', type: 'terminal' },
            { id: '6-2', title: 'Hydra Brute Force', dialogue: [{ speaker: 'Operator', text: 'Crack the FTP login.' }], story: 'Parallel login attempts.', objective: 'Hydra attack FTP', hint: 'hydra -l user -P pass.txt ftp://10.10.10.5', expectedCommand: 'hydra -l user -P pass.txt ftp://10.10.10.5', expectedOutput: ['Login: user  Pass: 123456'], successMessage: 'Access gained.', type: 'terminal' },
            { id: '6-3', title: 'Reverse Shell', dialogue: [{ speaker: 'Operator', text: 'Catch the connection.' }], story: 'Waiting for callback.', objective: 'Listen on port 4444', hint: 'nc -lvnp 4444', expectedCommand: 'nc -lvnp 4444', expectedOutput: ['Listening on [0.0.0.0] 4444'], successMessage: 'Listener active.', type: 'terminal' },
            { id: '6-4', title: 'Privilege Escalation', dialogue: [{ speaker: 'Operator', text: 'Become root.' }], story: 'Ascending to power.', objective: 'Switch user to root', hint: 'su root', expectedCommand: 'su root', expectedOutput: ['Password:'], successMessage: 'You are root.', type: 'terminal' },
            { id: '6-5', title: 'Searchsploit', dialogue: [{ speaker: 'Operator', text: 'Find exploits for Apache 2.4.' }], story: 'Archive consultation.', objective: 'Search exploits', hint: 'searchsploit Apache 2.4', expectedCommand: 'searchsploit Apache 2.4', expectedOutput: ['Apache 2.4.49 - Path Traversal'], successMessage: 'Exploit found.', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-7',
        title: 'Chapter VII: Web Exploitation',
        description: 'Master OWASP Top 10 (SQLi, XSS, etc).',
        levels: [
            { id: '7-1', title: 'SQL Injection', dialogue: [{ speaker: 'Operator', text: 'Bypass login.' }], objective: 'Input payload', hint: "' OR 1=1 --", expectedCommand: "' OR 1=1 --", expectedOutput: ['Welcome Admin'], successMessage: 'Injected.', type: 'terminal' },
            { id: '7-2', title: 'XSS', dialogue: [{ speaker: 'Operator', text: 'Pop an alert box.' }], objective: 'Input script tag', hint: '<script>alert(1)</script>', expectedCommand: '<script>alert(1)</script>', expectedOutput: ['[Alert] 1'], successMessage: 'Script executed.', type: 'terminal' },
            { id: '7-3', title: 'Command Injection', dialogue: [{ speaker: 'Operator', text: 'Read /etc/passwd via web.' }], objective: 'Inject cat command', hint: '; cat /etc/passwd', expectedCommand: '; cat /etc/passwd', expectedOutput: ['root:x:0:0:...'], successMessage: 'File read.', type: 'terminal' },
            { id: '7-4', title: 'Burp Suite', dialogue: [{ speaker: 'Operator', text: 'Intercept the request.' }], objective: 'Start Burp (mock)', hint: 'burpsuite', expectedCommand: 'burpsuite', expectedOutput: ['Proxy running...'], successMessage: 'Intercepting.', type: 'terminal' },
            { id: '7-5', title: 'Fuzzing (ffuf)', dialogue: [{ speaker: 'Operator', text: 'Find hidden directories.' }], objective: 'Fuzz target URL', hint: 'ffuf -u http://target/FUZZ -w wordlist.txt', expectedCommand: 'ffuf -u http://target/FUZZ -w wordlist.txt', expectedOutput: ['admin', 'backup'], successMessage: 'Directories found.', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-8',
        title: 'Chapter VIII: Wireless Attacks',
        description: 'Intercept and analyze Wi-Fi networks.',
        levels: [
            { id: '8-1', title: 'Monitor Mode', dialogue: [{ speaker: 'Operator', text: 'Enable monitor mode.' }], objective: 'Start wlan0mon', hint: 'airmon-ng start wlan0', expectedCommand: 'airmon-ng start wlan0', expectedOutput: ['Monitor mode enabled'], successMessage: 'Listening.', type: 'terminal' },
            { id: '8-2', title: 'Packet Sniffing', dialogue: [{ speaker: 'Operator', text: 'Capture packets.' }], objective: 'Run airodump', hint: 'airodump-ng wlan0mon', expectedCommand: 'airodump-ng wlan0mon', expectedOutput: ['BSSID... STATION...'], successMessage: 'Packets captured.', type: 'terminal' },
            { id: '8-3', title: 'Deauth Attack', dialogue: [{ speaker: 'Operator', text: 'Kick user off network.' }], objective: 'Send deauth packets', hint: 'aireplay-ng --deauth 10 -a BSSID wlan0mon', expectedCommand: 'aireplay-ng --deauth 10 -a BSSID wlan0mon', expectedOutput: ['Sending 64 directed DeAuths'], successMessage: 'Target disconnected.', type: 'terminal' },
            { id: '8-4', title: 'Handshake Capture', dialogue: [{ speaker: 'Operator', text: 'Wait for the handshake.' }], objective: 'Verify capture', hint: 'ls *.cap', expectedCommand: 'ls *.cap', expectedOutput: ['capture-01.cap'], successMessage: 'Handshake acquired.', type: 'terminal' },
            { id: '8-5', title: 'Evil Twin', dialogue: [{ speaker: 'Operator', text: 'Create a fake AP.' }], objective: 'Start Access Point', hint: 'airbase-ng -e "Free Wifi" wlan0mon', expectedCommand: 'airbase-ng -e "Free Wifi" wlan0mon', expectedOutput: ['AP Created'], successMessage: 'Trap set.', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-9',
        title: 'Chapter IX: Defense Mastery',
        description: 'Harden systems and detect intrusions.',
        levels: [
            { id: '9-1', title: 'Firewall (UFW)', dialogue: [{ speaker: 'Operator', text: 'Enable the firewall.' }], objective: 'Turn on UFW', hint: 'ufw enable', expectedCommand: 'ufw enable', expectedOutput: ['Firewall is active'], successMessage: 'Secured.', type: 'terminal' },
            { id: '9-2', title: 'Log Analysis', dialogue: [{ speaker: 'Operator', text: 'Check auth logs.' }], objective: 'Grep for failures', hint: 'grep "Failed" /var/log/auth.log', expectedCommand: 'grep "Failed" /var/log/auth.log', expectedOutput: ['Failed password for root'], successMessage: 'Intrusion attempts detected.', type: 'terminal' },
            { id: '9-3', title: 'Fail2Ban', dialogue: [{ speaker: 'Operator', text: 'Ban repeat offenders.' }], objective: 'Start fail2ban', hint: 'service fail2ban start', expectedCommand: 'service fail2ban start', expectedOutput: ['Starting Fail2Ban'], successMessage: 'Active defense on.', type: 'terminal' },
            { id: '9-4', title: 'SSH Hardening', dialogue: [{ speaker: 'Operator', text: 'Disable root login.' }], objective: 'Edit sshd_config', hint: 'nano /etc/ssh/sshd_config', expectedCommand: 'nano /etc/ssh/sshd_config', expectedOutput: ['PermitRootLogin no'], successMessage: 'Config updated.', type: 'terminal' },
            { id: '9-5', title: 'Rootkit Detection', dialogue: [{ speaker: 'Operator', text: 'Scan for rootkits.' }], objective: 'Run chkrootkit', hint: 'chkrootkit', expectedCommand: 'chkrootkit', expectedOutput: ['Checking `ls`... INFECTED'], successMessage: 'Scan complete.', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-10',
        title: 'Chapter X: Digital Forensics',
        description: 'Investigate incidents and recover evidence.',
        levels: [
            { id: '10-1', title: 'Packet Analysis', dialogue: [{ speaker: 'Operator', text: 'Open the pcap.' }], objective: 'Start Wireshark', hint: 'wireshark capture.pcap', expectedCommand: 'wireshark capture.pcap', expectedOutput: ['Loading...'], successMessage: 'Packets loaded.', type: 'terminal' },
            { id: '10-2', title: 'Metadata (Exif)', dialogue: [{ speaker: 'Operator', text: 'Extract image metadata.' }], objective: 'Run exiftool', hint: 'exiftool image.jpg', expectedCommand: 'exiftool image.jpg', expectedOutput: ['GPS Position: 40 deg 42\' N'], successMessage: 'Location found.', type: 'terminal' },
            { id: '10-3', title: 'File Recovery', dialogue: [{ speaker: 'Operator', text: 'Recover deleted files.' }], objective: 'Run photorec', hint: 'photorec /dev/sdb', expectedCommand: 'photorec /dev/sdb', expectedOutput: ['Reading sector...'], successMessage: 'Files recovered.', type: 'terminal' },
            { id: '10-4', title: 'Memory Forensics', dialogue: [{ speaker: 'Operator', text: 'Analyze RAM dump.' }], objective: 'Use volatility', hint: 'volatility -f visual.mem imageinfo', expectedCommand: 'volatility -f visual.mem imageinfo', expectedOutput: ['Profile: Win7SP1x64'], successMessage: 'Profile identified.', type: 'terminal' },
            { id: '10-5', title: 'Timeline', dialogue: [{ speaker: 'Operator', text: 'Reconstruct the timeline.' }], objective: 'View history', hint: 'history', expectedCommand: 'history', expectedOutput: ['1 rm -rf /'], successMessage: 'Event timeline ready.', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-11',
        title: 'Chapter XI: Automation & Scripting',
        description: 'Build your own tools using Python and Bash.',
        levels: [
            { id: '11-1', title: 'Bash Automator', dialogue: [{ speaker: 'Operator', text: 'Write a bash script.' }], objective: 'Create script.sh', hint: 'touch script.sh', expectedCommand: 'touch script.sh', expectedOutput: [], successMessage: 'Script created.', type: 'terminal' },
            { id: '11-2', title: 'Python Scanner', dialogue: [{ speaker: 'Operator', text: 'Run the python scanner.' }], objective: 'Execute scan.py', hint: 'python3 scan.py', expectedCommand: 'python3 scan.py', expectedOutput: ['Scanning...'], successMessage: 'Script running.', type: 'terminal' },
            { id: '11-3', title: 'Requests', dialogue: [{ speaker: 'Operator', text: 'Brute force with requests.' }], objective: 'Run brute.py', hint: 'python3 brute.py', expectedCommand: 'python3 brute.py', expectedOutput: ['200 OK'], successMessage: 'Success.', type: 'terminal' },
            { id: '11-4', title: 'Socket Programming', dialogue: [{ speaker: 'Operator', text: 'Open a socket.' }], objective: 'Run server.py', hint: 'python3 server.py', expectedCommand: 'python3 server.py', expectedOutput: ['Listening...'], successMessage: 'Server active.', type: 'terminal' },
            { id: '11-5', title: 'API Interaction', dialogue: [{ speaker: 'Operator', text: 'Query the API.' }], objective: 'Curl endpoint', hint: 'curl http://api.loc/v1', expectedCommand: 'curl http://api.loc/v1', expectedOutput: ['{"status": "ok"}'], successMessage: 'Data received.', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-12',
        title: 'Chapter XII: Professional Path',
        description: 'Ethics, reporting, and operational security.',
        levels: [
            { id: '12-1', title: 'Report Writing', dialogue: [{ speaker: 'Operator', text: 'Calculate CVSS score.' }], objective: 'Input score', hint: '9.8', expectedCommand: '9.8', expectedOutput: ['Critical'], successMessage: 'Score recorded.', type: 'terminal' },
            { id: '12-2', title: 'Ethics', dialogue: [{ speaker: 'Operator', text: 'Do we have permission?' }], objective: 'Confirm', hint: 'yes', expectedCommand: 'yes', expectedOutput: ['Proceeding'], successMessage: 'Ethical compliance met.', type: 'terminal' },
            { id: '12-3', title: 'OpSec (VPN)', dialogue: [{ speaker: 'Operator', text: 'Connect to VPN.' }], objective: 'Start openvpn', hint: 'openvpn config.ovpn', expectedCommand: 'openvpn config.ovpn', expectedOutput: ['Initialization Sequence Completed'], successMessage: 'Tunnel encrypted.', type: 'terminal' },
            { id: '12-4', title: 'CVE Research', dialogue: [{ speaker: 'Operator', text: 'Look up CVE-2021-44228.' }], objective: 'Search CVE', hint: 'search cve-2021-44228', expectedCommand: 'search cve-2021-44228', expectedOutput: ['Log4Shell'], successMessage: 'Vulnerability details loaded.', type: 'terminal' },
            { id: '12-5', title: 'Bug Bounty', dialogue: [{ speaker: 'Operator', text: 'Submit your report.' }], objective: 'Submit', hint: 'submit report.pdf', expectedCommand: 'submit report.pdf', expectedOutput: ['Sent.'], successMessage: 'Bounty claimed.', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-13',
        title: 'Chapter XIII: Enterprise (Active Directory)',
        description: 'Conquer Windows Domain environments.',
        levels: [
            { id: '13-1', title: 'LDAP Basics', dialogue: [{ speaker: 'Operator', text: 'Query the Domain Controller.' }], objective: 'Run ldapsearch', hint: 'ldapsearch -x -h 10.10.10.5', expectedCommand: 'ldapsearch -x -h 10.10.10.5', expectedOutput: ['DC=corp,DC=loc'], successMessage: 'Directory listed.', type: 'terminal' },
            { id: '13-2', title: 'BloodHound', dialogue: [{ speaker: 'Operator', text: 'Map attack paths.' }], objective: 'Start ingestor', hint: 'bloodhound-python', expectedCommand: 'bloodhound-python', expectedOutput: ['Data collected'], successMessage: 'Graph generated.', type: 'terminal' },
            { id: '13-3', title: 'Kerberoasting', dialogue: [{ speaker: 'Operator', text: 'Request TGS.' }], objective: 'GetUserSPNs', hint: 'GetUserSPNs.py', expectedCommand: 'GetUserSPNs.py', expectedOutput: ['$krb5tgs$...'], successMessage: 'Hash stolen.', type: 'terminal' },
            { id: '13-4', title: 'SMB Relay', dialogue: [{ speaker: 'Operator', text: 'Relay hashes.' }], objective: 'ntlmrelayx', hint: 'ntlmrelayx.py -tf targets.txt', expectedCommand: 'ntlmrelayx.py -tf targets.txt', expectedOutput: ['Relay successful'], successMessage: 'Access granted.', type: 'terminal' },
            { id: '13-5', title: 'Golden Ticket', dialogue: [{ speaker: 'Operator', text: 'Forge a ticket.' }], objective: 'ticketer', hint: 'ticketer.py', expectedCommand: 'ticketer.py', expectedOutput: ['ticket.ccache created'], successMessage: 'Persistence achieved.', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-14',
        title: 'Chapter XIV: Cloud & API Warfare',
        description: 'Hack modern stacks (AWS, Docker, APIs).',
        levels: [
            { id: '14-1', title: 'S3 Enum', dialogue: [{ speaker: 'Operator', text: 'List bucket contents.' }], objective: 'aws s3 ls', hint: 'aws s3 ls s3://bucket', expectedCommand: 'aws s3 ls s3://bucket', expectedOutput: ['passwords.txt'], successMessage: 'Leak found.', type: 'terminal' },
            { id: '14-2', title: 'Docker Breakout', dialogue: [{ speaker: 'Operator', text: 'Check capabilities.' }], objective: 'capsh', hint: 'capsh --print', expectedCommand: 'capsh --print', expectedOutput: ['CapEff: ...'], successMessage: 'Privileges analyzed.', type: 'terminal' },
            { id: '14-3', title: 'API Theft', dialogue: [{ speaker: 'Operator', text: 'Steal JWT.' }], objective: 'Decode token', hint: 'jwt_tool.py token', expectedCommand: 'jwt_tool.py token', expectedOutput: ['Alg: HS256'], successMessage: 'Token decoded.', type: 'terminal' },
            { id: '14-4', title: 'GraphQL', dialogue: [{ speaker: 'Operator', text: 'Introspect schema.' }], objective: 'Query schema', hint: '{__schema{types{name}}}', expectedCommand: '{__schema{types{name}}}', expectedOutput: ['"name": "User"'], successMessage: 'Schema mapped.', type: 'terminal' },
            { id: '14-5', title: 'Kubernetes', dialogue: [{ speaker: 'Operator', text: 'Get pods.' }], objective: 'kubectl get all', hint: 'kubectl get all', expectedCommand: 'kubectl get all', expectedOutput: ['pod/nginx'], successMessage: 'Cluster visible.', type: 'terminal' }
        ]
    },
];
