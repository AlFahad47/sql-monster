{
    id: 'chapter-6',
        title: 'অধ্যায় ৬: নির্মাতা',
            description: 'টাওয়ারের চূড়ায় রয়েছে বিশুদ্ধ শূন্যতা। আপনি বিশ্বটি পড়েছেন—এখন এটি গঠন করুন। বাস্তবতার সৃষ্টি, পরিবর্তন এবং ধ্বংস আয়ত্ত করুন।',
                levels: [
                    {
                        id: '6-1',
                        title: 'ব্লুপ্রিন্ট',
                        dialogue: [
                            { speaker: 'Narrator', text: "টাওয়ারটি শেষ হয়েছে ফাঁকা আকাশে। এখানে কিছুই নেই... এখনো।" },
                            { speaker: 'Architect', text: "শূন্যতার ওপর কাঠামো চাপিয়ে দিন। ভিত্তি দিয়ে শুরু করুন।" },
                            { speaker: 'Glitch', text: "CREATE TABLE! স্থিতিশীলতার জন্য প্রাইমারি কি সহ।" },
                            { speaker: 'Glitch', text: "`id INTEGER PRIMARY KEY` এবং `height INTEGER` এর মতো কলাম সংজ্ঞায়িত করুন।" }
                        ],
                        story: "অসীম সম্ভাবনা আপনার সামনে। সৃষ্টি আপনার আদেশের অপেক্ষায়।",
                        objective: '"towers" নামে একটি টেবিল তৈরি করুন যাতে কলাম থাকবে: id (INTEGER PRIMARY KEY) এবং height (INTEGER)।',
                        hint: 'CREATE TABLE name (col TYPE constraints)',
                        initSql: `
          DROP TABLE IF EXISTS towers;
        `,
                        expectedQuery: "SELECT * FROM towers",
                        successMessage: "শূন্যতা জমাট বাঁধল। একটি সুউচ্চ কাঠামো উঠতে শুরু করেছে।",
                        type: 'dml',
                        solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER)"
                    },
                    {
                        id: '6-1-b',
                        title: 'সেতু নির্মাণ',
                        dialogue: [
                            { speaker: 'Architect', text: "আমাদের টাওয়ারগুলোর মধ্যে পথ দরকার।" },
                            { speaker: 'You', text: "আরেকটি টেবিল? `CREATE TABLE bridges`?" },
                            { speaker: 'Glitch', text: "হ্যাঁ। এতে একটি `id` এবং `length` দিন।" }
                        ],
                        story: "আপনি আপনার চূড়াগুলোর মধ্যে সংযোগ আঁকছেন।",
                        objective: '"bridges" নামে একটি টেবিল তৈরি করুন যার কলাম: id (INTEGER) এবং length (INTEGER)।',
                        hint: 'CREATE TABLE bridges ...',
                        initSql: `
          DROP TABLE IF EXISTS bridges;
        `,
                        expectedQuery: "SELECT * FROM bridges",
                        successMessage: "মহাকাশে পথ তৈরি হলো।",
                        type: 'dml',
                        solution: "CREATE TABLE bridges (id INTEGER, length INTEGER)"
                    },
                    {
                        id: '6-2',
                        title: 'জেনেসিস',
                        dialogue: [
                            { speaker: 'Architect', text: "আপনার সৃষ্টিতে প্রাণ দিন। প্রথম টাওয়ারটি তুলুন।" },
                            { speaker: 'Glitch', text: "ভ্যালু INSERT করুন! `INSERT INTO towers (id, height) VALUES (1, 100)`।" }
                        ],
                        story: "আপনার নতুন পৃথিবী আধেয়র (content) জন্য ক্ষুধার্ত।",
                        objective: 'towers (id, height)-এ values (1, 100) ইনসার্ট করুন।',
                        hint: 'INSERT INTO table VALUES (...)',
                        initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
        `,
                        expectedQuery: "SELECT * FROM towers WHERE id = 1 AND height = 100",
                        successMessage: "একটি চমৎকার টাওয়ার ১০০ মিটার উঁচুতে আকাশ ভেদ করে উঠে গেল। সৃষ্টির নিঃশ্বাস পড়ল।",
                        type: 'dml',
                        solution: "INSERT INTO towers (id, height) VALUES (1, 100)"
                    },
                    {
                        id: '6-2-b',
                        title: 'সম্প্রসারণ',
                        dialogue: [
                            { speaker: 'Glitch', text: "থামবেন না! আরেকটি তৈরি করুন, এবার আরও উঁচু।" },
                            { speaker: 'You', text: "ID 2, Height 200..." }
                        ],
                        story: "আকাশরেখা আপনার দ্বিতীয় মাস্টারপিসের জন্য অপেক্ষা করছে।",
                        objective: 'towers-এ value (2, 200) ইনসার্ট করুন।',
                        hint: 'INSERT INTO ...',
                        initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 100);
        `,
                        expectedQuery: "SELECT * FROM towers WHERE id = 2 AND height = 200",
                        successMessage: "দুটি টাওয়ার এখন প্রহরী হিসেবে দাঁড়িয়ে আছে।",
                        type: 'dml',
                        solution: "INSERT INTO towers (id, height) VALUES (2, 200)"
                    },
                    {
                        id: '6-3',
                        title: 'সংস্কার',
                        dialogue: [
                            { speaker: 'Glitch', text: "এটি সুন্দর... কিন্তু নামহীন। আমরা একটি কলাম ভুলে গেছি!" },
                            { speaker: 'Architect', text: "ব্লুপ্রিন্ট পরিবর্তন (ALTER) করুন।" },
                            { speaker: 'Glitch', text: "`ALTER TABLE towers ADD COLUMN name TEXT`." }
                        ],
                        story: "আপনার টাওয়ারটি গর্বিত কিন্তু নামহীন দাঁড়িয়ে আছে।",
                        objective: 'towers টেবিলে একটি নতুন কলাম "name" (TEXT) যোগ করুন।',
                        hint: 'ALTER TABLE ADD COLUMN',
                        initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 100);
        `,
                        expectedQuery: "SELECT name FROM towers",
                        successMessage: "কাঠামো বিবর্তিত হলো। নামের জন্য জায়গা তৈরি হলো।",
                        type: 'dml',
                        solution: "ALTER TABLE towers ADD COLUMN name TEXT"
                    },
                    {
                        id: '6-4',
                        title: 'বিবর্তন',
                        dialogue: [
                            { speaker: 'Glitch', text: "টাওয়ারটি বড় হচ্ছে! এটিকে আরও লম্বা করুন।" },
                            { speaker: 'Glitch', text: "`UPDATE towers SET height = 200 WHERE id = 1` দিয়ে ডেটা পরিবর্তন করুন।" },
                            { speaker: 'You', text: "আমাকে কি WHERE ব্যবহার করতেই হবে, নাকি এটি সবকিছু আপডেট করবে?" },
                            { speaker: 'Glitch', text: "সঠিক। আপডেটের সাথে সর্বদা WHERE ব্যবহার করুন!" }
                        ],
                        story: "আপনার সৃষ্টি আপনার ইচ্ছায় সাড়া দিচ্ছে।",
                        objective: 'update ব্যবহার করে towers এর height = 200 সেট করুন যেখানে id = 1।',
                        hint: 'UPDATE table SET col=val WHERE condition',
                        initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 100, NULL);
        `,
                        expectedQuery: "SELECT * FROM towers WHERE id = 1 AND height = 200",
                        successMessage: "টাওয়ারটি উপরের দিকে ধাবিত হলো, স্বর্গে ২০০ মিটারে পৌঁছে গেল।",
                        type: 'dml',
                        solution: "UPDATE towers SET height = 200 WHERE id = 1"
                    },
                    {
                        id: '6-4-b',
                        title: 'নামকরণ অনুষ্ঠান',
                        dialogue: [
                            { speaker: 'Glitch', text: "এখন এর একটি নাম দিন। এটিকে 'The Spire' ডাকছি।" },
                            { speaker: 'You', text: "`UPDATE towers SET name = 'The Spire' ...`" }
                        ],
                        story: "আপনি টাওয়ারের বেদিতে নামটি খোদাই করলেন।",
                        objective: 'towers আপডেট করুন সেট name = "The Spire" যেখানে id = 1।',
                        hint: 'UPDATE ... SET name = ...',
                        initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 200, NULL);
        `,
                        expectedQuery: "SELECT * FROM towers WHERE id = 1 AND name = 'The Spire'",
                        successMessage: "The Spire। একটি নাম যা চিরকাল থাকবে।",
                        type: 'dml',
                        solution: "UPDATE towers SET name = 'The Spire' WHERE id = 1"
                    },
                    {
                        id: '6-5',
                        title: 'পরিষ্কার করা',
                        dialogue: [
                            { speaker: 'Architect', text: "কিছু কাঠামো অযোগ্য। দুর্বলদের সরিয়ে দিন।" },
                            { speaker: 'Glitch', text: "`DELETE FROM towers WHERE ...` ব্যবহার করুন। সাবধান, আনডু নেই!" }
                        ],
                        story: "ত্রুটিপূর্ণ সৃষ্টি আপনার নিখুঁত বিশ্বকে এলোমেলো করে দিচ্ছে।",
                        objective: 'height < 150 এমন টাওয়ার ডিলিট করুন।',
                        hint: 'DELETE FROM table WHERE condition',
                        initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 200);
          INSERT INTO towers VALUES (2, 100);
          INSERT INTO towers VALUES (3, 50);
        `,
                        expectedQuery: "SELECT * FROM towers WHERE height >= 150",
                        successMessage: "দুর্বল টাওয়ারগুলো ধুলোয় মিশে গেল। শুধুমাত্র শক্তিশালীরাই টিকে রইল।",
                        type: 'dml',
                        solution: "DELETE FROM towers WHERE height < 150"
                    },
                    {
                        id: '6-5-b',
                        title: 'ধ্বংস',
                        dialogue: [
                            { speaker: 'Glitch', text: "ঐ ছোট কুঁড়েঘরটি (id 3)-ও যেতে হবে।" },
                            { speaker: 'You', text: "ID দিয়ে ডিলিট করা নিরাপদ।" }
                        ],
                        story: "আপনি শেষ ত্রুটির দিকে আঙুল তাক করলেন।",
                        objective: 'towers থেকে ডিলিট করুন যেখানে id = 3।',
                        hint: 'DELETE ... WHERE id = 3',
                        initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 200);
          INSERT INTO towers VALUES (3, 50);
        `,
                        expectedQuery: "SELECT * FROM towers WHERE id = 3",
                        successMessage: "নিশ্চিহ্ন। দৃশ্যপটটি এখন আদিম।",
                        type: 'dml',
                        solution: "DELETE FROM towers WHERE id = 3"
                    },
                    {
                        id: '6-6',
                        title: 'দ্য ভিশন',
                        dialogue: [
                            { speaker: 'Architect', text: "উঁচু টাওয়ারগুলোর একটি স্থায়ী দৃশ্য তৈরি করুন।" },
                            { speaker: 'Glitch', text: "VIEW হলো একটি সেভ করা কোয়েরি। `CREATE VIEW name AS SELECT ...`।" }
                        ],
                        story: "আপনি আপনার সেরা কাজগুলো সবসময় চোখের সামনে রাখতে চান।",
                        objective: '"high_towers" নামে একটি view তৈরি করুন যা towers থেকে height > 150 নির্বাচন করে।',
                        hint: 'CREATE VIEW name AS SELECT ...',
                        initSql: `
          DROP VIEW IF EXISTS high_towers;
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 200, 'Spire');
          INSERT INTO towers VALUES (2, 50, 'Hut');
        `,
                        expectedQuery: "SELECT * FROM high_towers",
                        successMessage: "একটি স্ফটিকের জানালা খুলে গেল, আপনার মহৎ সৃষ্টিগুলো চিরকাল দেখাচ্ছে।",
                        type: 'dml',
                        solution: "CREATE VIEW high_towers AS SELECT * FROM towers WHERE height > 150"
                    },
                    {
                        id: '6-7',
                        title: 'নিয়ম প্রয়োগ',
                        dialogue: [
                            { speaker: 'Architect', text: "আপনার বিশ্বের আইন দরকার। নামগুলো অনন্য এবং আবশ্যক হতে হবে।" },
                            { speaker: 'Glitch', text: "কনস্ট্রেইন্ট যোগ করুন! `TEXT UNIQUE NOT NULL`।" }
                        ],
                        story: "বাধা ছাড়া বিশৃঙ্খলা হুমকি দিচ্ছে।",
                        objective: 'towers টেবিল তৈরি করুন name TEXT UNIQUE NOT NULL সহ।',
                        hint: 'Column constraints',
                        initSql: `
          DROP TABLE IF EXISTS towers;
        `,
                        expectedQuery: "SELECT sql FROM sqlite_master WHERE name='towers'",
                        successMessage: "অপরিবর্তনীয় আইন বাস্তবতাকে বেঁধে ফেলল। আপনার বিশ্ব অটুট সততা অর্জন করল।",
                        type: 'dml',
                        solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT UNIQUE NOT NULL)"
                    },
                    {
                        id: '6-8',
                        title: 'লিঙ্কড স্ট্রাকচার',
                        dialogue: [
                            { speaker: 'Architect', text: "টাওয়ারগুলো গ্রামের অন্তর্গত। বন্ধনটি কার্যকর করুন।" },
                            { speaker: 'Glitch', text: "ফরেন কি! `FOREIGN KEY(village_id) REFERENCES villages(id)`।" }
                        ],
                        story: "বিচ্ছিন্ন টাওয়ারগুলো অসম্পূর্ণ মনে হয়।",
                        objective: 'towers তৈরি করুন যেখানে village_id villages.id কে রেফারেন্স করে।',
                        hint: 'FOREIGN KEY ... REFERENCES',
                        initSql: `
          DROP TABLE IF EXISTS towers;
          DROP TABLE IF EXISTS villages;
          CREATE TABLE villages (id INTEGER PRIMARY KEY, name TEXT);
        `,
                        expectedQuery: "SELECT sql FROM sqlite_master WHERE name='towers'",
                        successMessage: "টাওয়ারগুলো এখন তাদের গ্রামে গভীরভাবে প্রোথিত। সম্পর্ক চিরন্তন।",
                        type: 'dml',
                        solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, village_id INTEGER, FOREIGN KEY(village_id) REFERENCES villages(id))"
                    },
                    {
                        id: '6-9',
                        title: 'বজ্র কোয়েরি',
                        dialogue: [
                            { speaker: 'Architect', text: "অনেক টাওয়ারের কারণে অনুসন্ধান ধীর হয়ে যাচ্ছে।" },
                            { speaker: 'Glitch', text: "গতির জন্য INDEX! `CREATE INDEX ... ON ...`।" }
                        ],
                        story: "আপনার বর্ধমান সাম্রাজ্যের দক্ষতা প্রয়োজন।",
                        objective: 'height কলামে একটি ইনডেক্স তৈরি করুন।',
                        hint: 'CREATE INDEX name ON table(column)',
                        initSql: `
          DROP INDEX IF EXISTS idx_height;
          CREATE TABLE IF NOT EXISTS towers (id INTEGER, height INTEGER);
        `,
                        expectedQuery: "SELECT name FROM sqlite_master WHERE type='index'",
                        successMessage: "সময় আপনার ইচ্ছায় বাঁক নিল। কোয়েরিগুলো বজ্রের মতো আঘাত করছে।",
                        type: 'dml',
                        solution: "CREATE INDEX idx_height ON towers(height)"
                    },
                    {
                        id: '6-10',
                        title: 'ধ্বংসযজ্ঞ',
                        dialogue: [
                            { speaker: 'Architect', text: "পরীক্ষা শেষ। শূন্যতায় ফিরে যান।" },
                            { speaker: 'Glitch', text: "সব DROP করুন..." }
                        ],
                        story: "আপনার সৃষ্টিগুলো তাদের উদ্দেশ্য পূরণ করেছে।",
                        objective: '"towers" টেবিলটি ড্রপ করুন।',
                        hint: 'DROP TABLE name',
                        initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER, height INTEGER);
        `,
                        expectedQuery: "SELECT name FROM sqlite_master WHERE type='table' AND name='towers'",
                        successMessage: "টাওয়ারগুলো ধুলোয় মিশে গেল। শূন্যতা ফিরে এল, নতুন সৃষ্টির জন্য প্রস্তুত।",
                        type: 'dml',
                        solution: "DROP TABLE towers"
                    }
                ]
},
{
    id: 'chapter-7',
        title: 'অধ্যায় ৭: ক্রোনোম্যান্সার',
            description: 'ক্ষমতার শীর্ষে, আপনি সময়ের প্রভুর মুখোমুখি। চূড়ান্ত সীমান্তে আপনার আধিপত্য প্রমাণ করতে তারিখ এবং সময় ফাংশন আয়ত্ত করুন।',
                levels: [
                    {
                        id: '7-1',
                        title: 'বর্তমান',
                        dialogue: [
                            { speaker: 'Narrator', text: "পুনর্নির্মিত বিশ্বের শীর্ষে একটি চূড়ান্ত চরিত্র অপেক্ষা করছে—ক্রোনোম্যান্সার।" },
                            { speaker: 'Chronomancer', text: "আপনি বাস্তবতা গঠন করেছেন। কিন্তু আপনি কি শাশ্বত বর্তমানকে ধরতে পারেন?" },
                            { speaker: 'Glitch', text: "`DATE('now')` দিয়ে বর্তমান মুহূর্তটি কোয়েরি করুন!" }
                        ],
                        story: "চূড়ান্ত সিংহাসনের চারপাশে সময় অসীম লুপে ঘুরপাক খাচ্ছে।",
                        objective: 'DATE(\'now\') ব্যবহার করে বর্তমান তারিখ নির্বাচন করুন।',
                        hint: 'DATE("now")',
                        initSql: ``,
                        expectedQuery: "SELECT DATE('now')",
                        successMessage: "আপনার সামনে বর্তমান স্ফটিকের মতো পরিষ্কার হলো। আপনি মুহূর্তটি লুফে নিলেন।",
                        type: 'select',
                        solution: "SELECT DATE('now')"
                    },
                    {
                        id: '7-1-b',
                        title: 'নির্ভুল সময়',
                        dialogue: [
                            { speaker: 'Chronomancer', text: "একটি তারিখ কেবল একটি মোটা দাগ। আমি নির্ভুলতা চাই।" },
                            { speaker: 'You', text: "সঠিক সময়? `TIME('now')`?" },
                            { speaker: 'Glitch', text: "সঠিক। সেকেন্ডটি ধরুন।" }
                        ],
                        story: "মহাজাগতিক ঘড়ির টিকটিক শব্দ আরও জোরে হচ্ছে।",
                        objective: 'TIME(\'now\') ব্যবহার করে বর্তমান সময় নির্বাচন করুন।',
                        hint: 'TIME("now")',
                        initSql: ``,
                        expectedQuery: "SELECT TIME('now')",
                        successMessage: "সেকেন্ডগুলো টিকটিক করছে, আপনার কোয়েরিতে নিখুঁতভাবে ধরা পড়ছে।",
                        type: 'select',
                        solution: "SELECT TIME('now')"
                    },
                    {
                        id: '7-2',
                        title: 'যুগ',
                        dialogue: [
                            { speaker: 'Chronomancer', text: "এই সময়হীন বর্তমান থেকে বছরটি বের করুন।" },
                            { speaker: 'Glitch', text: "`STRFTIME('%Y', 'now')` বছরটিকে আলাদা করবে!" }
                        ],
                        story: "শাশ্বত চক্রগুলোর নিখুঁত পরিমাপ প্রয়োজন।",
                        objective: 'STRFTIME(\'%Y\', \'now\') ব্যবহার করে বর্তমান বছর নির্বাচন করুন।',
                        hint: 'STRFTIME("%Y", "now")',
                        initSql: ``,
                        expectedQuery: "SELECT STRFTIME('%Y', 'now')",
                        successMessage: "বর্তমান বছরটি প্রবাহ থেকে আলাদা হয়ে গেল। আপনি সময়ের উপাদানগুলোকে নিয়ন্ত্রণ করছেন।",
                        type: 'select',
                        solution: "SELECT STRFTIME('%Y', 'now')"
                    },
                    {
                        id: '7-2-b',
                        title: 'ঋতু',
                        dialogue: [
                            { speaker: 'Glitch', text: "এখন মাস টি নিন। প্যাটার্নটি হলো `%m`।" },
                            { speaker: 'You', text: "তাহলে `STRFTIME('%m', 'now')`।" }
                        ],
                        story: "আপনি বিশ্বের ঋতু বোঝার চেষ্টা করছেন।",
                        objective: 'STRFTIME ব্যবহার করে বর্তমান মাস নির্বাচন করুন।',
                        hint: 'STRFTIME("%m", "now")',
                        initSql: ``,
                        expectedQuery: "SELECT STRFTIME('%m', 'now')",
                        successMessage: "মাসটি নিজেকে প্রকাশ করল।",
                        type: 'select',
                        solution: "SELECT STRFTIME('%m', 'now')"
                    },
                    {
                        id: '7-3',
                        title: 'ভবিষ্যৎ দর্শন',
                        dialogue: [
                            { speaker: 'Chronomancer', text: "৩০ দিন পর কী তারিখ?" },
                            { speaker: 'Glitch', text: "আপনি তারিখ পরিবর্তন করতে পারেন! `DATE('now', '+30 days')`।" }
                        ],
                        story: "আগামীকালের দৃশ্য হাতছানি দিচ্ছে।",
                        objective: 'আজ থেকে ৩০ দিন পরের তারিখ নির্বাচন করুন।',
                        hint: 'date("now", "+30 days")',
                        initSql: ``,
                        expectedQuery: "SELECT date('now', '+30 days')",
                        successMessage: "ভবিষ্যতের তারিখ স্পষ্টভাবে দেখা যাচ্ছে। আপনি পর্দার ওপারে দেখছেন।",
                        type: 'select',
                        solution: "SELECT date('now', '+30 days')"
                    },
                    {
                        id: '7-3-b',
                        title: 'অতীত',
                        dialogue: [
                            { speaker: 'Chronomancer', text: "পেছনে তাকান। ৭ দিন আগের তারিখ কী ছিল?" },
                            { speaker: 'You', text: "আমি সময় বিয়োগ করব। `DATE('now', '-7 days')`।" }
                        ],
                        story: "স্মৃতিগুলো ডেটাতে বিন্যস্ত হচ্ছে।",
                        objective: '৭ দিন আগের তারিখ নির্বাচন করুন।',
                        hint: 'date("now", "-7 days")',
                        initSql: ``,
                        expectedQuery: "SELECT date('now', '-7 days')",
                        successMessage: "অতীত বর্তমানের মতোই পরিষ্কার।",
                        type: 'select',
                        solution: "SELECT date('now', '-7 days')"
                    },
                    {
                        id: '7-4',
                        title: 'দিন পার্থক্য',
                        dialogue: [
                            { speaker: 'Chronomancer', text: "দূরবর্তী মুহূর্তগুলোর মাঝের দিনগুলো মাপুন।" },
                            { speaker: 'Glitch', text: "`JULIANDAY` তারিখকে সংখ্যায় পরিণত করে যা আমরা বিয়োগ করতে পারি!" },
                            { speaker: 'Glitch', text: "`JULIANDAY(date2) - JULIANDAY(date1)`." }
                        ],
                        story: "সময়ের দুটি বিন্দু আপনার সামনে ভাসছে, পরিমাপের অপেক্ষায়।",
                        objective: 'julianday ব্যবহার করে দুটি তারিখের মধ্যে দিন গণনা করুন। ভবিষ্যতের তারিখ হিসেবে DATE(\'now\', \'+30 days\') ব্যবহার করুন।',
                        hint: 'julianday(future) - julianday(now)',
                        initSql: ``,
                        expectedQuery: "SELECT julianday(date('now', '+30 days')) - julianday('now')",
                        successMessage: "ঠিক ৩০ দিন। আপনি সময়ের পাটিগণিত আয়ত্ত করেছেন। ক্রোনোম্যান্সার মাথা নোয়ালেন—আপনিই এখন প্রকৃত প্রভু।",
                        type: 'select',
                        solution: "SELECT julianday(date('now', '+30 days')) - julianday('now')"
                    }
                ]
},
{
    id: 'chapter-8',
        title: 'অধ্যায় ৮: নির্মাতার মন',
            description: 'আপনি সময় এবং সৃষ্টি আয়ত্ত করেছেন, কিন্তু একজন সত্যিকারের স্থপতি তার বিশ্বের নিরাপত্তা, গতি এবং সততা নিশ্চিত করেন। অপরাজেয় হতে ট্রানজাকশন, ট্রিগার এবং জটিল কাঠামো আয়ত্ত করুন।',
                levels: [
                    {
                        id: '8-1',
                        title: 'সেফটি নেট',
                        dialogue: [
                            { speaker: 'Narrator', text: "আপনি মহাবিশ্বের সার্ভার রুমে দাঁড়িয়ে আছেন। একটি ভুল কমান্ড সবকিছু মুছে ফেলতে পারে।" },
                            { speaker: 'Architect', text: "চূড়ান্ত ক্ষমতা প্রয়োগ করতে, আপনাকে আপনার ভুলগুলো কীভাবে আনডু করতে হয় তা জানতে হবে।" },
                            { speaker: 'Glitch', text: "ট্রানজাকশন! `BEGIN TRANSACTION`... কাজ করুন... `ROLLBACK`!" }
                        ],
                        story: "একটি জ্বলজ্বলে টার্মিনাল আপনাকে বিশ্ব মুছে ফেলার ক্ষমতা দিচ্ছে। আপনাকে প্রমাণ করতে হবে আপনি এটি নিরাপদে করতে পারেন।",
                        objective: 'একটি ট্রানজাকশন শুরু করুন, gems টেবিল ডিলিট করুন, কিন্তু তারপর এটি বাঁচাতে ROLLBACK করুন।',
                        hint: 'BEGIN TRANSACTION; ... ROLLBACK;',
                        initSql: `
                    CREATE TABLE gems (id INTEGER, name TEXT);
                    INSERT INTO gems VALUES (1, 'Ruby');
                    INSERT INTO gems VALUES (2, 'Sapphire');
                `,
                        expectedQuery: "SELECT count(*) FROM gems",
                        successMessage: "কমান্ডটি কার্যকর হলো, কিন্তু রত্নগুলো রয়ে গেল! আপনি আনডু করার শিল্প আয়ত্ত করেছেন।",
                        type: 'dml',
                        solution: "BEGIN TRANSACTION; DELETE FROM gems; ROLLBACK;"
                    },
                    {
                        id: '8-1-b',
                        title: 'নিরাপদ আপডেট',
                        dialogue: [
                            { speaker: 'Glitch', text: "এখন এটি একটি আপডেটের সাথে চেষ্টা করুন। সব রত্নকে 'Dust'-এ পরিণত করুন।" },
                            { speaker: 'You', text: "কিন্তু রোলব্যাক করব?" },
                            { speaker: 'Glitch', text: "সবসময়।" }
                        ],
                        story: "আপনি নিরাপদে আপনার রূপান্তর ক্ষমতা পরীক্ষা করছেন।",
                        objective: 'transaction শুরু করুন, gems আপডেট করে name = "Dust" করুন, তারপর rollback করুন।',
                        hint: 'BEGIN TRANSACTION; UPDATE ...; ROLLBACK;',
                        initSql: `
                    CREATE TABLE gems (id INTEGER, name TEXT);
                    INSERT INTO gems VALUES (1, 'Ruby');
                `,
                        expectedQuery: "SELECT * FROM gems WHERE name = 'Ruby'",
                        successMessage: "রত্নগুলো চকচক করছে, আপনার পরীক্ষায় অক্ষত।",
                        type: 'dml',
                        solution: "BEGIN TRANSACTION; UPDATE gems SET name='Dust'; ROLLBACK;"
                    },
                    {
                        id: '8-2',
                        title: 'অটোমেটন',
                        dialogue: [
                            { speaker: 'Architect', text: "আপনি একবারে রাজ্যের প্রতিটি কোণ দেখতে পারবেন না। প্রহরী তৈরি করুন।" },
                            { speaker: 'Glitch', text: "ট্রিগার! `CREATE TRIGGER name AFTER UPDATE ON table ...`" }
                        ],
                        story: "একটি স্বয়ংক্রিয় প্রতিরক্ষা তৈরি করুন যা টাওয়ারের প্রতিটি পরিবর্তন রেকর্ড করে।",
                        objective: '"log_update" নামে একটি TRIGGER তৈরি করুন যা towers-এ UPDATE-এর পরে "logs"-এ (message) VALUES ("updated") ইনসার্ট করে।',
                        hint: 'CREATE TRIGGER name AFTER UPDATE ON table BEGIN ... END;',
                        initSql: `
                    CREATE TABLE towers (id INTEGER, height INTEGER);
                    CREATE TABLE logs (message TEXT);
                    INSERT INTO towers VALUES (1, 100);
                `,
                        expectedQuery: "SELECT sql FROM sqlite_master WHERE type = 'trigger' AND name = 'log_update'",
                        successMessage: "প্রহরী সক্রিয়। সিস্টেম এখন নিজের ওপর নজর রাখছে।",
                        type: 'dml',
                        solution: "CREATE TRIGGER log_update AFTER UPDATE ON towers BEGIN INSERT INTO logs VALUES ('updated'); END;"
                    },
                    {
                        id: '8-2-b',
                        title: 'প্রহরী',
                        dialogue: [
                            { speaker: 'Glitch', text: "এখন নতুনদের আগমনের দিকে নজর রাখুন। INSERT-এর ওপর একটি ট্রিগার।" },
                            { speaker: 'Glitch', text: "একটি টাওয়ার তৈরি হলে logs-এ 'New Tower' ইনসার্ট করুন।" }
                        ],
                        story: "বিশ্বের সৃষ্টির ওপর নজর রাখতে দ্বিতীয় একটি চোখ খুলল।",
                        objective: 'towers-এ INSERT-এর পরে "log_insert" ট্রিগার তৈরি করুন যা logs-এ "New Tower" যোগ করবে।',
                        hint: 'AFTER INSERT ...',
                        initSql: `
                    CREATE TABLE towers (id INTEGER, height INTEGER);
                    CREATE TABLE logs (message TEXT);
                `,
                        expectedQuery: "SELECT sql FROM sqlite_master WHERE type = 'trigger' AND name = 'log_insert'",
                        successMessage: "অদেখা কিছুই এই বিশ্বে প্রবেশ করে না।",
                        type: 'dml',
                        solution: "CREATE TRIGGER log_insert AFTER INSERT ON towers BEGIN INSERT INTO logs VALUES ('New Tower'); END;"
                    },
                    {
                        id: '8-3',
                        title: 'এনক্রিপ্টেড স্ক্রোল',
                        dialogue: [
                            { speaker: 'Narrator', text: "একজন ভ্রমণকারী আপনাকে অদ্ভুত ব্র্যাকেটে লেখা একটি স্ক্রোল দিল।" },
                            { speaker: 'Glitch', text: "এটি JSON ডেটা! `{ key: value }`।" },
                            { speaker: 'You', text: "আমার `json_extract(column, '$.key')` দরকার।" }
                        ],
                        story: "জটিল ডেটা স্ট্রাকচার সহজ সত্য লুকিয়ে রাখে।",
                        objective: 'json_extract ব্যবহার করে json data কলাম থেকে "magic"-এর মান নির্বাচন করুন।',
                        hint: "json_extract(column, '$.key')",
                        initSql: `
                    CREATE TABLE scrolls (id INTEGER, data TEXT);
                    INSERT INTO scrolls VALUES (1, '{\"magic\": \"fire\", \"power\": 50}');
                    INSERT INTO scrolls VALUES (2, '{\"magic\": \"ice\", \"power\": 40}');
                `,
                        expectedQuery: "SELECT json_extract(data, '$.magic') FROM scrolls",
                        successMessage: "আগুন... বরফ... কোড থেকে কাঁচা উপাদানগুলো বের করা হলো।",
                        type: 'select',
                        solution: "SELECT json_extract(data, '$.magic') FROM scrolls"
                    },
                    {
                        id: '8-3-b',
                        title: 'শক্তির স্তর',
                        dialogue: [
                            { speaker: 'Glitch', text: "এখন 'power' ভ্যালু নিন!" }
                        ],
                        story: "আপনি ডেটা কাঠামোর আরও গভীরে খনন করছেন।",
                        objective: 'json ডেটা থেকে "power"-এর মান নির্বাচন করুন।',
                        hint: "json_extract(..., '$.power')",
                        initSql: `
                    CREATE TABLE scrolls (id INTEGER, data TEXT);
                    INSERT INTO scrolls VALUES (1, '{\"magic\": \"fire\", \"power\": 50}');
                `,
                        expectedQuery: "SELECT json_extract(data, '$.power') FROM scrolls",
                        successMessage: "কাঁচা শক্তির স্তর আপনার ডিসপ্লেতে ভেসে উঠল।",
                        type: 'select',
                        solution: "SELECT json_extract(data, '$.power') FROM scrolls"
                    },
                    {
                        id: '8-4',
                        title: 'বিশ্লেষণ',
                        dialogue: [
                            { speaker: 'Architect', text: "গতিই ক্ষমতার সারমর্ম। কাস্ট করার আগে আপনার স্পেল বিশ্লেষণ করুন।" },
                            { speaker: 'Glitch', text: "EXPLAIN QUERY PLAN! কোয়েরির পিছনের ম্যাট্রিক্স দেখুন।" }
                        ],
                        story: "আপনি বাস্তবের ইঞ্জিনের দিকে তাকিয়ে এর প্রবাহ অপ্টিমাইজ করছেন।",
                        objective: 'EXPLAIN QUERY PLAN চালান: SELECT * FROM magic_items WHERE power > 100',
                        hint: 'কোয়েরির আগে শুধু EXPLAIN QUERY PLAN যোগ করুন।',
                        initSql: `
                    CREATE TABLE magic_items (id INTEGER, power INTEGER);
                    INSERT INTO magic_items VALUES (1, 50);
                    INSERT INTO magic_items VALUES (2, 150);
                `,
                        expectedQuery: "EXPLAIN QUERY PLAN SELECT * FROM magic_items WHERE power > 100",
                        successMessage: "কোয়েরি প্ল্যান প্রকাশিত হলো। আপনি আপনার কাজের খরচ আগেই দেখতে পাচ্ছেন।",
                        type: 'select',
                        solution: "EXPLAIN QUERY PLAN SELECT * FROM magic_items WHERE power > 100"
                    },
                    {
                        id: '8-4-b',
                        title: 'গভীর স্ক্যান',
                        dialogue: [
                            { speaker: 'Glitch', text: "আরও জটিল স্পেল স্ক্যান করুন। `SELECT name FROM magic_items`।" },
                            { speaker: 'You', text: "এটা কি যেকোনো কোয়েরিতে কাজ করে?" },
                            { speaker: 'Glitch', text: "হ্যাঁ।" }
                        ],
                        story: "আপনি কোর মেমোরিতে ডায়াগনস্টিক চালাচ্ছেন।",
                        objective: 'EXPLAIN QUERY PLAN চালান: SELECT name FROM magic_items',
                        hint: 'EXPLAIN QUERY PLAN ...',
                        initSql: `
                    CREATE TABLE magic_items (name TEXT);
                `,
                        expectedQuery: "EXPLAIN QUERY PLAN SELECT name FROM magic_items",
                        successMessage: "আপনার চোখের সামনে দক্ষতার মেট্রিক্স ভেসে উঠল।",
                        type: 'select',
                        solution: "EXPLAIN QUERY PLAN SELECT name FROM magic_items"
                    },
                    {
                        id: '8-5',
                        title: 'যৌগিক',
                        dialogue: [
                            { speaker: 'Architect', text: "একটি চাবি সহজেই ভেঙে যায়। সত্য শক্তির জন্য দুটি একসাথে বাঁধুন।" },
                            { speaker: 'Glitch', text: "কম্পোজিট প্রাইমারি কি! `PRIMARY KEY (col1, col2)`।" }
                        ],
                        story: "চূড়ান্ত মন্দিরের ভিত্তির জন্য একটি দ্বৈত লক প্রয়োজন।",
                        objective: '"temple" নামে টেবিল তৈরি করুন যার কলাম x (INT), y (INT), PRIMARY KEY (x, y)।',
                        hint: 'PRIMARY KEY (col1, col2)',
                        initSql: `
                    DROP TABLE IF EXISTS temple;
                `,
                        expectedQuery: "SELECT sql FROM sqlite_master WHERE name='temple'",
                        successMessage: "দ্বৈত সিল সেট করা হয়েছে। স্থপতি মাথা নাড়লেন। আপনি আর ছাত্র নন... আপনি এখন একজন মাস্টার।",
                        type: 'dml',
                        solution: "CREATE TABLE temple (x INTEGER, y INTEGER, PRIMARY KEY (x, y))"
                    }
                ]
}
];
