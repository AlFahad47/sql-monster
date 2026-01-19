export const chaptersBn = [
    {
        id: 'chapter-1',
        title: 'অধ্যায় ১: জাগরণ',
        description: 'SELECT স্টেটমেন্টের বেসিক আয়ত্ত করে অন্ধকূপ থেকে পালান।',
        levels: [
            {
                id: '1-1',
                title: 'প্রথম স্ফুলিঙ্গ',
                dialogue: [
                    { speaker: 'Narrator', text: "চেতনা ফিরে আসছে। চোখের সামনে নীল রঙের কোড ভেসে যাচ্ছে। আপনি... রিবুট হচ্ছেন।" },
                    { speaker: 'Mascot', text: "এই যে! আপনি অবশেষে জেগে উঠেছেন! সিস্টেম রিবুট সম্পূর্ণ, কোয়েরি মাস্টার!" },
                    { speaker: 'You', text: "আমি কোথায়? সবকিছুই কি... ডেটা?" },
                    { speaker: 'Mascot', text: "আমার নাম গ্লিচ (Glitch)। আপনি SQL রাজ্যে আছেন। ওই `items` টেবিলটি দেখতে পাচ্ছেন? ওটা আসল। কোয়েরি করে দেখুন ওটার ভেতরে কী আছে!" }
                ],
                story: "আবছা আলোয় শূন্যে ভেসে থাকা কিছু বস্তু দেখা যাচ্ছে: একটি মরিচা ধরা চাবি, একটি ভাঙা তলোয়ার। পালানোর জন্য আপনাকে দেখতে শিখতে হবে।",
                objective: '"items" টেবিল থেকে সমস্ত কলাম নির্বাচন করুন।',
                hint: 'টেবিলের সবকিছু দেখতে, আমরা অ্যাস্টেরিস্ক (*) চিহ্ন ব্যবহার করি। উদাহরণ: `SELECT * FROM tablename`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: 'SELECT * FROM items',
                successMessage: "টার্মিনালটি জ্বলে উঠল! আপনি ঘরের সবকিছু দেখতে পাচ্ছেন।",
                type: 'select',
                solution: "SELECT * FROM items"
            },
            {
                id: '1-2',
                title: 'দৃষ্টি নিবদ্ধ করা',
                dialogue: [
                    { speaker: 'Glitch', text: "ওহ, অনেক ডেটা! আমার পিক্সেলগুলো জ্বলে যাচ্ছে!" },
                    { speaker: 'Glitch', text: "আমাকে শুধু আইটেমগুলোর নাম (name) দেখান। নয়েজ কমান!" },
                    { speaker: 'You', text: "আমি আমার কোয়েরি ফোকাস করতে পারি..." }
                ],
                story: "তথ্যের বন্যা আপনার ইন্দ্রিয়কে বিহ্বল করে দিচ্ছে। টিকে থাকার জন্য স্পষ্টতা প্রয়োজন।",
                objective: '"items" টেবিল থেকে শুধুমাত্র "name" কলামটি নির্বাচন করুন।',
                hint: 'আপনি নির্দিষ্টভাবে বেছে নিতে পারেন কোন কলামগুলো দেখাবেন। উদাহরণ: `SELECT column1, column2 FROM tablename`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT name FROM items",
                successMessage: "বিশৃঙ্খলা কমে গেছে। নামগুলো সুন্দরভাবে ভেসে উঠেছে: Rusty Key, Broken Sword... আপনার দৃষ্টি এখন স্পষ্ট।",
                type: 'select',
                solution: "SELECT name FROM items"
            },
            {
                id: '1-3',
                title: 'সঠিক সরঞ্জাম',
                dialogue: [
                    { speaker: 'Glitch', text: "সামনে লোহার দরজা—প্রাচীন তালা দিয়ে বন্ধ। গায়ের জোরে কাজ হবে না।" },
                    { speaker: 'You', text: "এখানে একটি 'type' কলাম আছে... হয়তো আমাদের বিশেষ কোনো ধরনের আইটেম দরকার।" },
                    { speaker: 'Glitch', text: "ঠিক তাই! 'tool' টাইপের জন্য ফিল্টার করুন। সঠিক সরঞ্জামই পথ খুলে দেবে।" }
                ],
                story: "একটি বিশাল গেট পথ আটকে আছে। সঠিক অর্ঘ্যের অপেক্ষায় জাদুকরী চিহ্নগুলো জ্বলছে।",
                objective: 'সমস্ত কলাম নির্বাচন করুন যেখানে type হলো "tool"।',
                hint: 'সারি ফিল্টার করতে WHERE ক্লজ ব্যবহার করুন। উদাহরণ: `SELECT * FROM items WHERE type = "tool"`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type = 'tool'",
                successMessage: "মরিচা ধরা চাবি এবং পাথরটি উজ্জ্বল হয়ে উঠল। চাবিটি তালার ভেতরে নিখুঁতভাবে ঢুকে গেল।",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'tool'"
            },
            {
                id: '1-4',
                title: 'জঞ্জাল বাছাই করা',
                dialogue: [
                    { speaker: 'Glitch', text: "আমরা সবকিছু বহন করতে পারব না—ইনভেন্টরি স্পেস সীমিত!" },
                    { speaker: 'You', text: "'power' ভ্যালুগুলো... বেশি মানেই কি ভালো?" },
                    { speaker: 'Glitch', text: "একদম! power অনুযায়ী সাজান, সবচেয়ে শক্তিশালী সবার আগে। সেরা লুটগুলো নেওয়া যাক।" }
                ],
                story: "আপনার ইনভেন্টরি মৃদু আলো দিচ্ছে। আপনাকে সবচেয়ে মূল্যবান জিনিসগুলো আগে নিতে হবে।",
                objective: 'আইটেমগুলো power অনুযায়ী নিম্নক্রমে (descending order) সাজিয়ে নির্বাচন করুন।',
                hint: 'ফলাফল সাজাতে ORDER BY এবং DESC ব্যবহার করুন।',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items ORDER BY power DESC",
                successMessage: "আইটেমগুলো নিখুঁত ক্রমে সাজানো হলো। স্ট্রেঞ্জ অ্যামুলেটটি সবার উপরে জ্বলজ্বল করছে।",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC"
            },
            {
                id: '1-5',
                title: 'জটিল পছন্দ',
                dialogue: [
                    { speaker: 'Glitch', text: "শেষ বাধা... এটি সাধারণ কোনো তালা নয়। এখানে লজিক প্রয়োজন।" },
                    { speaker: 'Glitch', text: "লেখা আছে: 'একটি artifact অথবা এমন কিছু যার power ৫০-এর বেশি অর্পণ করো।'" },
                    { speaker: 'You', text: "শর্তসাপেক্ষ লজিক... আমরা OR ব্যবহার করব।" }
                ],
                story: "প্রস্থান গেটটি শর্তের আলোয় জ্বলছে। সঠিক উত্তরই এটি খুলে দিতে পারে।",
                objective: 'এমন আইটেম নির্বাচন করুন যেখানে type হলো "artifact" অথবা power > 50।',
                hint: 'শর্তগুলো OR দিয়ে যুক্ত করুন (প্রয়োজনে ব্র্যাকেট ব্যবহার করুন)।',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type = 'artifact' OR power > 50",
                successMessage: "স্ট্রেঞ্জ অ্যামুলেটটি ভেসে উঠল। গেটটি আলোর বন্যায় মিলিয়ে গেল। মুক্তি হাতের মুঠোয়!",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'artifact' OR power > 50"
            },
            {
                id: '1-6',
                title: 'রেঞ্জ বা পরিসীমা',
                dialogue: [
                    { speaker: 'Glitch', text: "দাঁড়ান! ফাঁদ পাতা আছে! মেঝের কাঁটাগুলো মাঝারি শক্তির আইটেম পেলে সক্রিয় হয়।" },
                    { speaker: 'You', text: "১০ থেকে ২০ এর মধ্যে? নিষ্ক্রিয় করার জন্য আমাদের সেগুলো খুঁজে বের করতে হবে।" },
                    { speaker: 'Glitch', text: "BETWEEN ব্যবহার করুন—এটি অসমতা চিহ্নের (< >) চেয়ে পরিষ্কার।" }
                ],
                story: "গেট খোলার সাথে সাথে বিপদজনক যন্ত্রগুলো চালু হলো। সাবধানে এগোতে হবে।",
                objective: 'সমস্ত আইটেম নির্বাচন করুন যেখানে power ১০ এবং ২০ এর মধ্যে (BETWEEN 10 AND 20)।',
                hint: 'ব্যবহার করুন `WHERE column BETWEEN low AND high`।',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Shield', 'armor', 12);
        `,
                expectedQuery: "SELECT * FROM items WHERE power BETWEEN 10 AND 20",
                successMessage: "আপনি সাবধানে ভাঙা তলোয়ার এবং ঢাল বের করলেন। কাঁটাগুলো নিচে নেমে গেল। পথ নিরাপদ।",
                type: 'select',
                solution: "SELECT * FROM items WHERE power BETWEEN 10 AND 20"
            },
            {
                id: '1-7',
                title: 'তালিকা',
                dialogue: [
                    { speaker: 'Glitch', text: "উফ... এত কোয়েরি করে আমার ক্ষুধা পেয়েছে। জ্বালানি দরকার!" },
                    { speaker: 'You', text: "ডেটা স্প্রাইটরা কী খায়?" },
                    { speaker: 'Glitch', text: "শুধুমাত্র 'food' এবং 'artifact'। অন্য কিছু হলে সিস্টেম ক্র্যাশ করবে!" }
                ],
                story: "গ্লিচ দুর্বল হয়ে পড়ছে। দ্রুত সঠিক খাবার দিলে সে শক্তি ফিরে পাবে।",
                objective: 'সমস্ত আইটেম নির্বাচন করুন যেখানে type আছে এই তালিকায় ("food", "artifact")।',
                hint: 'ব্যবহার করুন `WHERE column IN (list)`।',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type IN ('food', 'artifact')",
                successMessage: "গ্লিচ খুশিমনে বাসি রুটি খেল এবং অ্যামুলেটের শক্তি শুষে নিল। সে আবার উজ্জ্বল হয়ে উঠল।",
                type: 'select',
                solution: "SELECT * FROM items WHERE type IN ('food', 'artifact')"
            },
            {
                id: '1-8',
                title: 'সীমিত ইনভেন্টরি',
                dialogue: [
                    { speaker: 'Glitch', text: "এত নতুন আইটেম আসছে... কিন্তু আমার বাফার তো পূর্ণ হয়ে যাচ্ছে!" },
                    { speaker: 'Glitch', text: "সবচেয়ে শক্তিশালী ৫টি আইটেম দেখান। আমরা ওগুলোই আগে নেব।" }
                ],
                story: "সিঁড়ি দিয়ে ওঠার সময় অসংখ্য প্রত্নবস্তু দেখা যাচ্ছে। সঠিক নির্বাচন জরুরি।",
                objective: 'সবচেয়ে শক্তিশালী ৫টি আইটেম নির্বাচন করুন (power অনুযায়ী descending সাজিয়ে)।',
                hint: 'ORDER BY এর পরে LIMIT যোগ করুন।',
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
                successMessage: "পাঁচটি উজ্জ্বল আইটেম আপনার ইনভেন্টরিতে জমা হলো। বোঝা এখন সামলানো সম্ভব।",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC LIMIT 5"
            },
            {
                id: '1-9',
                title: 'পরবর্তী পৃষ্ঠা',
                dialogue: [
                    { speaker: 'Glitch', text: "দারুণ সংগ্রহ! কিন্তু গভীরে আরও লুট আছে। সেরা ৫টির পরের ৫টি দেখান।" },
                    { speaker: 'You', text: "বাস্তবতার পৃষ্ঠা উল্টানো যাক..." }
                ],
                story: "অন্ধকূপের গভীরতা অসীম মনে হচ্ছে। আপনি সম্ভাবনার পরের পৃষ্ঠায় যাচ্ছেন।",
                objective: 'Power অনুযায়ী descending সাজানোর পর ৬ থেকে ১০ নম্বর আইটেমগুলো নির্বাচন করুন।',
                hint: 'সারি বাদ দিতে OFFSET ব্যবহার করুন।',
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
                successMessage: "নতুন একগুচ্ছ আইটেম উপস্থিত হলো। এই রাজ্যের উদারতার শেষ নেই।",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC LIMIT 5 OFFSET 5"
            }
        ]
    },
    {
        id: 'chapter-2',
        title: 'অধ্যায় ২: অবরুদ্ধ গ্রাম',
        description: 'আপনি দিনের আলোতে বেরিয়ে এলেন—ঝড়ে বিধ্বস্ত একটি গ্রাম ধ্বংসস্তূপে পরিণত হয়েছে। ছড়িয়ে ছিটিয়ে থাকা টেবিলগুলোতে বেঁচে যাওয়া মানুষ এবং সম্পদের রেকর্ড রয়েছে। প্রতিরক্ষা এবং আশা পুনর্নির্মাণের জন্য Aggregates ব্যবহার করুন।',
        levels: [
            {
                id: '2-1',
                title: 'গ্রামের আদমশুমারি',
                dialogue: [
                    { speaker: 'Narrator', text: "উষ্ণ সূর্যের আলো অন্ধকূপের প্রবেশদ্বারে এসে পড়েছে। সামনে একটি ধ্বংসপ্রাপ্ত গ্রাম—ছাদ ধসে পড়েছে, মাঠ পুড়ে গেছে।" },
                    { speaker: 'Elder', text: "ডেটা ডানজন থেকে আসা ভ্রমণকারীরা... ঝড়ে সব শেষ হয়ে গেছে। আমরা জানি না কতজন বেঁচে আছে।" },
                    { speaker: 'Glitch', text: "আমরা সাহায্য করতে পারি! `villagers` টেবিল কোয়েরি করুন—জীবিতদের গণনা করুন!" }
                ],
                story: "ধ্বংসপ্রাপ্ত ঘর থেকে ধোঁয়া উঠছে। মরিয়া গ্রামবাসী একত্রিত হচ্ছে, চোখে সতর্ক আশা।",
                objective: 'গ্রামবাসীদের মোট সংখ্যা গণনা করুন।',
                hint: 'COUNT(*) ব্যবহার করুন।',
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
                successMessage: "ছয়জন বেঁচে থাকা মানুষ নিশ্চিত করা গেছে। প্রবীণ স্বস্তির নিঃশ্বাস ফেললেন। পুনর্নির্মাণের ভিত্তি পাওয়া গেল।",
                type: 'select',
                solution: "SELECT COUNT(*) FROM villagers"
            },
            {
                id: '2-2',
                title: 'কোষাগার অডিট',
                dialogue: [
                    { speaker: 'Elder', text: "আমাদের ভল্টগুলো ধ্বংস হয়ে গেছে। আমাদের জানতে হবে মানুষের কাছে কত সোনা অবশিষ্ট আছে।" },
                    { speaker: 'Glitch', text: "সব যোগ করুন! gold কলামটি SUM করুন।" },
                    { speaker: 'You', text: "আমি আমাদের সম্পদ গণনা করতে পারি..." }
                ],
                story: "গ্রামবাসীরা গ্রামের চত্বরে তাদের অবশিষ্ট মুদ্রা জমা করছে। আশা এখন মোট যোগফলের ওপর নির্ভর করছে।",
                objective: 'গ্রামবাসীদের হাতে থাকা সোনার মোট যোগফল গণনা করুন।',
                hint: 'SUM(column) ব্যবহার করুন।',
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
                successMessage: "৪০৫ স্বর্ণ গণনা করা হয়েছে। খুব বেশি নয়, তবে মেরামতের কাজ শুরু করার জন্য যথেষ্ট।",
                type: 'select',
                solution: "SELECT SUM(gold) FROM villagers"
            },
            {
                id: '2-3',
                title: 'গিল্ড গঠন',
                dialogue: [
                    { speaker: 'Elder', text: "আমাদের দল গঠন করতে হবে—যোদ্ধা, জাদুকর, নিরাময়কারী..." },
                    { speaker: 'Glitch', text: "তাদের গ্রুপ করুন! role অনুযায়ী গণনা করুন!" },
                    { speaker: 'You', text: "GROUP BY role, তারপর গণনা..." }
                ],
                story: "বেঁচে থাকা মানুষরা পেশা অনুযায়ী লাইনে দাঁড়াচ্ছে, গ্রামের প্রতিরক্ষার জন্য গিল্ড তৈরি করতে প্রস্তুত।",
                objective: 'role নির্বাচন করুন এবং প্রতি role-এ কতজন আছে তা গণনা করুন (role দ্বারা গ্রুপ করে)।',
                hint: 'GROUP BY এবং COUNT(*) ব্যবহার করুন।',
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
                successMessage: "ভূমিকা অনুযায়ী তালিকা: ২ জন যোদ্ধা, ২ জন জাদুকর, ১ জন নিরাময়কারী, ১ জন নির্মাতা। ভারসাম্যপূর্ণ দল গঠিত হলো।",
                type: 'select',
                solution: "SELECT role, COUNT(*) FROM villagers GROUP BY role"
            },
            {
                id: '2-4',
                title: 'এলিট স্কোয়াড',
                dialogue: [
                    { speaker: 'Elder', text: "আমরা শুধুমাত্র একাধিক সদস্যবিশিষ্ট এলিট স্কোয়াডগুলোকেই খরচ দিতে পারব।" },
                    { speaker: 'Glitch', text: "গ্রুপ ফিল্টার করুন! HAVING ক্লজ ব্যবহার করুন!" }
                ],
                story: "সবচেয়ে শক্তিশালী গিল্ডগুলো যুদ্ধের জন্য প্রস্তুত হচ্ছে। শুধুমাত্র বড় দলগুলোই হুমকির বিরুদ্ধে দাঁড়াবে।",
                objective: 'role এবং গণনা নির্বাচন করুন, role দ্বারা গ্রুপ করুন, শুধুমাত্র সেই গ্রুপগুলো দেখান যেখানে গণনা > ১।',
                hint: 'GROUP BY এর পরে HAVING ব্যবহার করুন।',
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
                successMessage: "যোদ্ধা এবং জাদুকররা এলিট স্কোয়াড হিসেবে এগিয়ে এল। গ্রামের প্রতিরক্ষা মজবুত হলো।",
                type: 'select',
                solution: "SELECT role, COUNT(*) FROM villagers GROUP BY role HAVING COUNT(*) > 1"
            },
            {
                id: '2-5',
                title: 'গড় সম্পদ',
                dialogue: [
                    { speaker: 'Elder', text: "ন্যায্য কর নির্ধারণের জন্য, আমাদের মাথাপিছু গড় সম্পদ জানতে হবে।" },
                    { speaker: 'Glitch', text: "AVG ফাংশন! চলুন গণনা করি।" }
                ],
                story: "গ্রামবাসীরা আগুনের চারপাশে বসে ন্যায্য অবদানের বিষয়ে আলোচনা করছে।",
                objective: 'প্রতি গ্রামবাসীর গড় সোনা (gold) গণনা করুন।',
                hint: 'AVG(column) ব্যবহার করুন।',
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
                successMessage: "গড়: ~৬৭.৫ স্বর্ণ। ন্যায্য কর নির্ধারণ করা হয়েছে। বেঁচে থাকাদের মধ্যে বিশ্বাস বাড়ছে।",
                type: 'select',
                solution: "SELECT AVG(gold) FROM villagers"
            },
            {
                id: '2-6',
                title: 'সবচেয়ে ধনী ও দরিদ্র',
                dialogue: [
                    { speaker: 'Elder', text: "কার কাছে সবচেয়ে বেশি সোনা আছে? আর কার কাছে সবচেয়ে কম? আমাদের চরম সীমা জানতে হবে।" },
                    { speaker: 'You', text: "MAX এবং MIN এটি প্রকাশ করবে।" }
                ],
                story: "গ্রামের চত্বর নিস্তব্ধ হয়ে গেল যখন সম্পদের বৈষম্য স্পষ্ট হলো।",
                objective: 'একই কোয়েরিতে সর্বোচ্চ এবং সর্বনিম্ন সোনা নির্বাচন করুন।',
                hint: 'MAX এবং MIN একত্রিত করুন।',
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
                successMessage: "সবচেয়ে ধনী: ১১০, সবচেয়ে দরিদ্র: ২০। গ্রামটি অভাবীদের সাহায্য করার প্রতিশ্রুতি দিল।",
                type: 'select',
                solution: "SELECT MAX(gold), MIN(gold) FROM villagers"
            },
            {
                id: '2-7',
                title: 'যোদ্ধাদের সম্পদ',
                dialogue: [
                    { speaker: 'Elder', text: "আমাদের যোদ্ধারা সবকিছু বাজি রাখে। তারা যুদ্ধের জন্য কত সঞ্চয় করেছে?" },
                    { speaker: 'Glitch', text: "শর্তসাপেক্ষ যোগফল! SUM এর ভেতরে CASE।" }
                ],
                story: "যুদ্ধ-বিধ্বস্ত যোদ্ধারা গর্বের সাথে দাঁড়িয়ে আছে, তাদের থলে অর্জিত মুদ্রায় ভারী।",
                objective: 'শুধুমাত্র যোদ্ধাদের (warriors) মোট সোনা গণনা করুন।',
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
                successMessage: "শুধুমাত্র যোদ্ধাদের কাছ থেকেই ৯৫ স্বর্ণ। তারা দেয়াল মজবুত করার জন্য এটি দান করেছে। মনোবল বৃদ্ধি পেল।",
                type: 'select',
                solution: "SELECT SUM(CASE WHEN role = 'warrior' THEN gold ELSE 0 END) FROM villagers"
            }
        ]
    },
    {
        id: 'chapter-3',
        title: 'অধ্যায় ৩: অন্ধকার বন',
        description: 'গ্রামের ওপারে কুয়াশায় ঢাকা একটি প্রাচীন, প্যাঁচানো বন। পথ এবং গন্তব্যের টেবিলগুলো শিকড়ের মতো জড়িয়ে আছে। নিরাপদ পথ খুঁজে পেতে Joins এবং Subqueries আয়ত্ত করুন।',
        levels: [
            {
                id: '3-1',
                title: 'মোড়',
                dialogue: [
                    { speaker: 'Narrator', text: "গ্রামটি পেছনে মিলিয়ে যাচ্ছে। প্যাঁচানো গাছগুলো ঘিরে ধরছে, তাদের ডালপালা তোরণ তৈরি করেছে।" },
                    { speaker: 'Glitch', text: "এই বনটি একটি গোলকধাঁধা! আমাদের `paths` এবং `destinations` টেবিল আছে।" },
                    { speaker: 'You', text: "আমাদের তাদের সংযুক্ত করতে হবে যাতে বোঝা যায় প্রতিটি পথ কোথায় নিয়ে যায়।" },
                    { speaker: 'Glitch', text: "destination_id দিয়ে তাদের JOIN করুন!" }
                ],
                story: "কুয়াশা বিভক্ত পথের চারপাশে ঘুরপাক খাচ্ছে। প্রতিটি পথ বিপদ বা মুক্তির প্রতিশ্রুতি দেয়।",
                objective: '"paths" এবং "destinations" কে destination_id এর মাধ্যমে জয়েন করে সমস্ত কলাম নির্বাচন করুন।',
                hint: 'INNER JOIN ... ON ব্যবহার করুন।',
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
                successMessage: "মানচিত্রটি আপনার মনে ভেসে উঠল। Shadow Path ড্রাগনের ডেরায় (Dragon Lair) নিয়ে যায়... আপনি বুদ্ধিমত্তার সাথে পথ বেছে নিলেন।",
                type: 'select',
                solution: "SELECT * FROM paths JOIN destinations ON paths.destination_id = destinations.id"
            },
            {
                id: '3-2',
                title: 'লুকানো ধন',
                dialogue: [
                    { speaker: 'Glitch', text: "কিছু পথে গুপ্তধন আছে... কিন্তু সবগুলোতে নয়।" },
                    { speaker: 'Glitch', text: "আমাদের প্রতিটি পথ দেখতে হবে, এমনকি যদি তাদের সাথে কোনো ধন লিঙ্ক করা নাও থাকে।" },
                    { speaker: 'You', text: "সব পথ রাখার জন্য LEFT JOIN?" }
                ],
                story: "কিছু নির্দিষ্ট পথের পাতার আড়াল থেকে সোনার ঝলকানি দেখা যাচ্ছে।",
                objective: 'LEFT JOIN ব্যবহার করে সমস্ত পথ এবং তাদের ধন নির্বাচন করুন।',
                hint: 'LEFT JOIN ব্যবহার করুন।',
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
                successMessage: "Rocky Road-এ NULL ট্রেজার দেখাচ্ছে—নিরাপদ, কিন্তু খালি। জ্ঞান আপনার পদক্ষেপকে পথ দেখাচ্ছে।",
                type: 'select',
                solution: "SELECT * FROM paths LEFT JOIN treasures ON paths.id = treasures.path_id"
            },
            {
                id: '3-3',
                title: 'শেষ গেট',
                dialogue: [
                    { speaker: 'Guardian', text: "থামো! গাছের আড়াল থেকে ফরেস্ট গার্ডিয়ান বেরিয়ে এল।" },
                    { speaker: 'Guardian', text: "শুধুমাত্র তারাই পার হতে পারবে যারা 'Dragon Lair'-এর danger_level জানে।" },
                    { speaker: 'Glitch', text: "দ্রুত—সঠিক মানটি কোয়েরি করুন!" }
                ],
                story: "একটি বিশাল গাছ-সদৃশ প্রাণী শেষ প্রান্তটি আটকে আছে, তার চোখ প্রাচীন জ্ঞানে জ্বলজ্বল করছে।",
                objective: 'danger_level নির্বাচন করুন যেখানে নাম হলো "Dragon Lair"।',
                hint: 'সাধারণ WHERE ফিল্টার।',
                initSql: `
          CREATE TABLE destinations (id INTEGER, name TEXT, danger_level INTEGER);
          INSERT INTO destinations VALUES (1, 'Crystal Cave', 5);
          INSERT INTO destinations VALUES (2, 'Old Ruins', 2);
          INSERT INTO destinations VALUES (3, 'Dragon Lair', 10);
        `,
                expectedQuery: "SELECT danger_level FROM destinations WHERE name = 'Dragon Lair'",
                successMessage: "আপনি উত্তর দিলেন: '১০'। গার্ডিয়ান গম্ভীরভাবে মাথা নাড়ল এবং সরে দাঁড়াল। সামনের পথ খুলে গেল।",
                type: 'select',
                solution: "SELECT danger_level FROM destinations WHERE name = 'Dragon Lair'"
            },
            {
                id: '3-4',
                title: 'শূন্যতা',
                dialogue: [
                    { speaker: 'Glitch', text: "কিছু গন্তব্য... খালি মনে হচ্ছে। ডেটাতে শুধুই শূন্যতা।" },
                    { speaker: 'You', text: "NULL নাম। আমরা অনুপস্থিতির জন্য কোয়েরি করতে পারি।" },
                    { speaker: 'Glitch', text: "IS NULL ব্যবহার করুন—কখনও সমান চিহ্ন (=) ব্যবহার করবেন না!" }
                ],
                story: "কিছু পরিষ্কার জায়গায় কেবল ঘূর্ণায়মান শূন্যতা রয়েছে—অজানা রাজ্যের প্রবেশদ্বার।",
                objective: 'সমস্ত গন্তব্য নির্বাচন করুন যেখানে name IS NULL।',
                hint: 'IS NULL ব্যবহার করুন।',
                initSql: `
          CREATE TABLE destinations (id INTEGER, name TEXT, danger_level INTEGER);
          INSERT INTO destinations VALUES (1, 'Crystal Cave', 5);
          INSERT INTO destinations VALUES (2, NULL, 0);
          INSERT INTO destinations VALUES (3, 'Dragon Lair', 10);
        `,
                expectedQuery: "SELECT * FROM destinations WHERE name IS NULL",
                successMessage: "আপনি শূন্যতার দিকে তাকালেন... এবং এটি অনুপস্থিতির গোপন কথা ফিসফিস করে বলল। আপনার মেরুদণ্ড দিয়ে শীতল স্রোত বয়ে গেল।",
                type: 'select',
                solution: "SELECT * FROM destinations WHERE name IS NULL"
            },
            {
                id: '3-5',
                title: 'মাল্টিভার্স',
                dialogue: [
                    { speaker: 'Glitch', text: "ওহ—আমি দেখছি প্রতিটি পথ প্রতিটি গন্তব্যের সাথে একসাথে যুক্ত হচ্ছে!" },
                    { speaker: 'You', text: "কার্তেসিয়ান প্রোডাক্ট... CROSS JOIN।" },
                    { speaker: 'Glitch', text: "বিশুদ্ধ বিশৃঙ্খলা! তবে হয়তো এটি দরকারি..." }
                ],
                story: "বাস্তবতা ক্ষণিকের জন্য ভেঙে গেল, অসীম ওভারল্যাপিং সম্ভাবনা দেখাচ্ছে।",
                objective: 'paths CROSS JOIN destinations থেকে সমস্ত কলাম নির্বাচন করুন।',
                hint: 'CROSS JOIN ব্যবহার করুন।',
                initSql: `
          CREATE TABLE paths (name TEXT);
          CREATE TABLE destinations (name TEXT);
          INSERT INTO paths VALUES ('Path A');
          INSERT INTO paths VALUES ('Path B');
          INSERT INTO destinations VALUES ('Dest 1');
          INSERT INTO destinations VALUES ('Dest 2');
        `,
                expectedQuery: "SELECT * FROM paths CROSS JOIN destinations",
                successMessage: "চারটি সমান্তরাল বাস্তবতা স্বচ্ছ হয়ে একত্রিত হলো। একটি সত্য পথ বেরিয়ে এল।",
                type: 'select',
                solution: "SELECT * FROM paths CROSS JOIN destinations"
            },
            {
                id: '3-6',
                title: 'কমান্ডের অনুক্রম',
                dialogue: [
                    { speaker: 'Glitch', text: "গ্রামের স্কাউটরা নেতাদের কাছে রিপোর্ট করে। আমাদের পুরো চেইন অফ কমান্ড দরকার।" },
                    { speaker: 'You', text: "employees টেবিলে সেলফ-জয়েন করুন!" }
                ],
                story: "বনের গভীরে লুকিয়ে থাকা স্কাউটদের একটি ক্যাম্প কঠোর অনুক্রমের অধীনে সংগঠিত হয়।",
                objective: 'employees টেবিলকে নিজের সাথে জয়েন করে কর্মীর নাম এবং ম্যানেজারের নাম দেখান।',
                hint: 'ম্যানেজারদের জন্য অ্যালিয়াস (alias) এবং LEFT JOIN ব্যবহার করুন।',
                initSql: `
          CREATE TABLE employees (id INTEGER, name TEXT, manager_id INTEGER);
          INSERT INTO employees VALUES (1, 'Elder', NULL);
          INSERT INTO employees VALUES (2, 'Born', 1);
          INSERT INTO employees VALUES (3, 'Alina', 1);
          INSERT INTO employees VALUES (4, 'Kael', 2);
        `,
                expectedQuery: "SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id",
                successMessage: "পুরো অনুক্রমটি প্রকাশিত হলো। নেতৃত্বের ধারা স্পষ্টভাবে দেখা যাচ্ছে।",
                type: 'select',
                solution: "SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id"
            }
        ]
    },
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
                    { speaker: 'Glitch', text: "আমি শুধু সেই বইগুলো চাই যা গড়ের চেয়ে মোটা!" },
                    { speaker: 'You', text: "আমাদের আগে গড় গণনা করতে হবে—সাবকোয়েরি!" }
                ],
                story: "বিশাল বইগুলো তাকের উপর রাজত্ব করছে। কেবল সত্যই গভীর জ্ঞান ধারণ করে।",
                objective: 'বই থেকে শিরোনাম নির্বাচন করুন যেখানে pages > (SELECT AVG(pages) FROM books)।',
                hint: 'WHERE-এ সাবকোয়েরি ব্যবহার করুন।',
                initSql: `
          CREATE TABLE books (title TEXT, pages INTEGER);
          INSERT INTO books VALUES ('Tiny Book', 50);
          INSERT INTO books VALUES ('Medium Book', 200);
          INSERT INTO books VALUES ('Giant Book', 500);
          INSERT INTO books VALUES ('Huge Scroll', 1000);
        `,
                expectedQuery: "SELECT title FROM books WHERE pages > (SELECT AVG(pages) FROM books)",
                successMessage: "সবচেয়ে শক্তিশালী বইগুলো বাকিদের ছাপিয়ে উঠল। প্রকৃত জ্ঞান তাদেরই প্রাপ্য যারা সারগর্ভ।",
                type: 'select',
                solution: "SELECT title FROM books WHERE pages > (SELECT AVG(pages) FROM books)"
            },
            {
                id: '4-6',
                title: 'ডিক্রিপশন',
                dialogue: [
                    { speaker: 'Librarian', text: "লুকানো বার্তাগুলো শুধুমাত্র বড় হাতের অক্ষরে (uppercase) দেখা যায়।" },
                    { speaker: 'Glitch', text: "স্ট্রিং ফাংশন! সবগুলোকে UPPER করুন।" }
                ],
                story: "প্রাচীন পৃষ্ঠার অস্পষ্ট লেখাগুলো শুধুমাত্র রূপান্তরের পরেই দৃশ্যমান হয়।",
                objective: 'books থেকে শিরোনামের UPPER() নির্বাচন করুন।',
                hint: 'UPPER(column) ব্যবহার করুন।',
                initSql: `
          CREATE TABLE books (title TEXT);
          INSERT INTO books VALUES ('secret key');
          INSERT INTO books VALUES ('hidden door');
        `,
                expectedQuery: "SELECT UPPER(title) FROM books",
                successMessage: "SECRET KEY. HIDDEN DOOR. আসল বার্তাটি স্পষ্টভাবে জ্বলজ্বল করছে।",
                type: 'select',
                solution: "SELECT UPPER(title) FROM books"
            },
            {
                id: '4-7',
                title: 'অংশীদারী জ্ঞান',
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
                    { speaker: 'Chronos', text: "স্বাগতম, ভ্রমণকারীরা। এখানে সময় অদ্ভুতভাবে প্রবাহিত হয়। আপনি কি যুগ অনুযায়ী ইভেন্টগুলোকে র‍্যাঙ্ক করতে পারেন?" },
                    { speaker: 'Glitch', text: "উইন্ডো ফাংশন! বছরের ওপর RANK!" }
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
                id: '5-2',
                title: 'টাইম ট্রাভেল',
                dialogue: [
                    { speaker: 'Chronos', text: "এখন ভবিষ্যতের এক ঝলক দেখুন। প্রতিটি ইভেন্টের জন্য, পরবর্তীতে কী আসছে তা প্রকাশ করুন।" },
                    { speaker: 'Glitch', text: "সামনে উঁকি দিতে LEAD ফাংশন!" }
                ],
                story: "আগামী যুগের দৃশ্যগুলো উপলব্ধির প্রান্তে মিটমিট করছে।",
                objective: 'নাম, বছর এবং বছরের অর্ডারিংয়ের ওপর ভিত্তি করে LEAD(name) নির্বাচন করুন।',
                hint: 'LEAD(column) OVER (ORDER BY ...) ব্যবহার করুন।',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Start', 100);
          INSERT INTO events VALUES (2, 'Middle', 200);
          INSERT INTO events VALUES (3, 'End', 300);
        `,
                expectedQuery: "SELECT name, year, LEAD(name) OVER (ORDER BY year) FROM events",
                successMessage: "আপনি বর্তমানের বাইরে দেখতে পাচ্ছেন। সময়ের প্রবাহ অনুমানযোগ্য হয়ে উঠেছে।",
                type: 'select',
                solution: "SELECT name, year, LEAD(name) OVER (ORDER BY year) FROM events"
            },
            {
                id: '5-3',
                title: 'প্যারাডক্স',
                dialogue: [
                    { speaker: 'Chronos', text: "সাম্প্রতিক ইভেন্টগুলোর একটি অস্থায়ী সময়রেখা সংজ্ঞায়িত করুন, তারপর এটি কোয়েরি করুন।" },
                    { speaker: 'Glitch', text: "কমন টেবিল এক্সপ্রেশন! WITH ক্লজ!" }
                ],
                story: "প্যারাডক্সিক্যাল লুপগুলো টাওয়ারের সিঁড়িগুলো খুলে ফেলার হুমকি দিচ্ছে।",
                objective: '"recent" নামে একটি CTE ব্যবহার করে ২০০ বছরের বেশি ইভেন্টগুলো নির্বাচন করুন, তারপর recent থেকে সব নির্বাচন করুন।',
                hint: 'WITH name AS (query) SELECT * FROM name ব্যবহার করুন।',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Old', 100);
          INSERT INTO events VALUES (2, 'Modern', 250);
          INSERT INTO events VALUES (3, 'Future', 300);
        `,
                expectedQuery: "WITH recent AS (SELECT * FROM events WHERE year > 200) SELECT * FROM recent",
                successMessage: "প্যারাডক্সের সমাধান হয়েছে। অস্থায়ী বাস্তবতা সত্যে পরিণত হয়েছে।",
                type: 'select',
                solution: "WITH recent AS (SELECT * FROM events WHERE year > 200) SELECT * FROM recent"
            },
            {
                id: '5-4',
                title: 'গ্রুপের মধ্যে র‍্যাঙ্ক',
                dialogue: [
                    { speaker: 'Chronos', text: "সর্বকালের মধ্যে নয়, বরং প্রতিটি যুগের মধ্যে আলাদাভাবে র‍্যাঙ্ক করুন।" },
                    { speaker: 'Glitch', text: "PARTITION BY! উইন্ডোটি গ্রুপ করুন!" }
                ],
                story: "টাওয়ারের দেয়ালে বিভিন্ন যুগ ডালপালার মতো ছড়িয়ে আছে।",
                objective: 'প্রতিটি ভূমিকার (role) মধ্যে সোনা (gold) অনুযায়ী গ্রামবাসীদের র‍্যাঙ্ক করুন।',
                hint: 'RANK() OVER (PARTITION BY role ORDER BY gold DESC)',
                initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES ('Born', 'warrior', 50);
          INSERT INTO villagers VALUES ('Kael', 'warrior', 45);
          INSERT INTO villagers VALUES ('Alina', 'mage', 100);
          INSERT INTO villagers VALUES ('Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT name, role, gold, RANK() OVER (PARTITION BY role ORDER BY gold DESC) FROM villagers",
                successMessage: "সেরা যোদ্ধা, সেরা জাদুকর... তাদের নিজ নিজ যুগে র‍্যাঙ্কিং স্ফটিকের মতো পরিষ্কার।",
                type: 'select',
                solution: "SELECT name, role, gold, RANK() OVER (PARTITION BY role ORDER BY gold DESC) FROM villagers"
            },
            {
                id: '5-5',
                title: 'অনন্য অর্ডার',
                dialogue: [
                    { speaker: 'Chronos', text: "প্রতিটি ভূমিকার মধ্যে সম্পদের ভিত্তিতে অনন্য অবস্থান নির্ধারণ করুন।" }
                ],
                story: "প্রতিটি আত্মা ইতিহাসে তার নিজস্ব স্থান দাবি করে।",
                objective: 'পার্টিশন সহ ROW_NUMBER() ব্যবহার করুন।',
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
                title: 'রানিং টোটাল',
                dialogue: [
                    { speaker: 'Chronos', text: "সময় যত এগোচ্ছে, সম্পদ কীভাবে জমছে তা দেখুন।" }
                ],
                story: "ইতিহাসের মধ্য দিয়ে সোনা নদীর মতো প্রবাহিত হচ্ছে।",
                objective: 'id অনুযায়ী ক্রমানুসারে সোনার রানিং সাম (running sum) গণনা করুন।',
                hint: 'ফ্রেম ক্লজ সহ SUM() OVER ব্যবহার করুন।',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Trog', 20);
          INSERT INTO villagers VALUES (2, 'Kael', 45);
          INSERT INTO villagers VALUES (3, 'Born', 50);
          INSERT INTO villagers VALUES (4, 'Sera', 80);
          INSERT INTO villagers VALUES (5, 'Alina', 100);
          INSERT INTO villagers VALUES (6, 'Myra', 110);
        `,
                expectedQuery: "SELECT name, gold, SUM(gold) OVER (ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM villagers",
                successMessage: "আপনার চোখের সামনে সম্পদ জমা হচ্ছে। সময়ের নদী আরও সমৃদ্ধ হচ্ছে।",
                type: 'select',
                solution: "SELECT name, gold, SUM(gold) OVER (ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM villagers"
            },
            {
                id: '5-7',
                title: 'পারিবারিক বৃক্ষ',
                dialogue: [
                    { speaker: 'Chronos', text: "বংশধারা প্রজন্মজুড়ে বৃক্ষ তৈরি করে। এল্ডারের সমস্ত বংশধরকে খুঁজে বের করুন।" },
                    { speaker: 'Glitch', text: "রিকার্সিভ CTE! শাখাগুলো অনুসরণ করুন!" }
                ],
                story: "টাওয়ারের দেয়াল বেয়ে পূর্বপুরুষের রেখা অসীম পর্যন্ত পেঁচিয়ে উঠেছে।",
                objective: 'সমস্ত অধস্তন (সরাসরি এবং পরোক্ষ) খুঁজে পেতে রিকার্সিভ CTE ব্যবহার করুন।',
                hint: 'WITH RECURSIVE ... UNION ALL',
                initSql: `
          CREATE TABLE employees (id INTEGER, name TEXT, manager_id INTEGER);
          INSERT INTO employees VALUES (1, 'Elder', NULL);
          INSERT INTO employees VALUES (2, 'Born', 1);
          INSERT INTO employees VALUES (3, 'Kael', 2);
          INSERT INTO employees VALUES (4, 'Alina', 1);
        `,
                expectedQuery: "WITH RECURSIVE hierarchy(id, name, level) AS (SELECT id, name, 0 FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, h.level + 1 FROM employees e JOIN hierarchy h ON e.manager_id = h.id) SELECT name, level FROM hierarchy",
                successMessage: "সমগ্র বংশধারা অসীম সময়ের মধ্য দিয়ে উন্মোচিত হলো। আপনি প্রজন্মের প্রবাহ আয়ত্ত করেছেন।",
                type: 'select',
                solution: "WITH RECURSIVE hierarchy(id, name, level) AS (SELECT id, name, 0 FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, h.level + 1 FROM employees e JOIN hierarchy h ON e.manager_id = h.id) SELECT name, level FROM hierarchy"
            }
        ]
    },
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
                    { speaker: 'Glitch', text: "CREATE TABLE! স্থিতিশীলতার জন্য প্রাইমারি কি সহ।" }
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
                id: '6-2',
                title: 'জেনেসিস',
                dialogue: [
                    { speaker: 'Architect', text: "আপনার সৃষ্টিতে প্রাণ দিন। প্রথম টাওয়ারটি তুলুন।" },
                    { speaker: 'Glitch', text: "ভ্যালু INSERT করুন!" }
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
                id: '6-3',
                title: 'সংস্কার',
                dialogue: [
                    { speaker: 'Glitch', text: "এটি সুন্দর... কিন্তু নামহীন। পরিচয় যোগ করুন!" },
                    { speaker: 'Architect', text: "ব্লুপ্রিন্ট পরিবর্তন (ALTER) করুন।" }
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
                    { speaker: 'You', text: "এটির উচ্চতা আপডেট (UPDATE) করুন..." }
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
                id: '6-5',
                title: 'পরিষ্কার করা',
                dialogue: [
                    { speaker: 'Architect', text: "কিছু কাঠামো অযোগ্য। দুর্বলদের সরিয়ে দিন।" },
                    { speaker: 'Glitch', text: "সারি DELETE করুন, সবকিছু নয়!" }
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
                successMessage: "দুর্বল টাওয়ারগুলো ধুলোয় মিশে গেল। কেবল শক্তিশালীরাই টিকে রইল।",
                type: 'dml',
                solution: "DELETE FROM towers WHERE height < 150"
            },
            {
                id: '6-6',
                title: 'দ্য ভিশন',
                dialogue: [
                    { speaker: 'Architect', text: "সবচেয়ে লম্বা টাওয়ারগুলোর একটি স্থায়ী দৃশ্য তৈরি করুন।" },
                    { speaker: 'Glitch', text: "একটি VIEW—সংরক্ষিত কোয়েরি!" }
                ],
                story: "আপনি আপনার মহৎ কাজগুলো সব সময় দেখতে চান।",
                objective: '"high_towers" নামে একটি view তৈরি করুন যা towers থেকে নির্বাচন করে যেখানে height > 150।',
                hint: 'CREATE VIEW name AS SELECT ...',
                initSql: `
          DROP VIEW IF EXISTS high_towers;
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 200, 'Spire');
          INSERT INTO towers VALUES (2, 50, 'Hut');
        `,
                expectedQuery: "SELECT * FROM high_towers",
                successMessage: "একটি স্ফটিক জানালা খুলে গেল, চিরকালের জন্য আপনার মহৎ সৃষ্টিগুলো প্রদর্শন করছে।",
                type: 'dml',
                solution: "CREATE VIEW high_towers AS SELECT * FROM towers WHERE height > 150"
            },
            {
                id: '6-7',
                title: 'নিয়ম প্রয়োগ',
                dialogue: [
                    { speaker: 'Architect', text: "আপনার বিশ্বের আইন প্রয়োজন। নাম অবশ্যই অনন্য এবং আবশ্যক হতে হবে।" }
                ],
                story: "বাধ্যবাধকতা ছাড়া বিশৃঙ্খলার হুমকি থাকে।",
                objective: 'towers টেবিল তৈরি করুন যেখানে name হবে TEXT UNIQUE NOT NULL।',
                hint: 'কলামের সীমাবদ্ধতা (Constraints)',
                initSql: `
          DROP TABLE IF EXISTS towers;
        `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE name='towers'",
                successMessage: "অপরিবর্তনীয় আইন বাস্তবতাকে বেঁধে ফেলল। আপনার বিশ্ব অবিচ্ছেদ্য অখণ্ডতা লাভ করল।",
                type: 'dml',
                solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT UNIQUE NOT NULL)"
            },
            {
                id: '6-8',
                title: 'সংযুক্ত কাঠামো',
                dialogue: [
                    { speaker: 'Architect', text: "টাওয়ারগুলো গ্রামের অন্তর্গত। বন্ধনটি প্রয়োগ করুন।" }
                ],
                story: "বিচ্ছিন্ন টাওয়ারগুলো অসম্পূর্ণ মনে হচ্ছে।",
                objective: 'towers তৈরি করুন যেখানে village_id রেফারেন্স করবে villages.id কে।',
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
                title: 'বিদ্যুৎ কোয়েরি',
                dialogue: [
                    { speaker: 'Architect', text: "অনেক টাওয়ারের কারণে অনুসন্ধান ধীর হয়ে যাচ্ছে।" },
                    { speaker: 'Glitch', text: "গতির জন্য INDEX!" }
                ],
                story: "আপনার ক্রমবর্ধমান সাম্রাজ্যের দক্ষতা প্রয়োজন।",
                objective: 'height কলামে একটি index তৈরি করুন।',
                hint: 'CREATE INDEX name ON table(column)',
                initSql: `
          DROP INDEX IF EXISTS idx_height;
          CREATE TABLE IF NOT EXISTS towers (id INTEGER, height INTEGER);
        `,
                expectedQuery: "SELECT name FROM sqlite_master WHERE type='index'",
                successMessage: "কোয়েরিগুলো বিদ্যুতের মতো ঝলসে উঠল। আপনার রাজ্য অবিলম্বে সাড়া দিচ্ছে।",
                type: 'dml',
                solution: "CREATE INDEX idx_height ON towers(height)"
            },
            {
                id: '6-10',
                title: 'ধ্বংস',
                dialogue: [
                    { speaker: 'Architect', text: "পরীক্ষা শেষ। শূন্যে ফিরে যান।" },
                    { speaker: 'Glitch', text: "সবকিছু DROP করুন..." }
                ],
                story: "আপনার সৃষ্টি তাদের উদ্দেশ্য পূরণ করেছে।",
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
        title: 'অধ্যায় ৭: ক্রোনোম্যানসার',
        description: 'ক্ষমতার চূড়ায়, আপনি সময়ের প্রভুর মুখোমুখি। শেষ সীমান্ত জয় করতে তারিখ এবং সময়ের ফাংশনগুলো আয়ত্ত করুন।',
        levels: [
            {
                id: '7-1',
                title: 'বর্তমান',
                dialogue: [
                    { speaker: 'Narrator', text: "পুনর্নির্মিত বিশ্বের চূড়ায় একটি শেষ অবয়ব অপেক্ষা করছে—ক্রোনোম্যানসার।" },
                    { speaker: 'Chronomancer', text: "আপনি বাস্তবতা গঠন করেছেন। কিন্তু আপনি কি শাশ্বত বর্তমানকে ধরতে পারেন?" },
                    { speaker: 'Glitch', text: "বর্তমান মুহূর্তটি কোয়েরি করুন!" }
                ],
                story: "চূড়ান্ত সিংহাসনের চারপাশে সময় অসীম লুপে ঘুরপাক খাচ্ছে।",
                objective: 'DATE(\'now\') ব্যবহার করে বর্তমান তারিখ নির্বাচন করুন।',
                hint: 'DATE("now")',
                initSql: ``,
                expectedQuery: "SELECT DATE('now')",
                successMessage: "সঠিক বর্তমান আপনার সামনে স্ফটিকের মতো পরিষ্কার হয়ে উঠল। আপনি মুহূর্তটি লুফে নিলেন।",
                type: 'select',
                solution: "SELECT DATE('now')"
            },
            {
                id: '7-2',
                title: 'বয়স',
                dialogue: [
                    { speaker: 'Chronomancer', text: "এই সময়হীন বর্তমান থেকে বছরটি বের করুন।" },
                    { speaker: 'Glitch', text: "সময় ফরম্যাট করতে STRFTIME!" }
                ],
                story: "শাশ্বত চক্রের সঠিক পরিমাপ প্রয়োজন।",
                objective: 'STRFTIME(\'%Y\', \'now\') কে current_year হিসেবে নির্বাচন করুন।',
                hint: 'STRFTIME("%Y", "now")',
                initSql: ``,
                expectedQuery: "SELECT STRFTIME('%Y', 'now')",
                successMessage: "বর্তমান বছরটি প্রবাহ থেকে নিজেকে বিচ্ছিন্ন করে নিল। আপনি সময়ের উপাদানগুলোকে আদেশ করছেন।",
                type: 'select',
                solution: "SELECT STRFTIME('%Y', 'now')"
            },
            {
                id: '7-3',
                title: 'ভবিষ্যৎ দর্শন',
                dialogue: [
                    { speaker: 'Chronomancer', text: "আজ থেকে ৩০ দিন পর কী তারিখ হবে?" }
                ],
                story: "আগামীকালের দৃশ্য হাতছানি দিচ্ছে।",
                objective: 'আজ থেকে ৩০ দিন পরের তারিখ নির্বাচন করুন।',
                hint: 'date("now", "+30 days")',
                initSql: ``,
                expectedQuery: "SELECT date('now', '+30 days')",
                successMessage: "ভবিষ্যতের তারিখ স্পষ্টভাবে প্রকাশিত হলো। আপনি পর্দার ওপারে উঁকি দিলেন।",
                type: 'select',
                solution: "SELECT date('now', '+30 days')"
            },
            {
                id: '7-4',
                title: 'দিনের পার্থক্য',
                dialogue: [
                    { speaker: 'Chronomancer', text: "দুটি ভিন্ন সময়ের মাঝখানের দিনগুলো পরিমাপ করুন।" },
                    { speaker: 'Glitch', text: "নির্ভুল গণনার জন্য Julianday!" }
                ],
                story: "সময়ের দুটি বিন্দু আপনার সামনে ভাসছে, পরিমাপের অপেক্ষায়।",
                objective: 'julianday ব্যবহার করে দুটি তারিখের মধ্যে দিন গণনা করুন।',
                hint: 'julianday(date2) - julianday(date1)',
                initSql: ``,
                expectedQuery: "SELECT julianday('2026-02-19') - julianday('2026-01-19')",
                successMessage: "ঠিক ৩০ দিন। আপনি সময়ের পাটিগণিত আয়ত্ত করেছেন। ক্রোনোম্যানসার মাথা নত করলেন—আপনিই এখন প্রকৃত প্রভু।",
                type: 'select',
                solution: "SELECT julianday('2026-02-19') - julianday('2026-01-19')"
            }
        ]
    },
    {
        id: 'chapter-8',
        title: 'অধ্যায় ৮: স্থপতির মন',
        description: 'আপনি সময় এবং সৃষ্টি আয়ত্ত করেছেন, কিন্তু একজন সত্যিকারের স্থপতি তার বিশ্বের নিরাপত্তা, গতি এবং অখণ্ডতা নিশ্চিত করেন। অজেয় হয়ে উঠতে ট্রানজ্যাকশন, ট্রিগার এবং জটিল কাঠামো আয়ত্ত করুন।',
        levels: [
            {
                id: '8-1',
                title: 'নিরাপত্তা জাল',
                dialogue: [
                    { speaker: 'Narrator', text: "আপনি মহাবিশ্বের সার্ভার রুমে দাঁড়িয়ে আছেন। একটি ভুল কমান্ড সবকিছু মুছে দিতে পারে।" },
                    { speaker: 'Architect', text: "চূড়ান্ত শক্তি চালনা করার জন্য, আপনাকে জানতে হবে কীভাবে নিজের ভুল শুধরানো যায়।" },
                    { speaker: 'Glitch', text: "ট্রানজ্যাকশন! আমরা মুছে ফেলার চেষ্টা করতে পারি, আবার ফিরিয়েও (rollback) আনতে পারি!" }
                ],
                story: "একটি জ্বলজ্বলে টার্মিনাল আপনাকে বিশ্ব মুছে ফেলার ক্ষমতা দিচ্ছে। আপনাকে প্রমাণ করতে হবে যে আপনি এটি নিরাপদে করতে পারেন।",
                objective: 'একটি ট্রানজ্যাকশন শুরু করুন, gems টেবিল ডিলিট করুন, কিন্তু তারপর এটি বাঁচাতে ROLLBACK করুন।',
                hint: 'BEGIN TRANSACTION; ... ROLLBACK;',
                initSql: `
                    CREATE TABLE gems (id INTEGER, name TEXT);
                    INSERT INTO gems VALUES (1, 'Ruby');
                    INSERT INTO gems VALUES (2, 'Sapphire');
                `,
                expectedQuery: "SELECT count(*) FROM gems",
                successMessage: "কমান্ডটি কার্যকর হলো, কিন্তু রত্নগুলো রয়েই গেল! আপনি 'undo' করার শিল্প আয়ত্ত করেছেন।",
                type: 'dml',
                solution: "BEGIN TRANSACTION; DELETE FROM gems; ROLLBACK;"
            },
            {
                id: '8-2',
                title: 'স্বয়ংক্রিয় প্রহরী',
                dialogue: [
                    { speaker: 'Architect', text: "আপনি একবারে রাজ্যের প্রতিটি কোণে নজর রাখতে পারবেন না। প্রহরী তৈরি করুন।" },
                    { speaker: 'Glitch', text: "ট্রিগার! লগগুলো স্বয়ংক্রিয় করুন!" }
                ],
                story: "একটি স্বয়ংক্রিয় প্রতিরক্ষা তৈরি করুন যা টাওয়ারের প্রতিটি পরিবর্তন রেকর্ড করে।",
                objective: 'towers-এ UPDATE-এর পরে "log_update" নামে একটি TRIGGER তৈরি করুন যা "logs"-এ (message) VALUES ("updated") ইনসার্ট করে।',
                hint: 'CREATE TRIGGER name AFTER UPDATE ON table BEGIN ... END;',
                initSql: `
                    CREATE TABLE towers (id INTEGER, height INTEGER);
                    CREATE TABLE logs (message TEXT);
                    INSERT INTO towers VALUES (1, 100);
                `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE type = 'trigger' AND name = 'log_update'",
                successMessage: "প্রহরী সক্রিয় হয়েছে। সিস্টেম এখন নিজেই নিজেকে দেখছে।",
                type: 'dml',
                solution: "CREATE TRIGGER log_update AFTER UPDATE ON towers BEGIN INSERT INTO logs VALUES ('updated'); END;"
            },
            {
                id: '8-3',
                title: 'এনক্রিপ্ট করা স্ক্রোল',
                dialogue: [
                    { speaker: 'Narrator', text: "একজন ভ্রমণকারী আপনাকে অদ্ভুত, নেস্টেড ব্র্যাকেটে লেখা একটি স্ক্রোল দিল।" },
                    { speaker: 'Glitch', text: "এটি JSON ডেটা! আমাদের গোপন চাবিটি বের করতে হবে।" },
                    { speaker: 'You', text: "json_extract ফাংশন..." }
                ],
                story: "জটিল ডেটা স্ট্রাকচার সহজ সত্য লুকিয়ে রাখে।",
                objective: 'json_extract ব্যবহার করে json ডেটা কলাম থেকে "magic"-এর মান নির্বাচন করুন।',
                hint: "json_extract(column, '$.key')",
                initSql: `
                    CREATE TABLE scrolls (id INTEGER, data TEXT);
                    INSERT INTO scrolls VALUES (1, '{"magic": "fire", "power": 50}');
                    INSERT INTO scrolls VALUES (2, '{"magic": "ice", "power": 40}');
                `,
                expectedQuery: "SELECT json_extract(data, '$.magic') FROM scrolls",
                successMessage: "আগুন... বরফ... কোড থেকে মূল উপাদানগুলো বের করা হয়েছে।",
                type: 'select',
                solution: "SELECT json_extract(data, '$.magic') FROM scrolls"
            },
            {
                id: '8-4',
                title: 'বিশ্লেষণ',
                dialogue: [
                    { speaker: 'Architect', text: "গতিই হলো শক্তি। আপনার জাদুমন্ত্র প্রয়োগ করার আগে তা বিশ্লেষণ করুন।" },
                    { speaker: 'Glitch', text: "EXPLAIN QUERY PLAN! কোয়েরির পিছনের ম্যাট্রিক্স দেখুন।" }
                ],
                story: "বাস্তবতার প্রবাহকে অপ্টিমাইজ করার জন্য আপনি এর ইঞ্জিনের ভেতরে উঁকি দিলেন।",
                objective: 'চালান EXPLAIN QUERY PLAN: SELECT * FROM magic_items WHERE power > 100',
                hint: 'কোয়েরির আগে শুধু EXPLAIN QUERY PLAN যোগ করুন।',
                initSql: `
                    CREATE TABLE magic_items (id INTEGER, power INTEGER);
                    INSERT INTO magic_items VALUES (1, 50);
                    INSERT INTO magic_items VALUES (2, 150);
                `,
                expectedQuery: "EXPLAIN QUERY PLAN SELECT * FROM magic_items WHERE power > 100",
                successMessage: "কোয়েরি পরিকল্পনা প্রকাশিত হয়েছে। আপনি কাজ করার আগেই আপনার কাজের খরচ দেখতে পাচ্ছেন।",
                type: 'select',
                solution: "EXPLAIN QUERY PLAN SELECT * FROM magic_items WHERE power > 100"
            },
            {
                id: '8-5',
                title: 'কম্পোজিট',
                dialogue: [
                    { speaker: 'Architect', text: "একটি চাবি সহজেই ভেঙে যায়। আসল শক্তির জন্য দুটিকে একসাথে বাঁধুন।" },
                    { speaker: 'Glitch', text: "কম্পোজিট প্রাইমারি কি! দুটি কলাম মিলে একটি ID।" }
                ],
                story: "শেষ মন্দিরের ভিত্তির জন্য একটি দ্বৈত তালা প্রয়োজন।",
                objective: '"temple" টেবিল তৈরি করুন যাতে কলাম থাকবে x (INT), y (INT), এবং PRIMARY KEY (x, y)।',
                hint: 'PRIMARY KEY (col1, col2)',
                initSql: `
                    DROP TABLE IF EXISTS temple;
                `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE name='temple'",
                successMessage: "দ্বৈত সিল লাগানো হয়েছে। স্থপতি মাথা নাড়লেন। আপনি আর ছাত্র নন... আপনি এখন একজন মাস্টার।",
                type: 'dml',
                solution: "CREATE TABLE temple (x INTEGER, y INTEGER, PRIMARY KEY (x, y))"
            }
        ]
    }
];