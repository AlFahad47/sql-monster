export const cyberChaptersBn = [
    {
        id: 'cyber-chapter-1',
        title: 'অধ্যায় ১: দ্য টার্মিনাল',
        description: 'কমান্ড লাইন আয়ত্ত করুন—আপনার প্রধান হাতিয়ার।',
        levels: [
            {
                id: '1-1',
                title: 'নেভিগেশন (ls)',
                dialogue: [
                    { speaker: 'Operator', text: "গ্রিডে স্বাগতম। বেঁচে থাকার জন্য, আপনাকে জানতে হবে আপনি কোথায় আছেন।" },
                    { speaker: 'Operator', text: "`ls` কমান্ড আপনার বর্তমান ডিরেক্টরির সব ফাইল দেখায়। অন্ধকারে এটিই আপনার চোখ।" },
                    { speaker: 'System', text: "টার্মিনাল শুরু হয়েছে। ইনপুটের অপেক্ষায়।" }
                ],
                story: "কার্সারটি জ্বলছে। আপনি একটি অন্ধকার ঘরে দাঁড়িয়ে। আপনাকে আপনার অবস্থান যাচাই করতে হবে এবং চারপাশে কী আছে তা দেখতে হবে।",
                objective: 'বর্তমান ডিরেক্টরির ফাইলগুলো তালিকাভুক্ত করুন।',
                hint: '"ls" টাইপ করুন এবং এন্টার চাপুন।',
                initCode: ``,
                expectedCommand: "ls",
                expectedOutput: ["sys_core", "data_logs", "readme.txt", ".hidden_config"],
                successMessage: "দৃশ্যমানতা নিশ্চিত। আপনি কিছু ফাইল এবং একটি লুকানো কনফিগারেশন দেখছেন।",
                type: 'terminal',
            },
            {
                id: '1-1-b',
                title: 'লুকানো ফাইল (ls -a)',
                dialogue: [
                    { speaker: 'Operator', text: "দাঁড়ান, আমি একটি ক্ষীণ সংকেত পেয়েছি। কিছু ফাইল লুকানো আছে।" },
                    { speaker: 'Operator', text: "ডট (.) দিয়ে শুরু হওয়া ফাইলগুলো ডিফল্টভাবে লুকানো থাকে।" },
                    { speaker: 'Operator', text: "সব কিছু (all) দেখতে `ls -a` ব্যবহার করুন।" }
                ],
                story: "ছায়া আপনার দৃষ্টি আড়াল করছে। আপনাকে সম্পূর্ণ চিত্রটি দেখতে হবে।",
                objective: 'লুকানো ফাইলসহ সব ফাইল তালিকাভুক্ত করুন।',
                hint: '"ls -a" টাইপ করুন',
                initCode: ``,
                expectedCommand: "ls -a",
                expectedOutput: [".", "..", "sys_core", "data_logs", "readme.txt", ".hidden_config"],
                successMessage: "ওই তো! .hidden_config ফাইলটি নিজেকে প্রকাশ করেছে।",
                type: 'terminal',
            },
            {
                id: '1-2',
                title: 'ফাইল পড়া (cat, less)',
                dialogue: [
                    { speaker: 'Operator', text: "এখানে একটি 'readme.txt' ফাইল আছে। এতে নির্দেশনা থাকতে পারে।" },
                    { speaker: 'Operator', text: "এর বিষয়বস্তু দেখতে 'cat' ব্যবহার করুন।" }
                ],
                story: "আপনার সামনে একটি টেক্সট ফাইল পড়ে আছে। এটি ডিকোড করুন।",
                objective: '"readme.txt" এর বিষয়বস্তু পড়ুন।',
                hint: '"cat readme.txt" টাইপ করুন',
                initCode: ``,
                expectedCommand: "cat readme.txt",
                expectedOutput: ["Welcome, User 01.", "Mission: Infiltrate the mainframe."],
                successMessage: "তথ্য অর্জিত হয়েছে।",
                type: 'terminal',
            },
            {
                id: '1-3',
                title: 'ফাইল ম্যানিপুলেশন (cp, mv)',
                dialogue: [
                    { speaker: 'Operator', text: "লগগুলোর সাথে छेड़छाड़ করার আগে আমাদের একটি ব্যাকআপ দরকার।" },
                    { speaker: 'System', text: "লক্ষ্য: 'data_logs'। গন্তব্য: 'data_logs.bak'" }
                ],
                story: "প্রমাণ সংরক্ষণ করুন।",
                objective: '"data_logs" কে "data_logs.bak" এ কপি করুন।',
                hint: '"cp data_logs data_logs.bak" টাইপ করুন',
                initCode: ``,
                expectedCommand: "cp data_logs data_logs.bak",
                expectedOutput: [],
                successMessage: "ব্যাকআপ সফলভাবে তৈরি হয়েছে।",
                type: 'terminal',
            },
            {
                id: '1-4',
                title: 'ম্যানুয়াল পেজ (man)',
                dialogue: [
                    { speaker: 'Operator', text: "আমি জানি না পরবর্তী কমান্ডটি কী করে। ম্যানুয়ালকে জিজ্ঞাসা করুন।" },
                    { speaker: 'Operator', text: "'ls' এর ম্যানুয়াল পড়তে `man ls` ব্যবহার করুন।" }
                ],
                story: "জ্ঞানই শক্তি।",
                objective: 'ls এর ম্যানুয়াল পড়ুন।',
                hint: '"man ls" টাইপ করুন',
                initCode: ``,
                expectedCommand: "man ls",
                expectedOutput: ["LS(1) User Commands", "NAME", "ls - list directory contents"],
                successMessage: "RTFM প্রোটোকল সম্পন্ন হয়েছে।",
                type: 'terminal',
            }
        ]
    },
    {
        id: 'cyber-chapter-2',
        title: 'অধ্যায় ২: ফাইল সিস্টেম',
        description: 'ফাইল/ডিরেক্টরি তৈরি, পরিচালনা এবং সুরক্ষিত করুন।',
        levels: [
            {
                id: '2-1',
                title: 'তৈরি করা (touch)',
                dialogue: [
                    { speaker: 'Operator', text: "আমাদের একটি লোকালাইজড টেস্ট ফাইল দরকার। `touch` কমান্ড অবিলম্বে খালি ফাইল তৈরি করে।" },
                    { speaker: 'System', text: "কমান্ড উপলব্ধ: touch [filename]" }
                ],
                story: "অস্তিত্বে একটি নতুন ডিজিটাল অবজেক্ট তৈরি করুন।",
                objective: '"exploit.py" নামে একটি ফাইল তৈরি করুন।',
                hint: '"touch exploit.py" টাইপ করুন',
                initCode: ``,
                expectedCommand: "touch exploit.py",
                expectedOutput: [],
                successMessage: "ফাইল সফলভাবে তৈরি হয়েছে।",
                type: 'terminal',
            },
            {
                id: '2-1-b',
                title: 'ডিরেক্টরি (mkdir)',
                dialogue: [
                    { speaker: 'Operator', text: "ভালো। এখন আমাদের টুলগুলো গুছিয়ে রাখার জন্য একটি ফোল্ডার দরকার।" },
                    { speaker: 'Operator', text: "একটি ফোল্ডার তৈরি করতে `mkdir` (make directory) ব্যবহার করুন।" }
                ],
                story: "আপনার অস্ত্রাগার ধরে রাখার জন্য একটি কাঠামো তৈরি করুন।",
                objective: '"exploit_dev" নামে একটি ডিরেক্টরি তৈরি করুন।',
                hint: '"mkdir exploit_dev" টাইপ করুন',
                initCode: ``,
                expectedCommand: "mkdir exploit_dev",
                expectedOutput: [],
                successMessage: "ডিরেক্টরি তৈরি হয়েছে।",
                type: 'terminal',
            },
            {
                id: '2-2',
                title: 'ব্যবস্থাপনা (cp, mv, rm)',
                dialogue: [
                    { speaker: 'Operator', text: "আপনার চিহ্ন মুছে ফেলুন। আমরা আগে যে 'data_logs.bak' ফাইলটি তৈরি করেছিলাম তা সরিয়ে ফেলুন।" }
                ],
                story: "কোনো চিহ্ন রাখবেন না।",
                objective: '"data_logs.bak" সরিয়ে ফেলুন।',
                hint: '"rm data_logs.bak" টাইপ করুন',
                initCode: ``,
                expectedCommand: "rm data_logs.bak",
                expectedOutput: [],
                successMessage: "ফাইল ডিলিট করা হয়েছে।",
                type: 'terminal',
            },
            {
                id: '2-3',
                title: 'অনুমতি (chmod)',
                dialogue: [
                    { speaker: 'Operator', text: "'attack.sh' স্ক্রিপ্টটি এক্সিকিউটেবল নয়। এটি ঠিক করুন।" },
                    { speaker: 'System', text: "বর্তমান অনুমতি: rw-r--r--" }
                ],
                story: "এক্সিকিউশন অধিকার প্রদান করুন।",
                objective: '"attack.sh" কে এক্সিকিউটেবল করুন।',
                hint: '"chmod +x attack.sh" টাইপ করুন',
                initCode: ``,
                expectedCommand: "chmod +x attack.sh",
                expectedOutput: [],
                successMessage: "অনুমতি আপডেট করা হয়েছে।",
                type: 'terminal',
            },
            {
                id: '2-4',
                title: 'মালিকানা (chown)',
                dialogue: [
                    { speaker: 'Operator', text: "এই ফাইলটি রুটের। এটি ফেরত নিন।" },
                    { speaker: 'System', text: "মালিক পরিবর্তন করে 'user' করুন।" }
                ],
                story: "যা আপনার তা দাবি করুন।",
                objective: '"exploit_dev" এর মালিক পরিবর্তন করে "user" করুন।',
                hint: '"chown user exploit_dev" টাইপ করুন',
                initCode: ``,
                expectedCommand: "chown user exploit_dev",
                expectedOutput: [],
                successMessage: "মালিকানা হস্তান্তরিত হয়েছে।",
                type: 'terminal',
            },
            {
                id: '2-5',
                title: 'খুঁজে বের করা (find, locate)',
                dialogue: [
                    { speaker: 'Operator', text: "আমি কোথাও একটি ব্যাকডোর লুকিয়ে রেখেছি। '.php' দিয়ে শেষ হওয়া যেকোনো ফাইল খুঁজুন।" }
                ],
                story: "ফাইল সিস্টেম ট্রি অনুসন্ধান করুন।",
                objective: '.php দিয়ে শেষ হওয়া ফাইল খুঁজুন',
                hint: '"find . -name *.php" টাইপ করুন',
                initCode: ``,
                expectedCommand: "find . -name *.php",
                expectedOutput: ["./var/www/html/shell.php"],
                successMessage: "ব্যাকডোর পাওয়া গেছে।",
                type: 'terminal',
            }
        ]
    },
    {
        id: 'cyber-chapter-3',
        title: 'অধ্যায় ৩: নেটওয়ার্ক',
        description: 'বাইরে পৌঁছান এবং মেশিনের মধ্যে যোগাযোগ করুন।',
        levels: [
            {
                id: '3-1',
                title: 'কানেক্টিভিটি (ping)',
                dialogue: [
                    { speaker: 'Operator', text: "টার্গেট সার্ভার সক্রিয় কিনা তা আমাদের যাচাই করতে হবে।" },
                    { speaker: 'Operator', text: "`ping` কমান্ড একটি রিমোট মেশিনে সংকেত পাঠায়।" }
                ],
                story: "ইকো রিকোয়েস্ট। ইকো রিপ্লাই।",
                objective: '10.10.10.5 পিং করুন',
                hint: 'ping 10.10.10.5',
                expectedCommand: "ping 10.10.10.5",
                expectedOutput: ["64 bytes from 10.10.10.5: icmp_seq=1 ttl=64 time=1.2ms"],
                successMessage: "টার্গেট সচল এবং সাড়া দিচ্ছে।",
                type: 'terminal'
            },
            {
                id: '3-1-b',
                title: 'টার্গেট বিশ্লেষণ (ping verify)',
                dialogue: [
                    { speaker: 'Operator', text: "ভালো। এখন অন্য একটি টার্গেট চেষ্টা করি।" },
                    { speaker: 'Operator', text: "ইন্টারনেট অ্যাক্সেস পরীক্ষা করতে Google-এর প্রাইমারি DNS পিং করুন।" }
                ],
                story: "লোকাল নেটওয়ার্কের বাইরে আপনার নাগাল বাড়ান।",
                objective: '8.8.8.8 পিং করুন',
                hint: 'ping 8.8.8.8',
                expectedCommand: "ping 8.8.8.8",
                expectedOutput: ["64 bytes from 8.8.8.8: icmp_seq=1 ttl=54 time=14.2ms"],
                successMessage: "ইন্টারনেট সংযোগ নিশ্চিত হয়েছে।",
                type: 'terminal'
            },
            {
                id: '3-2',
                title: 'আইপি কনফিগারেশন (ifconfig)',
                dialogue: [{ speaker: 'Operator', text: "আপনার আইপি অ্যাড্রেস কী?" }],
                story: "আপনার নেটওয়ার্ক ইন্টারফেস শনাক্ত করুন।",
                objective: 'নেটওয়ার্ক ডিটেইলস দেখতে ifconfig রান করুন।',
                hint: 'ifconfig',
                expectedCommand: "ifconfig",
                expectedOutput: ["eth0: inet 192.168.1.5 netmask 255.255.255.0"],
                successMessage: "নেটওয়ার্ক কনফিগারেশন প্রদর্শিত হয়েছে।",
                type: 'terminal'
            },
            {
                id: '3-3',
                title: 'সুইস আর্মি নাইফ (netcat)',
                dialogue: [{ speaker: 'Operator', text: "10.10.10.5 এর 1337 পোর্টে লিসেনিং সার্ভিসে কানেক্ট করুন।" }],
                story: "র (Raw) TCP কানেকশন।",
                objective: '10.10.10.5 1337 এ কানেক্ট করতে netcat ব্যবহার করুন',
                hint: 'nc 10.10.10.5 1337',
                expectedCommand: "nc 10.10.10.5 1337",
                expectedOutput: ["Flag{NC_IS_AWESOME}"],
                successMessage: "সফলভাবে কানেক্ট করা হয়েছে।",
                type: 'terminal'
            },
            {
                id: '3-4',
                title: 'রিমোট অ্যাক্সেস (ssh)',
                dialogue: [{ speaker: 'Operator', text: "সার্ভারে নিরাপদে লগিন করুন।" }],
                story: "এনক্রিপ্টেড টানেল স্থাপন।",
                objective: 'user@10.10.10.5 এ SSH করুন',
                hint: 'ssh user@10.10.10.5',
                expectedCommand: "ssh user@10.10.10.5",
                expectedOutput: ["user@10.10.10.5's password:"],
                successMessage: "SSH সেশন শুরু হয়েছে।",
                type: 'terminal'
            },
            {
                id: '3-5',
                title: 'DNS লুকআপ (nslookup)',
                dialogue: [{ speaker: 'Operator', text: "'google.com' এর মালিক কে?" }],
                story: "নামকে নম্বরে রূপান্তর করা।",
                objective: 'google.com এর DNS রেকর্ড দেখুন',
                hint: 'nslookup google.com',
                expectedCommand: "nslookup google.com",
                expectedOutput: ["Address: 142.250.183.14"],
                successMessage: "রেজোলিউশন সম্পন্ন।",
                type: 'terminal'
            }
        ]
    },
    {
        id: 'cyber-chapter-4',
        title: 'অধ্যায় ৪: পুনরুদ্ধার',
        description: 'আক্রমণের আগে নৈতিকভাবে গোয়েন্দাগিবি করা।',
        levels: [
            { id: '4-1', title: 'পোর্ট স্ক্যানিং (nmap)', dialogue: [{ speaker: 'Operator', text: 'ওপেন পোর্টের জন্য টার্গেট স্ক্যান করুন।' }], story: 'আক্রমণের পৃষ্ঠ ম্যাপ করা।', objective: '10.10.10.5 স্ক্যান করুন', hint: 'nmap 10.10.10.5', expectedCommand: 'nmap 10.10.10.5', expectedOutput: ['PORT STATE SERVICE', '22/tcp open ssh', '80/tcp open http'], successMessage: 'পোর্ট শনাক্ত হয়েছে।', type: 'terminal' },
            { id: '4-2', title: 'সার্ভিস ডিটেইলস', dialogue: [{ speaker: 'Operator', text: 'সার্ভিস ভার্সন নিন।' }], story: 'সার্ভিস ফিঙ্গারপ্রিন্টিং।', objective: '10.10.10.5 ডিপ স্ক্যান করুন', hint: 'nmap -sV 10.10.10.5', expectedCommand: 'nmap -sV 10.10.10.5', expectedOutput: ['22/tcp open ssh OpenSSH 7.6p1'], successMessage: 'ভার্সন শনাক্ত হয়েছে।', type: 'terminal' },
            { id: '4-3', title: 'OS ফিঙ্গারপ্রিন্টিং', dialogue: [{ speaker: 'Operator', text: 'অপারেটিং সিস্টেম অনুমান করুন।' }], story: 'এটি কি লিনাক্স নাকি উইন্ডোজ?', objective: 'OS স্ক্যান 10.10.10.5', hint: 'nmap -O 10.10.10.5', expectedCommand: 'nmap -O 10.10.10.5', expectedOutput: ['Running: Linux 4.X'], successMessage: 'OS শনাক্ত হয়েছে।', type: 'terminal' },
            { id: '4-4', title: 'WHOIS', dialogue: [{ speaker: 'Operator', text: 'এই ডোমেইন কে রেজিস্টার করেছে?' }], story: 'পাবলিক রেজিস্ট্রি লুকআপ।', objective: 'google.com চেক করুন', hint: 'whois google.com', expectedCommand: 'whois google.com', expectedOutput: ['Registrant Organization: Google LLC'], successMessage: 'রেজিস্ট্র্যান্ট পাওয়া গেছে।', type: 'terminal' },
            { id: '4-5', title: 'গুগল ডর্কিং', dialogue: [{ speaker: 'Operator', text: 'সাইটে PDF ফাইল খুঁজুন।' }], story: 'অ্যাডভান্সড সার্চ কৌশল।', objective: 'সার্চ কমান্ড মক', hint: 'site:target.com filetype:pdf', expectedCommand: 'site:target.com filetype:pdf', expectedOutput: ['[Link] secret_plan.pdf'], successMessage: 'ডর্ক বৈধ।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-5',
        title: 'অধ্যায় ৫: ক্রিপ্টোগ্রাফি',
        description: 'গোপন তথ্য এনকোড, ডিকোড এবং যাচাই করা।',
        levels: [
            { id: '5-1', title: 'Base64', dialogue: [{ speaker: 'Operator', text: 'এই স্ট্রিংটি ডিকোড করুন: SGVsbG8=' }], story: 'সহজ এনকোডিং।', objective: 'ডিকোড SGVsbG8=', hint: 'echo SGVsbG8= | base64 -d', expectedCommand: 'echo SGVsbG8= | base64 -d', expectedOutput: ['Hello'], successMessage: 'ডিকোড করা হয়েছে।', type: 'terminal' },
            { id: '5-2', title: 'হ্যাশিং (MD5)', dialogue: [{ speaker: 'Operator', text: '"secret" শব্দটি হ্যাশ করুন।' }], story: 'একমুখী ফাংশন।', objective: 'MD5 হ্যাশ "secret"', hint: 'echo -n "secret" | md5sum', expectedCommand: 'echo -n "secret" | md5sum', expectedOutput: ['5ebe2294ecd0e0f08eab7690d2a6ee69  -'], successMessage: 'হ্যাশ করা হয়েছে।', type: 'terminal' },
            { id: '5-3', title: 'ক্র্যাকিং (John)', dialogue: [{ speaker: 'Operator', text: 'হ্যাশ ফাইলটি ক্র্যাক করুন।' }], story: 'ব্রুট ফোর্স হ্যাশ।', objective: 'hash.txt এ john চালান', hint: 'john hash.txt', expectedCommand: 'john hash.txt', expectedOutput: ['password123'], successMessage: 'ক্র্যাক করা হয়েছে।', type: 'terminal' },
            { id: '5-4', title: 'GPG এনক্রিপশন', dialogue: [{ speaker: 'Operator', text: 'বার্তাটি এনক্রিপ্ট করুন।' }], story: 'গোপনীয়তা প্রতিষ্ঠিত।', objective: 'msg.txt এনক্রিপ্ট করুন', hint: 'gpg -c msg.txt', expectedCommand: 'gpg -c msg.txt', expectedOutput: ['msg.txt.gpg created'], successMessage: 'এনক্রিপ্ট করা হয়েছে।', type: 'terminal' },
            { id: '5-5', title: 'স্টেগানোগ্রাফি', dialogue: [{ speaker: 'Operator', text: 'image.jpg এ ডেটা লুকান।' }], story: 'সবার চোখের সামনে লুকানো।', objective: 'secret.txt এম্বেড করুন', hint: 'steghide embed -cf image.jpg -ef secret.txt', expectedCommand: 'steghide embed -cf image.jpg -ef secret.txt', expectedOutput: ['embedded.jpg created'], successMessage: 'লুকানো হয়েছে।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-6',
        title: 'অধ্যায় ৬: দ্য ব্রিচ',
        description: 'সিস্টেমের দুর্বলতা কাজে লাগানো।',
        levels: [
            { id: '6-1', title: 'মেটাস্প্লয়েট ইন্ট্রো', dialogue: [{ speaker: 'Operator', text: 'ফ্রেমওয়ার্ক চালু করুন।' }], story: 'চূড়ান্ত অস্ত্র।', objective: 'msfconsole শুরু করুন', hint: 'msfconsole', expectedCommand: 'msfconsole', expectedOutput: ['msf6 >'], successMessage: 'কনসোল প্রস্তুত।', type: 'terminal' },
            { id: '6-2', title: 'হাইড্রা ব্রুট ফোর্স', dialogue: [{ speaker: 'Operator', text: 'FTP লগিন ক্র্যাক করুন।' }], story: 'পারালাল লগিন প্রচেষ্টা।', objective: 'FTP তে হাইড্রা অ্যাটাক।', hint: 'hydra -l user -P pass.txt ftp://10.10.10.5', expectedCommand: 'hydra -l user -P pass.txt ftp://10.10.10.5', expectedOutput: ['Login: user  Pass: 123456'], successMessage: 'অ্যাক্সেস পাওয়া গেছে।', type: 'terminal' },
            { id: '6-3', title: 'রিভার্স শেল', dialogue: [{ speaker: 'Operator', text: 'কানেকশন ধরুন।' }], story: 'কলব্যাকের জন্য অপেক্ষা।', objective: '৪৪৪৪ পোর্টে লিসেন করুন', hint: 'nc -lvnp 4444', expectedCommand: 'nc -lvnp 4444', expectedOutput: ['Listening on [0.0.0.0] 4444'], successMessage: 'লিসেনার সক্রিয়।', type: 'terminal' },
            { id: '6-4', title: 'প্রিভিলেজ এস্কেলেশন', dialogue: [{ speaker: 'Operator', text: 'রুট হোন।' }], story: 'ক্ষমতায় আরোহণ।', objective: 'ইউজার পরিবর্তন করে রুট হোন', hint: 'su root', expectedCommand: 'su root', expectedOutput: ['Password:'], successMessage: 'আপনি এখন রুট।', type: 'terminal' },
            { id: '6-5', title: 'সার্চস্প্লয়েট', dialogue: [{ speaker: 'Operator', text: 'Apache 2.4 এর জন্য এক্সপ্লয়েট খুঁজুন।' }], story: 'আর্কাইভ পরামর্শ।', objective: 'এক্সপ্লয়েট খুঁজুন', hint: 'searchsploit Apache 2.4', expectedCommand: 'searchsploit Apache 2.4', expectedOutput: ['Apache 2.4.49 - Path Traversal'], successMessage: 'এক্সপ্লয়েট পাওয়া গেছে।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-7',
        title: 'অধ্যায় ৭: ওয়েব এক্সপ্লয়েটেশন',
        description: 'OWASP টপ ১০ (SQLi, XSS, ইত্যাদি) আয়ত্ত করুন।',
        levels: [
            { id: '7-1', title: 'SQL ইঞ্জেকশন', dialogue: [{ speaker: 'Operator', text: 'লগিন বাইপাস করুন।' }], objective: 'পেলোড দিন।', hint: "' OR 1=1 --", expectedCommand: "' OR 1=1 --", expectedOutput: ['Welcome Admin'], successMessage: 'ইঞ্জেক্ট করা হয়েছে।', type: 'terminal' },
            { id: '7-2', title: 'XSS', dialogue: [{ speaker: 'Operator', text: 'একটি অ্যালার্ট বক্স পপ করুন।' }], objective: 'স্ক্রিপ্ট ট্যাগ দিন।', hint: '<script>alert(1)</script>', expectedCommand: '<script>alert(1)</script>', expectedOutput: ['[Alert] 1'], successMessage: 'স্ক্রিপ্ট এক্সিকিউট হয়েছে।', type: 'terminal' },
            { id: '7-3', title: 'কমান্ড ইঞ্জেকশন', dialogue: [{ speaker: 'Operator', text: 'ওয়েবের মাধ্যমে /etc/passwd পড়ুন।' }], objective: 'cat কমান্ড ইঞ্জেক্ট করুন।', hint: '; cat /etc/passwd', expectedCommand: '; cat /etc/passwd', expectedOutput: ['root:x:0:0:...'], successMessage: 'ফাইল পড়া হয়েছে।', type: 'terminal' },
            { id: '7-4', title: 'বার্প স্যুট', dialogue: [{ speaker: 'Operator', text: 'রিকোয়েস্ট ইন্টারসেপ্ট করুন।' }], objective: 'বার্প শুরু করুন (মক)।', hint: 'burpsuite', expectedCommand: 'burpsuite', expectedOutput: ['Proxy running...'], successMessage: 'ইন্টারসেপ্ট করা হচ্ছে।', type: 'terminal' },
            { id: '7-5', title: 'ফাজিং (ffuf)', dialogue: [{ speaker: 'Operator', text: 'লুকানো ডিরেক্টরি খুঁজুন।' }], objective: 'টার্গেট URL ফাজ করুন।', hint: 'ffuf -u http://target/FUZZ -w wordlist.txt', expectedCommand: 'ffuf -u http://target/FUZZ -w wordlist.txt', expectedOutput: ['admin', 'backup'], successMessage: 'ডিরেক্টরি পাওয়া গেছে।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-8',
        title: 'অধ্যায় ৮: ওয়্যারলেস অ্যাটাক',
        description: 'Wi-Fi নেটওয়ার্ক ইন্টারসেপ্ট এবং বিশ্লেষণ করুন।',
        levels: [
            { id: '8-1', title: 'মনিটর মোড', dialogue: [{ speaker: 'Operator', text: 'মনিটর মোড চালু করুন।' }], objective: 'wlan0mon শুরু করুন', hint: 'airmon-ng start wlan0', expectedCommand: 'airmon-ng start wlan0', expectedOutput: ['Monitor mode enabled'], successMessage: 'লিসেনিং।', type: 'terminal' },
            { id: '8-2', title: 'প্যাকেট স্নিফিং', dialogue: [{ speaker: 'Operator', text: 'প্যাকেট ক্যাপচার করুন।' }], objective: 'airodump রান করুন', hint: 'airodump-ng wlan0mon', expectedCommand: 'airodump-ng wlan0mon', expectedOutput: ['BSSID... STATION...'], successMessage: 'প্যাকেট ক্যাপচার করা হয়েছে।', type: 'terminal' },
            { id: '8-3', title: 'ডি-অথ অ্যাটাক', dialogue: [{ speaker: 'Operator', text: 'ইউজারকে নেটওয়ার্ক থেকে বের করে দিন।' }], objective: 'ডি-অথ প্যাকেট পাঠান', hint: 'aireplay-ng --deauth 10 -a BSSID wlan0mon', expectedCommand: 'aireplay-ng --deauth 10 -a BSSID wlan0mon', expectedOutput: ['Sending 64 directed DeAuths'], successMessage: 'টার্গেট ডিসকানেক্টেড।', type: 'terminal' },
            { id: '8-4', title: 'হ্যান্ডশেক ক্যাপচার', dialogue: [{ speaker: 'Operator', text: 'হ্যান্ডশেকের জন্য অপেক্ষা করুন।' }], objective: 'ক্যাপচার যাচাই করুন', hint: 'ls *.cap', expectedCommand: 'ls *.cap', expectedOutput: ['capture-01.cap'], successMessage: 'হ্যান্ডশেক অর্জিত।', type: 'terminal' },
            { id: '8-5', title: 'ইভিল টুইন', dialogue: [{ speaker: 'Operator', text: 'নকল AP তৈরি করুন।' }], objective: 'অ্যাক্সেস পয়েন্ট শুরু করুন', hint: 'airbase-ng -e "Free Wifi" wlan0mon', expectedCommand: 'airbase-ng -e "Free Wifi" wlan0mon', expectedOutput: ['AP Created'], successMessage: 'ফাঁদ পাতা হয়েছে।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-9',
        title: 'অধ্যায় ৯: প্রতিরক্ষা মাস্টারি',
        description: 'সিস্টেম শক্ত করুন এবং অনুপ্রবেশ শনাক্ত করুন।',
        levels: [
            { id: '9-1', title: 'ফায়ারওয়াল (UFW)', dialogue: [{ speaker: 'Operator', text: 'ফায়ারওয়াল চালু করুন।' }], objective: 'UFW চালু করুন', hint: 'ufw enable', expectedCommand: 'ufw enable', expectedOutput: ['Firewall is active'], successMessage: 'সুরক্ষিত।', type: 'terminal' },
            { id: '9-2', title: 'লগ বিশ্লেষণ', dialogue: [{ speaker: 'Operator', text: 'অথেন্টিকেশন লগ চেক করুন।' }], objective: 'ব্যর্থতাগুলো grep করুন', hint: 'grep "Failed" /var/log/auth.log', expectedCommand: 'grep "Failed" /var/log/auth.log', expectedOutput: ['Failed password for root'], successMessage: 'অনুপ্রবেশ প্রচেষ্টা শনাক্ত হয়েছে।', type: 'terminal' },
            { id: '9-3', title: 'Fail2Ban', dialogue: [{ speaker: 'Operator', text: 'রিপিট অপরাধীদের ব্যান করুন।' }], objective: 'fail2ban শুরু করুন', hint: 'service fail2ban start', expectedCommand: 'service fail2ban start', expectedOutput: ['Starting Fail2Ban'], successMessage: 'সক্রিয় প্রতিরক্ষা চালু।', type: 'terminal' },
            { id: '9-4', title: 'SSH হার্ডেনিং', dialogue: [{ speaker: 'Operator', text: 'রুট লগিন অক্ষম করুন।' }], objective: 'sshd_config এডিট করুন', hint: 'nano /etc/ssh/sshd_config', expectedCommand: 'nano /etc/ssh/sshd_config', expectedOutput: ['PermitRootLogin no'], successMessage: 'কনফিগ আপডেট করা হয়েছে।', type: 'terminal' },
            { id: '9-5', title: 'রুটকিট ডিটেকশন', dialogue: [{ speaker: 'Operator', text: 'রুটকিট স্ক্যান করুন।' }], objective: 'chkrootkit রান করুন', hint: 'chkrootkit', expectedCommand: 'chkrootkit', expectedOutput: ['Checking `ls`... INFECTED'], successMessage: 'স্ক্যান সম্পন্ন।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-10',
        title: 'অধ্যায় ১০: ডিজিটাল ফরেনসিক',
        description: 'ঘটনা তদন্ত করুন এবং প্রমাণ উদ্ধার করুন।',
        levels: [
            { id: '10-1', title: 'প্যাকেট বিশ্লেষণ', dialogue: [{ speaker: 'Operator', text: 'pcap খুলুন।' }], objective: 'Wireshark শুরু করুন', hint: 'wireshark capture.pcap', expectedCommand: 'wireshark capture.pcap', expectedOutput: ['Loading...'], successMessage: 'প্যাকেট লোড হয়েছে।', type: 'terminal' },
            { id: '10-2', title: 'মেটাডেটা (Exif)', dialogue: [{ speaker: 'Operator', text: 'ছবির মেটাডেটা বের করুন।' }], objective: 'exiftool রান করুন', hint: 'exiftool image.jpg', expectedCommand: 'exiftool image.jpg', expectedOutput: ['GPS Position: 40 deg 42\' N'], successMessage: 'অবস্থান পাওয়া গেছে।', type: 'terminal' },
            { id: '10-3', title: 'ফাইল রিকভারি', dialogue: [{ speaker: 'Operator', text: 'মুছে ফেলা ফাইল রিকভার করুন।' }], objective: 'photorec রান করুন', hint: 'photorec /dev/sdb', expectedCommand: 'photorec /dev/sdb', expectedOutput: ['Reading sector...'], successMessage: 'ফাইল রিকভার করা হয়েছে।', type: 'terminal' },
            { id: '10-4', title: 'মেমরি ফরেনসিক', dialogue: [{ speaker: 'Operator', text: 'RAM ডাম্প বিশ্লেষণ করুন।' }], objective: 'volatility ব্যবহার করুন', hint: 'volatility -f visual.mem imageinfo', expectedCommand: 'volatility -f visual.mem imageinfo', expectedOutput: ['Profile: Win7SP1x64'], successMessage: 'প্রোফাইল শনাক্ত হয়েছে।', type: 'terminal' },
            { id: '10-5', title: 'টাইমলাইন', dialogue: [{ speaker: 'Operator', text: 'টাইমলাইন পুনর্গঠন করুন।' }], objective: 'ইতিহাস দেখুন', hint: 'history', expectedCommand: 'history', expectedOutput: ['1 rm -rf /'], successMessage: 'ইভেন্ট টাইমলাইন প্রস্তুত।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-11',
        title: 'অধ্যায় ১১: অটোমেশন এবং স্ক্রিপ্টিং',
        description: 'পাইথন এবং ব্যাশ ব্যবহার করে নিজের টুল তৈরি করুন।',
        levels: [
            { id: '11-1', title: 'ব্যাশ অটোমেটর', dialogue: [{ speaker: 'Operator', text: 'একটি ব্যাশ স্ক্রিপ্ট লিখুন।' }], objective: 'script.sh তৈরি করুন', hint: 'touch script.sh', expectedCommand: 'touch script.sh', expectedOutput: [], successMessage: 'স্ক্রিপ্ট তৈরি হয়েছে।', type: 'terminal' },
            { id: '11-2', title: 'পাইথন স্ক্যানার', dialogue: [{ speaker: 'Operator', text: 'পাইথন স্ক্যানার রান করুন।' }], objective: 'scan.py এক্সিকিউট করুন', hint: 'python3 scan.py', expectedCommand: 'python3 scan.py', expectedOutput: ['Scanning...'], successMessage: 'স্ক্রিপ্ট চলছে।', type: 'terminal' },
            { id: '11-3', title: 'রিকোয়েস্ট', dialogue: [{ speaker: 'Operator', text: 'রিকোয়েস্ট দিয়ে ব্রুট ফোর্স করুন।' }], objective: 'brute.py রান করুন', hint: 'python3 brute.py', expectedCommand: 'python3 brute.py', expectedOutput: ['200 OK'], successMessage: 'সফল।', type: 'terminal' },
            { id: '11-4', title: 'সকেট প্রোগ্রামিং', dialogue: [{ speaker: 'Operator', text: 'একটি সকেট খুলুন।' }], objective: 'server.py রান করুন', hint: 'python3 server.py', expectedCommand: 'python3 server.py', expectedOutput: ['Listening...'], successMessage: 'সার্ভার সচল।', type: 'terminal' },
            { id: '11-5', title: 'API ইন্টারঅ্যাকশন', dialogue: [{ speaker: 'Operator', text: 'API কোয়েরি করুন।' }], objective: 'এন্ডপয়েন্ট কার্ল করুন', hint: 'curl http://api.loc/v1', expectedCommand: 'curl http://api.loc/v1', expectedOutput: ['{"status": "ok"}'], successMessage: 'ডেটা গৃহীত হয়েছে।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-12',
        title: 'অধ্যায় ১২: পেশাদার পথ',
        description: 'নৈতিকতা, রিপোর্টিং এবং অপারেশনাল সিকিউরিটি।',
        levels: [
            { id: '12-1', title: 'রিপোর্ট লিখন', dialogue: [{ speaker: 'Operator', text: 'CVSS স্কোর গণনা করুন।' }], objective: 'স্কোর ইনপুট করুন', hint: '9.8', expectedCommand: '9.8', expectedOutput: ['Critical'], successMessage: 'স্কোর রেকর্ড করা হয়েছে।', type: 'terminal' },
            { id: '12-2', title: 'নৈতিকতা', dialogue: [{ speaker: 'Operator', text: 'আমাদের কি অনুমতি আছে?' }], objective: 'নিশ্চিত করুন', hint: 'yes', expectedCommand: 'yes', expectedOutput: ['Proceeding'], successMessage: 'নৈতিক সম্মতি পূরণ হয়েছে।', type: 'terminal' },
            { id: '12-3', title: 'OpSec (VPN)', dialogue: [{ speaker: 'Operator', text: 'VPN এ কানেক্ট করুন।' }], objective: 'openvpn শুরু করুন', hint: 'openvpn config.ovpn', expectedCommand: 'openvpn config.ovpn', expectedOutput: ['Initialization Sequence Completed'], successMessage: 'টানেল এনক্রিপ্টেড।', type: 'terminal' },
            { id: '12-4', title: 'CVE গবেষণা', dialogue: [{ speaker: 'Operator', text: 'CVE-2021-44228 খুঁজুন।' }], objective: 'CVE সার্চ করুন', hint: 'search cve-2021-44228', expectedCommand: 'search cve-2021-44228', expectedOutput: ['Log4Shell'], successMessage: 'দুর্বলতার বিবরণ লোড হয়েছে।', type: 'terminal' },
            { id: '12-5', title: 'বাগ বাউন্টি', dialogue: [{ speaker: 'Operator', text: 'আপনার রিপোর্ট জমা দিন।' }], objective: 'জমা দিন', hint: 'submit report.pdf', expectedCommand: 'submit report.pdf', expectedOutput: ['Sent.'], successMessage: 'বাউন্টি দাবি করা হয়েছে।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-13',
        title: 'অধ্যায় ১৩: এন্টারপ্রাইজ (অ্যাক্টিভ ডিরেক্টরি)',
        description: 'উইন্ডোজ ডোমেইন এনভায়রনমেন্ট জয় করুন।',
        levels: [
            { id: '13-1', title: 'LDAP বেসিকস', dialogue: [{ speaker: 'Operator', text: 'ডোমেইন কন্ট্রোলার কোয়েরি করুন।' }], objective: 'ldapsearch রান করুন', hint: 'ldapsearch -x -h 10.10.10.5', expectedCommand: 'ldapsearch -x -h 10.10.10.5', expectedOutput: ['DC=corp,DC=loc'], successMessage: 'ডিরেক্টরি তালিকাভুক্ত।', type: 'terminal' },
            { id: '13-2', title: 'ব্লাডহাউন্ড', dialogue: [{ speaker: 'Operator', text: 'আক্রমণের পথ ম্যাপ করুন।' }], objective: 'ইনজেস্টর শুরু করুন', hint: 'bloodhound-python', expectedCommand: 'bloodhound-python', expectedOutput: ['Data collected'], successMessage: 'গ্রাফ তৈরি হয়েছে।', type: 'terminal' },
            { id: '13-3', title: 'কারবেরোস্টিং', dialogue: [{ speaker: 'Operator', text: 'TGS রিকোয়েস্ট করুন।' }], objective: 'GetUserSPNs', hint: 'GetUserSPNs.py', expectedCommand: 'GetUserSPNs.py', expectedOutput: ['$krb5tgs$...'], successMessage: 'হ্যাশ চুরি হয়েছে।', type: 'terminal' },
            { id: '13-4', title: 'SMB রিলে', dialogue: [{ speaker: 'Operator', text: 'হ্যাশ রিলে করুন।' }], objective: 'ntlmrelayx', hint: 'ntlmrelayx.py -tf targets.txt', expectedCommand: 'ntlmrelayx.py -tf targets.txt', expectedOutput: ['Relay successful'], successMessage: 'অ্যাক্সেস মঞ্জুর হয়েছে।', type: 'terminal' },
            { id: '13-5', title: 'গোল্ডেন টিকেট', dialogue: [{ speaker: 'Operator', text: 'টিকেট জাল করুন।' }], objective: 'ticketer', hint: 'ticketer.py', expectedCommand: 'ticketer.py', expectedOutput: ['ticket.ccache created'], successMessage: 'পারসিস্টেন্স অর্জিত।', type: 'terminal' }
        ]
    },
    {
        id: 'cyber-chapter-14',
        title: 'অধ্যায় ১৪: ক্লাউড এবং API যুদ্ধ',
        description: 'আধুনিক স্ট্যাক হ্যাক করা (AWS, Docker, APIs)।',
        levels: [
            { id: '14-1', title: 'S3 Enum', dialogue: [{ speaker: 'Operator', text: 'বাকেট কন্টেন্ট লিস্ট করুন।' }], objective: 'aws s3 ls', hint: 'aws s3 ls s3://bucket', expectedCommand: 'aws s3 ls s3://bucket', expectedOutput: ['passwords.txt'], successMessage: 'লিক পাওয়া গেছে।', type: 'terminal' },
            { id: '14-2', title: 'Docker ব্রেকআউট', dialogue: [{ speaker: 'Operator', text: 'ক্ষমতা চেক করুন।' }], objective: 'capsh', hint: 'capsh --print', expectedCommand: 'capsh --print', expectedOutput: ['CapEff: ...'], successMessage: 'প্রিভিলেজ বিশ্লেষণ করা হয়েছে।', type: 'terminal' },
            { id: '14-3', title: 'API চুরি', dialogue: [{ speaker: 'Operator', text: 'JWT চুরি করুন।' }], objective: 'টোকেন ডিকোড করুন', hint: 'jwt_tool.py token', expectedCommand: 'jwt_tool.py token', expectedOutput: ['Alg: HS256'], successMessage: 'টোকেন ডিকোড করা হয়েছে।', type: 'terminal' },
            { id: '14-4', title: 'GraphQL', dialogue: [{ speaker: 'Operator', text: 'স্কিমা ইন্ট্রোস্পেক্ট করুন।' }], objective: 'স্কিমা কোয়েরি করুন', hint: '{__schema{types{name}}}', expectedCommand: '{__schema{types{name}}}', expectedOutput: ['"name": "User"'], successMessage: 'স্কিমা ম্যাপ করা হয়েছে।', type: 'terminal' },
            { id: '14-5', title: 'Kubernetes', dialogue: [{ speaker: 'Operator', text: 'পডগুলি পান।' }], objective: 'kubectl get all', hint: 'kubectl get all', expectedCommand: 'kubectl get all', expectedOutput: ['pod/nginx'], successMessage: 'ক্লাস্টার দৃশ্যমান।', type: 'terminal' }
        ]
    }
];
