export const chaptersEn = [
    {
        id: 'chapter-1',
        title: 'Chapter I: The Awakening',
        description: 'You awaken in a cold, digital void — a dungeon woven from pure data. Floating tables pulse with faint light. To escape this prison and reclaim your power, you must master the ancient language of SELECT.',
        levels: [
            {
                id: '1-1',
                title: 'The First Spark',
                dialogue: [
                    { speaker: 'Narrator', text: "Consciousness flickers. Cold blue code streams across your vision. You are... rebooting." },
                    { speaker: 'Glitch', text: "Hey! Over here! You're awake! Finally! System reboot complete, Query Master!" },
                    { speaker: 'You', text: "...Who are you? Where am I? Everything looks like scrolling data..." },
                    { speaker: 'Glitch', text: "Name's Glitch — your faithful data sprite companion! You're trapped in the SQL Realm. That glowing `items` table? Query it!" },
                    { speaker: 'Glitch', text: "To see everything, use `SELECT * FROM items`! The asterisk (*) means 'all columns'." }
                ],
                story: "Dim ethereal light illuminates scattered objects suspended in the void. Your escape begins with sight.",
                objective: 'Select all columns from the "items" table.',
                hint: 'Use the asterisk (*) to reveal everything: `SELECT * FROM tablename`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: 'SELECT * FROM items',
                successMessage: "The terminal erupts in brilliant light! Every object materializes vividly before you.",
                type: 'select',
                solution: "SELECT * FROM items"
            },
            {
                id: '1-2',
                title: 'Focusing Sight',
                dialogue: [
                    { speaker: 'Glitch', text: "Whoa—too much data! My pixels are burning!" },
                    { speaker: 'Glitch', text: "We just need the names. Cut the noise!" },
                    { speaker: 'You', text: "How do I pick just one column?" },
                    { speaker: 'Glitch', text: "Easy! `SELECT name FROM items`. Just replace the * with the column name." }
                ],
                story: "The flood of information overwhelms your senses. Clarity is the key to survival.",
                objective: 'Select only the "name" column from the "items" table.',
                hint: 'Choose specific columns: `SELECT column1, column2 FROM tablename`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT name FROM items",
                successMessage: "Chaos recedes. Clean names float in perfect order. Your vision sharpens.",
                type: 'select',
                solution: "SELECT name FROM items"
            },
            {
                id: '1-2-b',
                title: 'Identify Tools',
                dialogue: [
                    { speaker: 'Glitch', text: "Okay, now we need to categorize everything." },
                    { speaker: 'Glitch', text: "Show me just the 'type' of each item." }
                ],
                story: "You focus your gaze on the essence of the objects.",
                objective: 'Select only the "type" column from the "items" table.',
                hint: 'SELECT column FROM table',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
        `,
                expectedQuery: "SELECT type FROM items",
                successMessage: "Tool... Weapon... Artifact... The categories line up.",
                type: 'select',
                solution: "SELECT type FROM items"
            },
            {
                id: '1-3',
                title: 'The Right Tool',
                dialogue: [
                    { speaker: 'Glitch', text: "Iron door ahead! We need a specific item to open it." },
                    { speaker: 'You', text: "The 'type' column... we need a 'tool'." },
                    { speaker: 'Glitch', text: "Filter it! Use the WHERE clause: `SELECT * FROM items WHERE type = 'tool'`." },
                    { speaker: 'Glitch', text: "Don't forget the quotes around 'tool' because it's text!" }
                ],
                story: "A massive barred gate blocks the path. Runes glow faintly, waiting for the correct offering.",
                objective: 'Select all columns where type is "tool".',
                hint: 'Filter with WHERE: `SELECT * FROM table WHERE condition`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type = 'tool'",
                successMessage: "The Rusty Key and Rock shine brightly. The key drifts forward, sliding perfectly into the lock.",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'tool'"
            },
            {
                id: '1-3-b',
                title: 'Power Surge',
                dialogue: [
                    { speaker: 'Glitch', text: "That door was heavy! We need stronger gear." },
                    { speaker: 'Glitch', text: "Find items with `power` greater than 10!" },
                    { speaker: 'You', text: "Greater than... so `WHERE power > 10`?" },
                    { speaker: 'Glitch', text: "Exactly! Numbers don't need quotes. Go!" }
                ],
                story: "The air crackles with energy. You need to identify the most potent artifacts.",
                objective: 'Select all items where power is greater than 10.',
                hint: 'Use the > operator: `WHERE power > 10`',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE power > 10",
                successMessage: "The Broken Sword and Amulet vibrate with power. You feel stronger just looking at them.",
                type: 'select',
                solution: "SELECT * FROM items WHERE power > 10"
            },
            {
                id: '1-4',
                title: 'Sorting the Clutter',
                dialogue: [
                    { speaker: 'Glitch', text: "My inventory is a mess! Let's organize." },
                    { speaker: 'You', text: "Highest power first?" },
                    { speaker: 'Glitch', text: "Yes! Use `ORDER BY power DESC`. DESC means descending (high to low)!" }
                ],
                story: "Your spectral inventory glows faintly. You must prioritize the most valuable artifacts.",
                objective: 'Select all items sorted by power in descending order.',
                hint: 'Use ORDER BY column DESC',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items ORDER BY power DESC",
                successMessage: "Items cascade into perfect order. The Strange Amulet blazes at the top.",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC"
            },
            {
                id: '1-4-b',
                title: 'Alphabetical Order',
                dialogue: [
                    { speaker: 'Glitch', text: "Now let's sort them by name, A to Z." },
                    { speaker: 'You', text: "Is that different?" },
                    { speaker: 'Glitch', text: "Use `ASC` for ascending. `ORDER BY name ASC`. It's the default, but let's be explicit!" }
                ],
                story: "A library of items requires an index. Alphabetical order is the standard.",
                objective: 'Select all items sorted by name in ascending order.',
                hint: 'Use ORDER BY name ASC',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items ORDER BY name ASC",
                successMessage: "Broken Sword, Moldy Bread, Rock... neatly listed.",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY name ASC"
            },
            {
                id: '1-4-c',
                title: 'Reverse Alphabetical',
                dialogue: [
                    { speaker: 'Glitch', text: "Wait, I read from bottom to top." },
                    { speaker: 'Glitch', text: "Sort them by name again, but Z to A!" }
                ],
                story: "Glitch hangs upside down, demanding a new perspective.",
                objective: 'Select all items sorted by name in descending order.',
                hint: 'ORDER BY name DESC',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
        `,
                expectedQuery: "SELECT * FROM items ORDER BY name DESC",
                successMessage: "Strange Amulet, Rusty Key... the list flips.",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY name DESC"
            },
            {
                id: '1-5',
                title: 'Complex Choices',
                dialogue: [
                    { speaker: 'Glitch', text: "The gate requires a specific offering. It says: 'Artifact OR Power > 50'." },
                    { speaker: 'You', text: "We need `OR` logic." },
                    { speaker: 'Glitch', text: "Right! `WHERE type = 'artifact' OR power > 50`. Either condition works!" }
                ],
                story: "The exit gate shimmers with glowing conditions. Only the correct sacrifice will dissolve it.",
                objective: 'Select items where type is "artifact" OR power > 50.',
                hint: 'Combine conditions with OR',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type = 'artifact' OR power > 50",
                successMessage: "The Strange Amulet rises. The gate dissolves into cascading light.",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'artifact' OR power > 50"
            },
            {
                id: '1-5-b',
                title: 'Strict Requirements',
                dialogue: [
                    { speaker: 'Glitch', text: "Wait, a new security droid block the path!" },
                    { speaker: 'Droid', text: "PRESENT WEAPON OF POWER LEVEL 10+." },
                    { speaker: 'Glitch', text: "We need BOTH! A 'weapon' AND power > 10. Use `AND`!" }
                ],
                story: "The droid's scanner sweeps the room. You must match all criteria.",
                objective: 'Select items where type is "weapon" AND power > 10.',
                hint: 'Use AND to require both conditions.',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Dagger', 'weapon', 5);
        `,
                expectedQuery: "SELECT * FROM items WHERE type = 'weapon' AND power > 10",
                successMessage: "The Broken Sword (Power 15) is accepted. The droid steps aside.",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'weapon' AND power > 10"
            },
            {
                id: '1-6',
                title: 'The Range',
                dialogue: [
                    { speaker: 'Glitch', text: "Floor spikes! They activate on items with mid-range power." },
                    { speaker: 'You', text: "Between 10 and 20?" },
                    { speaker: 'Glitch', text: "Use `WHERE power BETWEEN 10 AND 20`. It's cleaner than using >= and <=." }
                ],
                story: "As the gate opens, deadly mechanisms whir awake. Careful disarming is required.",
                objective: 'Select all items where power is BETWEEN 10 AND 20.',
                hint: 'Use WHERE column BETWEEN low AND high',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Shield', 'armor', 12);
        `,
                expectedQuery: "SELECT * FROM items WHERE power BETWEEN 10 AND 20",
                successMessage: "You carefully extract the Broken Sword and Shield. Spikes retract silently.",
                type: 'select',
                solution: "SELECT * FROM items WHERE power BETWEEN 10 AND 20"
            },
            {
                id: '1-6-b',
                title: 'Safe Zone',
                dialogue: [
                    { speaker: 'Glitch', text: "More traps! This time, only high-power items are safe." },
                    { speaker: 'Glitch', text: "Find items with power between 50 and 100." }
                ],
                story: "The floor trembles. You need to stabilize it with heavy power sources.",
                objective: 'Select all items where power is BETWEEN 50 AND 100.',
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
                successMessage: "The Staff and Amulet hum in resonance. The path clears.",
                type: 'select',
                solution: "SELECT * FROM items WHERE power BETWEEN 50 AND 100"
            },
            {
                id: '1-7',
                title: 'The List',
                dialogue: [
                    { speaker: 'Glitch', text: "I'm starving. I only eat 'food' and 'artifact' types." },
                    { speaker: 'You', text: "Can I list them?" },
                    { speaker: 'Glitch', text: "Yes! Use `IN`: `WHERE type IN ('food', 'artifact')`." }
                ],
                story: "Glitch flickers weakly. A quick valid meal will restore its energy.",
                objective: 'Select all items where type is IN ("food", "artifact").',
                hint: 'Use WHERE column IN (list)',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type IN ('food', 'artifact')",
                successMessage: "Glitch consumes the Moldy Bread and Amulet energy. It beams with happiness.",
                type: 'select',
                solution: "SELECT * FROM items WHERE type IN ('food', 'artifact')"
            },
            {
                id: '1-7-b',
                title: 'War Gear',
                dialogue: [
                    { speaker: 'Glitch', text: "Quick! The enemy approaches. Grab all weapons and armor!" },
                    { speaker: 'Glitch', text: "Use the `IN` clause for 'weapon' and 'armor'." }
                ],
                story: "You scramble to arm yourself against the void shadows.",
                objective: 'Select items where type is IN ("weapon", "armor").',
                hint: 'WHERE type IN (...)',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Shield', 'armor', 50);
        `,
                expectedQuery: "SELECT * FROM items WHERE type IN ('weapon', 'armor')",
                successMessage: "You equip the sword and shield. You are ready.",
                type: 'select',
                solution: "SELECT * FROM items WHERE type IN ('weapon', 'armor')"
            },
            {
                id: '1-8',
                title: 'Limited Inventory',
                dialogue: [
                    { speaker: 'Glitch', text: "My buffer is full! I can only carry 5 items." },
                    { speaker: 'You', text: "The top 5 strongest?" },
                    { speaker: 'Glitch', text: "Yes. `ORDER BY power DESC LIMIT 5`. The `LIMIT` cuts it off." }
                ],
                story: "As you ascend, countless artifacts manifest. Selection is crucial.",
                objective: 'Select the top 5 most powerful items.',
                hint: 'Add LIMIT after ORDER BY',
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
                successMessage: "Five radiant items materialize. The rest fade.",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC LIMIT 5"
            },
            {
                id: '1-9',
                title: 'Next Page',
                dialogue: [
                    { speaker: 'Glitch', text: "I want to see the next batch. Items 6 to 10." },
                    { speaker: 'You', text: "Skip the first 5?" },
                    { speaker: 'Glitch', text: "Use `OFFSET`! `LIMIT 5 OFFSET 5` skips the first 5." }
                ],
                story: "The dungeon's depths seem infinite. You turn to the next page.",
                objective: 'Select items 6-10 when sorted by power descending.',
                hint: 'Use OFFSET to skip rows',
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
                successMessage: "A fresh wave of items appears.",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC LIMIT 5 OFFSET 5"
            }
        ]
    },
    {
        id: 'chapter-2',
        title: 'Chapter II: The Village Under Siege',
        description: 'You emerge into daylight — a storm-ravaged village lies in ruins. Scattered tables hold records of survivors and resources. Use aggregates to organize defense and rebuild hope.',
        levels: [
            {
                id: '2-1',
                title: 'The Village Census',
                dialogue: [
                    { speaker: 'Narrator', text: "Warm sunlight pierces the dungeon exit. Before you stretches a devastated village — roofs collapsed, fields scorched." },
                    { speaker: 'Elder', text: "Travelers from the Data Dungeon... the storm took everything. We don't even know how many survived." },
                    { speaker: 'Glitch', text: "We can help! To count rows, use `COUNT(*)`." },
                    { speaker: 'Glitch', text: "Try `SELECT COUNT(*) FROM villagers`." }
                ],
                story: "Smoke curls from ruined homes. Desperate villagers gather, eyes filled with cautious hope.",
                objective: 'Count the total number of villagers.',
                hint: 'Use COUNT(*)',
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
                successMessage: "Six survivors confirmed. The Elder breathes a sigh of relief. A foundation to rebuild upon.",
                type: 'select',
                solution: "SELECT COUNT(*) FROM villagers"
            },
            {
                id: '2-1-b',
                title: 'Warrior Count',
                dialogue: [
                    { speaker: 'Elder', text: "But how many can fight? We need to know the number of warriors." },
                    { speaker: 'Glitch', text: "Combine it! `COUNT(*)` with `WHERE`." },
                    { speaker: 'You', text: "So... `SELECT COUNT(*) FROM villagers WHERE role = 'warrior'`?" },
                    { speaker: 'Glitch', text: "Spot on!" }
                ],
                story: "The Elder looks concerned about defense. A precise count of swords is needed.",
                objective: 'Count the number of villagers with role "warrior".',
                hint: 'Use COUNT(*) WHERE role = "warrior"',
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
                successMessage: "Two warriors stand ready. It's a start.",
                type: 'select',
                solution: "SELECT COUNT(*) FROM villagers WHERE role = 'warrior'"
            },
            {
                id: '2-2',
                title: 'Treasury Audit',
                dialogue: [
                    { speaker: 'Elder', text: "Our vaults were destroyed. We need to know how much gold remains among the people." },
                    { speaker: 'Glitch', text: "Total it all up! Use the `SUM()` function on the gold column." },
                    { speaker: 'You', text: "`SELECT SUM(gold) FROM villagers`. Got it." }
                ],
                story: "Villagers pool their remaining coins in the village square. Hope hangs on the total.",
                objective: 'Calculate the total sum of gold held by villagers.',
                hint: 'Use SUM(column)',
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
                successMessage: "405 gold counted. Not a fortune, but enough to begin repairs. The village stirs with purpose.",
                type: 'select',
                solution: "SELECT SUM(gold) FROM villagers"
            },
            {
                id: '2-2-b',
                title: 'Mage Funds',
                dialogue: [
                    { speaker: 'Elder', text: "The mages require expensive reagents. How much gold do they hold?" },
                    { speaker: 'Glitch', text: "Sum only the mages! `WHERE role = 'mage'`." }
                ],
                story: "The mages huddle together, counting their enchanted coins.",
                objective: 'Calculate the total gold held by mages.',
                hint: 'Use SUM(gold) WHERE role = "mage"',
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
                successMessage: "210 gold available for magic. The mages nod in approval.",
                type: 'select',
                solution: "SELECT SUM(gold) FROM villagers WHERE role = 'mage'"
            },
            {
                id: '2-3',
                title: 'Average Wealth',
                dialogue: [
                    { speaker: 'Elder', text: "For fair rebuilding taxes, we need the average wealth per person." },
                    { speaker: 'Glitch', text: "Use `AVG()`! `SELECT AVG(gold) FROM villagers`." }
                ],
                story: "Villagers discuss equitable contributions around a communal fire.",
                objective: 'Calculate the average gold per villager.',
                hint: 'Use AVG(column)',
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
                successMessage: "Average: ~67.5 gold. Fair taxes set. Trust grows among the survivors.",
                type: 'select',
                solution: "SELECT AVG(gold) FROM villagers"
            },
            {
                id: '2-3-b',
                title: 'Warrior Strength',
                dialogue: [
                    { speaker: 'Glitch', text: "The warriors boast about their loot. Let's check the average gold for ONLY warriors." },
                    { speaker: 'You', text: "I can combine AVG and WHERE." }
                ],
                story: "The warriors sharpen their blades, waiting for your assessment.",
                objective: 'Calculate the average gold of villagers with role "warrior".',
                hint: 'AVG(...) WHERE ...',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Kael', 'warrior', 45);
        `,
                expectedQuery: "SELECT AVG(gold) FROM villagers WHERE role = 'warrior'",
                successMessage: "47.5 gold. Respectable, for those who live by the sword.",
                type: 'select',
                solution: "SELECT AVG(gold) FROM villagers WHERE role = 'warrior'"
            },
            {
                id: '2-4',
                title: 'Richest and Poorest',
                dialogue: [
                    { speaker: 'Elder', text: "Who holds the most gold? The least? We must understand our extremes." },
                    { speaker: 'Glitch', text: "Use `MAX(gold)` and `MIN(gold)`. You can select both in one query!" },
                    { speaker: 'You', text: "`SELECT MAX(gold), MIN(gold) ...`" }
                ],
                story: "The village square falls silent as wealth disparities become clear.",
                objective: 'Select the maximum and minimum gold in one query.',
                hint: 'Combine MAX and MIN',
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
                successMessage: "Richest: 110, Poorest: 20. The village commits to supporting the needy.",
                type: 'select',
                solution: "SELECT MAX(gold), MIN(gold) FROM villagers"
            },
            {
                id: '2-5',
                title: 'Healer Support',
                dialogue: [
                    { speaker: 'Elder', text: "The healers are vital. Are they well-funded? Check their average gold." },
                    { speaker: 'Glitch', text: "You know this! `AVG` combined with `WHERE` role is 'healer'." }
                ],
                story: "The medical tent is busy. You check the financial health of those who save lives.",
                objective: 'Calculate the average gold of villagers with role "healer".',
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
                successMessage: "70 gold average. They are reasonably sustained.",
                type: 'select',
                solution: "SELECT AVG(gold) FROM villagers WHERE role = 'healer'"
            },
            {
                id: '2-6',
                title: 'Guild Formation',
                dialogue: [
                    { speaker: 'Elder', text: "We must organize crews. I need a count for EACH role." },
                    { speaker: 'Glitch', text: "Instead of doing `WHERE` four times... use `GROUP BY`!" },
                    { speaker: 'You', text: "`SELECT role, COUNT(*) FROM villagers GROUP BY role`. This groups them automatically." }
                ],
                story: "Survivors line up by profession, ready to form guilds for the village's defense.",
                objective: 'Select the role and count of villagers per role, grouped by role.',
                hint: 'Use GROUP BY and COUNT(*)',
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
                successMessage: "Roles tallied: 2 warriors, 2 mages, 1 healer, 1 builder. Balanced teams form. The village feels stronger.",
                type: 'select',
                solution: "SELECT role, COUNT(*) FROM villagers GROUP BY role"
            },
            {
                id: '2-6-b',
                title: 'Wealth Distribution',
                dialogue: [
                    { speaker: 'Elder', text: "Do we have enough gold to equip each guild? Sum the gold for each role." },
                    { speaker: 'Glitch', text: "Group by role again, but this time calculate the total gold!" }
                ],
                story: "The guilds present their combined resources.",
                objective: 'Select role and sum of gold for each role, grouped by role.',
                hint: 'SELECT role, SUM(gold) ... GROUP BY role',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Trog', 'builder', 20);
        `,
                expectedQuery: "SELECT role, SUM(gold) FROM villagers GROUP BY role",
                successMessage: "The financial strength of each guild is revealed.",
                type: 'select',
                solution: "SELECT role, SUM(gold) FROM villagers GROUP BY role"
            },
            {
                id: '2-7',
                title: 'Elite Squads',
                dialogue: [
                    { speaker: 'Elder', text: "We can only afford elite squads with multiple members." },
                    { speaker: 'Glitch', text: "Filter the groups! After `GROUP BY`, use `HAVING`." },
                    { speaker: 'Glitch', text: "`HAVING COUNT(*) > 1`." }
                ],
                story: "The strongest guilds prepare for battle. Only sizable groups will stand against threats.",
                objective: 'Select role and count, grouped by role, showing only groups with count > 1.',
                hint: 'Use HAVING after GROUP BY',
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
                successMessage: "Warriors and mages step forward as elite squads. The village defense solidifies.",
                type: 'select',
                solution: "SELECT role, COUNT(*) FROM villagers GROUP BY role HAVING COUNT(*) > 1"
            },
            {
                id: '2-7-b',
                title: 'Rich Guilds',
                dialogue: [
                    { speaker: 'Glitch', text: "Only the richest guilds can buy the new armor." },
                    { speaker: 'Glitch', text: "Show me guilds with total gold greater than 150." }
                ],
                story: "The blacksmith demands payment upfront.",
                objective: 'Select role and sum of gold, grouped by role, having sum(gold) > 150.',
                hint: 'HAVING SUM(gold) > 150',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Born', 'warrior', 50);
          INSERT INTO villagers VALUES (2, 'Alina', 'mage', 100);
          INSERT INTO villagers VALUES (3, 'Myra', 'mage', 110);
          INSERT INTO villagers VALUES (4, 'Kael', 'warrior', 45);
        `,
                expectedQuery: "SELECT role, SUM(gold) FROM villagers GROUP BY role HAVING SUM(gold) > 150",
                successMessage: "Only the Mages can afford the upgrades. They begin their enchantments.",
                type: 'select',
                solution: "SELECT role, SUM(gold) FROM villagers GROUP BY role HAVING SUM(gold) > 150"
            },
            {
                id: '2-8',
                title: 'Conditional Sums',
                dialogue: [
                    { speaker: 'Glitch', text: "One last challenge! The Elder wants to know total gold for warriors... but in a fancy way." },
                    { speaker: 'Glitch', text: "Use `CASE` inside `SUM`! `SUM(CASE WHEN role = 'warrior' THEN gold ELSE 0 END)`." }
                ],
                story: "Battle-hardened warriors stand proud, their pouches heavy with earned coin.",
                objective: 'Calculate total gold owned only by warriors using CASE inside SUM.',
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
                successMessage: "95 gold from warriors alone. They pledge it to fortify the walls. Morale soars.",
                type: 'select',
                solution: "SELECT SUM(CASE WHEN role = 'warrior' THEN gold ELSE 0 END) FROM villagers"
            }
        ]
    },
    {
        id: 'chapter-3',
        title: 'Chapter III: The Dark Forest',
        description: 'Beyond the village lies an ancient, twisting forest shrouded in mist. Tables of paths and destinations intertwine like roots. Master joins and subqueries to find safe passage.',
        levels: [
            {
                id: '3-1',
                title: 'Crossroads',
                dialogue: [
                    { speaker: 'Narrator', text: "The village fades behind you. Twisted trees close in, their branches forming natural arches." },
                    { speaker: 'Glitch', text: "Start simple. We need to join the paths to their destinations." },
                    { speaker: 'Glitch', text: "Use `JOIN destinations ON paths.destination_id = destinations.id`." },
                    { speaker: 'Glitch', text: "This connects the rows where the IDs match!" }
                ],
                story: "Mist swirls around forked trails. Each path promises danger or salvation.",
                objective: 'Select all columns by joining "paths" and "destinations" on destination_id.',
                hint: 'Use INNER JOIN ... ON',
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
                successMessage: "The map coalesces in your mind. The Shadow Path leads to the Dragon Lair... you choose wisely.",
                type: 'select',
                solution: "SELECT * FROM paths JOIN destinations ON paths.destination_id = destinations.id"
            },
            {
                id: '3-1-b',
                title: 'Safe Passage',
                dialogue: [
                    { speaker: 'Glitch', text: "We need a path that isn't too dangerous. Let's filter the joined map!" },
                    { speaker: 'You', text: "So... Join them first, then use `WHERE`?" },
                    { speaker: 'Glitch', text: "Exactly. Find destinations with a `danger_level` less than 5." }
                ],
                story: "You scan the joined map for a safe route. The Dragon Lair is definitely off-limits.",
                objective: 'Join paths and destinations, then select where danger_level is less than 5.',
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
                successMessage: "The 'Old Ruins' path glows with a soft, inviting light. It seems safe.",
                type: 'select',
                solution: "SELECT * FROM paths JOIN destinations ON paths.destination_id = destinations.id WHERE danger_level < 5"
            },
            {
                id: '3-2',
                title: 'Hidden Treasures',
                dialogue: [
                    { speaker: 'Glitch', text: "Some paths have treasures, but some don't. A normal JOIN might hide the empty paths." },
                    { speaker: 'Glitch', text: "Use `LEFT JOIN`. It keeps EVERYTHING from the left table (paths), even if there's no match in treasures." },
                    { speaker: 'You', text: "So I'll see paths with NULL treasure?" },
                    { speaker: 'Glitch', text: "Yes! `SELECT * FROM paths LEFT JOIN treasures ON ...`" }
                ],
                story: "Glimmers of gold peek from under leaves. You want to see the full picture, rich or poor.",
                objective: 'Select all paths and their treasures using LEFT JOIN.',
                hint: 'Use LEFT JOIN',
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
                successMessage: "The Rocky Road shows NULL treasure — safe, but empty. Knowledge guides your steps.",
                type: 'select',
                solution: "SELECT * FROM paths LEFT JOIN treasures ON paths.id = treasures.path_id"
            },
            {
                id: '3-2-b',
                title: 'Empty Hands',
                dialogue: [
                    { speaker: 'Glitch', text: "Which paths definitely have NO treasure? I want to avoid disappointment." },
                    { speaker: 'You', text: "I can use that `LEFT JOIN`... and check for NULLs?" },
                    { speaker: 'Glitch', text: "Smart! Filter for where the treasure name `IS NULL`." }
                ],
                story: "You mark the barren paths on your map to avoid wasting time.",
                objective: 'Perform a LEFT JOIN, then filter for rows where treasure name IS NULL.',
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
                successMessage: "The Rocky Road is highlighted as barren. You won't waste your time there.",
                type: 'select',
                solution: "SELECT * FROM paths LEFT JOIN treasures ON paths.id = treasures.path_id WHERE treasures.name IS NULL"
            },
            {
                id: '3-3',
                title: 'The Guardian',
                dialogue: [
                    { speaker: 'Guardian', text: "Halt! The Forest Guardian emerges from the trees." },
                    { speaker: 'Guardian', text: "Only those who know the danger_level of the Dragon Lair may pass." },
                    { speaker: 'Glitch', text: "This is a simple lookup. `SELECT danger_level ... WHERE ...`" }
                ],
                story: "A colossal tree-being blocks the final clearing, eyes glowing with ancient wisdom.",
                objective: 'Select the danger_level where the name is "Dragon Lair".',
                hint: 'Simple WHERE filter',
                initSql: `
          CREATE TABLE destinations (id INTEGER, name TEXT, danger_level INTEGER);
          INSERT INTO destinations VALUES (1, 'Crystal Cave', 5);
          INSERT INTO destinations VALUES (2, 'Old Ruins', 2);
          INSERT INTO destinations VALUES (3, 'Dragon Lair', 10);
        `,
                expectedQuery: "SELECT danger_level FROM destinations WHERE name = 'Dragon Lair'",
                successMessage: "You answer: '10'. The Guardian nods solemnly and steps aside. The way forward opens.",
                type: 'select',
                solution: "SELECT danger_level FROM destinations WHERE name = 'Dragon Lair'"
            },
            {
                id: '3-4',
                title: 'The Void',
                dialogue: [
                    { speaker: 'Glitch', text: "Some destinations feel... empty. Just voids in the data." },
                    { speaker: 'Glitch', text: "To check for empty values, use `IS NULL`. never use `= NULL`!" },
                    { speaker: 'Glitch', text: "Try `WHERE name IS NULL`." }
                ],
                story: "Certain clearings hold only swirling nothingness — portals to unknown realms.",
                objective: 'Select all destinations where name IS NULL.',
                hint: 'Use IS NULL',
                initSql: `
          CREATE TABLE destinations (id INTEGER, name TEXT, danger_level INTEGER);
          INSERT INTO destinations VALUES (1, 'Crystal Cave', 5);
          INSERT INTO destinations VALUES (2, NULL, 0);
          INSERT INTO destinations VALUES (3, 'Dragon Lair', 10);
        `,
                expectedQuery: "SELECT * FROM destinations WHERE name IS NULL",
                successMessage: "You gaze into the void... and it whispers secrets of absence. A chill runs through you.",
                type: 'select',
                solution: "SELECT * FROM destinations WHERE name IS NULL"
            },
            {
                id: '3-5',
                title: 'The Multiverse',
                dialogue: [
                    { speaker: 'Glitch', text: "Whoa—I'm seeing every path connected to every destination at once!" },
                    { speaker: 'You', text: "That sounds like a Cartesian product." },
                    { speaker: 'Glitch', text: "Yes! Use `CROSS JOIN`. `SELECT * FROM paths CROSS JOIN destinations`." }
                ],
                story: "Reality fractures briefly, showing infinite overlapping possibilities.",
                objective: 'Select all columns from paths CROSS JOIN destinations.',
                hint: 'Use CROSS JOIN',
                initSql: `
          CREATE TABLE paths (name TEXT);
          CREATE TABLE destinations (name TEXT);
          INSERT INTO paths VALUES ('Path A');
          INSERT INTO paths VALUES ('Path B');
          INSERT INTO destinations VALUES ('Dest 1');
          INSERT INTO destinations VALUES ('Dest 2');
        `,
                expectedQuery: "SELECT * FROM paths CROSS JOIN destinations",
                successMessage: "Four parallel realities merge into clarity. One true path emerges.",
                type: 'select',
                solution: "SELECT * FROM paths CROSS JOIN destinations"
            },
            {
                id: '3-6',
                title: 'Hierarchy of Command',
                dialogue: [
                    { speaker: 'Glitch', text: "Village scouts report to leaders. We need to see who manages who." },
                    { speaker: 'Glitch', text: "Join the table to itself! `FROM employees e LEFT JOIN employees m ON e.manager_id = m.id`." },
                    { speaker: 'Glitch', text: "Don't forget the aliases 'e' and 'm'!" }
                ],
                story: "Hidden in the forest, a camp of scouts organizes under strict hierarchy.",
                objective: 'Join the employees table to itself to show employee name and manager name.',
                hint: 'Use aliases and LEFT JOIN for managers',
                initSql: `
          CREATE TABLE employees (id INTEGER, name TEXT, manager_id INTEGER);
          INSERT INTO employees VALUES (1, 'Elder', NULL);
          INSERT INTO employees VALUES (2, 'Born', 1);
          INSERT INTO employees VALUES (3, 'Alina', 1);
          INSERT INTO employees VALUES (4, 'Kael', 2);
        `,
                expectedQuery: "SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id",
                successMessage: "The full hierarchy reveals itself. Leadership flows clearly through the ranks.",
                type: 'select',
                solution: "SELECT e.name AS employee, m.name AS manager FROM employees e LEFT JOIN employees m ON e.manager_id = m.id"
            }
        ]
    },
    {
        id: 'chapter-4',
        title: 'Chapter IV: The Forbidden Library',
        description: 'Deep in the forest stands a crumbling library of infinite knowledge. Dusty tomes whisper secrets. Master advanced logic, patterns, and subqueries to unlock forbidden wisdom.',
        levels: [
            {
                id: '4-1',
                title: 'The Whispering Books',
                dialogue: [
                    { speaker: 'Narrator', text: "Ancient stone doors creak open. Shelves tower endlessly, books floating gently." },
                    { speaker: 'Librarian', text: "Silence! Only books containing 'Magic' in their title may be safely read." },
                    { speaker: 'Glitch', text: "We can't use `=` for partial matches. We need `LIKE`." },
                    { speaker: 'Glitch', text: "Use `%` as a wildcard. `WHERE title LIKE '%Magic%'` finds anything with 'Magic' inside." }
                ],
                story: "Tomes murmur softly, their pages turning in unseen winds. Dangerous knowledge lurks within.",
                objective: 'Select all books where the title contains "Magic".',
                hint: 'Use LIKE "%pattern%"',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT, pages INTEGER);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod', 300);
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock', 150);
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef', 200);
          INSERT INTO books VALUES (4, 'Light Magic for Beginners', 'Priest', 120);
          INSERT INTO books VALUES (5, 'Science of Magic', 'Alchemist', 400);
        `,
                expectedQuery: "SELECT * FROM books WHERE title LIKE '%Magic%'",
                successMessage: "Three forbidden tomes drift down, pages opening eagerly. Magical knowledge flows into you.",
                type: 'select',
                solution: "SELECT * FROM books WHERE title LIKE '%Magic%'"
            },
            {
                id: '4-1-b',
                title: 'Author Search',
                dialogue: [
                    { speaker: 'Glitch', text: "I want to find all books by authors whose names start with 'General'." },
                    { speaker: 'You', text: "I can use `LIKE` again! 'General' at the start, and `%` after." },
                    { speaker: 'Glitch', text: "Correct. `LIKE 'General%'`." }
                ],
                story: "You search for military tactics among the dusty shelves.",
                objective: 'Select all books where the author starts with "General".',
                hint: 'Use LIKE "General%"',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT, pages INTEGER);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod', 300);
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock', 150);
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef', 200);
          INSERT INTO books VALUES (4, 'Light Magic for Beginners', 'Priest', 120);
          INSERT INTO books VALUES (5, 'General Strategy', 'General Kenobi', 350);
        `,
                expectedQuery: "SELECT * FROM books WHERE author LIKE 'General%'",
                successMessage: "The military archives open to you.",
                type: 'select',
                solution: "SELECT * FROM books WHERE author LIKE 'General%'"
            },
            {
                id: '4-2',
                title: 'Dusty Authors',
                dialogue: [
                    { speaker: 'Glitch', text: "So many duplicates! I want unique authors only." },
                    { speaker: 'Librarian', text: "Use `DISTINCT` to remove duplicates from your result." },
                    { speaker: 'Glitch', text: "`SELECT DISTINCT author FROM books`." }
                ],
                story: "Shelves groan under repeated editions. True authorship lies hidden beneath.",
                objective: 'Select unique authors from the books table.',
                hint: 'Use SELECT DISTINCT',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT);
          INSERT INTO books VALUES (1, 'Book A', 'Author X');
          INSERT INTO books VALUES (2, 'Book B', 'Author Y');
          INSERT INTO books VALUES (3, 'Book C', 'Author X');
          INSERT INTO books VALUES (4, 'Book D', 'Author Z');
          INSERT INTO books VALUES (5, 'Book E', 'Author Y');
        `,
                expectedQuery: "SELECT DISTINCT author FROM books",
                successMessage: "Redundant copies vanish. Three distinct authors remain in perfect clarity.",
                type: 'select',
                solution: "SELECT DISTINCT author FROM books"
            },
            {
                id: '4-3',
                title: 'The Cipher',
                dialogue: [
                    { speaker: 'Librarian', text: "To open the vault, you must label the codes." },
                    { speaker: 'Glitch', text: "If id is even, call it 'Even'. Otherwise 'Odd'." },
                    { speaker: 'You', text: "That requires logic inside the query..." },
                    { speaker: 'Glitch', text: "Use `CASE WHEN condition THEN value ELSE other END`." }
                ],
                story: "A sealed vault pulses behind the shelves, awaiting logical decryption.",
                objective: 'Select id, and a new column "type" that is "Even" or "Odd" based on id.',
                hint: 'Use CASE WHEN id % 2 = 0 THEN "Even" ELSE "Odd" END',
                initSql: `
          CREATE TABLE codes (id INTEGER);
          INSERT INTO codes VALUES (1);
          INSERT INTO codes VALUES (2);
          INSERT INTO codes VALUES (3);
          INSERT INTO codes VALUES (4);
        `,
                expectedQuery: "SELECT id, CASE WHEN id % 2 = 0 THEN 'Even' ELSE 'Odd' END AS type FROM codes",
                successMessage: "The cipher aligns perfectly. The vault door grinds open, revealing gleaming artifacts.",
                type: 'select',
                solution: "SELECT id, CASE WHEN id % 2 = 0 THEN 'Even' ELSE 'Odd' END AS type FROM codes"
            },
            {
                id: '4-3-b',
                title: 'Book Sorter',
                dialogue: [
                    { speaker: 'Librarian', text: "Sort these books! < 200 pages is 'Short', otherwise 'Long'." },
                    { speaker: 'You', text: "Another `CASE` statement." },
                    { speaker: 'Glitch', text: "Show the title and the new 'length' category." }
                ],
                story: "The Librarian demands order. You must categorize the chaos.",
                objective: 'Select title and a "length" column ("Short" if pages < 200, else "Long").',
                hint: 'CASE WHEN pages < 200 ...',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT, pages INTEGER);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod', 300);
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock', 150);
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef', 200);
        `,
                expectedQuery: "SELECT title, CASE WHEN pages < 200 THEN 'Short' ELSE 'Long' END AS length FROM books",
                successMessage: "The books fly into their designated sections.",
                type: 'select',
                solution: "SELECT title, CASE WHEN pages < 200 THEN 'Short' ELSE 'Long' END AS length FROM books"
            },
            {
                id: '4-4',
                title: 'The Merger',
                dialogue: [
                    { speaker: 'Glitch', text: "Two ancient scrolls list safe zones. We must combine them." },
                    { speaker: 'You', text: "UNION will merge while removing duplicates." }
                ],
                story: "Tattered scrolls float in the air, their lists incomplete alone.",
                objective: 'Select names from "scroll_a" UNION select names from "scroll_b".',
                hint: 'Use UNION between SELECTs',
                initSql: `
          CREATE TABLE scroll_a (name TEXT);
          CREATE TABLE scroll_b (name TEXT);
          INSERT INTO scroll_a VALUES ('Safe Haven');
          INSERT INTO scroll_a VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Shelter');
        `,
                expectedQuery: "SELECT name FROM scroll_a UNION SELECT name FROM scroll_b",
                successMessage: "The scrolls merge into one complete map. A safe route through danger reveals itself.",
                type: 'select',
                solution: "SELECT name FROM scroll_a UNION SELECT name FROM scroll_b"
            },
            {
                id: '4-5',
                title: 'The Inner Voice',
                dialogue: [
                    { speaker: 'Glitch', text: "I only want books thicker than average!" },
                    { speaker: 'You', text: "We need to calculate average first..." },
                    { speaker: 'Glitch', text: "Use a subquery! `WHERE pages > (SELECT AVG(pages) FROM books)`." }
                ],
                story: "Massive tomes dominate the shelves. Only the truly substantial hold deep wisdom.",
                objective: 'Select title from books where pages > (SELECT AVG(pages) FROM books).',
                hint: 'Subquery in WHERE',
                initSql: `
          CREATE TABLE books (title TEXT, pages INTEGER);
          INSERT INTO books VALUES ('Tiny Book', 50);
          INSERT INTO books VALUES ('Medium Book', 200);
          INSERT INTO books VALUES ('Giant Book', 500);
          INSERT INTO books VALUES ('Huge Scroll', 1000);
        `,
                expectedQuery: "SELECT title FROM books WHERE pages > (SELECT AVG(pages) FROM books)",
                successMessage: "The mightiest tomes rise above the rest. True knowledge belongs to the substantial.",
                type: 'select',
                solution: "SELECT title FROM books WHERE pages > (SELECT AVG(pages) FROM books)"
            },
            {
                id: '4-5-b',
                title: 'More Than Tiny',
                dialogue: [
                    { speaker: 'Glitch', text: "Now find me books that have more pages than the 'Tiny Book'." },
                    { speaker: 'You', text: "I need to find the page count of 'Tiny Book' first." },
                    { speaker: 'Glitch', text: "Right. Use a subquery to get that value!" }
                ],
                story: "You look for books that outweigh the smallest one.",
                objective: 'Select titles with pages > the pages of "Tiny Book".',
                hint: 'WHERE pages > (SELECT pages FROM books WHERE title = "Tiny Book")',
                initSql: `
          CREATE TABLE books (title TEXT, pages INTEGER);
          INSERT INTO books VALUES ('Tiny Book', 50);
          INSERT INTO books VALUES ('Medium Book', 200);
          INSERT INTO books VALUES ('Giant Book', 500);
        `,
                expectedQuery: "SELECT title FROM books WHERE pages > (SELECT pages FROM books WHERE title = 'Tiny Book')",
                successMessage: "A stack of larger books appears.",
                type: 'select',
                solution: "SELECT title FROM books WHERE pages > (SELECT pages FROM books WHERE title = 'Tiny Book')"
            },
            {
                id: '4-6',
                title: 'The Decryption',
                dialogue: [
                    { speaker: 'Librarian', text: "Hidden messages appear only in uppercase." },
                    { speaker: 'Glitch', text: "String functions! UPPER them all." }
                ],
                story: "Faint text on ancient pages becomes visible only when transformed.",
                objective: 'Select the UPPER() of the title from books.',
                hint: 'Use UPPER(column)',
                initSql: `
          CREATE TABLE books (title TEXT);
          INSERT INTO books VALUES ('secret key');
          INSERT INTO books VALUES ('hidden door');
        `,
                expectedQuery: "SELECT UPPER(title) FROM books",
                successMessage: "SECRET KEY. HIDDEN DOOR. The true message blazes forth in clarity.",
                type: 'select',
                solution: "SELECT UPPER(title) FROM books"
            },
            {
                id: '4-7',
                title: 'Shared Knowledge',
                dialogue: [
                    { speaker: 'Glitch', text: "Two parallel libraries exist. Which books appear in both?" },
                    { speaker: 'You', text: "INTERSECT for common ground." }
                ],
                story: "Mirrored shelves shimmer, showing overlapping realities of knowledge.",
                objective: 'Select title from lib_a INTERSECT select title from lib_b.',
                hint: 'Use INTERSECT',
                initSql: `
          CREATE TABLE lib_a (title TEXT);
          CREATE TABLE lib_b (title TEXT);
          INSERT INTO lib_a VALUES ('Book 1');
          INSERT INTO lib_a VALUES ('Book 2');
          INSERT INTO lib_b VALUES ('Book 2');
          INSERT INTO lib_b VALUES ('Book 3');
        `,
                expectedQuery: "SELECT title FROM lib_a INTERSECT SELECT title FROM lib_b",
                successMessage: "Only Book 2 exists in both realms. Universal truth confirmed.",
                type: 'select',
                solution: "SELECT title FROM lib_a INTERSECT SELECT title FROM lib_b"
            },
            {
                id: '4-8',
                title: 'Filling the Void',
                dialogue: [
                    { speaker: 'Librarian', text: "Some records lack titles — mere voids." },
                    { speaker: 'Glitch', text: "Replace NULLs with a default!" }
                ],
                story: "Blank spines stare accusingly from the shelves.",
                objective: 'Select titles, replacing NULL with "Unknown Book".',
                hint: 'Use COALESCE',
                initSql: `
          CREATE TABLE books (title TEXT);
          INSERT INTO books VALUES ('Magic 101');
          INSERT INTO books VALUES (NULL);
          INSERT INTO books VALUES ('History');
        `,
                expectedQuery: "SELECT COALESCE(title, 'Unknown Book') FROM books",
                successMessage: "The voids fill with meaning. Every book now has identity.",
                type: 'select',
                solution: "SELECT COALESCE(title, 'Unknown Book') FROM books"
            },
            {
                id: '4-9',
                title: 'Type Shift',
                dialogue: [
                    { speaker: 'Librarian', text: "Page counts stored as text must become numbers for calculation." },
                    { speaker: 'You', text: "CAST to convert types." }
                ],
                story: "Misrecorded data blocks deeper analysis.",
                objective: 'Cast the pages column from TEXT to INTEGER.',
                hint: 'Use CAST(column AS INTEGER)',
                initSql: `
          CREATE TABLE books (pages TEXT);
          INSERT INTO books VALUES ('100');
          INSERT INTO books VALUES ('250');
        `,
                expectedQuery: "SELECT CAST(pages AS INTEGER) FROM books",
                successMessage: "Text becomes number. Mathematical wisdom unlocked.",
                type: 'select',
                solution: "SELECT CAST(pages AS INTEGER) FROM books"
            },
            {
                id: '4-10',
                title: 'String Binding',
                dialogue: [
                    { speaker: 'Glitch', text: "Combine names and roles into epic titles!" }
                ],
                story: "Villager records yearn for dramatic presentation.",
                objective: 'Select name and role concatenated with " the ".',
                hint: 'Use || for concatenation in SQLite',
                initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT);
          INSERT INTO villagers VALUES ('Born', 'warrior');
          INSERT INTO villagers VALUES ('Alina', 'mage');
        `,
                expectedQuery: "SELECT name || ' the ' || role FROM villagers",
                successMessage: "Born the warrior, Alina the mage... legendary titles formed.",
                type: 'select',
                solution: "SELECT name || ' the ' || role FROM villagers"
            },
            {
                id: '4-11',
                title: 'Difference',
                dialogue: [
                    { speaker: 'Glitch', text: "Which safe zones exist only in scroll_a?" }
                ],
                story: "Diverging maps show unique refuges.",
                objective: 'Use EXCEPT to find names only in scroll_a.',
                hint: 'Use EXCEPT',
                initSql: `
          CREATE TABLE scroll_a (name TEXT);
          CREATE TABLE scroll_b (name TEXT);
          INSERT INTO scroll_a VALUES ('Safe Haven');
          INSERT INTO scroll_a VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Sanctuary');
          INSERT INTO scroll_b VALUES ('Shelter');
        `,
                expectedQuery: "SELECT name FROM scroll_a EXCEPT SELECT name FROM scroll_b",
                successMessage: "Safe Haven stands alone. A unique sanctuary discovered.",
                type: 'select',
                solution: "SELECT name FROM scroll_a EXCEPT SELECT name FROM scroll_b"
            },
            {
                id: '4-12',
                title: 'Existence Check',
                dialogue: [
                    { speaker: 'Librarian', text: "Show only books with rare copies in the vault." }
                ],
                story: "Precious rare editions lie hidden below.",
                objective: 'Select books where a matching entry EXISTS in rare_books.',
                hint: 'Use EXISTS subquery',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT);
          CREATE TABLE rare_books (book_id INTEGER);
          INSERT INTO books VALUES (1, 'Magic 101');
          INSERT INTO books VALUES (2, 'History');
          INSERT INTO rare_books VALUES (1);
        `,
                expectedQuery: "SELECT * FROM books b WHERE EXISTS (SELECT 1 FROM rare_books r WHERE r.book_id = b.id)",
                successMessage: "Only true rarities remain. Priceless knowledge preserved.",
                type: 'select',
                solution: "SELECT * FROM books b WHERE EXISTS (SELECT 1 FROM rare_books r WHERE r.book_id = b.id)"
            }
        ]
    },
    {
        id: 'chapter-5',
        title: 'Chapter V: The Time Tower',
        description: 'A towering spire pierces the clouds, its steps winding through swirling timelines. Master window functions and CTEs to navigate the flow of time itself.',
        levels: [
            {
                id: '5-1',
                title: 'The Timeline',
                dialogue: [
                    { speaker: 'Narrator', text: "The library doors swing open to reveal a colossal tower spiraling into the heavens." },
                    { speaker: 'Chronos', text: "Welcome. Time is not linear here. We rank events by importance." },
                    { speaker: 'Glitch', text: "Window functions time! `RANK() OVER (ORDER BY year)` assigns a rank based on the year." }
                ],
                story: "Steps shimmer with past and future visions. Events float along the spiral path.",
                objective: 'Select name, year, and rank() over year (ordered by year).',
                hint: 'Use RANK() OVER (ORDER BY column)',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Big Bang', -1000);
          INSERT INTO events VALUES (2, 'Empire Rise', 500);
          INSERT INTO events VALUES (3, 'Empire Fall', 500);
          INSERT INTO events VALUES (4, 'Rebirth', 1000);
        `,
                expectedQuery: "SELECT name, year, RANK() OVER (ORDER BY year) FROM events",
                successMessage: "The timeline stabilizes. Events align in perfect chronological order.",
                type: 'select',
                solution: "SELECT name, year, RANK() OVER (ORDER BY year) FROM events"
            },
            {
                id: '5-1-b',
                title: 'Reverse History',
                dialogue: [
                    { speaker: 'Chronos', text: "Now look backwards. Rank them from latest to earliest." },
                    { speaker: 'You', text: "So `ORDER BY year DESC` inside the window?" },
                    { speaker: 'Glitch', text: "Exactly." }
                ],
                story: "Time flows in reverse as you ascend the spiral instructions.",
                objective: 'Select name, year, and rank() over year descending.',
                hint: 'RANK() OVER (ORDER BY year DESC)',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Big Bang', -1000);
          INSERT INTO events VALUES (2, 'Empire Rise', 500);
          INSERT INTO events VALUES (3, 'Empire Fall', 500);
          INSERT INTO events VALUES (4, 'Rebirth', 1000);
        `,
                expectedQuery: "SELECT name, year, RANK() OVER (ORDER BY year DESC) FROM events",
                successMessage: "The past becomes the future, sorted perfectly.",
                type: 'select',
                solution: "SELECT name, year, RANK() OVER (ORDER BY year DESC) FROM events"
            },
            {
                id: '5-2',
                title: 'Time Travel',
                dialogue: [
                    { speaker: 'Chronos', text: "For each event, reveal what follows immediately after." },
                    { speaker: 'Glitch', text: "Use `LEAD(name) OVER (ORDER BY year)` to peek at the next row's name!" }
                ],
                story: "Visions of coming eras flicker at the edges of perception.",
                objective: 'Select name, year, and the LEAD(name) over year ordering.',
                hint: 'Use LEAD(column) OVER (ORDER BY ...)',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Start', 100);
          INSERT INTO events VALUES (2, 'Middle', 200);
          INSERT INTO events VALUES (3, 'End', 300);
        `,
                expectedQuery: "SELECT name, year, LEAD(name) OVER (ORDER BY year) FROM events",
                successMessage: "You see beyond the present. The flow of time becomes predictable.",
                type: 'select',
                solution: "SELECT name, year, LEAD(name) OVER (ORDER BY year) FROM events"
            },
            {
                id: '5-3',
                title: 'The Paradox',
                dialogue: [
                    { speaker: 'Chronos', text: "Isolate recent events first, then query them. Create a temporary reality." },
                    { speaker: 'Glitch', text: "Use a CTE (Common Table Expression)! `WITH recent AS (SELECT ...)`." }
                ],
                story: "Paradoxical loops threaten to unravel the tower's steps.",
                objective: 'Use a CTE named "recent" to select events with year > 200, then select all from recent.',
                hint: 'WITH name AS (query) SELECT * FROM name',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Old', 100);
          INSERT INTO events VALUES (2, 'Modern', 250);
          INSERT INTO events VALUES (3, 'Future', 300);
        `,
                expectedQuery: "WITH recent AS (SELECT * FROM events WHERE year > 200) SELECT * FROM recent",
                successMessage: "The paradox resolves. Temporary reality solidifies into truth.",
                type: 'select',
                solution: "WITH recent AS (SELECT * FROM events WHERE year > 200) SELECT * FROM recent"
            },
            {
                id: '5-3-b',
                title: 'Ancient History',
                dialogue: [
                    { speaker: 'Glitch', text: "Do it again! Define a CTE for ancient events (year < 200)." },
                    { speaker: 'You', text: "Okay, `WITH ancient AS ...`" }
                ],
                story: "You focus your mind on the distant past.",
                objective: 'Use a CTE named "ancient" to select events with year < 200, then select all from ancient.',
                hint: 'WITH ancient AS ...',
                initSql: `
          CREATE TABLE events (id INTEGER, name TEXT, year INTEGER);
          INSERT INTO events VALUES (1, 'Old', 100);
          INSERT INTO events VALUES (2, 'Modern', 250);
          INSERT INTO events VALUES (3, 'Future', 300);
        `,
                expectedQuery: "WITH ancient AS (SELECT * FROM events WHERE year < 200) SELECT * FROM ancient",
                successMessage: "Only the echoes of the past remain.",
                type: 'select',
                solution: "WITH ancient AS (SELECT * FROM events WHERE year < 200) SELECT * FROM ancient"
            },
            {
                id: '5-4',
                title: 'Rank Within Groups',
                dialogue: [
                    { speaker: 'Chronos', text: "Rank not across all time, but within each era separately." },
                    { speaker: 'Glitch', text: "PARTITION BY! `RANK() OVER (PARTITION BY role ORDER BY gold DESC)` resets rank for each role." }
                ],
                story: "Distinct eras branch along the tower walls.",
                objective: 'Rank villagers by gold within each role.',
                hint: 'RANK() OVER (PARTITION BY role ORDER BY gold DESC)',
                initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES ('Born', 'warrior', 50);
          INSERT INTO villagers VALUES ('Kael', 'warrior', 45);
          INSERT INTO villagers VALUES ('Alina', 'mage', 100);
          INSERT INTO villagers VALUES ('Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT name, role, gold, RANK() OVER (PARTITION BY role ORDER BY gold DESC) FROM villagers",
                successMessage: "Top warriors, top mages... rankings crystallize within their eras.",
                type: 'select',
                solution: "SELECT name, role, gold, RANK() OVER (PARTITION BY role ORDER BY gold DESC) FROM villagers"
            },
            {
                id: '5-5',
                title: 'Unique Ordering',
                dialogue: [
                    { speaker: 'Chronos', text: "Assign unique positions within each role, by wealth." },
                    { speaker: 'Glitch', text: "RANK allows ties, but `ROW_NUMBER()` is unique!" }
                ],
                story: "Every soul claims its distinct place in history.",
                objective: 'Use ROW_NUMBER() with partition by role ordering by gold desc.',
                hint: 'ROW_NUMBER() OVER (PARTITION BY ... ORDER BY ...)',
                initSql: `
          CREATE TABLE villagers (name TEXT, role TEXT, gold INTEGER);
          INSERT INTO villagers VALUES ('Born', 'warrior', 50);
          INSERT INTO villagers VALUES ('Kael', 'warrior', 45);
          INSERT INTO villagers VALUES ('Alina', 'mage', 100);
          INSERT INTO villagers VALUES ('Myra', 'mage', 110);
        `,
                expectedQuery: "SELECT name, role, ROW_NUMBER() OVER (PARTITION BY role ORDER BY gold DESC) AS row_num FROM villagers",
                successMessage: "Every position is unique. The hierarchy of time is absolute.",
                type: 'select',
                solution: "SELECT name, role, ROW_NUMBER() OVER (PARTITION BY role ORDER BY gold DESC) AS row_num FROM villagers"
            },
            {
                id: '5-6',
                title: 'Running Total',
                dialogue: [
                    { speaker: 'Chronos', text: "Watch wealth accumulate as time progresses." },
                    { speaker: 'Glitch', text: "We need a running total. `SUM(gold) OVER (ORDER BY id)`." }
                ],
                story: "Gold flows through history like a river.",
                objective: 'Calculate running sum of gold ordered by id.',
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
                successMessage: "Wealth accumulates before your eyes. The river of time grows ever richer.",
                type: 'select',
                solution: "SELECT name, gold, SUM(gold) OVER (ORDER BY id) AS running_total FROM villagers"
            },
            {
                id: '5-6-b',
                title: 'Cumulative Count',
                dialogue: [
                    { speaker: 'Chronos', text: "Now count the villagers as they appear in history." },
                    { speaker: 'You', text: "A running count?" },
                    { speaker: 'Glitch', text: "Yes! `COUNT(*) OVER (ORDER BY id)`." }
                ],
                story: "Population statistics emerge from the timeline.",
                objective: 'Calculate running count of villagers ordered by id.',
                hint: 'COUNT(*) OVER (ORDER BY id)',
                initSql: `
          CREATE TABLE villagers (id INTEGER, name TEXT, gold INTEGER);
          INSERT INTO villagers VALUES (1, 'Trog', 20);
          INSERT INTO villagers VALUES (2, 'Kael', 45);
        `,
                expectedQuery: "SELECT name, COUNT(*) OVER (ORDER BY id) FROM villagers",
                successMessage: "One, two... the count rises.",
                type: 'select',
                solution: "SELECT name, COUNT(*) OVER (ORDER BY id) FROM villagers"
            },
            {
                id: '5-7',
                title: 'Family Tree',
                dialogue: [
                    { speaker: 'Chronos', text: "Bloodlines form trees across generations. Trace all descendants of the Elder." },
                    { speaker: 'Glitch', text: "Recursive CTE! This is advanced magic." },
                    { speaker: 'Glitch', text: "`WITH RECURSIVE name AS ... UNION ALL ...`" }
                ],
                story: "Ancestral lines spiral infinitely along the tower walls.",
                objective: 'Use recursive CTE to find all subordinates (direct and indirect).',
                hint: 'WITH RECURSIVE ... UNION ALL',
                initSql: `
          CREATE TABLE employees (id INTEGER, name TEXT, manager_id INTEGER);
          INSERT INTO employees VALUES (1, 'Elder', NULL);
          INSERT INTO employees VALUES (2, 'Born', 1);
          INSERT INTO employees VALUES (3, 'Kael', 2);
          INSERT INTO employees VALUES (4, 'Alina', 1);
        `,
                expectedQuery: "WITH RECURSIVE hierarchy(id, name, level) AS (SELECT id, name, 0 FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, h.level + 1 FROM employees e JOIN hierarchy h ON e.manager_id = h.id) SELECT name, level FROM hierarchy",
                successMessage: "The entire lineage unfolds through infinite time. You master generational flow.",
                type: 'select',
                solution: "WITH RECURSIVE hierarchy(id, name, level) AS (SELECT id, name, 0 FROM employees WHERE manager_id IS NULL UNION ALL SELECT e.id, e.name, h.level + 1 FROM employees e JOIN hierarchy h ON e.manager_id = h.id) SELECT name, level FROM hierarchy"
            }
        ]
    },
    {
        id: 'chapter-6',
        title: 'Chapter VI: The Builder',
        description: 'At the tower\'s summit lies pure void. You have read the world — now shape it. Master creation, modification, and destruction of reality itself.',
        levels: [
            {
                id: '6-1',
                title: 'Blueprint',
                dialogue: [
                    { speaker: 'Narrator', text: "The tower ends in empty sky. Nothing exists here... yet." },
                    { speaker: 'Architect', text: "Impose structure upon the void. Begin with a foundation." },
                    { speaker: 'Glitch', text: "To store data, we need a table. Use `CREATE TABLE towers (...)`." },
                    { speaker: 'Glitch', text: "Define columns like `id INTEGER PRIMARY KEY` and `height INTEGER`." }
                ],
                story: "Infinite potential stretches before you. Creation awaits your command.",
                objective: 'Create a table named "towers" with columns: id (INTEGER PRIMARY KEY) and height (INTEGER).',
                hint: 'CREATE TABLE name (col TYPE constraints)',
                initSql: `
          DROP TABLE IF EXISTS towers;
        `,
                expectedQuery: "SELECT * FROM towers",
                successMessage: "The void solidifies. A towering structure begins to rise.",
                type: 'dml',
                solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER)"
            },
            {
                id: '6-1-b',
                title: 'Bridge Construction',
                dialogue: [
                    { speaker: 'Architect', text: "We need pathways between the towers." },
                    { speaker: 'You', text: "Another table? `CREATE TABLE bridges`?" },
                    { speaker: 'Glitch', text: "Yes. Give it an `id` and `length`." }
                ],
                story: "You sketch the connections between your spires.",
                objective: 'Create a table "bridges" with columns: id (INTEGER) and length (INTEGER).',
                hint: 'CREATE TABLE bridges ...',
                initSql: `
          DROP TABLE IF EXISTS bridges;
        `,
                expectedQuery: "SELECT * FROM bridges",
                successMessage: "Pathways form in the ether.",
                type: 'dml',
                solution: "CREATE TABLE bridges (id INTEGER, length INTEGER)"
            },
            {
                id: '6-2',
                title: 'Genesis',
                dialogue: [
                    { speaker: 'Architect', text: "Give life to your creation. Raise the first tower." },
                    { speaker: 'Glitch', text: "We have the table, now put data in it! `INSERT INTO towers (id, height) VALUES (1, 100)`." }
                ],
                story: "Your new world hungers for content.",
                objective: 'Insert into towers (id, height) values (1, 100).',
                hint: 'INSERT INTO table VALUES (...)',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 1 AND height = 100",
                successMessage: "A magnificent tower pierces the sky at 100 meters. Creation breathes.",
                type: 'dml',
                solution: "INSERT INTO towers (id, height) VALUES (1, 100)"
            },
            {
                id: '6-2-b',
                title: 'Expansion',
                dialogue: [
                    { speaker: 'Glitch', text: "Don't stop! Build another one, taller this time." },
                    { speaker: 'You', text: "ID 2, Height 200..." }
                ],
                story: "The skyline waits for your second masterpiece.",
                objective: 'Insert into towers values (2, 200).',
                hint: 'INSERT INTO ...',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 100);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 2 AND height = 200",
                successMessage: "Two towers now stand as sentinels.",
                type: 'dml',
                solution: "INSERT INTO towers (id, height) VALUES (2, 200)"
            },
            {
                id: '6-3',
                title: 'Renovation',
                dialogue: [
                    { speaker: 'Glitch', text: "It's beautiful... but nameless. We forgot a column!" },
                    { speaker: 'Architect', text: "ALTER the blueprint to add it." },
                    { speaker: 'Glitch', text: "`ALTER TABLE towers ADD COLUMN name TEXT`." }
                ],
                story: "Your tower stands proud but anonymous.",
                objective: 'Add a new column "name" (TEXT) to the towers table.',
                hint: 'ALTER TABLE ADD COLUMN',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 100);
        `,
                expectedQuery: "SELECT name FROM towers",
                successMessage: "The structure evolves. Space for names appears.",
                type: 'dml',
                solution: "ALTER TABLE towers ADD COLUMN name TEXT"
            },
            {
                id: '6-4',
                title: 'Evolution',
                dialogue: [
                    { speaker: 'Glitch', text: "The tower grows! Make it taller." },
                    { speaker: 'Glitch', text: "Modify existing data with `UPDATE towers SET height = 200 WHERE id = 1`." },
                    { speaker: 'You', text: "I must use WHERE, or it updates everything?" },
                    { speaker: 'Glitch', text: "Correct. Always use WHERE with UPDATE!" }
                ],
                story: "Your creation responds to your will.",
                objective: 'Update towers set height = 200 where id = 1.',
                hint: 'UPDATE table SET col=val WHERE condition',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 100, NULL);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 1 AND height = 200",
                successMessage: "The tower surges upward, reaching 200 meters into the heavens.",
                type: 'dml',
                solution: "UPDATE towers SET height = 200 WHERE id = 1"
            },
            {
                id: '6-4-b',
                title: 'Naming Ceremony',
                dialogue: [
                    { speaker: 'Glitch', text: "Now give it a name. Calling it 'The Spire'." },
                    { speaker: 'You', text: "`UPDATE towers SET name = 'The Spire' ...`" }
                ],
                story: "You carve the name into the base of the tower.",
                objective: 'Update towers set name = "The Spire" where id = 1.',
                hint: 'UPDATE ... SET name = ...',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 200, NULL);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 1 AND name = 'The Spire'",
                successMessage: "The Spire. A name that will last forever.",
                type: 'dml',
                solution: "UPDATE towers SET name = 'The Spire' WHERE id = 1"
            },
            {
                id: '6-5',
                title: 'Cleanup',
                dialogue: [
                    { speaker: 'Architect', text: "Some structures are unworthy. Remove the weak." },
                    { speaker: 'Glitch', text: "Use `DELETE FROM towers WHERE ...`. Careful, no undo!" }
                ],
                story: "Flawed creations clutter your perfect world.",
                objective: 'Delete towers with height < 150.',
                hint: 'DELETE FROM table WHERE condition',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 200);
          INSERT INTO towers VALUES (2, 100);
          INSERT INTO towers VALUES (3, 50);
        `,
                expectedQuery: "SELECT * FROM towers WHERE height >= 150",
                successMessage: "Weak towers crumble to dust. Only the strong remain.",
                type: 'dml',
                solution: "DELETE FROM towers WHERE height < 150"
            },
            {
                id: '6-5-b',
                title: 'Demolition',
                dialogue: [
                    { speaker: 'Glitch', text: "That small hut (id 3) has to go too." },
                    { speaker: 'You', text: "Deleting by ID is safer." }
                ],
                story: "You point your finger at the last imperfection.",
                objective: 'Delete from towers where id = 3.',
                hint: 'DELETE ... WHERE id = 3',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER);
          INSERT INTO towers VALUES (1, 200);
          INSERT INTO towers VALUES (3, 50);
        `,
                expectedQuery: "SELECT * FROM towers WHERE id = 3",
                successMessage: "Gone. The landscape is pristine.",
                type: 'dml',
                solution: "DELETE FROM towers WHERE id = 3"
            },
            {
                id: '6-6',
                title: 'The Vision',
                dialogue: [
                    { speaker: 'Architect', text: "Create a permanent vista of the tallest towers." },
                    { speaker: 'Glitch', text: "A VIEW is like a saved query. `CREATE VIEW name AS SELECT ...`." }
                ],
                story: "You desire constant sight of your grandest works.",
                objective: 'Create a view "high_towers" that selects * from towers where height > 150.',
                hint: 'CREATE VIEW name AS SELECT ...',
                initSql: `
          DROP VIEW IF EXISTS high_towers;
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT);
          INSERT INTO towers VALUES (1, 200, 'Spire');
          INSERT INTO towers VALUES (2, 50, 'Hut');
        `,
                expectedQuery: "SELECT * FROM high_towers",
                successMessage: "A crystalline window opens, forever showing your mightiest creations.",
                type: 'dml',
                solution: "CREATE VIEW high_towers AS SELECT * FROM towers WHERE height > 150"
            },
            {
                id: '6-7',
                title: 'Enforce Rules',
                dialogue: [
                    { speaker: 'Architect', text: "Your world needs laws. Names must be unique and required." },
                    { speaker: 'Glitch', text: "Add constraints! `TEXT UNIQUE NOT NULL`." }
                ],
                story: "Chaos threatens without constraints.",
                objective: 'Create towers table with name TEXT UNIQUE NOT NULL.',
                hint: 'Column constraints',
                initSql: `
          DROP TABLE IF EXISTS towers;
        `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE name='towers'",
                successMessage: "Immutable laws bind reality. Your world gains unbreakable integrity.",
                type: 'dml',
                solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, height INTEGER, name TEXT UNIQUE NOT NULL)"
            },
            {
                id: '6-8',
                title: 'Linked Structures',
                dialogue: [
                    { speaker: 'Architect', text: "Towers belong to villages. Enforce the bond." },
                    { speaker: 'Glitch', text: "Foreign Keys! `FOREIGN KEY(village_id) REFERENCES villages(id)`." }
                ],
                story: "Isolated towers feel incomplete.",
                objective: 'Create towers with village_id referencing villages.id.',
                hint: 'FOREIGN KEY ... REFERENCES',
                initSql: `
          DROP TABLE IF EXISTS towers;
          DROP TABLE IF EXISTS villages;
          CREATE TABLE villages (id INTEGER PRIMARY KEY, name TEXT);
        `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE name='towers'",
                successMessage: "Towers now root deeply in their villages. Relationships eternal.",
                type: 'dml',
                solution: "CREATE TABLE towers (id INTEGER PRIMARY KEY, village_id INTEGER, FOREIGN KEY(village_id) REFERENCES villages(id))"
            },
            {
                id: '6-9',
                title: 'Lightning Queries',
                dialogue: [
                    { speaker: 'Architect', text: "Searching grows slow with many towers." },
                    { speaker: 'Glitch', text: "INDEX for speed! `CREATE INDEX ... ON ...`." }
                ],
                story: "Your growing empire demands efficiency.",
                objective: 'Create an index on height column.',
                hint: 'CREATE INDEX name ON table(column)',
                initSql: `
          DROP INDEX IF EXISTS idx_height;
          CREATE TABLE IF NOT EXISTS towers (id INTEGER, height INTEGER);
        `,
                expectedQuery: "SELECT name FROM sqlite_master WHERE type='index'",
                successMessage: "Time itself bends to your will. Queries strike like lightning.",
                type: 'dml',
                solution: "CREATE INDEX idx_height ON towers(height)"
            },
            {
                id: '6-10',
                title: 'Demolition',
                dialogue: [
                    { speaker: 'Architect', text: "The experiment ends. Return to void." },
                    { speaker: 'Glitch', text: "DROP everything..." }
                ],
                story: "Your creations have served their purpose.",
                objective: 'Drop the "towers" table.',
                hint: 'DROP TABLE name',
                initSql: `
          DROP TABLE IF EXISTS towers;
          CREATE TABLE towers (id INTEGER, height INTEGER);
        `,
                expectedQuery: "SELECT name FROM sqlite_master WHERE type='table' AND name='towers'",
                successMessage: "Towers dissolve into dust. The void returns, ready for new creation.",
                type: 'dml',
                solution: "DROP TABLE towers"
            }
        ]
    },
    {
        id: 'chapter-7',
        title: 'Chapter VII: The Chronomancer',
        description: 'At the pinnacle of power, you face the master of time. Wield date and time functions to prove your mastery over the final frontier.',
        levels: [
            {
                id: '7-1',
                title: 'The Present',
                dialogue: [
                    { speaker: 'Narrator', text: "A final figure awaits atop the rebuilt world — the Chronomancer." },
                    { speaker: 'Chronomancer', text: "You have shaped reality. But can you grasp the eternal now?" },
                    { speaker: 'Glitch', text: "Query the present moment with `DATE('now')`!" }
                ],
                story: "Time swirls in infinite loops around the ultimate throne.",
                objective: 'Select the current date using DATE(\'now\').',
                hint: 'DATE("now")',
                initSql: ``,
                expectedQuery: "SELECT DATE('now')",
                successMessage: "The exact present crystallizes before you. You seize the moment.",
                type: 'select',
                solution: "SELECT DATE('now')"
            },
            {
                id: '7-1-b',
                title: 'Precise Time',
                dialogue: [
                    { speaker: 'Chronomancer', text: "A date is but a broad stroke. I demand precision." },
                    { speaker: 'You', text: "The exact time? `TIME('now')`?" },
                    { speaker: 'Glitch', text: "Correct. Seize the second." }
                ],
                story: "The ticking of the universal clock grows louder.",
                objective: 'Select the current time using TIME(\'now\').',
                hint: 'TIME("now")',
                initSql: ``,
                expectedQuery: "SELECT TIME('now')",
                successMessage: "Seconds tick by, captured perfectly in your query.",
                type: 'select',
                solution: "SELECT TIME('now')"
            },
            {
                id: '7-2',
                title: 'The Age',
                dialogue: [
                    { speaker: 'Chronomancer', text: "Extract the year from this timeless now." },
                    { speaker: 'Glitch', text: "`STRFTIME('%Y', 'now')` will isolate the year!" }
                ],
                story: "Eternal cycles demand precise measurement.",
                objective: 'Select STRFTIME(\'%Y\', \'now\') as current_year.',
                hint: 'STRFTIME("%Y", "now")',
                initSql: ``,
                expectedQuery: "SELECT STRFTIME('%Y', 'now')",
                successMessage: "The current year isolates itself from the flow. You command time's components.",
                type: 'select',
                solution: "SELECT STRFTIME('%Y', 'now')"
            },
            {
                id: '7-2-b',
                title: 'The Season',
                dialogue: [
                    { speaker: 'Glitch', text: "Now get the month. The pattern is `%m`." },
                    { speaker: 'You', text: "So `STRFTIME('%m', 'now')`." }
                ],
                story: "You seek to understand the season of the world.",
                objective: 'Select the current month using STRFTIME.',
                hint: 'STRFTIME("%m", "now")',
                initSql: ``,
                expectedQuery: "SELECT STRFTIME('%m', 'now')",
                successMessage: "The month reveals itself.",
                type: 'select',
                solution: "SELECT STRFTIME('%m', 'now')"
            },
            {
                id: '7-3',
                title: 'Future Vision',
                dialogue: [
                    { speaker: 'Chronomancer', text: "What date lies 30 days hence?" },
                    { speaker: 'Glitch', text: "You can modify dates! `DATE('now', '+30 days')`." }
                ],
                story: "Visions of tomorrow beckon.",
                objective: 'Select date 30 days from now.',
                hint: 'date("now", "+30 days")',
                initSql: ``,
                expectedQuery: "SELECT date('now', '+30 days')",
                successMessage: "The future date manifests clearly. You peer beyond the veil.",
                type: 'select',
                solution: "SELECT date('now', '+30 days')"
            },
            {
                id: '7-3-b',
                title: 'The Past',
                dialogue: [
                    { speaker: 'Chronomancer', text: "Look back. What was the date 7 days ago?" },
                    { speaker: 'You', text: "I subtract time. `DATE('now', '-7 days')`." }
                ],
                story: "Memories format themselves into data.",
                objective: 'Select date 7 days ago.',
                hint: 'date("now", "-7 days")',
                initSql: ``,
                expectedQuery: "SELECT date('now', '-7 days')",
                successMessage: "The past is as clear as the present.",
                type: 'select',
                solution: "SELECT date('now', '-7 days')"
            },
            {
                id: '7-4',
                title: 'Day Difference',
                dialogue: [
                    { speaker: 'Chronomancer', text: "Measure the days between distant moments." },
                    { speaker: 'Glitch', text: "`JULIANDAY` converts dates to numbers we can subtract!" },
                    { speaker: 'Glitch', text: "`JULIANDAY(date2) - JULIANDAY(date1)`." }
                ],
                story: "Two points in time float before you, awaiting measurement.",
                objective: 'Calculate days between two dates using julianday. Use DATE(\'now\', \'+30 days\') as the future date.',
                hint: 'julianday(future) - julianday(now)',
                initSql: ``,
                expectedQuery: "SELECT julianday(date('now', '+30 days')) - julianday('now')",
                successMessage: "Exactly 30 days. You have mastered time's arithmetic. The Chronomancer bows — you are now the true master.",
                type: 'select',
                solution: "SELECT julianday(date('now', '+30 days')) - julianday('now')"
            }
        ]
    },
    {
        id: 'chapter-8',
        title: 'Chapter VIII: The Architect’s Mind',
        description: 'You have mastered time and creation, but a true Architect ensures the safety, speed, and integrity of their world. Master transactions, triggers, and complex structures to become invincible.',
        levels: [
            {
                id: '8-1',
                title: 'The Safety Net',
                dialogue: [
                    { speaker: 'Narrator', text: "You stand in the server room of the universe. One wrong command could wipe everything." },
                    { speaker: 'Architect', text: "To wield ultimate power, you must know how to undo your mistakes." },
                    { speaker: 'Glitch', text: "Transactions! `BEGIN TRANSACTION`... do stuff... `ROLLBACK`!" }
                ],
                story: "A glowing terminal offers you the power to delete the world. You must prove you can do it safely.",
                objective: 'Start a transaction, delete the gems table, but then ROLLBACK to save it.',
                hint: 'BEGIN TRANSACTION; ... ROLLBACK;',
                initSql: `
                    CREATE TABLE gems (id INTEGER, name TEXT);
                    INSERT INTO gems VALUES (1, 'Ruby');
                    INSERT INTO gems VALUES (2, 'Sapphire');
                `,
                expectedQuery: "SELECT count(*) FROM gems",
                successMessage: "The command executes, but the gems remain! You have mastered the art of the undo.",
                type: 'dml',
                solution: "BEGIN TRANSACTION; DELETE FROM gems; ROLLBACK;"
            },
            {
                id: '8-1-b',
                title: 'Safe Update',
                dialogue: [
                    { speaker: 'Glitch', text: "Now try it with an update. Set all gems to 'Dust'." },
                    { speaker: 'You', text: "But roll it back?" },
                    { speaker: 'Glitch', text: "Always." }
                ],
                story: "You test your powers of transmutation safely.",
                objective: 'Begin transaction, update gems set name = "Dust", then rollback.',
                hint: 'BEGIN TRANSACTION; UPDATE ...; ROLLBACK;',
                initSql: `
                    CREATE TABLE gems (id INTEGER, name TEXT);
                    INSERT INTO gems VALUES (1, 'Ruby');
                `,
                expectedQuery: "SELECT * FROM gems WHERE name = 'Ruby'",
                successMessage: "The gems sparkle, untouched by your test.",
                type: 'dml',
                solution: "BEGIN TRANSACTION; UPDATE gems SET name='Dust'; ROLLBACK;"
            },
            {
                id: '8-2',
                title: 'The Automaton',
                dialogue: [
                    { speaker: 'Architect', text: "You cannot watch every corner of the realm at once. Build sentinels." },
                    { speaker: 'Glitch', text: "Triggers! `CREATE TRIGGER name AFTER UPDATE ON table ...`" }
                ],
                story: "Construct an automated defense that records every change to the tower.",
                objective: 'Create a TRIGGER named "log_update" that inserts into "logs" (message) VALUES ("updated") AFTER UPDATE on towers.',
                hint: 'CREATE TRIGGER name AFTER UPDATE ON table BEGIN ... END;',
                initSql: `
                    CREATE TABLE towers (id INTEGER, height INTEGER);
                    CREATE TABLE logs (message TEXT);
                    INSERT INTO towers VALUES (1, 100);
                `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE type = 'trigger' AND name = 'log_update'",
                successMessage: "The sentinel is active. The system now watches itself.",
                type: 'dml',
                solution: "CREATE TRIGGER log_update AFTER UPDATE ON towers BEGIN INSERT INTO logs VALUES ('updated'); END;"
            },
            {
                id: '8-2-b',
                title: 'The Watcher',
                dialogue: [
                    { speaker: 'Glitch', text: "Now watch for new arrivals. A trigger on INSERT." },
                    { speaker: 'Glitch', text: "Insert 'New Tower' into logs when a tower is created." }
                ],
                story: "A second eye opens to watch the creation of worlds.",
                objective: 'Create a trigger "log_insert" AFTER INSERT on towers to add "New Tower" to logs.',
                hint: 'AFTER INSERT ...',
                initSql: `
                    CREATE TABLE towers (id INTEGER, height INTEGER);
                    CREATE TABLE logs (message TEXT);
                `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE type = 'trigger' AND name = 'log_insert'",
                successMessage: "Nothing enters this world unseen.",
                type: 'dml',
                solution: "CREATE TRIGGER log_insert AFTER INSERT ON towers BEGIN INSERT INTO logs VALUES ('New Tower'); END;"
            },
            {
                id: '8-3',
                title: 'The Encrypted Scroll',
                dialogue: [
                    { speaker: 'Narrator', text: "A traveler hands you a scroll written in strange, nested brackets." },
                    { speaker: 'Glitch', text: "It's JSON data! `{ key: value }`." },
                    { speaker: 'You', text: "I need `json_extract(column, '$.key')`." }
                ],
                story: "Complex data structures hide simple truths.",
                objective: 'Select the value of "magic" from the json data column using json_extract.',
                hint: "json_extract(column, '$.key')",
                initSql: `
                    CREATE TABLE scrolls (id INTEGER, data TEXT);
                    INSERT INTO scrolls VALUES (1, '{\"magic\": \"fire\", \"power\": 50}');
                    INSERT INTO scrolls VALUES (2, '{\"magic\": \"ice\", \"power\": 40}');
                `,
                expectedQuery: "SELECT json_extract(data, '$.magic') FROM scrolls",
                successMessage: "Fire... Ice... The raw elements are extracted from the code.",
                type: 'select',
                solution: "SELECT json_extract(data, '$.magic') FROM scrolls"
            },
            {
                id: '8-3-b',
                title: 'Power Level',
                dialogue: [
                    { speaker: 'Glitch', text: "Now get the 'power' value!" }
                ],
                story: "You dig deeper into the data structure.",
                objective: 'Select the value of "power" from the json data.',
                hint: "json_extract(..., '$.power')",
                initSql: `
                    CREATE TABLE scrolls (id INTEGER, data TEXT);
                    INSERT INTO scrolls VALUES (1, '{\"magic\": \"fire\", \"power\": 50}');
                `,
                expectedQuery: "SELECT json_extract(data, '$.power') FROM scrolls",
                successMessage: "The raw power levels surge into your display.",
                type: 'select',
                solution: "SELECT json_extract(data, '$.power') FROM scrolls"
            },
            {
                id: '8-4',
                title: 'The Analysis',
                dialogue: [
                    { speaker: 'Architect', text: "Speed is the essence of power. Analyze your spell before casting it." },
                    { speaker: 'Glitch', text: "EXPLAIN QUERY PLAN! See the matrix behind the query." }
                ],
                story: "You peer into the engine of reality to optimize its flow.",
                objective: 'Run EXPLAIN QUERY PLAN on: SELECT * FROM magic_items WHERE power > 100',
                hint: 'Just prepend EXPLAIN QUERY PLAN to the query.',
                initSql: `
                    CREATE TABLE magic_items (id INTEGER, power INTEGER);
                    INSERT INTO magic_items VALUES (1, 50);
                    INSERT INTO magic_items VALUES (2, 150);
                `,
                expectedQuery: "EXPLAIN QUERY PLAN SELECT * FROM magic_items WHERE power > 100",
                successMessage: "The query plan is revealed. You see the cost of your actions before they happen.",
                type: 'select',
                solution: "EXPLAIN QUERY PLAN SELECT * FROM magic_items WHERE power > 100"
            },
            {
                id: '8-4-b',
                title: 'Deep Scan',
                dialogue: [
                    { speaker: 'Glitch', text: "Scan a more complex spell. `SELECT name FROM magic_items`." },
                    { speaker: 'You', text: "It works on any query?" },
                    { speaker: 'Glitch', text: "Yes." }
                ],
                story: "You perform a diagnostic on the core memory.",
                objective: 'Run EXPLAIN QUERY PLAN on: SELECT name FROM magic_items',
                hint: 'EXPLAIN QUERY PLAN ...',
                initSql: `
                    CREATE TABLE magic_items (name TEXT);
                `,
                expectedQuery: "EXPLAIN QUERY PLAN SELECT name FROM magic_items",
                successMessage: "Efficiency metrics stream across your vision.",
                type: 'select',
                solution: "EXPLAIN QUERY PLAN SELECT name FROM magic_items"
            },
            {
                id: '8-5',
                title: 'The Composite',
                dialogue: [
                    { speaker: 'Architect', text: "A single key is easily broken. Bind two together for true strength." },
                    { speaker: 'Glitch', text: "Composite Primary Key! `PRIMARY KEY (col1, col2)`." }
                ],
                story: "The foundation of the final temple requires a dual lock.",
                objective: 'Create table "temple" with columns x (INT), y (INT), PRIMARY KEY (x, y).',
                hint: 'PRIMARY KEY (col1, col2)',
                initSql: `
                    DROP TABLE IF EXISTS temple;
                `,
                expectedQuery: "SELECT sql FROM sqlite_master WHERE name='temple'",
                successMessage: "The dual seal is set. The Architect nods. You are no longer a student... you are a Master.",
                type: 'dml',
                solution: "CREATE TABLE temple (x INTEGER, y INTEGER, PRIMARY KEY (x, y))"
            }
        ]
    }
];