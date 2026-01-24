export const chaptersBn = [
    {
        id: 'chapter-1',
        title: 'অধ্যায় ১: জাগরণ',
        description: 'আপনি একটি শীতল, ডিজিটাল শূন্যতায় জেগে উঠলেন — নিছক ডেটা দিয়ে বোনা এক অন্ধকূপ। ভাসমান টেবিলগুলো হালকা আলোয় স্পন্দিত হচ্ছে। এই কারাগার থেকে পালাতে এবং আপনার ক্ষমতা ফিরে পেতে, আপনাকে অবশ্যই SELECT-এর প্রাচীন ভাষাটি আয়ত্ত করতে হবে।',
        levels: [
            {
                id: '1-1',
                title: 'প্রথম স্ফুলিঙ্গ',
                dialogue: [
                    { speaker: 'Narrator', text: "চেতনা ফিরে আসছে। চোখের সামনে নীল কোড স্রোতের মতো বয়ে যাচ্ছে। আপনি... রিবুট হচ্ছেন।" },
                    { speaker: 'Glitch', text: "হেই! এদিকে! তুমি জেগে উঠেছো! শেষ পর্যন্ত! সিস্টেম রিবুট সম্পন্ন হয়েছে, কুয়েরি মাস্টার!" },
                    { speaker: 'You', text: "...তুমি কে? আমি কোথায়? সবকিছু স্ক্রলিং ডেটার মতো দেখাচ্ছে কেন..." },
                    { speaker: 'Glitch', text: "নাম আমার গ্লিচ — তোমার বিশ্বস্ত ডেটা স্প্রাইট সঙ্গী! তুমি এসকিউএল (SQL) জগতে আটকা পড়েছো। ওই যে উজ্জ্বল `items` টেবিলটা দেখছো? ওটাকে কুয়েরি করো!" },
                    { speaker: 'Glitch', text: "সবকিছু দেখতে `SELECT * FROM items` ব্যবহার করো! এই অ্যাস্টেরিস্ক (*) চিহ্নের অর্থ হলো 'সবগুলো কলাম'।" }
                ],
                story: "শূন্যতায় ছড়িয়ে থাকা কিছু বস্তু ম্লান স্বর্গীয় আলোয় উদ্ভাসিত হচ্ছে। আপনার পলায়ন শুরু হোক দেখার মাধ্যমে।",
                objective: '"items" টেবিলের সব কলাম সিলেক্ট করুন।',
                hint: 'সবকিছু প্রকাশ করতে অ্যাস্টেরিস্ক (*) ব্যবহার করুন: `SELECT * FROM tablename`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: 'SELECT * FROM items',
                successMessage: "টার্মিনালটি উজ্জ্বল আলোয় ফেটে পড়ল! প্রতিটি বস্তু আপনার সামনে স্পষ্টভাবে দৃশ্যমান হলো।",
                type: 'select',
                solution: "SELECT * FROM items"
            },
            {
                id: '1-2',
                title: 'দৃষ্টি নিবদ্ধ করা',
                dialogue: [
                    { speaker: 'Glitch', text: "ওহ—প্রচুর ডেটা! আমার পিক্সেলগুলো জ্বলে যাচ্ছে!" },
                    { speaker: 'Glitch', text: "আমাদের শুধু নামগুলো দরকার। বাড়তি সব জঞ্জাল বাদ দাও!" },
                    { speaker: 'You', text: "আমি কীভাবে শুধু একটি কলাম বেছে নেব?" },
                    { speaker: 'Glitch', text: "খুব সহজ! `SELECT name FROM items` লিখো। শুধু * এর জায়গায় কলামের নাম বসিয়ে দাও।" }
                ],
                story: "তথ্যের বন্যায় আপনার ইন্দ্রিয়গুলো অভিভূত হয়ে পড়ছে। বেঁচে থাকার চাবিকাঠি হলো স্বচ্ছতা।",
                objective: '"items" টেবিল থেকে শুধুমাত্র "name" কলামটি সিলেক্ট করুন।',
                hint: 'নির্দিষ্ট কলাম বেছে নিন: `SELECT column1, column2 FROM tablename`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT name FROM items",
                successMessage: "বিশৃঙ্খলতা দূর হলো। পরিচ্ছন্ন নামগুলো নিখুঁতভাবে আপনার সামনে ভেসে উঠল। আপনার দৃষ্টি তীক্ষ্ণ হয়েছে।",
                type: 'select',
                solution: "SELECT name FROM items"
            },
            {
                id: '1-2-b',
                title: 'সরঞ্জাম শনাক্তকরণ',
                dialogue: [
                    { speaker: 'Glitch', text: "ঠিক আছে, এখন আমাদের সবকিছু বিভাগ অনুযায়ী সাজাতে হবে।" },
                    { speaker: 'Glitch', text: "আমাকে প্রতিটি আইটেমের শুধু 'type' বা ধরনটি দেখাও।" }
                ],
                story: "আপনি আপনার দৃষ্টিকে বস্তুগুলোর মূল সত্তার ওপর নিবদ্ধ করলেন।",
                objective: '"items" টেবিল থেকে শুধুমাত্র "type" কলামটি সিলেক্ট করুন।',
                hint: 'SELECT column FROM table',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
        `,
                expectedQuery: "SELECT type FROM items",
                successMessage: "টুল... অস্ত্র... প্রত্নবস্তু... ক্যাটাগরিগুলো সব মিলে যাচ্ছে।",
                type: 'select',
                solution: "SELECT type FROM items"
            },
            {
                id: '1-3',
                title: 'সঠিক সরঞ্জাম',
                dialogue: [
                    { speaker: 'Glitch', text: "সামনে লোহার দরজা! ওটা খুলতে আমাদের একটি নির্দিষ্ট আইটেম দরকার।" },
                    { speaker: 'You', text: "এই যে 'type' কলাম... আমাদের একটি 'tool' বা সরঞ্জাম দরকার।" },
                    { speaker: 'Glitch', text: "ওটাকে ফিল্টার করো! WHERE ক্লজ ব্যবহার করো: `SELECT * FROM items WHERE type = 'tool'`।" },
                    { speaker: 'Glitch', text: "'tool' এর চারপাশে কোটেশন দিতে ভুলো না কারণ এটি একটি টেক্সট!" }
                ],
                story: "একটি বিশাল লোহার গেট পথ আটকে দাঁড়িয়ে আছে। খোদাই করা প্রাচীন চিহ্নগুলো সঠিক নিবেদনের অপেক্ষায় জ্বলছে।",
                objective: 'যেখানে type হলো "tool", সেই সব কলাম সিলেক্ট করুন।',
                hint: 'WHERE দিয়ে ফিল্টার করুন: `SELECT * FROM table WHERE condition`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type = 'tool'",
                successMessage: "মরিচা ধরা চাবি এবং পাথরটি উজ্জ্বল হয়ে উঠল। চাবিটি ভেসে গিয়ে দরজার তালাটি নিখুঁতভাবে খুলে দিল।",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'tool'"
            },
            {
                id: '1-3-b',
                title: 'শক্তির তীব্রতা',
                dialogue: [
                    { speaker: 'Glitch', text: "দরজাটা বেশ ভারী ছিল! আমাদের আরও শক্তিশালী সরঞ্জাম দরকার।" },
                    { speaker: 'Glitch', text: "এমন আইটেম খুঁজে বের করো যার `power` বা শক্তি ১০-এর বেশি!" },
                    { speaker: 'You', text: "১০-এর বেশি... তার মানে `WHERE power > 10`?" },
                    { speaker: 'Glitch', text: "একদম! সংখ্যার ক্ষেত্রে কোটেশন প্রয়োজন নেই। শুরু করো!" }
                ],
                dialogue: "বাতাসে শক্তির ঝনঝনানি অনুভূত হচ্ছে। আপনাকে সবচেয়ে শক্তিশালী প্রত্নবস্তুগুলো শনাক্ত করতে হবে।",
                objective: 'এমন সব আইটেম সিলেক্ট করুন যাদের power ১০-এর বেশি।',
                hint: '> অপারেটর ব্যবহার করুন: `WHERE power > 10`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE power > 10",
                successMessage: "ভাঙা তলোয়ার এবং আমুলেটটি শক্তিতে কাঁপছে। ওগুলোর দিকে তাকিয়েই আপনি নিজেকে আগের চেয়ে শক্তিশালী বোধ করছেন।",
                type: 'select',
                solution: "SELECT * FROM items WHERE power > 10"
            },
            {
                id: '1-4',
                title: 'বিশৃঙ্খলা গোছানো',
                dialogue: [
                    { speaker: 'Glitch', text: "আমার ইনভেন্টরি এলোমেলো হয়ে আছে! চলো সাজিয়ে ফেলি।" },
                    { speaker: 'You', text: "সবচেয়ে বেশি শক্তির আইটেমগুলো কি আগে রাখব?" },
                    { speaker: 'Glitch', text: "হ্যাঁ! `ORDER BY power DESC` ব্যবহার করো। DESC মানে বড় থেকে ছোট!" }
                ],
                story: "আপনার ইনভেন্টরি হালকা আলোয় জ্বলছে। আপনাকে সবচেয়ে মূল্যবান প্রত্নবস্তুগুলোকে অগ্রাধিকার দিতে হবে।",
                objective: 'শক্তির ক্রমানুসারে (বড় থেকে ছোট) সব আইটেম সাজান।',
                hint: 'ORDER BY column DESC ব্যবহার করুন',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items ORDER BY power DESC",
                successMessage: "সবগুলো আইটেম চমৎকারভাবে সারিবদ্ধ হলো। অদ্ভুত আমুলেটটি তালিকার শীর্ষে জ্বলজ্বল করছে।",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC"
            },
            {
                id: '1-4-b',
                title: 'বর্ণানুক্রমিক সাজানো',
                dialogue: [
                    { speaker: 'Glitch', text: "এখন চলো ওগুলোকে নাম অনুযায়ী সাজাই, A থেকে Z।" },
                    { speaker: 'You', text: "ওটা কি আলাদা কিছু?" },
                    { speaker: 'Glitch', text: "ছোট থেকে বড় বা আরোহী ক্রমের জন্য `ASC` ব্যবহার করো। `ORDER BY name ASC`। এটি ডিফল্ট হলেও, স্পষ্টভাবে লিখে দেওয়াই ভালো!" }
                ],
                story: "আইটেমগুলোর এই লাইব্রেরির জন্য একটি সূচি প্রয়োজন। বর্ণানুক্রমিক সাজানোই এখানে আদর্শ নিয়ম।",
                objective: 'নামের বর্ণানুক্রম (A-Z) অনুযায়ী সব আইটেম সিলেক্ট করুন।',
                hint: 'ORDER BY name ASC ব্যবহার করুন',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items ORDER BY name ASC",
                successMessage: "Broken Sword, Moldy Bread, Rock... চমৎকারভাবে তালিকাভুক্ত হয়েছে।",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY name ASC"
            },
            {
                id: '1-4-c',
                title: 'উল্টো বর্ণানুক্রম',
                dialogue: [
                    { speaker: 'Glitch', text: "দাঁড়াও, আমি নিচ থেকে উপরের দিকে পড়ি।" },
                    { speaker: 'Glitch', text: "ওগুলোকে আবার সাজাও, তবে এবার Z থেকে A!" }
                ],
                story: "গ্লিচ উল্টো হয়ে ঝুলে আছে এবং এক নতুন দৃষ্টিভঙ্গিতে দেখার দাবি করছে।",
                objective: 'নামের বিপরীত বর্ণানুক্রম (Z-A) অনুযায়ী সব আইটেম সিলেক্ট করুন।',
                hint: 'ORDER BY name DESC ব্যবহার করুন',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
        `,
                expectedQuery: "SELECT * FROM items ORDER BY name DESC",
                successMessage: "Strange Amulet, Rusty Key... তালিকাটি উল্টে গেল।",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY name DESC"
            },
            {
                id: '1-5',
                title: 'জটিল পছন্দ',
                dialogue: [
                    { speaker: 'Glitch', text: "গেটে একটি নির্দিষ্ট অর্ঘ্য বা অফারিং প্রয়োজন। সেখানে লেখা: 'Artifact অথবা Power > 50'।" },
                    { speaker: 'You', text: "তার মানে আমাদের `OR` লজিক ব্যবহার করতে হবে।" },
                    { speaker: 'Glitch', text: "ঠিক! `WHERE type = 'artifact' OR power > 50`। যেকোনো একটি শর্ত পূরণ হলেই চলবে!" }
                ],
                story: "প্রস্থান গেটটি জ্বলজ্বলে শর্তাবলী নিয়ে ঝিকমিক করছে। শুধুমাত্র সঠিক উৎসর্গই এটিকে বিলীন করতে পারবে।",
                objective: 'এমন আইটেম সিলেক্ট করুন যেখানে type হলো "artifact" অথবা power ৫০-এর বেশি।',
                hint: 'OR ব্যবহার করে শর্তগুলো যোগ করুন',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type = 'artifact' OR power > 50",
                successMessage: "অদ্ভুত আমুলেটটি উপরে উঠে গেল। গেটটি আলোকছটায় মিশে গিয়ে পথ খুলে দিল।",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'artifact' OR power > 50"
            },
            {
                id: '1-5-b',
                title: 'কঠোর প্রয়োজনীয়তা',
                dialogue: [
                    { speaker: 'Glitch', text: "দাঁড়াও, একটি নতুন সিকিউরিটি ড্রয়েড আমাদের পথ আটকেছে!" },
                    { speaker: 'Droid', text: "১০+ পাওয়ার লেভেলের অস্ত্র প্রদর্শন করুন।" },
                    { speaker: 'Glitch', text: "আমাদের দুটোই দরকার! একটি 'weapon' এবং power ১০-এর বেশি। `AND` ব্যবহার করো!" }
                ],
                story: "ড্রয়েডের স্ক্যানারটি ঘরটি পর্যবেক্ষণ করছে। আপনাকে সবগুলো মাপকাঠি মেলাতে হবে।",
                objective: 'এমন আইটেম সিলেক্ট করুন যেখানে type হলো "weapon" এবং power ১০-এর বেশি।',
                hint: 'উভয় শর্তের জন্য AND ব্যবহার করুন।',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Dagger', 'weapon', 5);
        `,
                expectedQuery: "SELECT * FROM items WHERE type = 'weapon' AND power > 10",
                successMessage: "ভাঙা তলোয়ারটি (পাওয়ার ১৫) গৃহীত হলো। ড্রয়েডটি পথ ছেড়ে সরে দাঁড়াল।",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'weapon' AND power > 10"
            },
            {
                id: '1-6',
                title: 'শক্তির সীমা',
                dialogue: [
                    { speaker: 'Glitch', text: "মেঝের কাঁটা! মাঝারি শক্তির আইটেমগুলোর স্পর্শে এগুলো সক্রিয় হয়।" },
                    { speaker: 'You', text: "১০ থেকে ২০-এর মধ্যে?" },
                    { speaker: 'Glitch', text: "`WHERE power BETWEEN 10 AND 20` ব্যবহার করো। এটি >= এবং <= ব্যবহার করার চেয়ে অনেক পরিষ্কার।" }
                ],
                story: "গেট খোলার সাথে সাথেই মারাত্মক সব মরণফাঁদ জেগে উঠল। সাবধানে এগুলো নিষ্ক্রিয় করতে হবে।",
                objective: 'এমন আইটেমগুলো সিলেক্ট করুন যাদের power ১০ থেকে ২০-এর মধ্যে (BETWEEN)।',
                hint: 'WHERE column BETWEEN low AND high ব্যবহার করুন',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Shield', 'armor', 12);
        `,
                expectedQuery: "SELECT * FROM items WHERE power BETWEEN 10 AND 20",
                successMessage: "আপনি সাবধানে ভাঙা তলোয়ার এবং ঢালটি বের করে নিলেন। কাঁটাগুলো নিঃশব্দে ভেতরে ঢুকে গেল।",
                type: 'select',
                solution: "SELECT * FROM items WHERE power BETWEEN 10 AND 20"
            },
            {
                id: '1-6-b',
                title: 'নিরাপদ অঞ্চল',
                dialogue: [
                    { speaker: 'Glitch', text: "আরও ফাঁদ! এবার শুধুমাত্র উচ্চ শক্তির আইটেমগুলোই নিরাপদ।" },
                    { speaker: 'Glitch', text: "৫০ থেকে ১০০-এর মধ্যে শক্তির আইটেমগুলো খুঁজে বের করো।" }
                ],
                story: "মেঝে কাঁপছে। আপনাকে ভারী শক্তির উৎস দিয়ে এটিকে স্থিতিশীল করতে হবে।",
                objective: '৫০ থেকে ১০০-এর মধ্যে (BETWEEN) শক্তির আইটেমগুলো সিলেক্ট করুন।',
                hint: 'WHERE ... BETWEEN ... AND ...',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Shield', 'armor', 12);
          INSERT INTO items VALUES (6, 'Magic Staff', 'weapon', 80);
        `,
                expectedQuery: "SELECT * FROM items WHERE power BETWEEN 50 AND 100",
                successMessage: "স্টাফ এবং আমুলেটটি একত্রে গুঞ্জন শুরু করল। পথ পরিষ্কার হয়ে গেল।",
                type: 'select',
                solution: "SELECT * FROM items WHERE power BETWEEN 50 AND 100"
            },
            {
                id: '1-7',
                title: 'তালিকা',
                dialogue: [
                    { speaker: 'Glitch', text: "আমার খুব ক্ষুধা পেয়েছে। আমি শুধু 'food' (খাবার) এবং 'artifact' (প্রত্নবস্তু) খেতে পারি।" },
                    { speaker: 'You', text: "আমি কি ওগুলোকে একটি তালিকায় রাখতে পারি?" },
                    { speaker: 'Glitch', text: "হ্যাঁ! `IN` ব্যবহার করো: `WHERE type IN ('food', 'artifact')`।" }
                ],
                story: "গ্লিচের শরীর দুর্বলতায় ঝিকমিক করছে। একটি পুষ্টিকর আহার পেলে তার শক্তি ফিরে আসবে।",
                objective: 'এমন সব আইটেম সিলেক্ট করুন যেখানে type হলো "food" অথবা "artifact" (IN ব্যবহার করে)।',
                hint: 'WHERE column IN (list) ব্যবহার করুন',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type IN ('food', 'artifact')",
                successMessage: "গ্লিচ বাসি রুটি এবং আমুলেটের শক্তি সাবাড় করে দিল। সে এখন খুশিতে ঝলমল করছে।",
                type: 'select',
                solution: "SELECT * FROM items WHERE type IN ('food', 'artifact')"
            },
            {
                id: '1-7-b',
                title: 'যুদ্ধের সরঞ্জাম',
                dialogue: [
                    { speaker: 'Glitch', text: "দ্রুত! শত্রুরা এগিয়ে আসছে। সব অস্ত্র এবং বর্ম নিয়ে নাও!" },
                    { speaker: 'Glitch', text: "'weapon' এবং 'armor'-এর জন্য `IN` ক্লজ ব্যবহার করো।" }
                ],
                story: "আপনি শূন্যতার ছায়াদের বিরুদ্ধে লড়াইয়ের জন্য যুদ্ধের প্রস্তুতি নিচ্ছেন।",
                objective: 'এমন আইটেম সিলেক্ট করুন যেখানে type হলো "weapon" অথবা "armor"।',
                hint: 'WHERE type IN (...)',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Shield', 'armor', 50);
        `,
                expectedQuery: "SELECT * FROM items WHERE type IN ('weapon', 'armor')",
                successMessage: "আপনি তলোয়ার এবং ঢাল সজ্জিত করলেন। আপনি এখন যুদ্ধের জন্য প্রস্তুত।",
                type: 'select',
                solution: "SELECT * FROM items WHERE type IN ('weapon', 'armor')"
            },
            {
                id: '1-8',
                title: 'সীমিত ইনভেন্টরি',
                dialogue: [
                    { speaker: 'Glitch', text: "আমার বাফার পূর্ণ হয়ে গেছে! আমি কেবল ৫টি আইটেম বহন করতে পারি।" },
                    { speaker: 'You', text: "সবচেয়ে শক্তিশালী ৫টি আইটেম?" },
                    { speaker: 'Glitch', text: "হ্যাঁ। `ORDER BY power DESC LIMIT 5`। এই `LIMIT` অতিরিক্ত অংশ ছেঁটে ফেলে।" }
                ],
                story: "আপনার সামনে অগণিত প্রত্নবস্তু হাজির হচ্ছে। এখন বাছাই করাটাই আসল কাজ।",
                objective: 'সবচেয়ে শক্তিশালী ৫টি আইটেম সিলেক্ট করুন।',
                hint: 'ORDER BY-এর পরে LIMIT যোগ করুন',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
          INSERT INTO items VALUES (6, 'Magic Staff', 'weapon', 80);
          INSERT INTO items VALUES (7, 'Iron Shield', 'armor', 40);
          INSERT INTO items VALUES (8, 'Healing Potion', 'consumable', 30);
          INSERT INTO items VALUES (9, 'Dagger', 'weapon', 25);
          INSERT INTO items VALUES (10, 'Leather Armor', 'armor', 20);
        `,
                expectedQuery: "SELECT * FROM items ORDER BY power DESC LIMIT 5",
                successMessage: "৫টি উজ্জ্বল আইটেম দৃশ্যমান হলো। বাকিগুলো ম্লান হয়ে মিলিয়ে গেল।",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC LIMIT 5"
            },
            {
                id: '1-9',
                title: 'পরবর্তী পাতা',
                dialogue: [
                    { speaker: 'Glitch', text: "আমি পরের সেটটি দেখতে চাই। ৬ থেকে ১০ নম্বর আইটেমগুলো।" },
                    { speaker: 'You', text: "প্রথম ৫টি বাদ দিয়ে দেব?" },
                    { speaker: 'Glitch', text: "`OFFSET` ব্যবহার করো! `LIMIT 5 OFFSET 5` প্রথম ৫টি এড়িয়ে যায়।" }
                ],
                story: "এই অন্ধকার অন্ধকূপের গভীরতা যেন অসীম। আপনি পরবর্তী পাতায় চোখ রাখলেন।",
                objective: 'শক্তির ক্রমানুসারে সাজানোর পর ৬-১০ নম্বর আইটেমগুলো সিলেক্ট করুন।',
                hint: 'রো (Row) বাদ দিতে OFFSET ব্যবহার করুন',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
          INSERT INTO items VALUES (6, 'Magic Staff', 'weapon', 80);
          INSERT INTO items VALUES (7, 'Iron Shield', 'armor', 40);
          INSERT INTO items VALUES (8, 'Healing Potion', 'consumable', 30);
          INSERT INTO items VALUES (9, 'Dagger', 'weapon', 25);
          INSERT INTO items VALUES (10, 'Leather Armor', 'armor', 20);
        `,
                expectedQuery: "SELECT * FROM items ORDER BY power DESC LIMIT 5 OFFSET 5",
                successMessage: "নতুন এক সেট আইটেম আপনার সামনে ভেসে উঠল।",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC LIMIT 5 OFFSET 5"
            }
        ]
    },
    {
        id: 'chapter-2',
        title: 'অধ্যায় ২: অবরুদ্ধ গ্রাম',
        description: 'অন্ধকূপ থেকে দিনের আলোয় বেরিয়ে এলেন আপনি — কিন্তু সামনে এক বিধ্বস্ত গ্রাম। ছড়িয়ে ছিটিয়ে থাকা টেবিলগুলোতে বেঁচে যাওয়া মানুষ ও সম্পদের হিসাব রয়েছে। প্রতিরক্ষা সাজাতে এবং আশার আলো জাগাতে অ্যাগ্রিগেট (Aggregates) ফাংশন ব্যবহার করুন।',
        levels: [
            {
                id: '2-1',
                title: 'গ্রামের আদমশুমারি',
                dialogue: [
                    { speaker: 'Narrator', text: "অন্ধকূপের প্রস্থান পথে সূর্যের উষ্ণ আলো এসে পড়ছে। আপনার সামনে এক বিধ্বস্ত গ্রাম — ঘরবাড়ি ভাঙা, মাঠ পোড়া।" },
                    { speaker: 'Elder', text: "ডেটা অন্ধকূপ থেকে আসা পথিক... ঝড়ে আমাদের সব শেষ হয়ে গেছে। কতজন বেঁচে আছে তাও আমরা জানি না।" },
                    { speaker: 'Glitch', text: "আমরা সাহায্য করতে পারি! রো (Row) গণনার জন্য `COUNT(*)` ব্যবহার করো।" },
                    { speaker: 'Glitch', text: "চেষ্টা করো: `SELECT COUNT(*) FROM villagers`।" }
                ],
                story: "ধ্বংসস্তূপ থেকে ধোঁয়া উড়ছে। অসহায় গ্রামবাসীরা সতর্ক আশা নিয়ে আপনার চারপাশে জমা হয়েছে।",
                objective: 'মোট গ্রামবাসীর সংখ্যা গণনা করুন।',
                hint: 'COUNT(*) ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT COUNT(*) FROM villagers",
                successMessage: "ছয়জন বেঁচে আছে নিশ্চিত হওয়া গেল। প্রবীণ ব্যক্তি স্বস্তির নিঃশ্বাস ফেললেন। পুনর্গঠনের একটি ভিত্তি পাওয়া গেল।",
                type: 'select',
                solution: "SELECT COUNT(*) FROM villagers"
            },
            {
                id: '2-1-b',
                title: 'যোদ্ধাদের সংখ্যা',
                dialogue: [
                    { speaker: 'Elder', text: "কিন্তু কতজন লড়াই করতে পারে? আমাদের যোদ্ধাদের সংখ্যা জানা দরকার।" },
                    { speaker: 'Glitch', text: "মিশিয়ে দাও! `COUNT(*)` এর সাথে `WHERE`।" },
                    { speaker: 'You', text: "তার মানে... `SELECT COUNT(*) FROM villagers WHERE role = 'warrior'`?" },
                    { speaker: 'Glitch', text: "একদম ঠিক!" }
                ],
                story: "প্রবীণ ব্যক্তি প্রতিরক্ষা নিয়ে চিন্তিত। তলোয়ার ধরতে পারে এমন মানুষের সঠিক সংখ্যা জানা প্রয়োজন।",
                objective: 'যাদের ভূমিকা (role) "warrior", এমন গ্রামবাসীদের সংখ্যা গণনা করুন।',
                hint: 'COUNT(*) WHERE role = "warrior" ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT COUNT(*) FROM villagers WHERE role = 'warrior'",
                successMessage: "দুজন যোদ্ধা প্রস্তুত। এটি একটি ভালো শুরু।",
                type: 'select',
                solution: "SELECT COUNT(*) FROM villagers WHERE role = 'warrior'"
            },
            {
                id: '2-2',
                title: 'কোষাগার নিরীক্ষা',
                dialogue: [
                    { speaker: 'Elder', text: "আমাদের ভল্টগুলো ধ্বংস হয়ে গেছে। গ্রামবাসীর কাছে মোট কত সোনা অবশিষ্ট আছে তা জানা দরকার।" },
                    { speaker: 'Glitch', text: "সবগুলো যোগ করো! gold কলামের ওপর `SUM()` ফাংশন ব্যবহার করো।" },
                    { speaker: 'You', text: "`SELECT SUM(gold) FROM villagers`। বুঝেছি।" }
                ],
                story: "গ্রামবাসীরা তাদের অবশিষ্ট মুদ্রাগুলো স্কোয়ারে জড়ো করছে। আশার আলো এই মোট সংখ্যার ওপর নির্ভর করছে।",
                objective: 'গ্রামবাসীদের কাছে থাকা মোট সোনার পরিমাণ হিসাব করুন।',
                hint: 'SUM(column) ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT SUM(gold) FROM villagers",
                successMessage: "৪০৫টি স্বর্ণমুদ্রা পাওয়া গেল। খুব বেশি না হলেও, কাজ শুরু করার জন্য যথেষ্ট। গ্রাম আবার প্রাণ ফিরে পাচ্ছে।",
                type: 'select',
                solution: "SELECT SUM(gold) FROM villagers"
            },
            {
                id: '2-2-b',
                title: 'ম্যাজিক ফান্ড',
                dialogue: [
                    { speaker: 'Elder', text: "যাদুকরদের জন্য দামী উপকরণের প্রয়োজন। তাদের কাছে কত সোনা আছে?" },
                    { speaker: 'Glitch', text: "শুধু যাদুকরদের যোগ করো! `WHERE role = 'mage'`।" }
                ],
                story: "যাদুকরেরা তাদের মন্ত্রপূত মুদ্রাগুলো গণনা করতে করতে জটলা পাকাচ্ছে।",
                objective: 'যাদুকরদের (mages) কাছে থাকা মোট সোনার পরিমাণ হিসাব করুন।',
                hint: 'SUM(gold) WHERE role = "mage" ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT SUM(gold) FROM villagers WHERE role = 'mage'",
                successMessage: "যাদুর কাজের জন্য ২১০ সোনা পাওয়া গেল। যাদুকরেরা সন্তুষ্টিতে মাথা নাড়ল।",
                type: 'select',
                solution: "SELECT SUM(gold) FROM villagers WHERE role = 'mage'"
            },
            {
                id: '2-3',
                title: 'গড় সম্পদ',
                dialogue: [
                    { speaker: 'Elder', text: "সঠিকভাবে পুনর্গঠন কর নির্ধারণের জন্য আমাদের মাথা পিছু গড় সম্পদ জানা দরকার।" },
                    { speaker: 'Glitch', text: "`AVG()` ব্যবহার করো! `SELECT AVG(gold) FROM villagers`।" }
                ],
                story: "গ্রামবাসীরা আগুনের চারপাশে বসে কার কত অবদান হওয়া উচিত তা নিয়ে আলোচনা করছে।",
                objective: 'মাথা পিছু গড় সোনার পরিমাণ হিসাব করুন।',
                hint: 'AVG(column) ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT AVG(gold) FROM villagers",
                successMessage: "গড়: ৬৭.৫ সোনা। ন্যায্য কর ধার্য করা হলো। বেঁচে যাওয়াদের মধ্যে আস্থা বাড়ছে।",
                type: 'select',
                solution: "SELECT AVG(gold) FROM villagers"
            },
            {
                id: '2-3-b',
                title: 'যোদ্ধার শক্তি',
                dialogue: [
                    { speaker: 'Glitch', text: "যোদ্ধারা তাদের লুটের মাল নিয়ে বড়াই করছে। চলো শুধু যোদ্ধাদের গড় সম্পদ কত তা দেখি।" },
                    { speaker: 'You', text: "আমি AVG এবং WHERE একত্রে ব্যবহার করতে পারি।" }
                ],
                story: "যোদ্ধারা তাদের অস্ত্র শান দিচ্ছে এবং আপনার হিসাবের অপেক্ষায় আছে।",
                objective: 'ভূমিকা (role) "warrior", এমন গ্রামবাসীদের গড় সোনা হিসাব করুন।',
                hint: 'AVG(...) WHERE ... ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Kael', 'warrior', 45);
        `,
                expectedQuery: "SELECT AVG(gold) FROM villagers WHERE role = 'warrior'",
                successMessage: "৪৭.৫ সোনা। যারা তলোয়ারের ওপর ভর করে বাঁচে, তাদের জন্য এটি সম্মানজনক।",
                type: 'select',
                solution: "SELECT AVG(gold) FROM villagers WHERE role = 'warrior'"
            },
            {
                id: '2-4',
                title: 'সবচেয়ে ধনী ও দরিদ্র',
                dialogue: [
                    { speaker: 'Elder', text: "কার কাছে সবচেয়ে বেশি সোনা আছে? আর কার কাছে সবচেয়ে কম? আমাদের এই দুই প্রান্ত সম্পর্কে জানা জরুরি।" },
                    { speaker: 'Glitch', text: "`MAX(gold)` এবং `MIN(gold)` ব্যবহার করো। একটি কুয়েরিতেই দুটো বের করতে পারো!" },
                    { speaker: 'You', text: "`SELECT MAX(gold), MIN(gold) ...`" }
                ],
                story: "গ্রামের মানুষের মধ্যে সম্পদের পার্থক্য স্পষ্ট হতে শুরু করায় স্কোয়ারে পিনপতন নীরবতা নেমে এল।",
                objective: 'একই কুয়েরিতে সর্বোচ্চ এবং সর্বনিম্ন সোনার পরিমাণ সিলেক্ট করুন।',
                hint: 'MAX এবং MIN একত্রে ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT MAX(gold), MIN(gold) FROM villagers",
                successMessage: "সবচেয়ে ধনী: ১১০, সবচেয়ে দরিদ্র: ২০। গ্রাম অভাবী মানুষদের পাশে দাঁড়ানোর প্রতিজ্ঞা করল।",
                type: 'select',
                solution: "SELECT MAX(gold), MIN(gold) FROM villagers"
            },
            {
                id: '2-5',
                title: 'চিকিৎসকদের সহায়তা',
                dialogue: [
                    { speaker: 'Elder', text: "চিকিৎসকেরা আমাদের গ্রামের প্রাণ। তাদের কি পর্যাপ্ত তহবিল আছে? তাদের গড় সোনা পরীক্ষা করো।" },
                    { speaker: 'Glitch', text: "তুমি তো এটা জানোই! `AVG`-এর সাথে `WHERE` role 'healer' বসিয়ে দাও।" }
                ],
                story: "মেডিক্যাল টেন্টটি খুব ব্যস্ত। আপনি যারা জীবন বাঁচায় তাদের আর্থিক অবস্থা পরীক্ষা করছেন।",
                objective: 'যাদের ভূমিকা (role) "healer", তাদের গড় সোনা হিসাব করুন।',
                hint: 'AVG(gold) WHERE role = "healer"',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
          INSERT INTO villagers VALUES (7, 'Dona', 'healer', 60);
        `,
                expectedQuery: "SELECT AVG(gold) FROM villagers WHERE role = 'healer'",
                successMessage: "গড়ে ৭০ সোনা। তাদের অবস্থা মোটামুটি ভালোই বলা চলে।",
                type: 'select',
                solution: "SELECT AVG(gold) FROM villagers WHERE role = 'healer'"
            },
            {
                id: '2-6',
                title: 'গিল্ড গঠন',
                dialogue: [
                    { speaker: 'Elder', text: "আমাদের দল গঠন করতে হবে। প্রতিটি পেশায় কতজন আছে আমার তা জানা দরকার।" },
                    { speaker: 'Glitch', text: "চারবার `WHERE` ব্যবহার না করে... `GROUP BY` ব্যবহার করো!" },
                    { speaker: 'You', text: "`SELECT role, COUNT(*) FROM villagers GROUP BY role`। এটি স্বয়ংক্রিয়ভাবে তাদের দলভুক্ত করবে।" }
                ],
                story: "বেঁচে যাওয়া মানুষরা তাদের পেশা অনুযায়ী সারিবদ্ধ হচ্ছে, গ্রামের প্রতিরক্ষায় গিল্ড বা সঙ্ঘ গড়ে তোলার জন্য তারা প্রস্তুত।",
                objective: 'প্রতিটি রোলের (role) বিপরীতে গ্রামবাসীর সংখ্যা সিলেক্ট করুন, GROUP BY ব্যবহার করে।',
                hint: 'GROUP BY এবং COUNT(*) ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT role, COUNT(*) FROM villagers GROUP BY role",
                successMessage: "গণনা সম্পন্ন: ২ জন যোদ্ধা, ২ জন যাদুকর, ১ জন চিকিৎসক, ১ জন নির্মাতা। ভারসাম্যপূর্ণ দল গঠিত হলো। গ্রাম এখন আরও শক্তিশালী মনে হচ্ছে।",
                type: 'select',
                solution: "SELECT role, COUNT(*) FROM villagers GROUP BY role"
            },
            {
                id: '2-6-b',
                title: 'সম্পদ বণ্টন',
                dialogue: [
                    { speaker: 'Elder', text: "প্রতিটি গিল্ডকে সজ্জিত করার মতো পর্যাপ্ত সোনা কি আমাদের আছে? প্রতিটি রোলের জন্য মোট সোনা যোগ করো।" },
                    { speaker: 'Glitch', text: "আবারও রোল অনুযায়ী গ্রুপ করো, কিন্তু এবার মোট সোনার পরিমাণ হিসাব করো!" }
                ],
                story: "গিল্ডগুলো তাদের সম্মিলিত সম্পদ প্রদর্শন করছে।",
                objective: 'প্রতিটি রোলের (role) জন্য মোট সোনার পরিমাণ সিলেক্ট করুন, GROUP BY ব্যবহার করে।',
                hint: 'SELECT role, SUM(gold) ... GROUP BY role',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
        `,
                expectedQuery: "SELECT role, SUM(gold) FROM villagers GROUP BY role",
                successMessage: "প্রতিটি গিল্ডের আর্থিক শক্তি উন্মোচিত হলো।",
                type: 'select',
                solution: "SELECT role, SUM(gold) FROM villagers GROUP BY role"
            },
            {
                id: '2-7',
                title: 'অভিজাত দল',
                dialogue: [
                    { speaker: 'Elder', text: "আমরা কেবল সেই সব অভিজাত দলগুলোকে সমর্থন দিতে পারি যাদের সদস্য সংখ্যা একের অধিক।" },
                    { speaker: 'Glitch', text: "গ্রুপগুলোকে ফিল্টার করো! `GROUP BY`-এর পরে `HAVING` ব্যবহার করো।" },
                    { speaker: 'Glitch', text: "`HAVING COUNT(*) > 1`।" }
                ],
                story: "শক্তিশালী গিল্ডগুলো যুদ্ধের প্রস্তুতি নিচ্ছে। কেবল বড় দলগুলোই বড় বিপদের মোকাবিলা করতে পারবে।",
                objective: 'রোল এবং সদস্য সংখ্যা সিলেক্ট করুন, কেবল সেই গ্রুপগুলো দেখান যাদের সদস্য সংখ্যা ১-এর বেশি।',
                hint: 'GROUP BY-এর পরে HAVING ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT role, COUNT(*) FROM villagers GROUP BY role HAVING COUNT(*) > 1",
                successMessage: "যোদ্ধা এবং যাদুকররা অভিজাত দল হিসেবে সামনে এগিয়ে এল। গ্রামের প্রতিরক্ষা মজবুত হলো।",
                type: 'select',
                solution: "SELECT role, COUNT(*) FROM villagers GROUP BY role HAVING COUNT(*) > 1"
            },
            {
                id: '2-7-b',
                title: 'ধনী গিল্ড',
                dialogue: [
                    { speaker: 'Glitch', text: "কেবল সবচেয়ে ধনী গিল্ডগুলোই নতুন বর্ম কিনতে পারবে।" },
                    { speaker: 'Glitch', text: "আমাকে সেই সব গিল্ড দেখাও যাদের মোট সোনা ১৫০-এর বেশি।" }
                ],
                story: "কামার অগ্রিম টাকা দাবি করছে।",
                objective: 'রোল এবং সোনার সমষ্টি সিলেক্ট করুন, যেখানে SUM(gold) ১৫০-এর বেশি।',
                hint: 'HAVING SUM(gold) > 150',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Myra', 'mage', 110);
          INSERT INTO villagers VALUES (4, 'Kael', 'warrior', 45);
        `,
                expectedQuery: "SELECT role, SUM(gold) FROM villagers GROUP BY role HAVING SUM(gold) > 150",
                successMessage: "কেবল যাদুকরেরাই এই আপগ্রেড সামলাতে সক্ষম। তারা তাদের মন্ত্রপূত কাজ শুরু করল।",
                type: 'select',
                solution: "SELECT role, SUM(gold) FROM villagers GROUP BY role HAVING SUM(gold) > 150"
            },
            {
                id: '2-8',
                title: 'শর্তসাপেক্ষ সমষ্টি',
                dialogue: [
                    { speaker: 'Glitch', text: "একটি শেষ চ্যালেঞ্জ! প্রবীণ ব্যক্তি কেবল যোদ্ধাদের মোট সোনা জানতে চান... তবে একটু কায়দা করে।" },
                    { speaker: 'Glitch', text: "`SUM`-এর ভেতরে `CASE` ব্যবহার করো! `SUM(CASE WHEN role = 'warrior' THEN gold ELSE 0 END)`।" }
                ],
                story: "অভিজ্ঞ যোদ্ধারা গর্বের সাথে দাঁড়িয়ে আছে, তাদের থলি অর্জিত মুদ্রায় পূর্ণ।",
                objective: 'SUM-এর ভেতর CASE ব্যবহার করে কেবল যোদ্ধাদের মোট সোনার পরিমাণ হিসাব করুন।',
                hint: 'SUM(CASE WHEN role = "warrior" THEN gold ELSE 0 END)',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
          INSERT INTO villagers VALUES (4, 'Sera', 'healer', 80);
          INSERT INTO villagers VALUES (5, 'Kael', 'warrior', 45);
          INSERT INTO villagers VALUES (6, 'Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT SUM(CASE WHEN role = 'warrior' THEN gold ELSE 0 END) FROM villagers",
                successMessage: "কেবল যোদ্ধাদের কাছ থেকেই ৯৫ সোনা পাওয়া গেল। তারা দেয়াল মজবুত করার জন্য এটি উৎসর্গ করল। মনোবল তুঙ্গে!",
                type: 'select',
                solution: "SELECT SUM(CASE WHEN role = 'warrior' THEN gold ELSE 0 END) FROM villagers"
            }
        ]
    },
    {
        id: 'chapter-3',
        title: 'অধ্যায় ৩: অন্ধকার বন',
        description: 'গ্রামের সীমানা ছাড়িয়ে সামনেই এক প্রাচীন, আঁকাবাঁকা বন কুয়াশায় ঢাকা। পথ এবং গন্তব্যের টেবিলগুলো শিকড়ের মতো একে অপরের সাথে জড়িয়ে আছে। নিরাপদ পথ খুঁজে পেতে Join এবং Subquery আয়ত্ত করুন।',
        levels: [
            {
                id: '3-1',
                title: 'মোড়',
                dialogue: [
                    { speaker: 'Narrator', text: "গ্রামটি পেছনে ম্লান হয়ে আসছে। ঘন জঙ্গল আপনাকে ঘিরে ধরছে, গাছের ডালগুলো যেন প্রাকৃতিক খিলান তৈরি করেছে।" },
                    { speaker: 'Glitch', text: "সহজ দিয়ে শুরু করি। আমাদের 'paths' বা পথগুলোকে তাদের গন্তব্যের সাথে যুক্ত করতে হবে।" },
                    { speaker: 'Glitch', text: "`JOIN destinations ON paths.destination_id = destinations.id` ব্যবহার করো।" },
                    { speaker: 'Glitch', text: "এটি সেই সব রো বা সারিগুলোকে সংযুক্ত করবে যেখানে আইডিগুলো মিলে যায়!" }
                ],
                story: "কুয়াশা ঘেরা মোড়ে অনেকগুলো পথ। প্রতিটি পথ হয় বিপদ নয়তো পরিত্রাণের প্রতিশ্রুতি দিচ্ছে।",
                objective: 'destination_id-এর ভিত্তিতে "paths" এবং "destinations" টেবিল দুটি জয়েন করে সব কলাম সিলেক্ট করুন।',
                hint: 'INNER JOIN ... ON ব্যবহার করুন',
                initSql: `
          CREATE TABLE paths (id INTEGER, name TEXT, destination_id INTEGER);
          CREATE TABLE destinations (id INTEGER, name TEXT, danger_level INTEGER);
          INSERT INTO paths VALUES (1, 'Mossy Trail', 2);
          INSERT INTO paths VALUES (2, 'Rocky Road', 1);
          INSERT INTO paths VALUES (3, 'Shadow Path', 3);
          INSERT INTO destinations VALUES (1, 'Crystal Cave', 5);
          INSERT INTO destinations VALUES (2, 'Old Ruins', 2);
          INSERT INTO destinations VALUES (3, 'Dragon Lair', 10);
        `,
                expectedQuery: "SELECT * FROM paths JOIN destinations ON paths.destination_id = destinations.id",
                successMessage: "মানচিত্রটি আপনার মনে স্পষ্ট হয়ে উঠল। Shadow Path ড্রাগনের গুহার দিকে নিয়ে যাচ্ছে... আপনি বুদ্ধিমত্তার সাথে সঠিক পথ বেছে নিলেন।",
                type: 'select',
                solution: "SELECT * FROM paths JOIN destinations ON paths.destination_id = destinations.id"
            },
            {
                id: '3-1-b',
                title: 'নিরাপদ পথ',
                dialogue: [
                    { speaker: 'Glitch', text: "আমাদের এমন একটি পথ দরকার যা খুব বেশি বিপজ্জনক নয়। চলো জয়েন করা মানচিত্রটিকে ফিল্টার করি!" },
                    { speaker: 'You', text: "তার মানে... প্রথমে জয়েন করব, তারপর `WHERE` ব্যবহার করব?" },
                    { speaker: 'Glitch', text: "ঠিক তাই। এমন গন্তব্য খুঁজে বের করো যার `danger_level` ৫-এর কম।" }
                ],
                story: "আপনি নিরাপদ পথের জন্য মানচিত্রটি স্ক্যান করছেন। ড্রাগনের গুহা নিশ্চিতভাবেই এড়িয়ে চলতে হবে।",
                objective: 'টেবিল দুটি জয়েন করুন, এরপর যেখানে danger_level ৫-এর কম সেটি সিলেক্ট করুন।',
                hint: 'JOIN ... ON ... WHERE danger_level < 5',
                initSql: `
          CREATE TABLE paths (id INTEGER, name TEXT, destination_id INTEGER);
          CREATE TABLE destinations (id INTEGER, name TEXT, danger_level INTEGER);
          INSERT INTO paths VALUES (1, 'Mossy Trail', 2);
          INSERT INTO paths VALUES (2, 'Rocky Road', 1);
          INSERT INTO paths VALUES (3, 'Shadow Path', 3);
          INSERT INTO destinations VALUES (1, 'Crystal Cave', 5);
          INSERT INTO destinations VALUES (2, 'Old Ruins', 2);
          INSERT INTO destinations VALUES (3, 'Dragon Lair', 10);
        `,
                expectedQuery: "SELECT * FROM paths JOIN destinations ON paths.destination_id = destinations.id WHERE danger_level < 5",
                successMessage: "'Old Ruins' বা প্রাচীন ধ্বংসস্তূপের পথটি মৃদু আলোয় জ্বলছে। এটি নিরাপদ মনে হচ্ছে।",
                type: 'select',
                solution: "SELECT * FROM paths JOIN destinations ON paths.destination_id = destinations.id WHERE danger_level < 5"
            },
            {
                id: '3-2',
                title: 'লুকানো সম্পদ',
                dialogue: [
                    { speaker: 'Glitch', text: "কিছু পথে সম্পদ আছে, আবার কিছুতে নেই। সাধারণ JOIN হয়তো খালি পথগুলোকে লুকিয়ে রাখবে।" },
                    { speaker: 'Glitch', text: "`LEFT JOIN` ব্যবহার করো। এটি বাম টেবিলের (paths) সবকিছু রাখবে, এমনকি যদি treasures টেবিলে কোনো মিল নাও থাকে।" },
                    { speaker: 'You', text: "তার মানে আমি এমন পথও দেখব যেখানে সম্পদ NULL?" },
                    { speaker: 'Glitch', text: "হ্যাঁ! `SELECT * FROM paths LEFT JOIN treasures ON ...`" }
                ],
                story: "পাতার নিচে সোনার ঝিলিক দেখা যাচ্ছে। আপনি ধনী হোক বা দরিদ্র, বনের সম্পূর্ণ চিত্রটি দেখতে চান।",
                objective: 'LEFT JOIN ব্যবহার করে সব পথ এবং তাদের সম্পদ সিলেক্ট করুন।',
                hint: 'LEFT JOIN ব্যবহার করুন',
                initSql: `
          CREATE TABLE paths (id INTEGER, name TEXT);
          CREATE TABLE treasures (id INTEGER, name TEXT, path_id INTEGER);
          INSERT INTO paths VALUES (1, 'Mossy Trail');
          INSERT INTO paths VALUES (2, 'Rocky Road');
          INSERT INTO paths VALUES (3, 'Shadow Path');
          INSERT INTO treasures VALUES (1, 'Gold Coin', 1);
          INSERT INTO treasures VALUES (2, 'Silver Ring', 1);
          INSERT INTO treasures VALUES (3, 'Cursed Gem', 3);
        `,
                expectedQuery: "SELECT * FROM paths LEFT JOIN treasures ON paths.id = treasures.path_id",
                successMessage: "Rocky Road-এ সম্পদের ঘরটি NULL দেখাচ্ছে — তার মানে এটি নিরাপদ কিন্তু শূন্য। জ্ঞানই আপনার পথপ্রদর্শক।",
                type: 'select',
                solution: "SELECT * FROM paths LEFT JOIN treasures ON paths.id = treasures.path_id"
            },
            {
                id: '3-2-b',
                title: 'খালি হাত',
                dialogue: [
                    { speaker: 'Glitch', text: "কোন পথগুলোতে একদমই কোনো সম্পদ নেই? আমি হতাশ হতে চাই না।" },
                    { speaker: 'You', text: "আমি `LEFT JOIN` ব্যবহার করে... NULL চেক করতে পারি?" },
                    { speaker: 'Glitch', text: "বুদ্ধিমান! ফিল্টার করো যেখানে সম্পদের নাম `IS NULL`।" }
                ],
                story: "সময় অপচয় এড়াতে আপনি মানচিত্রে শূন্য পথগুলো চিহ্নিত করছেন।",
                objective: 'LEFT JOIN করুন এবং যেখানে সম্পদের নাম IS NULL সেটি ফিল্টার করুন।',
                hint: 'LEFT JOIN ... WHERE treasures.name IS NULL',
                initSql: `
          CREATE TABLE paths (id INTEGER, name TEXT);
          CREATE TABLE treasures (id INTEGER, name TEXT, path_id INTEGER);
          INSERT INTO paths VALUES (1, 'Mossy Trail');
          INSERT INTO paths VALUES (2, 'Rocky Road');
          INSERT INTO paths VALUES (3, 'Shadow Path');
          INSERT INTO treasures VALUES (1, 'Gold Coin', 1);
          INSERT INTO treasures VALUES (2, 'Silver Ring', 1);
          INSERT INTO treasures VALUES (3, 'Cursed Gem', 3);
        `,
                expectedQuery: "SELECT * FROM paths LEFT JOIN treasures ON paths.id = treasures.path_id WHERE treasures.name IS NULL",
                successMessage: "Rocky Road পথটি অনুর্বর হিসেবে চিহ্নিত হলো। আপনি সেখানে সময় নষ্ট করবেন না।",
                type: 'select',
                solution: "SELECT * FROM paths LEFT JOIN treasures ON paths.id = treasures.path_id WHERE treasures.name IS NULL"
            },
            {
                id: '3-3',
                title: 'বনরক্ষক',
                dialogue: [
                    { speaker: 'Guardian', text: "থামো! গাছের আড়াল থেকে বনরক্ষক বেরিয়ে এল।" },
                    { speaker: 'Guardian', text: "কেবল তারাই যেতে পারবে যারা ড্রাগনের গুহার বিপদ সীমা (danger_level) জানে।" },
                    { speaker: 'Glitch', text: "এটি একটি সহজ অনুসন্ধান। `SELECT danger_level ... WHERE ...`" }
                ],
                story: "একটি বিশাল বৃক্ষ-মানব বনের শেষ সীমানায় পথ আটকে দাঁড়িয়েছে, তার চোখ প্রাচীন প্রজ্ঞায় জ্বলছে।",
                objective: 'যেখানে নাম হলো "Dragon Lair", সেখানকার danger_level সিলেক্ট করুন।',
                hint: 'সহজ WHERE ফিল্টার ব্যবহার করুন',
                initSql: `
          CREATE TABLE destinations (id INTEGER, name TEXT, danger_level INTEGER);
          INSERT INTO destinations VALUES (1, 'Crystal Cave', 5);
          INSERT INTO destinations VALUES (2, 'Old Ruins', 2);
          INSERT INTO destinations VALUES (3, 'Dragon Lair', 10);
        `,
                expectedQuery: "SELECT danger_level FROM destinations WHERE name = 'Dragon Lair'",
                successMessage: "আপনি উত্তর দিলেন: '১০'। বনরক্ষক গম্ভীরভাবে মাথা নাড়ল এবং সরে দাঁড়াল। সামনে যাওয়ার পথ খুলে গেল।",
                type: 'select',
                solution: "SELECT danger_level FROM destinations WHERE name = 'Dragon Lair'"
            },
            {
                id: '3-4',
                title: 'শূন্যতা',
                dialogue: [
                    { speaker: 'Glitch', text: "কিছু গন্তব্য কেমন যেন... ফাঁকা মনে হচ্ছে। ডেটার ভেতরে কেবল এক একটি শূন্যতা।" },
                    { speaker: 'Glitch', text: "খালি মান পরীক্ষা করতে `IS NULL` ব্যবহার করো। কখনো `= NULL` ব্যবহার করবে না!" },
                    { speaker: 'Glitch', text: "চেষ্টা করো `WHERE name IS NULL`।" }
                ],
                story: "কিছু জায়গা কেবল ঘূর্ণায়মান শূন্যতা নিয়ে দাঁড়িয়ে আছে — অজানা রাজ্যের প্রবেশদ্বার যেন।",
                objective: 'যেখানে নাম IS NULL, সেই সব গন্তব্য সিলেক্ট করুন।',
                hint: 'IS NULL ব্যবহার করুন',
                initSql: `
          CREATE TABLE destinations (id INTEGER, name TEXT, danger_level INTEGER);
          INSERT INTO destinations VALUES (1, 'Crystal Cave', 5);
          INSERT INTO destinations VALUES (2, NULL, 0);
          INSERT INTO destinations VALUES (3, 'Dragon Lair', 10);
        `,
                expectedQuery: "SELECT * FROM destinations WHERE name IS NULL",
                successMessage: "আপনি শূন্যতার দিকে তাকালেন... এবং এটি অনুপস্থিতির গোপন কথা ফিসফিস করে বলল। আপনার শরীর শিউরে উঠল।",
                type: 'select',
                solution: "SELECT * FROM destinations WHERE name IS NULL"
            },
            {
                id: '3-5',
                title: 'বহুবিশ্ব (Multiverse)',
                dialogue: [
                    { speaker: 'Glitch', text: "ওহ—আমি প্রতিটি পথকে প্রতিটি গন্তব্যের সাথে একসাথে যুক্ত হতে দেখছি!" },
                    { speaker: 'You', text: "শুনে মনে হচ্ছে কার্টেসিয়ান প্রোডাক্ট (Cartesian product)।" },
                    { speaker: 'Glitch', text: "হ্যাঁ! `CROSS JOIN` ব্যবহার করো। `SELECT * FROM paths CROSS JOIN destinations`।" }
                ],
                story: "বাস্তবতা ক্ষণিকের জন্য ভেঙে গেল, অসীম ওভারল্যাপিং সম্ভাবনা ফুটে উঠল।",
                objective: 'paths CROSS JOIN destinations থেকে সব কলাম সিলেক্ট করুন।',
                hint: 'CROSS JOIN ব্যবহার করুন',
                initSql: `
          CREATE TABLE paths (name TEXT);
          CREATE TABLE destinations (name TEXT);
          INSERT INTO paths VALUES ('Path A');
          INSERT INTO paths VALUES ('Path B');
          INSERT INTO destinations VALUES ('Dest 1');
          INSERT INTO destinations VALUES ('Dest 2');
        `,
                expectedQuery: "SELECT * FROM paths CROSS JOIN destinations",
                successMessage: "চারটি সমান্তরাল বাস্তবতা স্বচ্ছতায় মিলে গেল। একটি সত্য পথ বেরিয়ে এল।",
                type: 'select',
                solution: "SELECT * FROM paths CROSS JOIN destinations"
            },
            {
                id: '3-6',
                title: 'নির্দেশনা অনুক্রম (Hierarchy)',
                dialogue: [
                    { speaker: 'Glitch', text: "গ্রামের স্কাউটরা নেতাদের কাছে রিপোর্ট করে। আমাদের দেখতে হবে কে কাকে পরিচালনা করছে।" },
                    { speaker: 'Glitch', text: "টেবিলটিকে তার নিজের সাথে জয়েন করো! `FROM employees e LEFT JOIN employees m ON e.manager_id = m.id`।" },
                    { speaker: 'Glitch', text: "'e' এবং 'm' এই এলিয়াসগুলো দিতে ভুলো না!" }
                ],
                story: "বনের ভেতরে লুকিয়ে থাকা স্কাউটদের একটি দল কঠোর অনুক্রমের অধীনে কাজ করছে।",
                objective: 'employees টেবিলটিকে নিজের সাথে জয়েন করে কর্মচারীর নাম এবং ম্যানেজারের নাম দেখান।',
                hint: 'এলিয়াস এবং ম্যানেজারের জন্য LEFT JOIN ব্যবহার করুন',
                initSql: `
          CREATE TABLE employees (id INTEGER, name TEXT, manager_id INTEGER);
          INSERT INTO employees VALUES (1, 'Elder', NULL);
          INSERT INTO employees VALUES (2, 'Born', 1);
          INSERT INTO employees VALUES (3, 'Alina', 1);
          INSERT INTO employees VALUES (4, 'Kael', 2);
        `,
                expectedQuery: "SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id",
                successMessage: "সম্পূর্ণ অনুক্রমটি আপনার সামনে ফুটে উঠল। নেতৃত্বের ধারাটি এখন পরিষ্কার।",
                type: 'select',
                solution: "SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id"
            }
        ]
    },
    {
        id: 'chapter-4',
        title: 'অধ্যায় ৪: নিষিদ্ধ লাইব্রেরি',
        description: 'বনের গভীরে অসীম জ্ঞানের এক জরাজীর্ণ লাইব্রেরি দাঁড়িয়ে আছে। ধুলোমাখা বইগুলো গোপন কথা ফিসফিস করছে। নিষিদ্ধ প্রজ্ঞা উন্মোচনের জন্য উন্নত লজিক, প্যাটার্ন এবং সাবকুয়েরি আয়ত্ত করুন।',
        levels: [
            {
                id: '4-1',
                title: 'ফিসফিস করা বইগুলো',
                dialogue: [
                    { speaker: 'Narrator', text: "প্রাচীন পাথরের দরজাগুলো ক্যাঁচক্যাঁচ শব্দে খুলে গেল। বইয়ের তাকগুলো আকাশচুম্বী, বইগুলো বাতাসে ভাসছে।" },
                    { speaker: 'Librarian', text: "চুপ! কেবল সেই বইগুলোই নিরাপদ যার শিরোনামে 'Magic' কথাটি আছে।" },
                    { speaker: 'Glitch', text: "আংশিক মিলের জন্য আমরা `=` ব্যবহার করতে পারি না। আমাদের `LIKE` দরকার।" },
                    { speaker: 'Glitch', text: "ওয়াইল্ডকার্ড হিসেবে `%` ব্যবহার করো। `WHERE title LIKE '%Magic%'` শিরোনামের ভেতরে থাকা 'Magic' শব্দটি খুঁজে পাবে।" }
                ],
                story: "বইগুলো মৃদু শব্দ করছে, অদৃশ্য বাতাসে পাতাগুলো ওল্টাচ্ছে। বিপজ্জনক জ্ঞান ওত পেতে আছে ভেতরে।",
                objective: 'শিরোনামে "Magic" আছে এমন সব বই সিলেক্ট করুন।',
                hint: 'LIKE "%pattern%" ব্যবহার করুন',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT, pages INTEGER);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod', 300);
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock', 150);
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef', 200);
          INSERT INTO books VALUES (4, 'Light Magic for Beginners', 'Priest', 120);
          INSERT INTO books VALUES (5, 'Science of Magic', 'Alchemist', 400);
        `,
                expectedQuery: "SELECT * FROM books WHERE title LIKE '%Magic%'",
                successMessage: "তিনটি নিষিদ্ধ বই ভেসে নিচে নেমে এল, পাতাগুলো আগ্রহে খুলে যাচ্ছে। জাদুর জ্ঞান আপনার ভেতরে প্রবাহিত হচ্ছে।",
                type: 'select',
                solution: "SELECT * FROM books WHERE title LIKE '%Magic%'"
            },
            {
                id: '4-1-b',
                title: 'লেখক অনুসন্ধান',
                dialogue: [
                    { speaker: 'Glitch', text: "আমি সেই সব লেখকের বই খুঁজে পেতে চাই যাদের নাম 'General' দিয়ে শুরু হয়।" },
                    { speaker: 'You', text: "আমি আবারও `LIKE` ব্যবহার করতে পারি! শুরুতে 'General', আর শেষে `%`।" },
                    { speaker: 'Glitch', text: "সঠিক। `LIKE 'General%'`।" }
                ],
                story: "আপনি ধুলোমাখা তাকের মধ্যে সামরিক কৌশলের বই খুঁজছেন।",
                objective: 'সেই সব বই সিলেক্ট করুন যাদের লেখকের নাম "General" দিয়ে শুরু হয়।',
                hint: 'LIKE "General%" ব্যবহার করুন',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT, pages INTEGER);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod', 300);
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock', 150);
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef', 200);
          INSERT INTO books VALUES (4, 'Light Magic for Beginners', 'Priest', 120);
          INSERT INTO books VALUES (5, 'General Strategy', 'General Kenobi', 350);
        `,
                expectedQuery: "SELECT * FROM books WHERE author LIKE 'General%'",
                successMessage: "মিলিটারি আর্কাইভ আপনার জন্য উন্মুক্ত হলো।",
                type: 'select',
                solution: "SELECT * FROM books WHERE author LIKE 'General%'"
            },
            {
                id: '4-2',
                title: 'ধুলোমাখা লেখকবৃন্দ',
                dialogue: [
                    { speaker: 'Glitch', text: "এখানে তো অনেক ডুপ্লিকেট নাম! আমি কেবল অনন্য (unique) লেখকদের দেখতে চাই।" },
                    { speaker: 'Librarian', text: "ফলাফল থেকে ডুপ্লিকেটগুলো সরাতে `DISTINCT` ব্যবহার করো।" },
                    { speaker: 'Glitch', text: "`SELECT DISTINCT author FROM books`।" }
                ],
                story: "বারবার একই সংস্করণ রাখার ফলে তাকগুলো নুয়ে পড়েছে। আসল লেখকরা এর ভেতরেই লুকিয়ে আছে।",
                objective: 'books টেবিল থেকে অনন্য লেখকদের নাম সিলেক্ট করুন।',
                hint: 'SELECT DISTINCT ব্যবহার করুন',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT);
          INSERT INTO books VALUES (1, 'Book A', 'Author X');
          INSERT INTO books VALUES (2, 'Book B', 'Author Y');
          INSERT INTO books VALUES (3, 'Book C', 'Author X');
          INSERT INTO books VALUES (4, 'Book D', 'Author Z');
          INSERT INTO books VALUES (5, 'Book E', 'Author Y');
        `,
                expectedQuery: "SELECT DISTINCT author FROM books",
                successMessage: "অপ্রয়োজনীয় কপিগুলো গায়েব হয়ে গেল। তিনজন অনন্য লেখকের নাম স্বচ্ছভাবে দেখা যাচ্ছে।",
                type: 'select',
                solution: "SELECT DISTINCT author FROM books"
            },
            {
                id: '4-3',
                title: 'সাংকেতিক লিপি',
                dialogue: [
                    { speaker: 'Librarian', text: "ভল্টটি খোলার জন্য আপনাকে কোডগুলোকে চিহ্নিত করতে হবে।" },
                    { speaker: 'Glitch', text: "যদি আইডি জোড় হয়, তবে একে 'Even' বলো। নাহলে 'Odd'।" },
                    { speaker: 'You', text: "এর জন্য কুয়েরির ভেতরে লজিক লাগবে..." },
                    { speaker: 'Glitch', text: "`CASE WHEN condition THEN value ELSE other END` ব্যবহার করো।" }
                ],
                story: "তাকের পেছনে একটি সিল করা ভল্ট স্পন্দিত হচ্ছে, লজিক্যাল ডিক্রিপশনের অপেক্ষায়।",
                objective: 'id এবং একটি নতুন কলাম "type" সিলেক্ট করুন যা id অনুযায়ী "Even" বা "Odd" হবে।',
                hint: 'CASE WHEN id % 2 = 0 THEN "Even" ELSE "Odd" END ব্যবহার করুন',
                initSql: `
          CREATE TABLE codes (id INTEGER);
          INSERT INTO codes VALUES (1);
          INSERT INTO codes VALUES (2);
          INSERT INTO codes VALUES (3);
          INSERT INTO codes VALUES (4);
        `,
                expectedQuery: "SELECT id, CASE WHEN id % 2 = 0 THEN 'Even' ELSE 'Odd' END AS type FROM codes",
                successMessage: "সাংকেতিক লিপিটি নিখুঁতভাবে মিলে গেল। ভল্টের দরজাটি ক্যাঁচক্যাঁচ শব্দে খুলে গিয়ে ভেতরে থাকা উজ্জ্বল আইটেমগুলো দেখা যাচ্ছে।",
                type: 'select',
                solution: "SELECT id, CASE WHEN id % 2 = 0 THEN 'Even' ELSE 'Odd' END AS type FROM codes"
            },
            {
                id: '4-3-b',
                title: 'বই বাছাইকারী',
                dialogue: [
                    { speaker: 'Librarian', text: "বইগুলো সাজাও! ২০০ পাতার কম হলে 'Short', নাহলে 'Long'।" },
                    { speaker: 'You', text: "আরেকটি `CASE` স্টেটমেন্ট।" },
                    { speaker: 'Glitch', text: "শিরোনাম এবং নতুন 'length' ক্যাটাগরি দেখাও।" }
                ],
                story: "লাইব্রেরিয়ান শৃঙ্খলা পছন্দ করেন। আপনাকে এই বিশৃঙ্খলা বিভাগ অনুযায়ী সাজাতে হবে।",
                objective: 'title এবং একটি "length" কলাম (২০০ পাতার কম হলে "Short", নাহলে "Long") সিলেক্ট করুন।',
                hint: 'CASE WHEN pages < 200 ... ব্যবহার করুন',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT, pages INTEGER);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod', 300);
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock', 150);
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef', 200);
        `,
                expectedQuery: "SELECT title, CASE WHEN pages < 200 THEN 'Short' ELSE 'Long' END AS length FROM books",
                successMessage: "বইগুলো উড়ে গিয়ে তাদের নিজ নিজ জায়গায় বসে গেল।",
                type: 'select',
                solution: "SELECT title, CASE WHEN pages < 200 THEN 'Short' ELSE 'Long' END AS length FROM books"
            },
            {
                id: '4-4',
                title: 'একত্রীকরণ',
                dialogue: [
                    { speaker: 'Glitch', text: "দুইটি প্রাচীন স্ক্রলে নিরাপদ অঞ্চলের তালিকা দেওয়া আছে। আমাদের সেগুলো মেলাতে হবে।" },
                    { speaker: 'You', text: "UNION ব্যবহার করলে ডুপ্লিকেটগুলো বাদ দিয়ে মার্জ হয়ে যাবে।" }
                ],
                story: "ছিঁড়ে যাওয়া স্ক্রলগুলো বাতাসে ভাসছে, একাকী সেগুলো অসম্পূর্ণ।",
                objective: '"scroll_a" এবং "scroll_b" থেকে নামগুলো UNION করে সিলেক্ট করুন।',
                hint: 'দুটি SELECT-এর মাঝে UNION ব্যবহার করুন',
                initSql: `
          CREATE TABLE scroll_a (name TEXT);
          CREATE TABLE scroll_b (name TEXT);
          INSERT INTO scroll_a VALUES ('Safe Haven');
          INSERT INTO scroll_a VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Shelter');
        `,
                expectedQuery: "SELECT name FROM scroll_a UNION SELECT name FROM scroll_b",
                successMessage: "স্ক্রলগুলো একটি সম্পূর্ণ মানচিত্রে পরিণত হলো। বিপদের মাঝেও একটি নিরাপদ পথ বেরিয়ে এল।",
                type: 'select',
                solution: "SELECT name FROM scroll_a UNION SELECT name FROM scroll_b"
            },
            {
                id: '4-5',
                title: 'গভীর প্রজ্ঞা',
                dialogue: [
                    { speaker: 'Glitch', text: "আমি কেবল গড় পাতার চেয়ে মোটা বইগুলো চাই!" },
                    { speaker: 'You', text: "আমাদের আগে গড় হিসাব করতে হবে..." },
                    { speaker: 'Glitch', text: "সাবকুয়েরি ব্যবহার করো! `WHERE pages > (SELECT AVG(pages) FROM books)`।" }
                ],
                story: "বিশাল বিশাল বইগুলো তাক দখল করে আছে। কেবল সেই গম্ভীর বইগুলোতেই গভীর জ্ঞান লুকিয়ে আছে।",
                objective: 'books থেকে শিরোনাম সিলেক্ট করুন যেখানে pages > (SELECT AVG(pages) FROM books)।',
                hint: 'WHERE ক্লজে সাবকুয়েরি ব্যবহার করুন',
                initSql: `
          CREATE TABLE books (title TEXT, pages INTEGER);
          INSERT INTO books VALUES ('Tiny Book', 50);
          INSERT INTO books VALUES ('Medium Book', 200);
          INSERT INTO books VALUES ('Giant Book', 500);
          INSERT INTO books VALUES ('Huge Scroll', 1000);
        `,
                expectedQuery: "SELECT title FROM books WHERE pages > (SELECT AVG(pages) FROM books)",
                successMessage: "সবচেয়ে শক্তিশালী বইগুলো অন্যদের ছাপিয়ে উপরে উঠে এল। প্রকৃত জ্ঞান গাম্ভীর্যের মধ্যেই থাকে।",
                type: 'select',
                solution: "SELECT title FROM books WHERE pages > (SELECT AVG(pages) FROM books)"
            },
            {
                id: '4-5-b',
                title: 'ক্ষুদ্রের চেয়ে বড়',
                dialogue: [
                    { speaker: 'Glitch', text: "এখন সেই সব বই খুঁজে বের করো যেগুলোর পাতা 'Tiny Book'-এর চেয়ে বেশি।" },
                    { speaker: 'You', text: "আমাকে আগে 'Tiny Book'-এর পাতার সংখ্যা বের করতে হবে।" },
                    { speaker: 'Glitch', text: "ঠিক। সাবকুয়েরি ব্যবহার করে ওই মানটি নিয়ে এসো!" }
                ],
                story: "আপনি সেই বইগুলো খুঁজছেন যা ক্ষুদ্রতমটির চেয়ে বড়।",
                objective: '"Tiny Book"-এর চেয়ে বেশি পাতা আছে এমন বইয়ের শিরোনাম সিলেক্ট করুন।',
                hint: 'WHERE pages > (SELECT pages FROM books WHERE title = "Tiny Book")',
                initSql: `
          CREATE TABLE books (title TEXT, pages INTEGER);
          INSERT INTO books VALUES ('Tiny Book', 50);
          INSERT INTO books VALUES ('Medium Book', 200);
          INSERT INTO books VALUES ('Giant Book', 500);
        `,
                expectedQuery: "SELECT title FROM books WHERE pages > (SELECT pages FROM books WHERE title = 'Tiny Book')",
                successMessage: "বড় বইগুলোর একটি স্তূপ আপনার সামনে হাজির হলো।",
                type: 'select',
                solution: "SELECT title FROM books WHERE pages > (SELECT pages FROM books WHERE title = 'Tiny Book')"
            },
            {
                id: '4-6',
                title: 'ডিক্রিপশন',
                dialogue: [
                    { speaker: 'Librarian', text: "লুকানো বার্তাগুলো কেবল বড় হাতের অক্ষরে (uppercase) দৃশ্যমান হয়।" },
                    { speaker: 'Glitch', text: "স্ট্রিং ফাংশন! সবগুলোকে UPPER করে ফেলো।" }
                ],
                story: "প্রাচীন পৃষ্ঠার আবছা লেখাগুলো কেবল রূপান্তরের পরেই পড়া সম্ভব হচ্ছে।",
                objective: 'বইয়ের শিরোনামের UPPER() মান সিলেক্ট করুন।',
                hint: 'UPPER(column) ব্যবহার করুন',
                initSql: `
          CREATE TABLE books (title TEXT);
          INSERT INTO books VALUES ('secret key');
          INSERT INTO books VALUES ('hidden door');
        `,
                expectedQuery: "SELECT UPPER(title) FROM books",
                successMessage: "SECRET KEY. HIDDEN DOOR. আসল বার্তাটি এখন পরিষ্কারভাবে ফুটে উঠেছে।",
                type: 'select',
                solution: "SELECT UPPER(title) FROM books"
            },
            {
                id: '4-7',
                title: 'শেয়ার করা জ্ঞান',
                dialogue: [
                    { speaker: 'Glitch', text: "দুটি সমান্তরাল লাইব্রেরি আছে। কোন বইগুলো উভয় লাইব্রেরিতেই আছে?" },
                    { speaker: 'You', text: "সাধারণ মিলগুলো খুঁজে পেতে INTERSECT ব্যবহার করব।" }
                ],
                story: "লাইব্রেরির আয়না লাগানো তাকগুলো ঝিলিক দিচ্ছে, জ্ঞানের সমান্তরাল জগতগুলো একে অপরের ওপর ফুটে উঠছে।",
                objective: 'lib_a এবং lib_b-এর শিরোনামগুলোর মাঝে INTERSECT ব্যবহার করে সিলেক্ট করুন।',
                hint: 'INTERSECT ব্যবহার করুন',
                initSql: `
          CREATE TABLE lib_a (title TEXT);
          CREATE TABLE lib_b (title TEXT);
          INSERT INTO lib_a VALUES ('Book 1');
          INSERT INTO lib_a VALUES ('Book 2');
          INSERT INTO lib_b VALUES ('Book 2');
          INSERT INTO lib_b VALUES ('Book 3');
        `,
                expectedQuery: "SELECT title FROM lib_a INTERSECT SELECT title FROM lib_b",
                successMessage: "কেবল 'Book 2' উভয় জগতেই বিদ্যমান। চিরন্তন সত্যটি নিশ্চিত হলো।",
                type: 'select',
                solution: "SELECT title FROM lib_a INTERSECT SELECT title FROM lib_b"
            },
            {
                id: '4-8',
                title: 'শূন্যস্থান পূরণ',
                dialogue: [
                    { speaker: 'Librarian', text: "কিছু রেকর্ডে শিরোনাম নেই — কেবল শূন্যতা।" },
                    { speaker: 'Glitch', text: "NULL-গুলোকে একটি ডিফল্ট নাম দিয়ে বদলে দাও!" }
                ],
                story: "বইয়ের ফাঁকা পিঠগুলো যেন অভিযুক্তের দৃষ্টিতে আপনার দিকে তাকিয়ে আছে।",
                objective: 'শিরোনামগুলো সিলেক্ট করুন, যেখানে NULL থাকবে সেখানে "Unknown Book" বসিয়ে দিন।',
                hint: 'COALESCE ব্যবহার করুন',
                initSql: `
          CREATE TABLE books (title TEXT);
          INSERT INTO books VALUES ('Magic 101');
          INSERT INTO books VALUES (NULL);
          INSERT INTO books VALUES ('History');
        `,
                expectedQuery: "SELECT COALESCE(title, 'Unknown Book') FROM books",
                successMessage: "শূন্যতাগুলো অর্থে পূর্ণ হয়ে উঠল। এখন প্রতিটি বইয়ের একটি পরিচয় আছে।",
                type: 'select',
                solution: "SELECT COALESCE(title, 'Unknown Book') FROM books"
            },
            {
                id: '4-9',
                title: 'টাইপ পরিবর্তন',
                dialogue: [
                    { speaker: 'Librarian', text: "হিসাব করার জন্য টেক্সট হিসেবে থাকা পাতার সংখ্যাগুলোকে অবশ্যই সংখ্যায় রূপান্তর করতে হবে।" },
                    { speaker: 'You', text: "টাইপ কনভার্ট করার জন্য CAST ব্যবহার করব।" }
                ],
                story: "ভুলভাবে সংরক্ষিত ডেটা আরও গভীর বিশ্লেষণ বাধাগ্রস্ত করছে।",
                objective: 'pages কলামটিকে TEXT থেকে INTEGER-এ কাস্ট (Cast) করুন।',
                hint: 'CAST(column AS INTEGER) ব্যবহার করুন',
                initSql: `
          CREATE TABLE books (pages TEXT);
          INSERT INTO books VALUES ('100');
          INSERT INTO pages VALUES ('250');
        `,
                expectedQuery: "SELECT CAST(pages AS INTEGER) FROM books",
                successMessage: "টেক্সট এখন সংখ্যায় পরিণত হলো। গাণিতিক প্রজ্ঞার পথ খুলে গেল।",
                type: 'select',
                solution: "SELECT CAST(pages AS INTEGER) FROM books"
            },
            {
                id: '4-10',
                title: 'স্ট্রিং বন্ধন',
                dialogue: [
                    { speaker: 'Glitch', text: "নাম এবং রোলগুলো মিলিয়ে চমৎকার সব পদবী তৈরি করো!" }
                ],
                story: "গ্রামবাসীদের রেকর্ডগুলো আরও নাটকীয়ভাবে উপস্থাপনের দাবি জানাচ্ছে।",
                objective: 'নাম এবং রোলকে " the " দিয়ে একত্রে যুক্ত (concatenated) করে সিলেক্ট করুন।',
                hint: 'SQLite-এ যুক্ত করার জন্য || ব্যবহার করুন',
                initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT);
          INSERT INTO villagers VALUES ('Born', 'warrior');
          INSERT INTO villagers VALUES ('Alina', 'mage');
        `,
                expectedQuery: "SELECT name || ' the ' || role FROM villagers",
                successMessage: "Born the warrior, Alina the mage... কিংবদন্তি সব পদবী তৈরি হলো।",
                type: 'select',
                solution: "SELECT name || ' the ' || role FROM villagers"
            },
            {
                id: '4-11',
                title: 'পার্থক্য',
                dialogue: [
                    { speaker: 'Glitch', text: "কোন নিরাপদ অঞ্চলগুলো কেবল scroll_a-তে আছে?" }
                ],
                story: "মানচিত্রের পার্থক্যগুলো আপনাকে অনন্য সব আশ্রয়স্থলের খোঁজ দিচ্ছে।",
                objective: 'EXCEPT ব্যবহার করে কেবল scroll_a-তে থাকা নামগুলো খুঁজে বের করুন।',
                hint: 'EXCEPT ব্যবহার করুন',
                initSql: `
          CREATE TABLE scroll_a (name TEXT);
          CREATE TABLE scroll_b (name TEXT);
          INSERT INTO scroll_a VALUES ('Safe Haven');
          INSERT INTO scroll_a VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Shelter');
        `,
                expectedQuery: "SELECT name FROM scroll_a EXCEPT SELECT name FROM scroll_b",
                successMessage: "Safe Haven এককভাবে দাঁড়িয়ে আছে। একটি অনন্য আশ্রয়স্থল আবিষ্কৃত হলো।",
                type: 'select',
                solution: "SELECT name FROM scroll_a EXCEPT SELECT name FROM scroll_b"
            },
            {
                id: '4-12',
                title: 'অস্তিত্ব যাচাই',
                dialogue: [
                    { speaker: 'Librarian', text: "কেবল সেই বইগুলো দেখাও যাদের বিরল কপি ভল্টে সংরক্ষিত আছে।" }
                ],
                story: "অমূল্য বিরল সংস্করণগুলো নিচে কোথাও লুকিয়ে আছে।",
                objective: 'এমন বইগুলো সিলেক্ট করুন যেগুলোর এন্ট্রি rare_books টেবিলে EXISTS (বিদ্যমান)।',
                hint: 'EXISTS সাবকুয়েরি ব্যবহার করুন',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT);
          CREATE TABLE rare_books (book_id INTEGER);
          INSERT INTO books VALUES (1, 'Magic 101');
          INSERT INTO books VALUES (2, 'History');
          INSERT INTO rare_books VALUES (1);
        `,
                expectedQuery: "SELECT * FROM books b WHERE EXISTS (SELECT 1 FROM rare_books r WHERE r.book_id = b.id)",
                successMessage: "কেবল আসল বিরল বইগুলোই বাকি রইল। অমূল্য জ্ঞান সংরক্ষিত হয়েছে।",
                type: 'select',
                solution: "SELECT * FROM books b WHERE EXISTS (SELECT 1 FROM rare_books r WHERE r.book_id = b.id)"
            }
        ]
    },
    {
        id: 'chapter-5',
        title: 'অধ্যায় ৫: সময় টাওয়ার',
        description: 'মেঘ ফুঁড়ে একটি বিশাল টাওয়ার দাঁড়িয়ে আছে, যার সিঁড়িগুলো ঘূর্ণায়মান সময়রেখার মধ্য দিয়ে উঠে গেছে। সময়ের প্রবাহকে পরিচালনা করতে Window Function এবং CTE আয়ত্ত করুন।',
        levels: [
            {
                id: '5-1',
                title: 'সময়রেখা',
                dialogue: [
                    { speaker: 'Narrator', text: "লাইব্রেরির দরজা খুলে গিয়ে স্বর্গের দিকে ধাবিত এক বিশাল টাওয়ার উন্মোচিত হলো।" },
                    { speaker: 'Chronos', text: "স্বাগতম। এখানে সময় রৈখিক নয়। আমরা গুরুত্ব অনুযায়ী ঘটনাগুলোকে র‍্যাঙ্ক করি।" },
                    { speaker: 'Glitch', text: "এখন Window function-এর সময়! `RANK() OVER (ORDER BY year)` বছরের ভিত্তিতে একটি র‍্যাঙ্ক দেবে।" }
                ],
                story: "সিঁড়িগুলো অতীত এবং ভবিষ্যতের দৃশ্যে ঝিলমিল করছে। ঘটনাগুলো সর্পিল পথে ভেসে বেড়াচ্ছে।",
                objective: 'নাম, বছর এবং বছরের ভিত্তিতে rank() সিলেক্ট করুন।',
                hint: 'RANK() OVER (ORDER BY column) ব্যবহার করুন',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Big Bang', -1000);
          INSERT INTO events VALUES (2, 'Empire Rise', 500);
          INSERT INTO events VALUES (3, 'Empire Fall', 500);
          INSERT INTO events VALUES (4, 'Rebirth', 1000);
        `,
                expectedQuery: "SELECT name, year, RANK() OVER (ORDER BY year) FROM events",
                successMessage: "সময়রেখা স্থিতিশীল হলো। ঘটনাগুলো নিখুঁত কালানুক্রমে সারিবদ্ধ হয়েছে।",
                type: 'select',
                solution: "SELECT name, year, RANK() OVER (ORDER BY year) FROM events"
            },
            {
                id: '5-1-b',
                title: 'উল্টো ইতিহাস',
                dialogue: [
                    { speaker: 'Chronos', text: "এখন উল্টো দিকে তাকাও। বর্তমান থেকে অতীতের দিকে র‍্যাঙ্ক করো।" },
                    { speaker: 'You', text: "তার মানে উইন্ডোর ভেতরে `ORDER BY year DESC`?" },
                    { speaker: 'Glitch', text: "একদম তাই।" }
                ],
                story: "আপনি সর্পিল পথে উপরে উঠার সাথে সাথে সময় উল্টো দিকে প্রবাহিত হচ্ছে।",
                objective: 'নাম, বছর এবং বছরের বিপরীত ক্রমে rank() সিলেক্ট করুন।',
                hint: 'RANK() OVER (ORDER BY year DESC) ব্যবহার করুন',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Big Bang', -1000);
          INSERT INTO events VALUES (2, 'Empire Rise', 500);
          INSERT INTO events VALUES (3, 'Empire Fall', 500);
          INSERT INTO events VALUES (4, 'Rebirth', 1000);
        `,
                expectedQuery: "SELECT name, year, RANK() OVER (ORDER BY year DESC) FROM events",
                successMessage: "অতীত ভবিষ্যতে পরিণত হলো, চমৎকারভাবে সাজানো।",
                type: 'select',
                solution: "SELECT name, year, RANK() OVER (ORDER BY year DESC) FROM events"
            },
            {
                id: '5-2',
                title: 'সময় ভ্রমণ',
                dialogue: [
                    { speaker: 'Chronos', text: "প্রতিটি ঘটনার জন্য তার ঠিক পরের ঘটনাটি কী হবে তা উন্মোচন করো।" },
                    { speaker: 'Glitch', text: "`LEAD(name) OVER (ORDER BY year)` ব্যবহার করে পরের সারির নামটি দেখে নাও!" }
                ],
                dialogue: "আগামী দিনগুলোর দৃশ্য আপনার অনুভূতির কিনারে উঁকি দিচ্ছে।",
                objective: 'নাম, বছর এবং বছরের ক্রমানুসারে LEAD(name) সিলেক্ট করুন।',
                hint: 'LEAD(column) OVER (ORDER BY ...) ব্যবহার করুন',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Start', 100);
          INSERT INTO events VALUES (2, 'Middle', 200);
          INSERT INTO events VALUES (3, 'End', 300);
        `,
                expectedQuery: "SELECT name, year, LEAD(name) OVER (ORDER BY year) FROM events",
                successMessage: "আপনি বর্তমানের অতীত দেখতে পাচ্ছেন। সময়ের প্রবাহ এখন অনুমেয়।",
                type: 'select',
                solution: "SELECT name, year, LEAD(name) OVER (ORDER BY year) FROM events"
            },
            {
                id: '5-3',
                title: 'প্যারাডক্স',
                dialogue: [
                    { speaker: 'Chronos', text: "প্রথমে সাম্প্রতিক ঘটনাগুলোকে আলাদা করো, তারপর সেগুলো কুয়েরি করো। একটি অস্থায়ী বাস্তবতা তৈরি করো।" },
                    { speaker: 'Glitch', text: "CTE (Common Table Expression) ব্যবহার করো! `WITH recent AS (SELECT ...)`।" }
                ],
                story: "প্যারাডক্সিক্যাল লুপগুলো টাওয়ারের সিঁড়িগুলোকে এলোমেলো করে দেওয়ার হুমকি দিচ্ছে।",
                objective: '"recent" নামে একটি CTE ব্যবহার করে ২০০-এর বেশি বছরের ঘটনাগুলো সিলেক্ট করুন, তারপর recent থেকে সব তথ্য আনুন।',
                hint: 'WITH name AS (query) SELECT * FROM name',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Old', 100);
          INSERT INTO events VALUES (2, 'Modern', 250);
          INSERT INTO events VALUES (3, 'Future', 300);
        `,
                expectedQuery: "WITH recent AS (SELECT * FROM events WHERE year > 200) SELECT * FROM recent",
                successMessage: "প্যারাডক্স মিটে গেল। অস্থায়ী বাস্তবতা সত্যে পরিণত হলো।",
                type: 'select',
                solution: "WITH recent AS (SELECT * FROM events WHERE year > 200) SELECT * FROM recent"
            },
            {
                id: '5-3-b',
                title: 'প্রাচীন ইতিহাস',
                dialogue: [
                    { speaker: 'Glitch', text: "আবার করো! প্রাচীন ঘটনাগুলোর (বছর < ২০০) জন্য একটি CTE ডিফাইন করো।" },
                    { speaker: 'You', text: "ঠিক আছে, `WITH ancient AS ...`" }
                ],
                story: "আপনি আপনার মনকে সুদূর অতীতে নিবদ্ধ করলেন।",
                objective: '"ancient" নামে একটি CTE ব্যবহার করে ২০০-এর কম বছরের ঘটনাগুলো সিলেক্ট করুন, তারপর ancient থেকে সব তথ্য আনুন।',
                hint: 'WITH ancient AS ...',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Old', 100);
          INSERT INTO events VALUES (2, 'Modern', 250);
          INSERT INTO events VALUES (3, 'Future', 300);
        `,
                expectedQuery: "WITH ancient AS (SELECT * FROM events WHERE year < 200) SELECT * FROM ancient",
                successMessage: "কেবল অতীতের প্রতিধ্বনি বাকি রইল।",
                type: 'select',
                solution: "WITH ancient AS (SELECT * FROM events WHERE year < 200) SELECT * FROM ancient"
            },
            {
                id: '5-4',
                title: 'গ্রুপের মধ্যে র‍্যাঙ্ক',
                dialogue: [
                    { speaker: 'Chronos', text: "পুরো সময় জুড়ে নয়, বরং প্রতিটি যুগের জন্য আলাদাভাবে র‍্যাঙ্ক করো।" },
                    { speaker: 'Glitch', text: "PARTITION BY! `RANK() OVER (PARTITION BY role ORDER BY gold DESC)` প্রতিটি রোলের জন্য র‍্যাঙ্ক রিসেট করবে।" }
                ],
                story: "টাওয়ারের দেয়ালে দেয়াল জুড়ে আলাদা আলাদা যুগের শাখা ছড়িয়ে আছে।",
                objective: 'প্রতিটি রোলের (role) ভেতরে গ্রামবাসীদের সোনার ভিত্তিতে র‍্যাঙ্ক করুন।',
                hint: 'RANK() OVER (PARTITION BY role ORDER BY gold DESC)',
                initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES ('Born', 'warrior', 50);
          INSERT INTO villagers VALUES ('Kael', 'warrior', 45);
          INSERT INTO villagers VALUES ('Alina', 'mage', 100);
          INSERT INTO villagers VALUES ('Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT name, role, gold, RANK() OVER (PARTITION BY role ORDER BY gold DESC) FROM villagers",
                successMessage: "সেরা যোদ্ধা, সেরা যাদুকর... র‍্যাঙ্কিংগুলো তাদের নিজ নিজ যুগে স্বচ্ছ হয়ে উঠল।",
                type: 'select',
                solution: "SELECT name, role, gold, RANK() OVER (PARTITION BY role ORDER BY gold DESC) FROM villagers"
            },
            {
                id: '5-5',
                title: 'অনন্য ক্রম',
                dialogue: [
                    { speaker: 'Chronos', text: "প্রতিটি রোলের ভেতরে সম্পদের ভিত্তিতে অনন্য অবস্থান বা পজিশন নির্ধারণ করো।" },
                    { speaker: 'Glitch', text: "RANK একই মান থাকলে টাই (tie) হতে দেয়, কিন্তু `ROW_NUMBER()` সব সময় অনন্য!" }
                ],
                story: "ইতিহাসে প্রতিটি আত্মা তার নিজস্ব আলাদা জায়গা দাবি করছে।",
                objective: 'প্রতিটি রোলের ভেতরে সোনা অনুযায়ী ক্রমানুসারে ROW_NUMBER() ব্যবহার করুন।',
                hint: 'ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)',
                initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES ('Born', 'warrior', 50);
          INSERT INTO villagers VALUES ('Kael', 'warrior', 45);
          INSERT INTO villagers VALUES ('Alina', 'mage', 100);
          INSERT INTO villagers VALUES ('Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT name, role, ROW_NUMBER() OVER (PARTITION BY role ORDER BY gold DESC) AS row_num FROM villagers",
                successMessage: "প্রতিটি পজিশন এখন অনন্য। সময়ের এই অনুক্রম চূড়ান্ত।",
                type: 'select',
                solution: "SELECT name, role, ROW_NUMBER() OVER (PARTITION BY role ORDER BY gold DESC) AS row_num FROM villagers"
            },
            {
                id: '5-6',
                title: 'ক্রমপুঞ্জিত যোগ (Running Total)',
                dialogue: [
                    { speaker: 'Chronos', text: "সময়ের সাথে সাথে সম্পদের জমা হওয়া লক্ষ্য করো।" },
                    { speaker: 'Glitch', text: "আমাদের একটি রানিং টোটাল দরকার। `SUM(gold) OVER (ORDER BY id)`।" }
                ],
                story: "ইতিহাসের মধ্য দিয়ে সোনা নদীর মতো বয়ে চলেছে।",
                objective: 'id-এর ক্রমানুসারে সোনার রানিং টোটাল বা ক্রমপুঞ্জিত সমষ্টি বের করুন।',
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
                successMessage: "সম্পদ আপনার চোখের সামনে জমা হচ্ছে। সময়ের নদী ক্রমে আরও সমৃদ্ধ হচ্ছে।",
                type: 'select',
                solution: "SELECT name, gold, SUM(gold) OVER (ORDER BY id) AS running_total FROM villagers"
            },
            {
                id: '5-6-b',
                title: 'ক্রমপুঞ্জিত গণনা',
                dialogue: [
                    { speaker: 'Chronos', text: "এখন ইতিহাসে আবির্ভূত হওয়ার সাথে সাথে গ্রামবাসীদের গণনা করো।" },
                    { speaker: 'You', text: "একটি রানিং কাউন্ট?" },
                    { speaker: 'Glitch', text: "হ্যাঁ! `COUNT(*) OVER (ORDER BY id)`।" }
                ],
                story: "সময়রেখা থেকে জনসংখ্যার পরিসংখ্যান বেরিয়ে আসছে।",
                objective: 'id-এর ভিত্তিতে গ্রামবাসীদের রানিং কাউন্ট বের করুন।',
                hint: 'COUNT(*) OVER (ORDER BY id)',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Trog', 20);
          INSERT INTO villagers VALUES (2, 'Kael', 45);
        `,
                expectedQuery: "SELECT name, COUNT(*) OVER (ORDER BY id) FROM villagers",
                successMessage: "এক, দুই... গণনা বাড়ছে।",
                type: 'select',
                solution: "SELECT name, COUNT(*) OVER (ORDER BY id) FROM villagers"
            },
            {
                id: '5-7',
                title: 'বংশলতিকা (Family Tree)',
                dialogue: [
                    { speaker: 'Chronos', text: "প্রজন্ম থেকে প্রজন্মান্তরে রক্তধারা বংশলতিকা তৈরি করে। প্রবীণ ব্যক্তির সব উত্তরসূরিদের খুঁজে বের করো।" },
                    { speaker: 'Glitch', text: "Recursive CTE! এটি অনেক উন্নত পর্যায়ের যাদু।" },
                    { speaker: 'Glitch', text: "`WITH RECURSIVE name AS ... UNION ALL ...`" }
                ],
                story: "টাওয়ারের দেয়ালে দেয়ালে পূর্বপুরুষের ধারা অসীম সর্পিল পথে ছড়িয়ে আছে।",
                objective: 'Recursive CTE ব্যবহার করে সব অধস্তন (সরাসরি এবং পরোক্ষ) কর্মীদের খুঁজে বের করুন।',
                hint: 'WITH RECURSIVE ... UNION ALL ব্যবহার করুন',
                initSql: `
          CREATE TABLE employees (id INTEGER, name TEXT, manager_id INTEGER);
          INSERT INTO employees VALUES (1, 'Elder', NULL);
          INSERT INTO employees VALUES (2, 'Born', 1);
          INSERT INTO employees VALUES (3, 'Kael', 2);
          INSERT INTO employees VALUES (4, 'Alina', 1);
        `,
                expectedQuery: "WITH RECURSIVE hierarchy(id, name, level) AS (SELECT id, name, 0 FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, h.level + 1 FROM employees e JOIN hierarchy h ON e.manager_id = h.id) SELECT name, level FROM hierarchy",
                successMessage: "অসীম সময়ের মধ্য দিয়ে সম্পূর্ণ বংশধারা ফুটে উঠল। আপনি প্রজন্মের প্রবাহকে আয়ত্ত করেছেন।",
                type: 'select',
                solution: "WITH RECURSIVE hierarchy(id, name, level) AS (SELECT id, name, 0 FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, h.level + 1 FROM employees e JOIN hierarchy h ON e.manager_id = h.id) SELECT name, level FROM hierarchy"
            }
        ]
    },
    {
        id: 'chapter-6',
        title: 'অধ্যায় ৬: নির্মাতা',
        description: 'টাওয়ারের চূড়ায় কেবল এক বিশুদ্ধ শূন্যতা। আপনি জগতকে পাঠ করেছেন — এবার একে আকার দিন। বাস্তবতাকে সৃষ্টি, পরিবর্তন এবং ধ্বংস করার বিদ্যা আয়ত্ত করুন।',
        levels: [
            {
                id: '6-1',
                title: 'নকশা',
                dialogue: [
                    { speaker: 'Narrator', text: "টাওয়ারের চূড়া ফাঁকা আকাশে গিয়ে মিশেছে। এখানে এখন পর্যন্ত কিছুই নেই।" },
                    { speaker: 'Architect', text: "শূন্যতার ওপর একটি কাঠামো আরোপ করো। ভিত্তি দিয়ে শুরু হোক।" },
                    { speaker: 'Glitch', text: "ডেটা রাখার জন্য আমাদের একটি টেবিল লাগবে। `CREATE TABLE towers (...)` ব্যবহার করো।" },
                    { speaker: 'Glitch', text: "`id INTEGER PRIMARY KEY` এবং `height INTEGER`-এর মতো কলাম ডিফাইন করো।" }
                ],
                story: "আপনার সামনে অসীম সম্ভাবনা। সৃষ্টি আপনার আদেশের অপেক্ষায়।",
                objective: 'id (INTEGER PRIMARY KEY) এবং height (INTEGER) কলামসহ "towers" নামে একটি টেবিল তৈরি করুন।',
                hint: 'CREATE TABLE name (col TYPE constraints)',
                initSql: `
          DROP TABLE IF EXISTS towers;
        `,
                expectedQuery: "SELECT * FROM towers",
                successMessage: "শূন্যতা জমাট বাঁধতে শুরু করল। একটি উঁচু কাঠামো গড়ে উঠছে।",
                type: 'dml',
                solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER)"
            },
            {
                id: '6-1-b',
                title: 'সেতু নির্মাণ',
                dialogue: [
                    { speaker: 'Architect', text: "টাওয়ারগুলোর মাঝে আমাদের পথ দরকার।" },
                    { speaker: 'You', text: "আরেকটি টেবিল? `CREATE TABLE bridges`?" },
                    { speaker: 'Glitch', text: "হ্যাঁ। একে একটি `id` এবং `length` দাও।" }
                ],
                story: "আপনি আপনার চূড়াগুলোর মধ্যে সংযোগের নকশা আঁকছেন।",
                objective: 'id (INTEGER) এবং length (INTEGER) কলামসহ "bridges" নামে একটি টেবিল তৈরি করুন।',
                hint: 'CREATE TABLE bridges ...',
                initSql: `
          DROP TABLE IF EXISTS bridges;
        `,
                expectedQuery: "SELECT * FROM bridges",
                successMessage: "ইথারের মাঝে চলার পথ তৈরি হলো।",
                type: 'dml',
                solution: "CREATE TABLE bridges (id INTEGER, length INTEGER)"
            },
            {
                id: '6-2',
                title: 'উৎপত্তি',
                dialogue: [
                    { speaker: 'Architect', text: "তোমার সৃষ্টিকে জীবন দান করো। প্রথম টাওয়ারটি তোলো।" },
                    { speaker: 'Glitch', text: "আমাদের কাছে টেবিল আছে, এবার ডেটা ঢোকাও! `INSERT INTO towers (id, height) VALUES (1, 100)`।" }
                ],
                story: "আপনার নতুন জগতটি কন্টেন্টের জন্য তৃষ্ণার্ত হয়ে আছে।",
                objective: 'towers (id, height) টেবিলে (1, 100) ভ্যালু ইনসার্ট করুন।',
                hint: 'INSERT INTO table VALUES (...)',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 1 AND height = 100",
                successMessage: "১০০ মিটার উঁচু একটি চমৎকার টাওয়ার আকাশ ফুঁড়ে উঠে দাঁড়াল। সৃষ্টি প্রাণ পেল।",
                type: 'dml',
                solution: "INSERT INTO towers (id, height) VALUES (1, 100)"
            },
            {
                id: '6-2-b',
                title: 'সম্প্রসারণ',
                dialogue: [
                    { speaker: 'Glitch', text: "থামবে না! আরও একটি তৈরি করো, এবার আরও উঁচু।" },
                    { speaker: 'You', text: "ID ২, উচ্চতা ২০০..." }
                ],
                story: "দিগন্ত রেখা আপনার দ্বিতীয় শিল্পকর্মের অপেক্ষায়।",
                objective: 'towers টেবিলে (2, 200) ভ্যালু ইনসার্ট করুন।',
                hint: 'INSERT INTO ...',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 100);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 2 AND height = 200",
                successMessage: "দুটি টাওয়ার এখন প্রহরীর মতো দাঁড়িয়ে আছে।",
                type: 'dml',
                solution: "INSERT INTO towers (id, height) VALUES (2, 200)"
            },
            {
                id: '6-3',
                title: 'সংস্কার',
                dialogue: [
                    { speaker: 'Glitch', text: "চমৎকার হয়েছে... কিন্তু এদের কোনো নাম নেই। আমরা একটি কলাম ভুলে গেছি!" },
                    { speaker: 'Architect', text: "নকশাটি পরিবর্তন বা ALTER করে ওটি যোগ করো।" },
                    { speaker: 'Glitch', text: "`ALTER TABLE towers ADD COLUMN name TEXT`।" }
                ],
                story: "আপনার টাওয়ার সগৌরবে দাঁড়িয়ে আছে কিন্তু পরিচয়হীন।",
                objective: 'towers টেবিলে "name" (TEXT) নামে একটি নতুন কলাম যোগ করুন।',
                hint: 'ALTER TABLE ADD COLUMN ব্যবহার করুন',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 100);
        `,
                expectedQuery: "SELECT name FROM towers",
                successMessage: "কাঠামোটি বিবর্তিত হলো। নাম রাখার জায়গা তৈরি হয়েছে।",
                type: 'dml',
                solution: "ALTER TABLE towers ADD COLUMN name TEXT"
            },
            {
                id: '6-4',
                title: 'বিবর্তন',
                dialogue: [
                    { speaker: 'Glitch', text: "টাওয়ার বড় হচ্ছে! একে আরও উঁচু করো।" },
                    { speaker: 'Glitch', text: "বিদ্যমান ডেটা পরিবর্তন করো: `UPDATE towers SET height = 200 WHERE id = 1`।" },
                    { speaker: 'You', text: "আমাকে কি অবশ্যই WHERE ব্যবহার করতে হবে, নাহলে সব বদলে যাবে?" },
                    { speaker: 'Glitch', text: "একদম ঠিক। UPDATE-এর সাথে সব সময় WHERE ব্যবহার করবে!" }
                ],
                story: "আপনার সৃষ্টি আপনার ইচ্ছার প্রতিফলন ঘটাচ্ছে।",
                objective: 'যেখানে id = 1, সেই টাওয়ারের উচ্চতা ২০০ করে দিন।',
                hint: 'UPDATE table SET col=val WHERE condition',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 100, NULL);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 1 AND height = 200",
                successMessage: "টাওয়ারটি আরও উপরে উঠে গেল, আকাশ ছুঁতে ২০০ মিটার পর্যন্ত পৌঁছাল।",
                type: 'dml',
                solution: "UPDATE towers SET height = 200 WHERE id = 1"
            },
            {
                id: '6-4-b',
                title: 'নামকরণ অনুষ্ঠান',
                dialogue: [
                    { speaker: 'Glitch', text: "এখন একে একটি নাম দাও। আমি একে বলছি 'The Spire'।" },
                    { speaker: 'You', text: "`UPDATE towers SET name = 'The Spire' ...`" }
                ],
                story: "আপনি টাওয়ারের পাদদেশে নাম খোদাই করছেন।",
                objective: 'যেখানে id = 1, সেই টাওয়ারের নাম "The Spire" করে দিন।',
                hint: 'UPDATE ... SET name = ... ব্যবহার করুন',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 200, NULL);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 1 AND name = 'The Spire'",
                successMessage: "The Spire। একটি নাম যা চিরকাল অমর থাকবে।",
                type: 'dml',
                solution: "UPDATE towers SET name = 'The Spire' WHERE id = 1"
            },
            {
                id: '6-5',
                title: 'পরিষ্কারকরণ',
                dialogue: [
                    { speaker: 'Architect', text: "কিছু কাঠামো অযোগ্য। দুর্বলদের সরিয়ে ফেলো।" },
                    { speaker: 'Glitch', text: "`DELETE FROM towers WHERE ...` ব্যবহার করো। সাবধান, এখানে কোনো আনডু (undo) নেই!" }
                ],
                story: "ত্রুটিপূর্ণ সৃষ্টিগুলো আপনার নিখুঁত জগতে বিশৃঙ্খলা তৈরি করছে।",
                objective: 'যে সব টাওয়ারের উচ্চতা ১৫০-এর কম, সেগুলো মুছে ফেলুন।',
                hint: 'DELETE FROM table WHERE condition',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 200);
          INSERT INTO towers VALUES (2, 100);
          INSERT INTO towers VALUES (3, 50);
        `,
                expectedQuery: "SELECT * FROM towers WHERE height >= 150",
                successMessage: "দুর্বল টাওয়ারগুলো ধুলোয় মিশে গেল। কেবল শক্তিশালীরাই টিকে রইল।",
                type: 'dml',
                solution: "DELETE FROM towers WHERE height < 150"
            },
            {
                id: '6-5-b',
                title: 'উচ্ছেদ',
                dialogue: [
                    { speaker: 'Glitch', text: "ওই ছোট কুঁড়েঘরটাকেও (id 3) যেতে হবে।" },
                    { speaker: 'You', text: "আইডি দিয়ে ডিলেট করা বেশি নিরাপদ।" }
                ],
                story: "আপনি আপনার আঙুল দিয়ে শেষ ত্রুটিপূর্ণ ঘরটি নির্দেশ করলেন।",
                objective: 'যেখানে id = 3, সেটি ডিলেট করুন।',
                hint: 'DELETE ... WHERE id = 3',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 200);
          INSERT INTO towers VALUES (3, 50);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 3",
                successMessage: "নেই। এখন চারপাশ একদম নিখুঁত।",
                type: 'dml',
                solution: "DELETE FROM towers WHERE id = 3"
            },
            {
                id: '6-6',
                title: 'দৃষ্টিভঙ্গি (The Vision)',
                dialogue: [
                    { speaker: 'Architect', text: "সবচেয়ে উঁচু টাওয়ারগুলোর একটি স্থায়ী দৃশ্য তৈরি করো।" },
                    { speaker: 'Glitch', text: "একটি VIEW হলো একটি সংরক্ষিত কুয়েরির মতো। `CREATE VIEW name AS SELECT ...`।" }
                ],
                story: "আপনি আপনার সেরা কাজগুলো সব সময় চোখের সামনে রাখতে চান।",
                objective: '"high_towers" নামে একটি ভিউ তৈরি করুন যা কেবল ১৫০-এর বেশি উচ্চতার টাওয়ারগুলোকে দেখাবে।',
                hint: 'CREATE VIEW name AS SELECT ...',
                initSql: `
          DROP VIEW IF EXISTS high_towers;
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 200, 'Spire');
          INSERT INTO towers VALUES (2, 50, 'Hut');
        `,
                expectedQuery: "SELECT * FROM high_towers",
                successMessage: "একটি স্ফটিক স্বচ্ছ জানালা খুলে গেল, যা সব সময় আপনার মহান সৃষ্টিগুলোকে দেখাবে।",
                type: 'dml',
                solution: "CREATE VIEW high_towers AS SELECT * FROM towers WHERE height > 150"
            },
            {
                id: '6-7',
                title: 'নিয়ম আরোপ',
                dialogue: [
                    { speaker: 'Architect', text: "তোমার জগতের আইনের প্রয়োজন। নামগুলো অবশ্যই অনন্য এবং বাধ্যতামূলক হতে হবে।" },
                    { speaker: 'Glitch', text: "Constraint বা সীমাবদ্ধতা যোগ করো! `TEXT UNIQUE NOT NULL`।" }
                ],
                story: "সীমাবদ্ধতা ছাড়া বিশৃঙ্খলা দেখা দেওয়ার ঝুঁকি থাকে।",
                objective: 'towers টেবিলটি তৈরি করুন যেখানে name কলামটি TEXT UNIQUE NOT NULL হবে।',
                hint: 'কলাম কনস্ট্রেইন্ট ব্যবহার করুন',
                initSql: `
          DROP TABLE IF EXISTS towers;
        `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE name='towers'",
                successMessage: "অপরিবর্তনীয় আইন বাস্তবতাকে বেঁধে ফেলল। আপনার জগতের অখণ্ডতা এখন অটুট।",
                type: 'dml',
                solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT UNIQUE NOT NULL)"
            },
            {
                id: '6-8',
                title: 'সংযুক্ত কাঠামো',
                dialogue: [
                    { speaker: 'Architect', text: "টাওয়ারগুলো গ্রামের অংশ। তাদের এই বন্ধনটি সুদৃঢ় করো।" },
                    { speaker: 'Glitch', text: "Foreign Key বা বৈদেশিক চাবি! `FOREIGN KEY(village_id) REFERENCES villages(id)`।" }
                ],
                story: "বিচ্ছিন্ন টাওয়ারগুলো অসম্পূর্ণ মনে হচ্ছে।",
                objective: 'village_id যেন villages.id-কে রেফারেন্স করে, এমনভাবে towers টেবিল তৈরি করুন।',
                hint: 'FOREIGN KEY ... REFERENCES ব্যবহার করুন',
                initSql: `
          DROP TABLE IF EXISTS towers;
          DROP TABLE IF EXISTS villages;
          CREATE TABLE villages (id INTEGER PRIMARY KEY, name TEXT);
        `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE name='towers'",
                successMessage: "টাওয়ারগুলো এখন তাদের গ্রামের গভীরে শিকড় গেড়েছে। এই সম্পর্ক চিরন্তন।",
                type: 'dml',
                solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, village_id INTEGER, FOREIGN KEY(village_id) REFERENCES villages(id))"
            },
            {
                id: '6-9',
                title: 'বিদ্যুৎ গতির কুয়েরি',
                dialogue: [
                    { speaker: 'Architect', text: "অনেক টাওয়ার হওয়ার কারণে অনুসন্ধান ধীর হয়ে যাচ্ছে।" },
                    { speaker: 'Glitch', text: "গতির জন্য INDEX ব্যবহার করো! `CREATE INDEX ... ON ...`।" }
                ],
                story: "আপনার ক্রমবর্ধমান সাম্রাজ্যের দক্ষতা প্রয়োজন।",
                objective: 'height কলামের ওপর একটি ইনডেক্স তৈরি করুন।',
                hint: 'CREATE INDEX name ON table(column)',
                initSql: `
          DROP INDEX IF EXISTS idx_height;
          CREATE TABLE IF NOT EXISTS towers (id INTEGER, height INTEGER);
        `,
                expectedQuery: "SELECT name FROM sqlite_master WHERE type='index'",
                successMessage: "সময় এখন আপনার বশীভূত। কুয়েরিগুলো এখন বিদ্যুতের মতো কাজ করছে।",
                type: 'dml',
                solution: "CREATE INDEX idx_height ON towers(height)"
            },
            {
                id: '6-10',
                title: 'উচ্ছেদ',
                dialogue: [
                    { speaker: 'Architect', text: "পরীক্ষা শেষ। আবার শূন্যতায় ফিরে যাও।" },
                    { speaker: 'Glitch', text: "সব কিছু ফেলে দাও (DROP)..." }
                ],
                story: "আপনার সৃষ্টিগুলো তাদের উদ্দেশ্য পূরণ করেছে।",
                objective: '"towers" টেবিলটি মুছে ফেলুন (Drop)।',
                hint: 'DROP TABLE name',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER, height INTEGER);
        `,
                expectedQuery: "SELECT name FROM sqlite_master WHERE type='table' AND name='towers'",
                successMessage: "টাওয়ারগুলো ধুলোয় মিশে গেল। শূন্যতা ফিরে এল, নতুন সৃষ্টির জন্য প্রস্তুত।",
                type: 'dml',
                solution: "DROP TABLE towers"
            }
        ]
    },
    {
        id: 'chapter-7',
        title: 'অধ্যায় ৭: কালযাদুকর (Chronomancer)',
        description: 'শক্তির শিখরে পৌঁছে আপনি সময়ের অধিপতির মুখোমুখি হলেন। শেষ সীমান্তে আপনার শ্রেষ্ঠত্ব প্রমাণ করতে তারিখ এবং সময়ের ফাংশনগুলো ব্যবহার করুন।',
        levels: [
            {
                id: '7-1',
                title: 'বর্তমান',
                dialogue: [
                    { speaker: 'Narrator', text: "পুনর্নির্মিত বিশ্বের শীর্ষে এক অন্তিম ব্যক্তি অপেক্ষায় আছেন — কালযাদুকর।" },
                    { speaker: 'Chronomancer', text: "তুমি বাস্তবতাকে আকার দিয়েছ। কিন্তু তুমি কি এই চিরন্তন বর্তমানকে ধারণ করতে পারো?" },
                    { speaker: 'Glitch', text: "`DATE('now')` দিয়ে বর্তমান মুহূর্তটি কুয়েরি করো!" }
                ],
                story: "চূড়ান্ত সিংহাসনের চারপাশে সময় অসীম লুপে ঘুরছে।",
                objective: "DATE('now') ব্যবহার করে বর্তমান তারিখ সিলেক্ট করুন।",
                hint: 'DATE("now")',
                initSql: ``,
                expectedQuery: "SELECT DATE('now')",
                successMessage: "বর্তমান মুহূর্তটি আপনার সামনে স্পষ্ট হয়ে উঠল। আপনি মুহূর্তটিকে ধরে ফেলেছেন।",
                type: 'select',
                solution: "SELECT DATE('now')"
            },
            {
                id: '7-1-b',
                title: 'সঠিক সময়',
                dialogue: [
                    { speaker: 'Chronomancer', text: "তারিখ কেবল একটি বিস্তৃত রেখা মাত্র। আমার আরও সূক্ষ্মতা চাই।" },
                    { speaker: 'You', text: "একদম সঠিক সময়? `TIME('now')`?" },
                    { speaker: 'Glitch', text: "ঠিক। প্রতিটি সেকেন্ড ধরে ফেলো।" }
                ],
                story: "বিশ্ব ঘড়ির টিকটিক শব্দ আরও জোরে শোনা যাচ্ছে।",
                objective: "TIME('now') ব্যবহার করে বর্তমান সময় সিলেক্ট করুন।",
                hint: 'TIME("now")',
                initSql: ``,
                expectedQuery: "SELECT TIME('now')",
                successMessage: "প্রতিটি সেকেন্ড এখন আপনার কুয়েরিতে ধরা দিচ্ছে।",
                type: 'select',
                solution: "SELECT TIME('now')"
            },
            {
                id: '7-2',
                title: 'যুগ',
                dialogue: [
                    { speaker: 'Chronomancer', text: "এই মহাকাল থেকে কেবল বছরটি বের করে নিয়ে এসো।" },
                    { speaker: 'Glitch', text: "`STRFTIME('%Y', 'now')` বছরটিকে আলাদা করবে!" }
                ],
                story: "চিরন্তন চক্রের জন্য সুনির্দিষ্ট পরিমাপ প্রয়োজন।",
                objective: "STRFTIME('%Y', 'now') ব্যবহার করে বর্তমান বছরটি সিলেক্ট করুন।",
                hint: 'STRFTIME("%Y", "now")',
                initSql: ``,
                expectedQuery: "SELECT STRFTIME('%Y', 'now')",
                successMessage: "চলতি বছরটি মূল প্রবাহ থেকে আলাদা হলো। আপনি সময়ের উপাদানগুলো নিয়ন্ত্রণ করছেন।",
                type: 'select',
                solution: "SELECT STRFTIME('%Y', 'now')"
            },
            {
                id: '7-2-b',
                title: 'ঋতু',
                dialogue: [
                    { speaker: 'Glitch', text: "এখন মাসটি বের করো। প্যাটার্ন হলো `%m`।" },
                    { speaker: 'You', text: "তার মানে `STRFTIME('%m', 'now')`।" }
                ],
                story: "আপনি বিশ্বের বর্তমান ঋতু বোঝার চেষ্টা করছেন।",
                objective: "STRFTIME ব্যবহার করে বর্তমান মাস সিলেক্ট করুন।",
                hint: 'STRFTIME("%m", "now")',
                initSql: ``,
                expectedQuery: "SELECT STRFTIME('%m', 'now')",
                successMessage: "মাসটি প্রকাশিত হলো।",
                type: 'select',
                solution: "SELECT STRFTIME('%m', 'now')"
            },
            {
                id: '7-3',
                title: 'ভবিষ্যৎ দর্শন',
                dialogue: [
                    { speaker: 'Chronomancer', text: "আজ থেকে ৩০ দিন পরের তারিখটি কী?" },
                    { speaker: 'Glitch', text: "তুমি তারিখ পরিবর্তন করতে পারো! `DATE('now', '+30 days')`।" }
                ],
                story: "আগামীর দৃশ্য আপনাকে হাতছানি দিচ্ছে।",
                objective: 'আজ থেকে ৩০ দিন পরের তারিখ সিলেক্ট করুন।',
                hint: 'date("now", "+30 days")',
                initSql: ``,
                expectedQuery: "SELECT date('now', '+30 days')",
                successMessage: "ভবিষ্যতের তারিখটি স্পষ্টভাবে দেখা যাচ্ছে। আপনি সময়ের পর্দা ছিঁড়ে ফেলেছেন।",
                type: 'select',
                solution: "SELECT date('now', '+30 days')"
            },
            {
                id: '7-3-b',
                title: 'অতীত',
                dialogue: [
                    { speaker: 'Chronomancer', text: "পেছনে তাকাও। ৭ দিন আগের তারিখটি কী ছিল?" },
                    { speaker: 'You', text: "আমি সময় বিয়োগ করছি। `DATE('now', '-7 days')`।" }
                ],
                story: "স্মৃতিগুলো ডেটায় রূপান্তরিত হচ্ছে।",
                objective: '৭ দিন আগের তারিখ সিলেক্ট করুন।',
                hint: 'date("now", "-7 days")',
                initSql: ``,
                expectedQuery: "SELECT date('now', '-7 days')",
                successMessage: "অতীত এখন বর্তমানের মতোই স্বচ্ছ।",
                type: 'select',
                solution: "SELECT date('now', '-7 days')"
            },
            {
                id: '7-4',
                title: 'দিনের পার্থক্য',
                dialogue: [
                    { speaker: 'Chronomancer', text: "দুটি দূরবর্তী মুহূর্তের মাঝখানের দিনগুলো পরিমাপ করো।" },
                    { speaker: 'Glitch', text: "`JULIANDAY` তারিখকে সংখ্যায় রূপান্তর করে যা আমরা বিয়োগ করতে পারি!" },
                    { speaker: 'Glitch', text: "`JULIANDAY(date2) - JULIANDAY(date1)`।" }
                ],
                story: "সময়ের দুটি বিন্দু আপনার সামনে ভাসছে, পরিমাপের অপেক্ষায়।",
                objective: 'julianday ব্যবহার করে দুটি তারিখের মধ্যে দিনের পার্থক্য হিসাব করুন। ভবিষ্যতের তারিখ হিসেবে আজ থেকে ৩০ দিন পরের তারিখটি নিন।',
                hint: 'julianday(future) - julianday(now)',
                initSql: ``,
                expectedQuery: "SELECT julianday(date('now', '+30 days')) - julianday('now')",
                successMessage: "ঠিক ৩০ দিন। আপনি সময়ের পাটিগণিত আয়ত্ত করেছেন। কালযাদুকর মাথা নত করলেন — আপনিই এখন প্রকৃত অধিপতি।",
                type: 'select',
                solution: "SELECT julianday(date('now', '+30 days')) - julianday('now')"
            }
        ]
    },
    {
        id: 'chapter-8',
        title: 'অধ্যায় ৮: স্থপতির মন',
        description: 'আপনি সময় এবং সৃষ্টি আয়ত্ত করেছেন, কিন্তু একজন প্রকৃত স্থপতি বা আর্কিটেক্ট তার জগতের নিরাপত্তা, গতি এবং অখণ্ডতা নিশ্চিত করেন। অপরাজেয় হতে ট্রানজ্যাকশন, ট্রিগার এবং জটিল কাঠামো আয়ত্ত করুন।',
        levels: [
            {
                id: '8-1',
                title: 'নিরাপত্তা জাল',
                dialogue: [
                    { speaker: 'Narrator', text: "আপনি মহাবিশ্বের সার্ভার রুমে দাঁড়িয়ে আছেন। একটি ভুল কমান্ড সবকিছু মুছে দিতে পারে।" },
                    { speaker: 'Architect', text: "চূড়ান্ত ক্ষমতা ব্যবহারের জন্য তোমাকে জানতে হবে কীভাবে নিজের ভুল সংশোধন করতে হয়।" },
                    { speaker: 'Glitch', text: "Transactions! `BEGIN TRANSACTION`... কাজ করো... তারপর ভুল হলে `ROLLBACK`!" }
                ],
                story: "একটি উজ্জ্বল টার্মিনাল আপনাকে জগত মুছে দেওয়ার ক্ষমতা দিচ্ছে। আপনাকে প্রমাণ করতে হবে আপনি এটি নিরাপদে করতে পারেন।",
                objective: 'একটি ট্রানজ্যাকশন শুরু করুন, gems টেবিলটি ডিলেট করুন, কিন্তু ওটি বাঁচাতে ROLLBACK করুন।',
                hint: 'BEGIN TRANSACTION; ... ROLLBACK;',
                initSql: `
                    CREATE TABLE gems (id INTEGER, name TEXT);
                    INSERT INTO gems VALUES (1, 'Ruby');
                    INSERT INTO gems VALUES (2, 'Sapphire');
                `,
                expectedQuery: "SELECT count(*) FROM gems",
                successMessage: "কমান্ডটি কার্যকর হয়েছে, কিন্তু রত্নগুলো রয়ে গেছে! আপনি 'Undo' করার বিদ্যা আয়ত্ত করেছেন।",
                type: 'dml',
                solution: "BEGIN TRANSACTION; DELETE FROM gems; ROLLBACK;"
            },
            {
                id: '8-1-b',
                title: 'নিরাপদ আপডেট',
                dialogue: [
                    { speaker: 'Glitch', text: "এবার একটি আপডেটের মাধ্যমে চেষ্টা করো। সব রত্নকে 'Dust' বা ধুলোয় পরিণত করো।" },
                    { speaker: 'You', text: "কিন্তু আবার রোলব্যাক করব?" },
                    { speaker: 'Glitch', text: "সব সময়।" }
                ],
                story: "আপনি আপনার রূপান্তরের ক্ষমতা নিরাপদে পরীক্ষা করছেন।",
                objective: 'ট্রানজ্যাকশন শুরু করুন, gems টেবিলের নাম "Dust" আপডেট করুন, তারপর রোলব্যাক করুন।',
                hint: 'BEGIN TRANSACTION; UPDATE ...; ROLLBACK;',
                initSql: `
                    CREATE TABLE gems (id INTEGER, name TEXT);
                    INSERT INTO gems VALUES (1, 'Ruby');
                `,
                expectedQuery: "SELECT * FROM gems WHERE name = 'Ruby'",
                successMessage: "রত্নগুলো আগের মতোই ঝকঝক করছে, আপনার পরীক্ষায় এদের কোনো ক্ষতি হয়নি।",
                type: 'dml',
                solution: "BEGIN TRANSACTION; UPDATE gems SET name='Dust'; ROLLBACK;"
            },
            {
                id: '8-2',
                title: 'স্বয়ংক্রিয় যন্ত্রী (The Automaton)',
                dialogue: [
                    { speaker: 'Architect', text: "তুমি একই সাথে রাজ্যের সব কোণে নজর রাখতে পারবে না। প্রহরী তৈরি করো।" },
                    { speaker: 'Glitch', text: "Triggers! `CREATE TRIGGER name AFTER UPDATE ON table ...`" }
                ],
                story: "একটি স্বয়ংক্রিয় প্রতিরক্ষা ব্যবস্থা তৈরি করুন যা টাওয়ারের প্রতিটি পরিবর্তন রেকর্ড করবে।",
                objective: '"log_update" নামে একটি ট্রিগার তৈরি করুন যা towers টেবিলে UPDATE হওয়ার পর "logs" টেবিলে "updated" মেসেজটি যোগ করবে।',
                hint: 'CREATE TRIGGER name AFTER UPDATE ON table BEGIN ... END;',
                initSql: `
                    CREATE TABLE towers (id INTEGER, height INTEGER);
                    CREATE TABLE logs (message TEXT);
                    INSERT INTO towers VALUES (1, 100);
                `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE type = 'trigger' AND name = 'log_update'",
                successMessage: "প্রহরী সক্রিয় হয়েছে। সিস্টেম এখন নিজেই নিজের ওপর নজর রাখছে।",
                type: 'dml',
                solution: "CREATE TRIGGER log_update AFTER UPDATE ON towers BEGIN INSERT INTO logs VALUES ('updated'); END;"
            },
            {
                id: '8-2-b',
                title: 'পর্যবেক্ষক',
                dialogue: [
                    { speaker: 'Glitch', text: "এবার নতুন কিছুর আগমনের ওপর নজর রাখো। ইনসার্টের ওপর একটি ট্রিগার।" },
                    { speaker: 'Glitch', text: "যখনই কোনো টাওয়ার তৈরি হবে, লগ-এ 'New Tower' ইনসার্ট করো।" }
                ],
                story: "বিশ্ব সৃষ্টির ওপর নজর রাখতে একটি দ্বিতীয় চোখ উন্মোচিত হলো।",
                objective: '"log_insert" নামে একটি ট্রিগার তৈরি করুন যা towers টেবিলে INSERT হওয়ার পর "logs"-এ "New Tower" যোগ করবে।',
                hint: 'AFTER INSERT ... ব্যবহার করুন',
                initSql: `
                    CREATE TABLE towers (id INTEGER, height INTEGER);
                    CREATE TABLE logs (message TEXT);
                `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE type = 'trigger' AND name = 'log_insert'",
                successMessage: "অগোচরে এই জগতে আর কিছুই প্রবেশ করতে পারবে না।",
                type: 'dml',
                solution: "CREATE TRIGGER log_insert AFTER INSERT ON towers BEGIN INSERT INTO logs VALUES ('New Tower'); END;"
            },
            {
                id: '8-3',
                title: 'এনক্রিপ্ট করা স্ক্রল',
                dialogue: [
                    { speaker: 'Narrator', text: "একজন পথিক আপনাকে অদ্ভুত বন্ধনীতে (brackets) লেখা একটি স্ক্রল দিল।" },
                    { speaker: 'Glitch', text: "এটি JSON ডেটা! `{ key: value }`।" },
                    { speaker: 'You', text: "আমার `json_extract(column, '$.key')` প্রয়োজন।" }
                ],
                story: "জটিল ডেটা কাঠামোর ভেতরে সহজ সত্য লুকিয়ে থাকে।",
                objective: 'json_extract ব্যবহার করে ডেটা কলাম থেকে "magic"-এর মানটি সিলেক্ট করুন।',
                hint: "json_extract(column, '$.key')",
                initSql: `
                    CREATE TABLE scrolls (id INTEGER, data TEXT);
                    INSERT INTO scrolls VALUES (1, '{\"magic\": \"fire\", \"power\": 50}');
                    INSERT INTO scrolls VALUES (2, '{\"magic\": \"ice\", \"power\": 40}');
                `,
                expectedQuery: "SELECT json_extract(data, '$.magic') FROM scrolls",
                successMessage: "আগুন... বরফ... কোড থেকে মূল উপাদানগুলো বের করে আনা হয়েছে।",
                type: 'select',
                solution: "SELECT json_extract(data, '$.magic') FROM scrolls"
            },
            {
                id: '8-3-b',
                title: 'শক্তি স্তর',
                dialogue: [
                    { speaker: 'Glitch', text: "এবার 'power' বা শক্তির মানটি বের করো!" }
                ],
                story: "আপনি ডেটা কাঠামোর আরও গভীরে প্রবেশ করছেন।",
                objective: 'JSON ডেটা থেকে "power" মানটি সিলেক্ট করুন।',
                hint: "json_extract(..., '$.power')",
                initSql: `
                    CREATE TABLE scrolls (id INTEGER, data TEXT);
                    INSERT INTO scrolls VALUES (1, '{\"magic\": \"fire\", \"power\": 50}');
                `,
                expectedQuery: "SELECT json_extract(data, '$.power') FROM scrolls",
                successMessage: "শক্তির মাত্রা আপনার ডিসপ্লেতে ফুটে উঠল।",
                type: 'select',
                solution: "SELECT json_extract(data, '$.power') FROM scrolls"
            },
            {
                id: '8-4',
                title: 'বিশ্লেষণ',
                dialogue: [
                    { speaker: 'Architect', text: "গতিই ক্ষমতার মূলমন্ত্র। মন্ত্র পড়ার আগে তা বিশ্লেষণ করো।" },
                    { speaker: 'Glitch', text: "EXPLAIN QUERY PLAN! কুয়েরির পেছনের ম্যাট্রিক্সটি দেখে নাও।" }
                ],
                story: "বাস্তবতার প্রবাহ অপ্টিমাইজ করার জন্য আপনি এর ইঞ্জিনের ভেতরে নজর দিচ্ছেন।",
                objective: 'SELECT * FROM magic_items WHERE power > 100 কুয়েরিটির ওপর EXPLAIN QUERY PLAN চালান।',
                hint: 'কুয়েরির একদম শুরুতে EXPLAIN QUERY PLAN কথাটি লিখে দিন।',
                initSql: `
                    CREATE TABLE magic_items (id INTEGER, power INTEGER);
                    INSERT INTO magic_items VALUES (1, 50);
                    INSERT INTO magic_items VALUES (2, 150);
                `,
                expectedQuery: "EXPLAIN QUERY PLAN SELECT * FROM magic_items WHERE power > 100",
                successMessage: "কুয়েরি প্ল্যানটি উন্মোচিত হলো। আপনি পদক্ষেপ নেওয়ার আগেই তার খরচ বা জটিলতা দেখতে পাচ্ছেন।",
                type: 'select',
                solution: "EXPLAIN QUERY PLAN SELECT * FROM magic_items WHERE power > 100"
            },
            {
                id: '8-4-b',
                title: 'গভীর স্ক্যান',
                dialogue: [
                    { speaker: 'Glitch', text: "আরেকটু জটিল একটি মন্ত্র স্ক্যান করো। `SELECT name FROM magic_items`।" },
                    { speaker: 'You', text: "এটি কি সব কুয়েরিতেই কাজ করে?" },
                    { speaker: 'Glitch', text: "হ্যাঁ।" }
                ],
                story: "আপনি মূল মেমরির ওপর একটি রোগনির্ণয় বা ডায়াগনস্টিক চালাচ্ছেন।",
                objective: 'SELECT name FROM magic_items কুয়েরিটির ওপর EXPLAIN QUERY PLAN চালান।',
                hint: 'EXPLAIN QUERY PLAN ...',
                initSql: `
                    CREATE TABLE magic_items (name TEXT);
                `,
                expectedQuery: "EXPLAIN QUERY PLAN SELECT name FROM magic_items",
                successMessage: "কার্যকারিতার সব পরিসংখ্যান আপনার চোখের সামনে ভেসে উঠল।",
                type: 'select',
                solution: "EXPLAIN QUERY PLAN SELECT name FROM magic_items"
            },
            {
                id: '8-5',
                title: 'সম্মিলিত ভিত্তি (The Composite)',
                dialogue: [
                    { speaker: 'Architect', text: "একটি একক চাবি সহজেই ভেঙে ফেলা যায়। প্রকৃত শক্তির জন্য দুটিকে একত্রে বাঁধো।" },
                    { speaker: 'Glitch', text: "Composite Primary Key! `PRIMARY KEY (col1, col2)`।" }
                ],
                story: "শেষ মন্দিরের ভিত্তির জন্য একটি জোড়া তালার প্রয়োজন।",
                objective: 'x (INT) এবং y (INT) কলামসহ "temple" নামে একটি টেবিল তৈরি করুন এবং PRIMARY KEY হিসেবে (x, y) ব্যবহার করুন।',
                hint: 'PRIMARY KEY (col1, col2)',
                initSql: `
                    DROP TABLE IF EXISTS temple;
                `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE name='temple'",
                successMessage: "দ্বৈত সীলমোহরটি সেট করা হয়েছে। আর্কিটেক্ট মাথা নাড়লেন। আপনি আর কোনো ছাত্র নন... আপনি এখন একজন মাস্টার বা ওস্তাদ।",
                type: 'dml',
                solution: "CREATE TABLE temple (x INTEGER, y INTEGER, PRIMARY KEY (x, y))"
            }
        ]
    }
];