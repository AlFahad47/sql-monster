{
    id: 'chapter-4',
        title: 'অধ্যায় ৪: নিষিদ্ধ লাইব্রেরি',
            description: 'বনের গভীরে দাঁড়িয়ে আছে অসীম জ্ঞানের এক জরাজীর্ণ লাইব্রেরি। ধুলোমাখা বইগুলো গোপন কথা ফিসফিস করে বলে। নিষিদ্ধ জ্ঞান আনলক করতে অ্যাডভান্সড লজিক, প্যাটার্ন এবং সাবকোয়েরি আয়ত্ত করুন।',
                levels: [
                    {
                        id: '4-1',
                        title: 'ফিসফিস করা বই',
                        dialogue: [
                            { speaker: 'Narrator', text: "প্রাচীন পাথরের দরজা ক্যাঁচক্যাঁচ করে খুলে গেল। তাকগুলো অসীম উচ্চতায় উঠে গেছে, বইগুলো বাতাসে ভাসছে।" },
                            { speaker: 'Librarian', text: "চুপ! শুধুমাত্র 'Magic' সম্পর্কিত বইগুলো পড়া নিরাপদ।" },
                            { speaker: 'Glitch', text: "শিরোনামগুলো আলাদা—কিছু সম্পূর্ণ, কিছু আংশিক। আমাদের প্যাটার্ন ম্যাচিং দরকার!" },
                            { speaker: 'You', text: "ওয়াইল্ডকার্ড সহ LIKE..." }
                        ],
                        story: "অদৃশ্য বাতাসে বইগুলোর পাতা উল্টাচ্ছে। ভেতরে বিপজ্জনক জ্ঞান লুকিয়ে আছে।",
                        objective: 'সমস্ত বই নির্বাচন করুন যেখানে শিরোনামে "Magic" শব্দটি আছে।',
                        hint: 'LIKE "%pattern%" ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod');
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock');
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef');
          INSERT INTO books VALUES (4, 'Light Magic for Beginners', 'Priest');
          INSERT INTO books VALUES (5, 'Science of Magic', 'Alchemist');
        `,
                        expectedQuery: "SELECT * FROM books WHERE title LIKE '%Magic%'",
                        successMessage: "তিনটি নিষিদ্ধ বই নিচে ভেসে এল, পাতাগুলো আগ্রহের সাথে খুলে গেল। জাদুকরী জ্ঞান আপনার মধ্যে প্রবাহিত হচ্ছে।",
                        type: 'select',
                        solution: "SELECT * FROM books WHERE title LIKE '%Magic%'"
                    },
                    {
                        id: '4-1-b',
                        title: 'লেখক অনুসন্ধান',
                        dialogue: [
                            { speaker: 'Glitch', text: "আমি সেই লেখকদের সব বই চাই যাদের নাম 'General' দিয়ে শুরু।" },
                            { speaker: 'You', text: "আমি আবার `LIKE` ব্যবহার করতে পারি! শুরুতে 'General', আর পরে `%`।" },
                            { speaker: 'Glitch', text: "সঠিক। `LIKE 'General%'`।" }
                        ],
                        story: "আপনি ধুলোমাখা তাকগুলোর মধ্যে যুদ্ধের কৌশল খুঁজছেন।",
                        objective: 'সমস্ত বই নির্বাচন করুন যেখানে লেখক (author) "General" দিয়ে শুরু হয়।',
                        hint: 'WHERE author LIKE "General%" ব্যবহার করুন',
                        initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod');
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock');
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef');
        `,
                        expectedQuery: "SELECT * FROM books WHERE author LIKE 'General%'",
                        successMessage: "সামরিক আর্কাইভ আপনার জন্য উন্মুক্ত হলো।",
                        type: 'select',
                        solution: "SELECT * FROM books WHERE author LIKE 'General%'"
                    },
                    {
                        id: '4-2',
                        title: 'ধুলোমাখা লেখক',
                        dialogue: [
                            { speaker: 'Glitch', text: "এত ডুপ্লিকেট! আমি কেবল অনন্য লেখকদের চাই।" },
                            { speaker: 'Librarian', text: "DISTINCT প্রকৃত সৃষ্টিকর্তাদের প্রকাশ করবে।" }
                        ],
                        story: "তাকগুলো একই সংস্করণের ভারে নুয়ে পড়েছে। প্রকৃত লেখক নিচে লুকিয়ে আছেন।",
                        objective: 'books টেবিল থেকে অনন্য লেখকদের নির্বাচন করুন।',
                        hint: 'SELECT DISTINCT ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT);
          INSERT INTO books VALUES (1, 'Book A', 'Author X');
          INSERT INTO books VALUES (2, 'Book B', 'Author Y');
          INSERT INTO books VALUES (3, 'Book C', 'Author X');
          INSERT INTO books VALUES (4, 'Book D', 'Author Z');
          INSERT INTO books VALUES (5, 'Book E', 'Author Y');
        `,
                        expectedQuery: "SELECT DISTINCT author FROM books",
                        successMessage: "অপ্রয়োজনীয় কপিগুলো অদৃশ্য হয়ে গেল। তিনজন অনন্য লেখক স্পষ্টভাবে রয়ে গেলেন।",
                        type: 'select',
                        solution: "SELECT DISTINCT author FROM books"
                    },
                    {
                        id: '4-3',
                        title: 'সাইফার',
                        dialogue: [
                            { speaker: 'Librarian', text: "ভল্ট খুলতে হলে, এই কোডগুলোকে শ্রেণীবদ্ধ করুন: জোড় অথবা বিজোড়।" },
                            { speaker: 'Glitch', text: "CASE স্টেটমেন্ট! কোয়েরির ভেতরেই শর্তসাপেক্ষ লজিক।" }
                        ],
                        story: "তাকের পেছনে একটি সিল করা ভল্ট স্পন্দিত হচ্ছে, লজিক্যাল ডিক্রিপশনের অপেক্ষায়।",
                        objective: 'id নির্বাচন করুন এবং id-র উপর ভিত্তি করে "Even" বা "Odd" নামে একটি নতুন কলাম "type" তৈরি করুন।',
                        hint: 'CASE WHEN id % 2 = 0 THEN "Even" ELSE "Odd" END ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE codes (id INTEGER);
          INSERT INTO codes VALUES (1);
          INSERT INTO codes VALUES (2);
          INSERT INTO codes VALUES (3);
          INSERT INTO codes VALUES (4);
        `,
                        expectedQuery: "SELECT id, CASE WHEN id % 2 = 0 THEN 'Even' ELSE 'Odd' END AS type FROM codes",
                        successMessage: "সাইফারটি মিলে গেল। ভল্টের দরজাটি ক্যাঁচক্যাঁচ করে খুলে গেল, ভেতরে চকচকে প্রত্নবস্তু দেখা যাচ্ছে।",
                        type: 'select',
                        solution: "SELECT id, CASE WHEN id % 2 = 0 THEN 'Even' ELSE 'Odd' END AS type FROM codes"
                    },
                    {
                        id: '4-3-b',
                        title: 'বই বাছাইকারী',
                        dialogue: [
                            { speaker: 'Librarian', text: "এই বইগুলো সাজাও! ২০০ পৃষ্ঠার কম হলে 'Short', অন্যথায় 'Long'।" },
                            { speaker: 'You', text: "আরেকটি `CASE` স্টেটমেন্ট।" },
                            { speaker: 'Glitch', text: "শিরোনাম এবং নতুন 'length' ক্যাটাগরি দেখান।" }
                        ],
                        story: "লাইব্রেরিয়ান শৃঙ্খলার দাবি করছেন। বিশৃঙ্খলা আপনাকেই সাজাতে হবে।",
                        objective: 'শিরোনাম এবং একটি "length" কলাম নির্বাচন করুন (যদি pages < 200 হয় তবে "Short", অন্যথায় "Long")।',
                        hint: 'CASE WHEN pages < 200 ... ব্যবহার করুন',
                        initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT, pages INTEGER);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod', 300);
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock', 150);
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef', 200);
        `,
                        expectedQuery: "SELECT title, CASE WHEN pages < 200 THEN 'Short' ELSE 'Long' END AS length FROM books",
                        successMessage: "বইগুলো তাদের নির্ধারিত বিভাগে উড়ে গেল।",
                        type: 'select',
                        solution: "SELECT title, CASE WHEN pages < 200 THEN 'Short' ELSE 'Long' END AS length FROM books"
                    },
                    {
                        id: '4-4',
                        title: 'একত্রীকরণ',
                        dialogue: [
                            { speaker: 'Glitch', text: "দুটি প্রাচীন স্ক্রোলে নিরাপদ অঞ্চলের তালিকা আছে। আমাদের সেগুলো একত্রিত করতে হবে।" },
                            { speaker: 'You', text: "UNION একত্রিত করবে এবং ডুপ্লিকেটগুলো সরিয়ে দেবে।" }
                        ],
                        story: "ছেঁড়া স্ক্রোলগুলো বাতাসে ভাসছে, একা তারা অসম্পূর্ণ।",
                        objective: '"scroll_a" থেকে নাম নির্বাচন করুন UNION "scroll_b" থেকে নাম নির্বাচন করুন।',
                        hint: 'SELECT-এর মাঝে UNION ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE scroll_a (name TEXT);
          CREATE TABLE scroll_b (name TEXT);
          INSERT INTO scroll_a VALUES ('Safe Haven');
          INSERT INTO scroll_a VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Shelter');
        `,
                        expectedQuery: "SELECT name FROM scroll_a UNION SELECT name FROM scroll_b",
                        successMessage: "স্ক্রোলগুলো একটি সম্পূর্ণ মানচিত্রে পরিণত হলো। বিপদের মধ্য দিয়ে একটি নিরাপদ পথ দেখা যাচ্ছে।",
                        type: 'select',
                        solution: "SELECT name FROM scroll_a UNION SELECT name FROM scroll_b"
                    },
                    {
                        id: '4-5',
                        title: 'অন্তরের কণ্ঠস্বর',
                        dialogue: [
                            { speaker: 'Glitch', text: "আমি শুধু গড়ের চেয়ে মোটা বইগুলো চাই!" },
                            { speaker: 'You', text: "আমাদের প্রথমে গড় বের করতে হবে..." },
                            { speaker: 'Glitch', text: "সাবকোয়েরি ব্যবহার করুন! `WHERE pages > (SELECT AVG(pages) FROM books)`।" }
                        ],
                        story: "বিশাল বইগুলো তাকের উপর রাজত্ব করছে।",
                        objective: 'বইগুলো থেকে শিরোনাম নির্বাচন করুন যেখানে পৃষ্ঠা > (SELECT AVG(pages) FROM books)।',
                        hint: 'WHERE-এর মধ্যে সাবকোয়েরি ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE books (title TEXT, pages INTEGER);
          INSERT INTO books VALUES ('Tiny Book', 50);
          INSERT INTO books VALUES ('Medium Book', 200);
          INSERT INTO books VALUES ('Giant Book', 500);
          INSERT INTO books VALUES ('Huge Scroll', 1000);
        `,
                        expectedQuery: "SELECT title FROM books WHERE pages > (SELECT AVG(pages) FROM books)",
                        successMessage: "সবচেয়ে শক্তিশালী বইগুলো বাকিদের ছাপিয়ে উঠল।",
                        type: 'select',
                        solution: "SELECT title FROM books WHERE pages > (SELECT AVG(pages) FROM books)"
                    },
                    {
                        id: '4-5-b',
                        title: 'ক্ষুদ্রতমের চেয়ে বড়',
                        dialogue: [
                            { speaker: 'Glitch', text: "এখন আমাকে এমন বই খুঁজে দিন যেগুলোর 'Tiny Book'-এর চেয়ে বেশি পৃষ্ঠা আছে।" },
                            { speaker: 'You', text: "আমাকে আগে 'Tiny Book'-এর পৃষ্ঠাসংখ্যা জানতে হবে।" },
                            { speaker: 'Glitch', text: "ঠিক। সেই মানটি পেতে একটি সাবকোয়েরি ব্যবহার করুন!" }
                        ],
                        story: "সবচেয়ে ছোট বইটিও তুলনা করার জন্য একটি মানদণ্ড হতে পারে।",
                        objective: 'বইগুলো থেকে শিরোনাম নির্বাচন করুন যেখানে পৃষ্ঠা সংখ্যা (SELECT pages FROM books WHERE title = "Tiny Book") এর চেয়ে বেশি।',
                        hint: 'WHERE pages > (SELECT pages ... WHERE title="Tiny Book")',
                        initSql: `
          CREATE TABLE books (title TEXT, pages INTEGER);
          INSERT INTO books VALUES ('Tiny Book', 50);
          INSERT INTO books VALUES ('Medium Book', 200);
          INSERT INTO books VALUES ('Giant Book', 500);
        `,
                        expectedQuery: "SELECT title FROM books WHERE pages > (SELECT pages FROM books WHERE title = 'Tiny Book')",
                        successMessage: "বড় বইগুলো সম্মানের সাথে মাথা নোয়াল।",
                        type: 'select',
                        solution: "SELECT title FROM books WHERE pages > (SELECT pages FROM books WHERE title = 'Tiny Book')"
                    },
                    {
                        id: '4-6',
                        title: 'ডিক্রিপশন',
                        dialogue: [
                            { speaker: 'Librarian', text: "লুকানো বার্তাগুলো কেবল বড় হাতের অক্ষর (uppercase)-এ দেখা যায়।" },
                            { speaker: 'Glitch', text: "স্ট্রিং ফাংশন! সবগুলোকে `UPPER` করুন।" }
                        ],
                        story: "প্রাচীন পাতার অস্পষ্ট লেখাগুলো কেবল তখনই দৃশ্যমান হয় যখন রূপান্তরিত হয়।",
                        objective: 'বই থেকে শিরোনামের `UPPER()` নির্বাচন করুন।',
                        hint: 'UPPER(column) ব্যবহার করুন',
                        initSql: `
          CREATE TABLE books (title TEXT);
          INSERT INTO books VALUES ('secret key');
          INSERT INTO books VALUES ('hidden door');
        `,
                        expectedQuery: "SELECT UPPER(title) FROM books",
                        successMessage: "SECRET KEY. HIDDEN DOOR. প্রকৃত বার্তা স্পষ্টভাবে জ্বলে উঠল।",
                        type: 'select',
                        solution: "SELECT UPPER(title) FROM books"
                    },
                    {
                        id: '4-7',
                        title: 'শেয়ার করা জ্ঞান',
                        dialogue: [
                            { speaker: 'Glitch', text: "দুটি সমান্তরাল লাইব্রেরি আছে। কোন বইগুলো উভয় জায়গায় আছে?" },
                            { speaker: 'You', text: "সাধারণ জিনিসের জন্য INTERSECT।" }
                        ],
                        story: "আয়নাযুক্ত তাকগুলো জ্ঞানের ওভারল্যাপিং বাস্তবতা দেখাচ্ছে।",
                        objective: 'lib_a থেকে শিরোনাম নির্বাচন করুন INTERSECT lib_b থেকে শিরোনাম নির্বাচন করুন।',
                        hint: 'INTERSECT ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE lib_a (title TEXT);
          CREATE TABLE lib_b (title TEXT);
          INSERT INTO lib_a VALUES ('Book 1');
          INSERT INTO lib_a VALUES ('Book 2');
          INSERT INTO lib_b VALUES ('Book 2');
          INSERT INTO lib_b VALUES ('Book 3');
        `,
                        expectedQuery: "SELECT title FROM lib_a INTERSECT SELECT title FROM lib_b",
                        successMessage: "শুধুমাত্র 'Book 2' উভয় জগতে বিদ্যমান। সর্বজনীন সত্য নিশ্চিত হলো।",
                        type: 'select',
                        solution: "SELECT title FROM lib_a INTERSECT SELECT title FROM lib_b"
                    },
                    {
                        id: '4-8',
                        title: 'শূন্যতা পূরণ',
                        dialogue: [
                            { speaker: 'Librarian', text: "কিছু রেকর্ডের শিরোনাম নেই—নিছক শূন্যতা।" },
                            { speaker: 'Glitch', text: "NULL-গুলোকে ডিফল্ট মান দিয়ে প্রতিস্থাপন করুন!" }
                        ],
                        story: "খালি স্পাইনগুলো তাক থেকে অভিযোগের দৃষ্টিতে তাকিয়ে আছে।",
                        objective: 'শিরোনাম নির্বাচন করুন, NULL-কে "Unknown Book" দিয়ে প্রতিস্থাপন করুন।',
                        hint: 'COALESCE ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE books (title TEXT);
          INSERT INTO books VALUES ('Magic 101');
          INSERT INTO books VALUES (NULL);
          INSERT INTO books VALUES ('History');
        `,
                        expectedQuery: "SELECT COALESCE(title, 'Unknown Book') FROM books",
                        successMessage: "শূন্যতা অর্থ দিয়ে পূর্ণ হলো। প্রতিটি বইয়ের এখন পরিচয় আছে।",
                        type: 'select',
                        solution: "SELECT COALESCE(title, 'Unknown Book') FROM books"
                    },
                    {
                        id: '4-9',
                        title: 'টাইপ শিফট',
                        dialogue: [
                            { speaker: 'Librarian', text: "টেক্সট হিসেবে সংরক্ষিত পৃষ্ঠার সংখ্যা গণনার জন্য সংখ্যায় পরিণত করতে হবে।" },
                            { speaker: 'You', text: "টাইপ কনভার্ট করতে CAST।" }
                        ],
                        story: "ভুলভাবে রেকর্ড করা ডেটা গভীর বিশ্লেষণে বাধা দিচ্ছে।",
                        objective: 'pages কলামকে TEXT থেকে INTEGER-এ কাস্ট করুন।',
                        hint: 'CAST(column AS INTEGER) ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE books (pages TEXT);
          INSERT INTO books VALUES ('100');
          INSERT INTO books VALUES ('250');
        `,
                        expectedQuery: "SELECT CAST(pages AS INTEGER) FROM books",
                        successMessage: "টেক্সট সংখ্যায় পরিণত হলো। গাণিতিক জ্ঞান আনলক হয়েছে।",
                        type: 'select',
                        solution: "SELECT CAST(pages AS INTEGER) FROM books"
                    },
                    {
                        id: '4-10',
                        title: 'স্ট্রিং বাইন্ডিং',
                        dialogue: [
                            { speaker: 'Glitch', text: "নাম এবং ভূমিকাগুলো একত্রিত করে মহাকাব্যিক উপাধি তৈরি করুন!" }
                        ],
                        story: "গ্রামবাসীর রেকর্ডগুলো নাটকীয় উপস্থাপনার জন্য অপেক্ষা করছে।",
                        objective: 'নাম এবং ভূমিকা " the " দিয়ে সংযুক্ত (concatenate) করে নির্বাচন করুন।',
                        hint: 'SQLite-এ সংযুক্ত করতে || ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT);
          INSERT INTO villagers VALUES ('Born', 'warrior');
          INSERT INTO villagers VALUES ('Alina', 'mage');
        `,
                        expectedQuery: "SELECT name || ' the ' || role FROM villagers",
                        successMessage: "Born the warrior, Alina the mage... কিংবদন্তি উপাধি গঠিত হলো।",
                        type: 'select',
                        solution: "SELECT name || ' the ' || role FROM villagers"
                    },
                    {
                        id: '4-11',
                        title: 'পার্থক্য',
                        dialogue: [
                            { speaker: 'Glitch', text: "কোন নিরাপদ অঞ্চলগুলো শুধুমাত্র scroll_a-তে বিদ্যমান?" }
                        ],
                        story: "ভিন্ন মানচিত্রগুলো অনন্য আশ্রয়স্থল দেখাচ্ছে।",
                        objective: 'শুধুমাত্র scroll_a-তে থাকা নামগুলো খুঁজতে EXCEPT ব্যবহার করুন।',
                        hint: 'EXCEPT ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE scroll_a (name TEXT);
          CREATE TABLE scroll_b (name TEXT);
          INSERT INTO scroll_a VALUES ('Safe Haven');
          INSERT INTO scroll_a VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Shelter');
        `,
                        expectedQuery: "SELECT name FROM scroll_a EXCEPT SELECT name FROM scroll_b",
                        successMessage: "Safe Haven একাই দাঁড়িয়ে আছে। একটি অনন্য অভয়ারণ্য আবিষ্কৃত হলো।",
                        type: 'select',
                        solution: "SELECT name FROM scroll_a EXCEPT SELECT name FROM scroll_b"
                    },
                    {
                        id: '4-12',
                        title: 'অস্তিত্ব পরীক্ষা',
                        dialogue: [
                            { speaker: 'Librarian', text: "ভল্টে বিরল কপি আছে এমন বইগুলোই দেখান।" }
                        ],
                        story: "মূল্যবান বিরল সংস্করণগুলো নিচে লুকিয়ে আছে।",
                        objective: 'এমন বই নির্বাচন করুন যেখানে rare_books টেবিলে একটি মিল (matching entry) আছে।',
                        hint: 'EXISTS সাবকোয়েরি ব্যবহার করুন।',
                        initSql: `
          CREATE TABLE books (id INTEGER, title TEXT);
          CREATE TABLE rare_books (book_id INTEGER);
          INSERT INTO books VALUES (1, 'Magic 101');
          INSERT INTO books VALUES (2, 'History');
          INSERT INTO rare_books VALUES (1);
        `,
                        expectedQuery: "SELECT * FROM books b WHERE EXISTS (SELECT 1 FROM rare_books r WHERE r.book_id = b.id)",
                        successMessage: "শুধুমাত্র প্রকৃত বিরল বইগুলোই অবশিষ্ট রইল। অমূল্য জ্ঞান সংরক্ষিত হলো।",
                        type: 'select',
                        solution: "SELECT * FROM books b WHERE EXISTS (SELECT 1 FROM rare_books r WHERE r.book_id = b.id)"
                    }
                ]
},
