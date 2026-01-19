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
                    { speaker: 'Glitch', text: "Name's Glitch — your faithful data sprite companion! You're trapped in the SQL Realm, a world built from tables and queries. That glowing `items` table right there? It's real. Query it. See what's inside!" }
                ],
                story: "Dim ethereal light illuminates scattered objects suspended in the void: a rusty key, a broken sword, a humming amulet. The air hums with latent power. Your escape begins with sight.",
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
                successMessage: "The terminal erupts in brilliant light! Every object materializes vividly before you. You feel the first spark of power igniting within.",
                type: 'select',
                solution: "SELECT * FROM items"
            },
            {
                id: '1-2',
                title: 'Focusing Sight',
                dialogue: [
                    { speaker: 'Glitch', text: "Whoa—too much data at once! My pixels are burning!" },
                    { speaker: 'Glitch', text: "Narrow it down. Just the names of the items. Cut the noise!" },
                    { speaker: 'You', text: "I can focus my query..." }
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
                successMessage: "Chaos recedes. Clean names float in perfect order: Rusty Key, Broken Sword, Strange Amulet... Your vision sharpens.",
                type: 'select',
                solution: "SELECT name FROM items"
            },
            {
                id: '1-3',
                title: 'The Right Tool',
                dialogue: [
                    { speaker: 'Glitch', text: "Iron door ahead — sealed with ancient locks. Brute force won't work here." },
                    { speaker: 'You', text: "There's a 'type' column... maybe we need a specific kind of item." },
                    { speaker: 'Glitch', text: "Yes! Filter for 'tool' types only. The right instrument will open the way." }
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
                successMessage: "The Rusty Key and Rock shine brightly. The key drifts forward, sliding perfectly into the lock. A soft click echoes through the void.",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'tool'"
            },
            {
                id: '1-4',
                title: 'Sorting the Clutter',
                dialogue: [
                    { speaker: 'Glitch', text: "We can't carry everything — inventory space is finite in the Realm!" },
                    { speaker: 'You', text: "The 'power' values... higher is better?" },
                    { speaker: 'Glitch', text: "Exactly! Sort by power, strongest first. Let's claim the best loot." }
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
                successMessage: "Items cascade into perfect order. The Strange Amulet blazes at the top, radiating immense energy.",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC"
            },
            {
                id: '1-5',
                title: 'Complex Choices',
                dialogue: [
                    { speaker: 'Glitch', text: "The final barrier... it's no simple lock. Arcane runes pulse with logic." },
                    { speaker: 'Glitch', text: "Inscription: 'Offer an artifact OR power greater than 50.'" },
                    { speaker: 'You', text: "Conditional logic... we'll use OR." }
                ],
                story: "The exit gate shimmers with glowing conditions. Only the correct sacrifice will dissolve it.",
                objective: 'Select items where type is "artifact" OR power > 50.',
                hint: 'Combine conditions with OR (and parentheses if needed)',
                initSql: `
          CREATE TABLE items (id INTEGER, name TEXT, type TEXT, power INTEGER);
          INSERT INTO items VALUES (1, 'Rusty Key', 'tool', 5);
          INSERT INTO items VALUES (2, 'Broken Sword', 'weapon', 15);
          INSERT INTO items VALUES (3, 'Strange Amulet', 'artifact', 100);
          INSERT INTO items VALUES (4, 'Moldy Bread', 'food', 2);
          INSERT INTO items VALUES (5, 'Rock', 'tool', 1);
        `,
                expectedQuery: "SELECT * FROM items WHERE type = 'artifact' OR power > 50",
                successMessage: "The Strange Amulet rises, resonating perfectly. The gate dissolves into cascading light. Freedom beckons!",
                type: 'select',
                solution: "SELECT * FROM items WHERE type = 'artifact' OR power > 50"
            },
            {
                id: '1-6',
                title: 'The Range',
                dialogue: [
                    { speaker: 'Glitch', text: "Hold on—traps! Floor spikes activate on mid-power items." },
                    { speaker: 'You', text: "Between 10 and 20? We must identify them to disarm." },
                    { speaker: 'Glitch', text: "BETWEEN is perfect — cleaner than inequalities." }
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
                successMessage: "You carefully extract the Broken Sword and Shield. Spikes retract silently. The path is safe.",
                type: 'select',
                solution: "SELECT * FROM items WHERE power BETWEEN 10 AND 20"
            },
            {
                id: '1-7',
                title: 'The List',
                dialogue: [
                    { speaker: 'Glitch', text: "Ugh... querying makes me hungry. Need fuel!" },
                    { speaker: 'You', text: "What does a data sprite even eat?" },
                    { speaker: 'Glitch', text: "Only 'food' and 'artifact' types. Anything else causes stack overflow!" }
                ],
                story: "Glitch flickers weakly, its glow dimming. A quick valid meal will restore its energy.",
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
                successMessage: "Glitch eagerly consumes the Moldy Bread and absorbs the Amulet's essence. Its form brightens, buzzing with renewed energy.",
                type: 'select',
                solution: "SELECT * FROM items WHERE type IN ('food', 'artifact')"
            },
            {
                id: '1-8',
                title: 'Limited Inventory',
                dialogue: [
                    { speaker: 'Glitch', text: "So many new items appearing... but my buffer is overflowing!" },
                    { speaker: 'Glitch', text: "Show only the 5 strongest. We'll take those first." }
                ],
                story: "As you ascend the stairwell, countless artifacts manifest. Selection is crucial.",
                objective: 'Select the top 5 most powerful items, sorted by power descending.',
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
                successMessage: "Five radiant items materialize in your inventory. The rest politely fade. Your load feels manageable.",
                type: 'select',
                solution: "SELECT * FROM items ORDER BY power DESC LIMIT 5"
            },
            {
                id: '1-9',
                title: 'Next Page',
                dialogue: [
                    { speaker: 'Glitch', text: "Great haul! But there's more loot deeper in. Show the next 5 after the top tier." },
                    { speaker: 'You', text: "Paginating through reality itself..." }
                ],
                story: "The dungeon's depths seem infinite. You turn to the next page of possibilities.",
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
                successMessage: "A fresh wave of items appears. The Realm's generosity knows no bounds.",
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
                    { speaker: 'Glitch', text: "We can help! Query the `villagers` table — count the living!" }
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
                id: '2-2',
                title: 'Treasury Audit',
                dialogue: [
                    { speaker: 'Elder', text: "Our vaults were destroyed. We need to know how much gold remains among the people." },
                    { speaker: 'Glitch', text: "Total it all up! SUM the gold column." },
                    { speaker: 'You', text: "I can calculate our wealth..." }
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
                id: '2-3',
                title: 'Guild Formation',
                dialogue: [
                    { speaker: 'Elder', text: "We must organize crews — warriors, mages, healers..." },
                    { speaker: 'Glitch', text: "Group them! Count by role!" },
                    { speaker: 'You', text: "GROUP BY role, then count..." }
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
                id: '2-4',
                title: 'Elite Squads',
                dialogue: [
                    { speaker: 'Elder', text: "We can only afford elite squads with multiple members." },
                    { speaker: 'Glitch', text: "Filter the groups! HAVING clause!" }
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
                id: '2-5',
                title: 'Average Wealth',
                dialogue: [
                    { speaker: 'Elder', text: "For fair rebuilding taxes, we need the average wealth per person." },
                    { speaker: 'Glitch', text: "AVG function! Let's calculate it." }
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
                id: '2-6',
                title: 'Richest and Poorest',
                dialogue: [
                    { speaker: 'Elder', text: "Who holds the most gold? The least? We must understand our extremes." },
                    { speaker: 'You', text: "MAX and MIN will reveal them." }
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
                id: '2-7',
                title: 'Warrior Wealth',
                dialogue: [
                    { speaker: 'Elder', text: "Our warriors risk everything. How much have they saved for the cause?" },
                    { speaker: 'Glitch', text: "Conditional sum! CASE inside SUM." }
                ],
                story: "Battle-hardened warriors stand proud, their pouches heavy with earned coin.",
                objective: 'Calculate total gold owned only by warriors.',
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
                    { speaker: 'Glitch', text: "This forest is a maze! We have `paths` and `destinations` tables." },
                    { speaker: 'You', text: "We need to connect them to see where each path leads." },
                    { speaker: 'Glitch', text: "JOIN them on destination_id!" }
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
                id: '3-2',
                title: 'Hidden Treasures',
                dialogue: [
                    { speaker: 'Glitch', text: "Some paths hide treasures... but not all." },
                    { speaker: 'Glitch', text: "We need to see every path, even those without treasure." },
                    { speaker: 'You', text: "LEFT JOIN to keep all paths?" }
                ],
                story: "Glimmers of gold peek from under leaves along certain trails.",
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
                id: '3-3',
                title: 'The Final Gate',
                dialogue: [
                    { speaker: 'Guardian', text: "Halt! The Forest Guardian emerges from the trees." },
                    { speaker: 'Guardian', text: "Only those who know the danger_level of the Dragon Lair may pass." },
                    { speaker: 'Glitch', text: "Quick — query the exact value!" }
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
                    { speaker: 'You', text: "NULL names. We can query for absence." },
                    { speaker: 'Glitch', text: "IS NULL — never use equals!" }
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
                    { speaker: 'You', text: "Cartesian product... CROSS JOIN." },
                    { speaker: 'Glitch', text: "Pure chaos! But maybe useful..." }
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
                    { speaker: 'Glitch', text: "Village scouts report to leaders. We need the full chain of command." },
                    { speaker: 'You', text: "Self-join the employees table!" }
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
                    { speaker: 'Librarian', text: "Silence! Only books containing 'Magic' may be safely read." },
                    { speaker: 'Glitch', text: "Titles vary — some exact, some partial. We need pattern matching!" },
                    { speaker: 'You', text: "LIKE with wildcards..." }
                ],
                story: "Tomes murmur softly, their pages turning in unseen winds. Dangerous knowledge lurks within.",
                objective: 'Select all books where the title contains "Magic".',
                hint: 'Use LIKE "%pattern%"',
                initSql: `
          CREATE TABLE books (id INTEGER, title TEXT, author TEXT);
          INSERT INTO books VALUES (1, 'History of War', 'General Zod');
          INSERT INTO books VALUES (2, 'Dark Magic 101', 'Warlock');
          INSERT INTO books VALUES (3, 'Cooking with Fire', 'Chef');
          INSERT INTO books VALUES (4, 'Light Magic for Beginners', 'Priest');
          INSERT INTO books VALUES (5, 'Science of Magic', 'Alchemist');
        `,
                expectedQuery: "SELECT * FROM books WHERE title LIKE '%Magic%'",
                successMessage: "Three forbidden tomes drift down, pages opening eagerly. Magical knowledge flows into you.",
                type: 'select',
                solution: "SELECT * FROM books WHERE title LIKE '%Magic%'"
            },
            {
                id: '4-2',
                title: 'Dusty Authors',
                dialogue: [
                    { speaker: 'Glitch', text: "So many duplicates! I want unique authors only." },
                    { speaker: 'Librarian', text: "DISTINCT shall reveal the true creators." }
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
                    { speaker: 'Librarian', text: "To open the vault, categorize these codes: even or odd." },
                    { speaker: 'Glitch', text: "CASE statement! Conditional logic in the query itself." }
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
                    { speaker: 'You', text: "We need to calculate average first — subquery!" }
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
                    { speaker: 'Chronos', text: "Welcome, travelers. Time flows strangely here. Can you rank events by their era?" },
                    { speaker: 'Glitch', text: "Window functions! RANK over year!" }
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
                id: '5-2',
                title: 'Time Travel',
                dialogue: [
                    { speaker: 'Chronos', text: "Now glimpse the future. For each event, reveal what follows." },
                    { speaker: 'Glitch', text: "LEAD function to peek ahead!" }
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
                    { speaker: 'Chronos', text: "Define a temporary timeline of recent events, then query it." },
                    { speaker: 'Glitch', text: "Common Table Expression! WITH clause!" }
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
                id: '5-4',
                title: 'Rank Within Groups',
                dialogue: [
                    { speaker: 'Chronos', text: "Rank not across all time, but within each era separately." },
                    { speaker: 'Glitch', text: "PARTITION BY! Group the window!" }
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
                    { speaker: 'Chronos', text: "Assign unique positions within each role, by wealth." }
                ],
                story: "Every soul claims its distinct place in history.",
                objective: 'Use ROW_NUMBER() with partition.',
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
                    { speaker: 'Chronos', text: "Watch wealth accumulate as time progresses." }
                ],
                story: "Gold flows through history like a river.",
                objective: 'Calculate running sum of gold ordered by id.',
                hint: 'SUM() OVER with frame clause',
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
                successMessage: "Wealth accumulates before your eyes. The river of time grows ever richer.",
                type: 'select',
                solution: "SELECT name, gold, SUM(gold) OVER (ORDER BY id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM villagers"
            },
            {
                id: '5-7',
                title: 'Family Tree',
                dialogue: [
                    { speaker: 'Chronos', text: "Bloodlines form trees across generations. Trace all descendants of the Elder." },
                    { speaker: 'Glitch', text: "Recursive CTE! Follow the branches!" }
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
                    { speaker: 'Glitch', text: "CREATE TABLE! With primary key for stability." }
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
                id: '6-2',
                title: 'Genesis',
                dialogue: [
                    { speaker: 'Architect', text: "Give life to your creation. Raise the first tower." },
                    { speaker: 'Glitch', text: "INSERT values!" }
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
                id: '6-3',
                title: 'Renovation',
                dialogue: [
                    { speaker: 'Glitch', text: "It's beautiful... but nameless. Add identity!" },
                    { speaker: 'Architect', text: "ALTER the blueprint." }
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
                    { speaker: 'You', text: "UPDATE its height..." }
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
                id: '6-5',
                title: 'Cleanup',
                dialogue: [
                    { speaker: 'Architect', text: "Some structures are unworthy. Remove the weak." },
                    { speaker: 'Glitch', text: "DELETE rows, not everything!" }
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
                id: '6-6',
                title: 'The Vision',
                dialogue: [
                    { speaker: 'Architect', text: "Create a permanent vista of the tallest towers." },
                    { speaker: 'Glitch', text: "A VIEW — saved query!" }
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
                    { speaker: 'Architect', text: "Your world needs laws. Names must be unique and required." }
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
                    { speaker: 'Architect', text: "Towers belong to villages. Enforce the bond." }
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
                    { speaker: 'Glitch', text: "INDEX for speed!" }
                ],
                story: "Your growing empire demands efficiency.",
                objective: 'Create an index on height column.',
                hint: 'CREATE INDEX name ON table(column)',
                initSql: `
          DROP INDEX IF EXISTS idx_height;
          CREATE TABLE IF NOT EXISTS towers (id INTEGER, height INTEGER);
        `,
                expectedQuery: "SELECT name FROM sqlite_master WHERE type='index'",
                successMessage: "Queries flash like lightning. Your realm responds instantly.",
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
                    { speaker: 'Glitch', text: "Query the present moment!" }
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
                id: '7-2',
                title: 'The Age',
                dialogue: [
                    { speaker: 'Chronomancer', text: "Extract the year from this timeless now." },
                    { speaker: 'Glitch', text: "STRFTIME to format time!" }
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
                id: '7-3',
                title: 'Future Vision',
                dialogue: [
                    { speaker: 'Chronomancer', text: "What date lies 30 days hence?" }
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
                id: '7-4',
                title: 'Day Difference',
                dialogue: [
                    { speaker: 'Chronomancer', text: "Measure the days between distant moments." },
                    { speaker: 'Glitch', text: "Julianday for precise calculation!" }
                ],
                story: "Two points in time float before you, awaiting measurement.",
                objective: 'Calculate days between two dates using julianday.',
                hint: 'julianday(date2) - julianday(date1)',
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
                    { speaker: 'Glitch', text: "Transactions! We can test a delete, then roll it back!" }
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
                id: '8-2',
                title: 'The Automaton',
                dialogue: [
                    { speaker: 'Architect', text: "You cannot watch every corner of the realm at once. Build sentinels." },
                    { speaker: 'Glitch', text: "Triggers! Automate the logs!" }
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
                id: '8-3',
                title: 'The Encrypted Scroll',
                dialogue: [
                    { speaker: 'Narrator', text: "A traveler hands you a scroll written in strange, nested brackets." },
                    { speaker: 'Glitch', text: "It's JSON data! We need to extract the secret key." },
                    { speaker: 'You', text: "json_extract function..." }
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
                id: '8-5',
                title: 'The Composite',
                dialogue: [
                    { speaker: 'Architect', text: "A single key is easily broken. Bind two together for true strength." },
                    { speaker: 'Glitch', text: "Composite Primary Key! Two columns as one ID." }
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