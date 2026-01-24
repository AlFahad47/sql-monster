{
    id: 'chapter-5',
        title: 'অধ্যায় ৫: টাইম টাওয়ার',
            description: 'মেঘ ভেদ করে একটি বিশাল চূড়া উঠে গেছে, এর সিঁড়িগুলো ঘূর্ণায়মান সময়রেখার মধ্য দিয়ে গেছে। সময়ের প্রবাহ নেভিগেট করতে উইন্ডো ফাংশন এবং CTE আয়ত্ত করুন।',
                levels: [
                    {
                        id: '5-1',
                        title: 'সময়রেখা',
                        dialogue: [
                            { speaker: 'Narrator', text: "লাইব্রেরির দরজা খুলে গেল এবং স্বর্গের দিকে পেঁচানো একটি বিশাল টাওয়ার দেখা গেল।" },
                            { speaker: 'Chronos', text: "স্বাগতম। এখানে সময় রৈখিক নয়। আমরা গুরুত্ব অনুযায়ী ইভেন্টগুলোকে র‍্যাঙ্ক করি।" },
                            { speaker: 'Glitch', text: "উইন্ডো ফাংশন! `RANK() OVER (ORDER BY year)` বছরের ভিত্তিতে র‍্যাঙ্ক নির্ধারণ করে।" }
                        ],
                        story: "অতীত এবং ভবিষ্যতের দৃশ্যে সিঁড়িগুলো ঝিকমিক করছে। ইভেন্টগুলো সর্পিল পথে ভাসছে।",
                        objective: 'নাম, বছর এবং বছরের ওপর ভিত্তি করে rank() নির্বাচন করুন (বছরের ক্রমানুসারে)।',
                        hint: 'RANK() OVER (ORDER BY column) ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Big Bang', -1000);
          INSERT INTO events VALUES (2, 'Empire Rise', 500);
          INSERT INTO events VALUES (3, 'Empire Fall', 500);
          INSERT INTO events VALUES (4, 'Rebirth', 1000);
        `,
                        expectedQuery: "SELECT name, year, RANK() OVER (ORDER BY year) FROM events",
                        successMessage: "সময়রেখা স্থিতিশীল হয়েছে। ইভেন্টগুলো নিখুঁত কালানুক্রমিক ক্রমে সাজানো হয়েছে।",
                        type: 'select',
                        solution: "SELECT name, year, RANK() OVER (ORDER BY year) FROM events"
                    },
                    {
                        id: '5-1-b',
                        title: 'বিপরীত ইতিহাস',
                        dialogue: [
                            { speaker: 'Chronos', text: "এখন পেছনের দিকে তাকান। সাম্প্রতিক থেকে প্রাচীনতম ক্রমে সাজান।" },
                            { speaker: 'You', text: "তাহলে উইন্ডোর ভেতরে `ORDER BY year DESC`?" },
                            { speaker: 'Glitch', text: "একদম ঠিক।" }
                        ],
                        story: "সিঁড়ি দিয়ে ওঠার সময় সময় উল্টো দিকে প্রবাহিত হচ্ছে।",
                        objective: 'নাম, বছর এবং বছরের ওপর ভিত্তি করে rank() নির্বাচন করুন (অধঃক্রম বা descending)।',
                        hint: 'RANK() OVER (ORDER BY year DESC)',
                        initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Big Bang', -1000);
          INSERT INTO events VALUES (2, 'Empire Rise', 500);
          INSERT INTO events VALUES (3, 'Empire Fall', 500);
          INSERT INTO events VALUES (4, 'Rebirth', 1000);
        `,
                        expectedQuery: "SELECT name, year, RANK() OVER (ORDER BY year DESC) FROM events",
                        successMessage: "অতীত ভবিষ্যতে পরিণত হলো, নিখুঁতভাবে সাজানো।",
                        type: 'select',
                        solution: "SELECT name, year, RANK() OVER (ORDER BY year DESC) FROM events"
                    },
                    {
                        id: '5-2',
                        title: 'টাইম ট্রাভেল',
                        dialogue: [
                            { speaker: 'Chronos', text: "প্রতিটি ইভেন্টের জন্য, দেখুন তার ঠিক পরেই কী আসছে।" },
                            { speaker: 'Glitch', text: "`LEAD(name) OVER (ORDER BY year)` ব্যবহার করুন পরের সারির নাম দেখতে!" }
                        ],
                        story: "আসন্ন যুগের দৃশ্যগুলো উপলব্ধির প্রান্তে মিটমিট করছে।",
                        objective: 'নাম, বছর এবং বছরের অর্ডারিং অনুযায়ী LEAD(name) নির্বাচন করুন।',
                        hint: 'LEAD(column) OVER (ORDER BY ...)',
                        initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Start', 100);
          INSERT INTO events VALUES (2, 'Middle', 200);
          INSERT INTO events VALUES (3, 'End', 300);
        `,
                        expectedQuery: "SELECT name, year, LEAD(name) OVER (ORDER BY year) FROM events",
                        successMessage: "আপনি বর্তমানের ওপারে দেখতে পাচ্ছেন। সময়ের প্রবাহ অনুমানযোগ্য হয়ে উঠল।",
                        type: 'select',
                        solution: "SELECT name, year, LEAD(name) OVER (ORDER BY year) FROM events"
                    },
                    {
                        id: '5-3',
                        title: 'প্যারাডক্স',
                        dialogue: [
                            { speaker: 'Chronos', text: "আগে সাম্প্রতিক ইভেন্টগুলো আলাদা করুন, তারপর কোয়েরি করুন। একটি অস্থায়ী বাস্তবতা তৈরি করুন।" },
                            { speaker: 'Glitch', text: "CTE (Common Table Expression) ব্যবহার করুন! `WITH recent AS (SELECT ...)`।" }
                        ],
                        story: "প্যারাডক্সিক্যাল লুপগুলো টাওয়ারের সিঁড়িগুলো খুলে ফেলার হুমকি দিচ্ছে।",
                        objective: '"recent" নামে একটি CTE ব্যবহার করুন যেখানে year > 200, তারপর recent থেকে সব নির্বাচন করুন।',
                        hint: 'WITH name AS (query) SELECT * FROM name',
                        initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Old', 100);
          INSERT INTO events VALUES (2, 'Modern', 250);
          INSERT INTO events VALUES (3, 'Future', 300);
        `,
                        expectedQuery: "WITH recent AS (SELECT * FROM events WHERE year > 200) SELECT * FROM recent",
                        successMessage: "প্যারাডক্স সমাধান হলো। অস্থায়ী বাস্তবতা সত্যে পরিণত হলো।",
                        type: 'select',
                        solution: "WITH recent AS (SELECT * FROM events WHERE year > 200) SELECT * FROM recent"
                    },
                    {
                        id: '5-3-b',
                        title: 'প্রাচীন ইতিহাস',
                        dialogue: [
                            { speaker: 'Glitch', text: "আবার করুন! প্রাচীন ইভেন্টগুলোর (year < 200) জন্য একটি CTE তৈরি করুন।" },
                            { speaker: 'You', text: "ঠিক আছে, `WITH ancient AS ...`" }
                        ],
                        story: "আপনি সুদূর অতীতে আপনার মনকে ফোকাস করছেন।",
                        objective: '"ancient" নামে একটি CTE ব্যবহার করুন যেখানে year < 200, তারপর ancient থেকে সব নির্বাচন করুন।',
                        hint: 'WITH ancient AS ...',
                        initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Old', 100);
          INSERT INTO events VALUES (2, 'Modern', 250);
          INSERT INTO events VALUES (3, 'Future', 300);
        `,
                        expectedQuery: "WITH ancient AS (SELECT * FROM events WHERE year < 200) SELECT * FROM ancient",
                        successMessage: "শুধুমাত্র অতীতের প্রতিধ্বনি অবশিষ্ট রইল।",
                        type: 'select',
                        solution: "WITH ancient AS (SELECT * FROM events WHERE year < 200) SELECT * FROM ancient"
                    },
                    {
                        id: '5-4',
                        title: 'গ্রুপের মধ্যে র‍্যাঙ্ক',
                        dialogue: [
                            { speaker: 'Chronos', text: "পুরো সময়ের মধ্যে নয়, বরং প্রতিটি যুগের মধ্যে আলাদাভাবে র‍্যাঙ্ক করুন।" },
                            { speaker: 'Glitch', text: "PARTITION BY! `RANK() OVER (PARTITION BY role ORDER BY gold DESC)` প্রতিটি ভূমিকার জন্য র‍্যাঙ্ক রিসেট করে।" }
                        ],
                        story: "আলাদা যুগগুলো টাওয়ারের দেয়ালে শাখা তৈরি করছে।",
                        objective: "প্রতিটি ভূমিকার (role) মধ্যে সোনা (gold) অনুযায়ী গ্রামবাসীদের র‍্যাঙ্ক করুন।",
                        hint: 'RANK() OVER (PARTITION BY role ORDER BY gold DESC)',
                        initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES ('Born', 'warrior', 50);
          INSERT INTO villagers VALUES ('Kael', 'warrior', 45);
          INSERT INTO villagers VALUES ('Alina', 'mage', 100);
          INSERT INTO villagers VALUES ('Myra', 'mage', 110);
        `,
                        expectedQuery: "SELECT name, role, gold, RANK() OVER (PARTITION BY role ORDER BY gold DESC) FROM villagers",
                        successMessage: "সেরা যোদ্ধা, সেরা জাদুকর... র‍্যাঙ্কিং তাদের যুগের মধ্যে স্ফটিকের মতো পরিষ্কার হলো।",
                        type: 'select',
                        solution: "SELECT name, role, gold, RANK() OVER (PARTITION BY role ORDER BY gold DESC) FROM villagers"
                    },
                    {
                        id: '5-5',
                        title: 'অনন্য ক্রম',
                        dialogue: [
                            { speaker: 'Chronos', text: "প্রতিটি ভূমিকার মধ্যে সম্পদের ভিত্তিতে অনন্য অবস্থান নির্ধারণ করুন।" },
                            { speaker: 'Glitch', text: "RANK টাই হতে পারে, কিন্তু `ROW_NUMBER()` অনন্য!" }
                        ],
                        story: "প্রতিটি আত্মা ইতিহাসে তাদের নির্দিষ্ট স্থান দাবি করছে।",
                        objective: 'ROW_NUMBER() ব্যবহার করুন, role দ্বারা partition এবং gold desc দ্বারা order করে।',
                        hint: 'ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)',
                        initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES ('Born', 'warrior', 50);
          INSERT INTO villagers VALUES ('Kael', 'warrior', 45);
          INSERT INTO villagers VALUES ('Alina', 'mage', 100);
          INSERT INTO villagers VALUES ('Myra', 'mage', 110);
        `,
                        expectedQuery: "SELECT name, role, ROW_NUMBER() OVER (PARTITION BY role ORDER BY gold DESC) AS row_num FROM villagers",
                        successMessage: "প্রতিটি অবস্থান অনন্য। সময়ের অনুক্রম পরম।",
                        type: 'select',
                        solution: "SELECT name, role, ROW_NUMBER() OVER (PARTITION BY role ORDER BY gold DESC) AS row_num FROM villagers"
                    },
                    {
                        id: '5-6',
                        title: 'চলমান যোগফল',
                        dialogue: [
                            { speaker: 'Chronos', text: "সময় অতিবাহিত হওয়ার সাথে সাথে সম্পদ জমা হতে দেখুন।" },
                            { speaker: 'Glitch', text: "আমাদের একটি রানিং টোটাল দরকার। `SUM(gold) OVER (ORDER BY id)`।" }
                        ],
                        story: "সোনার নদী ইতিহাসের মধ্য দিয়ে প্রবাহিত হচ্ছে।",
                        objective: 'id দ্বারা অর্ডার করে সোনার (gold) চলমান যোগফল (running sum) গণনা করুন।',
                        hint: 'SUM(gold) OVER (ORDER BY id)',
                        initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Trog', 20);
          INSERT INTO villagers VALUES (2, 'Kael', 45);
          INSERT INTO villagers VALUES (3, 'Born', 50);
          INSERT INTO villagers VALUES (4, 'Sera', 80);
          INSERT INTO villagers VALUES (5, 'Alina', 100);
          INSERT INTO villagers VALUES (6, 'Myra', 110);
        `,
                        expectedQuery: "SELECT name, gold, SUM(gold) OVER (ORDER BY id) AS running_total FROM villagers",
                        successMessage: "আপনার চোখের সামনে সম্পদ জমা হচ্ছে। সময়ের নদী আরও সমৃদ্ধ হচ্ছে।",
                        type: 'select',
                        solution: "SELECT name, gold, SUM(gold) OVER (ORDER BY id) AS running_total FROM villagers"
                    },
                    {
                        id: '5-6-b',
                        title: 'ক্রমযোজিত গণনা',
                        dialogue: [
                            { speaker: 'Chronos', text: "এখন ইতিহাসে আবির্ভূত হওয়ার সাথে সাথে গ্রামবাসীদের গণনা করুন।" },
                            { speaker: 'You', text: "একটি চলমান গণনা?" },
                            { speaker: 'Glitch', text: "হ্যাঁ! `COUNT(*) OVER (ORDER BY id)`।" }
                        ],
                        story: "সময়রেখা থেকে জনসংখ্যার পরিসংখ্যান উঠে আসছে।",
                        objective: 'id দ্বারা অর্ডার করে গ্রামবাসীর চলমান গণনা (running count) বের করুন।',
                        hint: 'COUNT(*) OVER (ORDER BY id)',
                        initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Trog', 20);
          INSERT INTO villagers VALUES (2, 'Kael', 45);
        `,
                        expectedQuery: "SELECT name, COUNT(*) OVER (ORDER BY id) FROM villagers",
                        successMessage: "এক, দুই... গণনা বাড়ছে।",
                        type: 'select',
                        solution: "SELECT name, COUNT(*) OVER (ORDER BY id) FROM villagers"
                    },
                    {
                        id: '5-7',
                        title: 'পারিবারিক গাছ',
                        dialogue: [
                            { speaker: 'Chronos', text: "রক্তের সম্পর্ক প্রজন্মের পর প্রজন্ম ধরে গাছ তৈরি করে। প্রবীণের (Elder) সমস্ত বংশধরকে খুঁজে বের করুন।" },
                            { speaker: 'Glitch', text: "রিকার্সিভ CTE! এটি উন্নত জাদু।" },
                            { speaker: 'Glitch', text: "`WITH RECURSIVE name AS ... UNION ALL ...`" }
                        ],
                        story: "পূর্বপুরুষের রেখাগুলো টাওয়ারের দেয়াল ধরে অসীমভাবে সর্পিল পথে চলেছে।",
                        objective: 'সমস্ত অধস্তন (প্রত্যক্ষ এবং পরোক্ষ) খুঁজে পেতে রিকার্সিভ CTE ব্যবহার করুন।',
                        hint: 'WITH RECURSIVE ... UNION ALL',
                        initSql: `
          CREATE TABLE employees (id INTEGER, name TEXT, manager_id INTEGER);
          INSERT INTO employees VALUES (1, 'Elder', NULL);
          INSERT INTO employees VALUES (2, 'Born', 1);
          INSERT INTO employees VALUES (3, 'Kael', 2);
          INSERT INTO employees VALUES (4, 'Alina', 1);
        `,
                        expectedQuery: "WITH RECURSIVE hierarchy(id, name, level) AS (SELECT id, name, 0 FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, h.level + 1 FROM employees e JOIN hierarchy h ON e.manager_id = h.id) SELECT name, level FROM hierarchy",
                        successMessage: "পুরো বংশলতিকা অসীম সময়ের মধ্য দিয়ে উন্মোচিত হলো। আপনি প্রজন্মের প্রবাহ আয়ত্ত করেছেন।",
                        type: 'select',
                        solution: "WITH RECURSIVE hierarchy(id, name, level) AS (SELECT id, name, 0 FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, h.level + 1 FROM employees e JOIN hierarchy h ON e.manager_id = h.id) SELECT name, level FROM hierarchy"
                    }
                ]
},
