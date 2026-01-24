export const tsChaptersBn = [
    {
        id: 'ts-chapter-1',
        title: 'অধ্যায় ১: দ্য টাইপ অ্যাওয়েকেনস',
        description: 'অগোছালো ভেরিয়েবল এবং রানটাইম ইররের পৃথিবীতে, আপনি স্ট্যাটিক টাইপিংয়ের শক্তি আবিষ্কার করেন। বিশৃঙ্খলাকে শৃঙ্খলায় আনতে টাইপস্ক্রিপ্টের বুনিয়াদি শিখুন।',
        levels: [
            {
                id: '1-1',
                title: 'হ্যালো টাইপ ওয়ার্ল্ড',
                dialogue: [
                    { speaker: 'Narrator', text: "জাভাস্ক্রিপ্টের বিশৃঙ্খলা আপনার চারপাশে ঘুরছে। ভেরিয়েবলগুলো এলোমেলোভাবে টাইপ পরিবর্তন করছে... চরম বিশৃঙ্খলা।" },
                    { speaker: 'Compiler', text: "স্বাগতম, ইউজার। আমি কম্পাইলার। আমি শৃঙ্খলা আনি।" },
                    { speaker: 'You', text: "শৃঙ্খলা? আমি শুধু চাই আমার কোড কাজ করুক।" },
                    { speaker: 'Compiler', text: "তাহলে স্পষ্টভাবে কথা বলুন। আপনার উদ্দেশ্য ঘোষণা করুন। একটি সাধারণ সম্ভাষণ দিয়ে শুরু করুন।" }
                ],
                story: "`undefined` এর শূন্যতা আপনাকে গ্রাস করতে আসছে। আপনাকে একটি স্ট্রিং দিয়ে নিজেকে নোঙ্গর করতে হবে।",
                objective: 'কনসোলে "Hello TypeScript" লগ করুন।',
                hint: 'console.log("Hello TypeScript");',
                initCode: `
// আপনার প্রথম টাইপস্ক্রিপ্ট লাইন লিখুন
`,
                expectedOutput: ["Hello TypeScript"],
                successMessage: "শূন্যবিন্দুতে লেখাটি ভেসে উঠল। এটি অপরিবর্তনীয়। এটি স্বীকৃত।",
                type: 'typescript',
                solution: `console.log("Hello TypeScript");`
            },
            {
                id: '1-1-b',
                title: 'স্ট্রিং থিওরি',
                dialogue: [
                    { speaker: 'Compiler', text: "ভেরিয়েবলের লেবেল দরকার। যদি এটি টেক্সট হয়, তবে একে 'string' বলুন।" },
                    { speaker: 'Compiler', text: "`hero` নামে একটি ভেরিয়েবল ঘোষণা করুন যার টাইপ `string`।" }
                ],
                story: "সিস্টেমের কাছে নিজের পরিচয় দিন।",
                objective: '`const hero: string = "SQL Monster";` ঘোষণা করুন এবং এটি লগ করুন।',
                hint: 'const hero: string = "SQL Monster";',
                initCode: `
// আপনার হিরোর নাম ঘোষণা করুন
`,
                expectedOutput: ["SQL Monster"],
                successMessage: "পরিচয় নিশ্চিত করা হয়েছে। আপনিই SQL Monster।",
                type: 'typescript',
                solution: `const hero: string = "SQL Monster";
console.log(hero);`
            },
            {
                id: '1-2',
                title: 'লৌহমান ভেরিয়েবল',
                dialogue: [
                    { speaker: 'Compiler', text: "পুরানো পৃথিবীতে, একটি সংখ্যা স্ট্রিং হয়ে যেতে পারত। এখানে, আমরা এই রূপান্তর নিষিদ্ধ করি।" },
                    { speaker: 'Compiler', text: "'health' নামে একটি ভেরিয়েবল ঘোষণা করুন যার টাইপ 'number' এবং মান ১০০।" }
                ],
                story: "আপনার আকার কাঁপছে। আপনার এমন একটি হেলথ বার দরকার যা টেক্সটে পরিণত হয়ে নষ্ট হবে না।",
                objective: '`health` নামের একটি ভেরিয়েবল ঘোষণা করুন যার টাইপ `number` এবং মান ১০০ দিন। তারপর এটি লগ করুন।',
                hint: 'let health: number = 100;',
                initCode: `
let health: number = 100;
// হেলথ ভেরিয়েবল লগ করুন
`,
                expectedOutput: ["100"],
                successMessage: "হেলথ বারটি দৃশ্যমান হলো। এটি শক্তিশালী। এতে 'full' অ্যাসাইন করার চেষ্টা করলে এখন ফেইল করবে। আপনি নিরাপদ।",
                type: 'typescript',
                solution: `let health: number = 100;
console.log(health);`
            },
            {
                id: '1-3',
                title: 'আইডেন্টিটি ক্রাইসিস',
                dialogue: [
                    { speaker: 'Glitch', text: "আমি স্ট্রিং হতে চাই! না, নাম্বার! না, বুলিয়ান!" },
                    { speaker: 'Compiler', text: "থামো, গ্লিচ। তুমি একটি 'string'।" },
                    { speaker: 'You', text: "আমি কি এটা বাধ্য করতে পারি?" }
                ],
                story: "গ্লিচ এলোমেলোভাবে পরিবর্তিত হচ্ছে। তার নাম একটি টাইপ করা ভেরিয়েবলে লক করুন।",
                objective: '`glitchName` কে টাইপ `string` এবং মান "Glitch" দিয়ে ঘোষণা করুন। এটি লগ করুন।',
                hint: 'const glitchName: string = "Glitch";',
                initCode: `
// const glitchName: ...
`,
                expectedOutput: ["Glitch"],
                successMessage: "গ্লিচ স্থিতিশীল হয়েছে। তাকে কিছুটা স্বস্তিদায়ক, যদিও কিছুটা আবদ্ধ দেখাচ্ছে।",
                type: 'typescript',
                solution: `const glitchName: string = "Glitch";
console.log(glitchName);`
            },
            {
                id: '1-4',
                title: 'বুলিয়ান শিল্ড',
                dialogue: [
                    { speaker: 'Compiler', text: "বিপদ আসছে। আপনার শিল্ড কি সক্রিয়? হ্যাঁ নাকি না?" },
                    { speaker: 'Compiler', text: "'maybe' নয়, '1' নয়, এমনকি টেক্সট হিসেবে 'true' ও নয়। একটি নিখুঁত বুলিয়ান মান।" }
                ],
                story: "আক্রমণ শুধুমাত্র সত্য দ্বারা প্রতিহত করা যায়।",
                objective: '`isShieldUp` কে `boolean` হিসেবে ঘোষণা করুন এবং `true` সেট করুন। এটি লগ করুন।',
                hint: 'let isShieldUp: boolean = true;',
                initCode: ``,
                expectedOutput: ["true"],
                successMessage: "একটি ঝিলমিল করা বাধা দাঁড়িয়ে গেল। সত্য এবং অবিচল।",
                type: 'typescript',
                solution: `let isShieldUp: boolean = true;
console.log(isShieldUp);`
            },
            {
                id: '1-5',
                title: 'দ্য এনি ট্র্যাপ',
                dialogue: [
                    { speaker: 'Glitch', text: "আমাকে মুক্ত হতে দাও! 'any' ব্যবহার করো! আমি যা খুশি তাই হতে পারি!" },
                    { speaker: 'Compiler', text: "সাবধান... 'any' বিশৃঙ্খলাকে ফিরিয়ে আনে। কিন্তু কখনও কখনও, এটি একটি প্রয়োজনীয় মন্দ।" },
                    { speaker: 'You', text: "আমি বিশৃঙ্খলা নিয়ন্ত্রণ করব।" }
                ],
                story: "একটি বহুরূপী হাজির হলো। আপনি এর টাইপ নির্ধারণ করতে পারছেন না। আপনাকে এটি একটি নমনীয় কন্টেইনারে বন্দী করতে হবে।",
                objective: '`chaos` কে `any` হিসেবে ঘোষণা করুন। এতে প্রথমে একটি সংখ্যা, তারপর একটি স্ট্রিং দিন। শেষের স্ট্রিংটি লগ করুন।',
                hint: 'let chaos: any = 5; chaos = "Chaos";',
                initCode: ``,
                expectedOutput: ["Chaos"],
                successMessage: "ভেরিয়েবলটি আপনার চোখের সামনে রূপ পরিবর্তন করছে, কিন্তু কন্টেইনারটি টিকে আছে। আপনার মাথাব্যথা শুরু হচ্ছে।",
                type: 'typescript',
                solution: `let chaos: any = 5;
chaos = "Chaos";
console.log(chaos);`
            }
        ]
    },
    {
        id: 'ts-chapter-2',
        title: 'অধ্যায় ২: দ্য ফাংশন ফোর্জ',
        description: 'ডেটা স্থির। লজিক গতিশীল। বিশ্বকে পরিবর্তন করতে কঠোর চুক্তিসহ ফাংশন তৈরি করুন।',
        levels: [
            {
                id: '2-1',
                title: 'কঠোর আদেশ',
                dialogue: [
                    { speaker: 'Blacksmith', text: "তলোয়ার ধার করার জন্য আমার একটি ফাংশন দরকার। এটি damage (number) নেয় এবং ৫ যোগ করে।" },
                    { speaker: 'Compiler', text: "ইনপুট টাইপ করা হতে হবে। আউটপুট টাইপ করা হতে হবে।" }
                ],
                story: "কামারশালাটি ঠান্ডা। একটি সুনির্দিষ্ট নির্দেশ দিয়ে এটি পুনরায় জ্বালান।",
                objective: 'একটি ফাংশন `sharpen` তৈরি করুন যা `damage: number` নেয় এবং `number` রিটার্ন করে (damage + 5)। `sharpen(10)` লগ করুন।',
                hint: 'function sharpen(damage: number): number { ... }',
                initCode: `
function sharpen(damage: number): number {
    // return ...
}
console.log(sharpen(10));
`,
                expectedOutput: ["15"],
                successMessage: "তলোয়ারটি আরও উজ্জ্বল হয়ে উঠল। ১৫ ড্যামেজ! গাণিতিক নির্ভুলতা।",
                type: 'typescript',
                solution: `function sharpen(damage: number): number {
    return damage + 5;
}
console.log(sharpen(10));`
            },
            {
                id: '2-1-b',
                title: 'দ্বিগুণ সমস্যা',
                dialogue: [
                    { speaker: 'Blacksmith', text: "এখন এটি দ্বিগুণ করো! আমাদের আরও শক্তি দরকার।" },
                    { speaker: 'Compiler', text: "অনুশীলনই নিখুঁত করে। আরেকটি ফাংশন লিখুন।" }
                ],
                story: "নেহাই আবার বেজে উঠল।",
                objective: '`double` নামের একটি ফাংশন তৈরি করুন যা `val: number` নেয়। এটি `val * 2` রিটার্ন করবে। `double(50)` লগ করুন।',
                hint: 'return val * 2',
                initCode: `
// function double...
`,
                expectedOutput: ["100"],
                successMessage: "শক্তি দ্বিগুণ হয়েছে! সহজ কিন্তু কার্যকরী।",
                type: 'typescript',
                solution: `function double(val: number): number {
    return val * 2;
}
console.log(double(50));`
            },
            {
                id: '2-2',
                title: 'নিরাময়কারীর স্পর্শ',
                dialogue: [
                    { speaker: 'Healer', text: "আমি নিরাময় করতে পারি... কিন্তু মাঝে মাঝে আমার কোনো লক্ষ্য থাকে না।" },
                    { speaker: 'Compiler', text: "ঐচ্ছিক প্যারামিটার। এগুলোকে '?' দিয়ে চিহ্নিত করুন।" }
                ],
                story: "নিরাময় মন্ত্রটি শূন্যে নিক্ষেপ করলে ক্র্যাশ করা উচিত নয়।",
                objective: '`heal` ফাংশন তৈরি করুন যা `target?: string` নেয়। যদি টার্গেট থাকে, তবে "Healing " + target লগ করুন। নাহলে "Healing self" লগ করুন। এটি কোনো আর্গুমেন্ট ছাড়াই কল করুন।',
                hint: 'if (target) { ... } else { ... }',
                initCode: `
function heal(target?: string): void {
    // logic here
}
heal();
`,
                expectedOutput: ["Healing self"],
                successMessage: "আপনি নিজের উপর মন্ত্রটি কাস্ট করলেন। উষ্ণতা আপনাকে ভরিয়ে দিল।",
                type: 'typescript',
                solution: `function heal(target?: string): void {
    if (target) {
        console.log("Healing " + target);
    } else {
        console.log("Healing self");
    }
}
heal();`
            },
            {
                id: '2-3',
                title: 'ভয়েড চুক্তি',
                dialogue: [
                    { speaker: 'General', text: "কিছু সৈন্য শুধু যুদ্ধের হুংকার দেয়। তারা কোনো মান তৈরি করে না।" },
                    { speaker: 'Compiler', text: "যে ফাংশন কিছু রিটার্ন করে না, তা `void` রিটার্ন করে।" }
                ],
                story: "সৈন্যদের আদেশ দিন। কোন উত্তরের আশা করবেন না।",
                objective: 'একটি ফাংশন `shout` তৈরি করুন যা "CHARGE!" লগ করে। এটি `void` রিটার্ন করা উচিত। এটি কল করুন।',
                hint: 'function shout(): void { ... }',
                initCode: ``,
                expectedOutput: ["CHARGE!"],
                successMessage: "সৈন্যরা সামনের দিকে ধেয়ে গেল! কোনো মান ফেরত আসেনি, কিন্তু প্রভাব অনুভূত হয়েছে।",
                type: 'typescript',
                solution: `function shout(): void {
    console.log("CHARGE!");
}
shout();`
            },
            {
                id: '2-4',
                title: 'ডিফল্ট অস্ত্রশস্ত্র',
                dialogue: [
                    { speaker: 'Quartermaster', text: "সব যোদ্ধা তাদের নিজস্ব তলোয়ার আনে না। তাদের একটি বিকল্প দিন।" },
                    { speaker: 'Compiler', text: "ডিফল্ট প্যারামিটার আপনাকে একটি মান ধরে নিতে দেয় যখন কোনো মান দেওয়া হয় না।" }
                ],
                story: "মিলিশিয়াদের দক্ষতার সাথে সজ্জিত করুন।",
                objective: '`equipSword` তৈরি করুন যার `damage: number = 10`। ফাংশনের ভিতরে ড্যামেজ লগ করুন। এটি আর্গুমেন্ট সহ এবং ছাড়া দুইবার কল করুন।',
                hint: 'function equipSword(damage: number = 10)',
                initCode: `
function equipSword(damage: number = 10): void {
    // log damage
}

// দুইবার কল করুন: একবার ২০ সহ, একবার ছাড়া
`,
                expectedOutput: ["20", "10"],
                successMessage: "প্রতিটি সৈন্য এখন সজ্জিত। দক্ষতা অর্জিত হয়েছে।",
                type: 'typescript',
                solution: `function equipSword(damage: number = 10): void {
    console.log(damage);
}
equipSword(20);
equipSword();`
            },
            {
                id: '2-5',
                title: 'তীর ফাংশন',
                dialogue: [
                    { speaker: 'Archer', text: "আমার শট দ্রুত এবং সংক্ষিপ্ত।" },
                    { speaker: 'Compiler', text: "অ্যারো ফাংশন 'this' সংরক্ষণ করে এবং ছোট সিনট্যাক্স প্রদান করে।" }
                ],
                story: "দ্রুত টাইপ করা তীর ছুড়ুন।",
                objective: 'একটি অ্যারো ফাংশন `quickShot` তৈরি করুন যা `target: string` নেয় এবং `string` রিটার্ন করে "Hit ${target}!"। `quickShot("dragon")` লগ করুন।',
                hint: 'const quickShot = (target: string): string => ...',
                initCode: ``,
                expectedOutput: ["Hit dragon!"],
                successMessage: "ত তীরটি লক্ষ্যে আঘাত হেনেছে। সংক্ষিপ্ত এবং মারাত্মক।",
                type: 'typescript',
                solution: `const quickShot = (target: string): string => \`Hit \${target}!\`;
console.log(quickShot("dragon"));`
            }
        ]
    },
    {
        id: 'ts-chapter-3',
        title: 'অধ্যায় ৩: সৈন্যবাহিনী এবং ইনভেন্টরি',
        description: 'একজন যোদ্ধা শক্তিশালী। অনেকে, সংগঠিত হলে, অপ্রতিরোধ্য। অ্যারে, টাপল এবং কালেকশন আয়ত্ত করুন।',
        levels: [
            {
                id: '3-1',
                title: 'সংখ্যার সেনাবাহিনী',
                dialogue: [
                    { speaker: 'General', text: "সৈন্যদের লাইনে দাঁড় করান! তারা সবাই সংখ্যা।" },
                    { speaker: 'Compiler', text: "অ্যারে একই টাইপের অনেক মান ধারণ করে।" }
                ],
                story: "ড্যামেজ মানের সারি গঠন করুন।",
                objective: '`damages: number[]` ঘোষণা করুন মান [10, 20, 30] সহ। অ্যারেটি লগ করুন।',
                hint: 'let damages: number[] = [10, 20, 30];',
                initCode: ``,
                expectedOutput: ["[10,20,30]"],
                successMessage: "সেনাবাহিনী নিখুঁতভাবে দাঁড়িয়েছে।",
                type: 'typescript',
                solution: `let damages: number[] = [10, 20, 30];
console.log(damages);`
            },
            {
                id: '3-1-b',
                title: 'রিপোর্ট ইন',
                dialogue: [
                    { speaker: 'General', text: "আমি প্রথম সৈন্যকে পরিদর্শন করতে চাই।" },
                    { speaker: 'Compiler', text: "ইনডেক্স [০] দিয়ে অ্যারের উপাদান অ্যাক্সেস করুন।" }
                ],
                story: "ভ্যানগার্ড পরীক্ষা করুন।",
                objective: '`damages` কে [10, 20, 30] হিসেবে ঘোষণা করুন। `damages[0]` লগ করুন।',
                hint: 'console.log(damages[0]);',
                initCode: `
let damages: number[] = [10, 20, 30];
// প্রথম এলিমেন্টটি লগ করুন
`,
                expectedOutput: ["10"],
                successMessage: "সৈন্য #০ ডিউটির জন্য রিপোর্ট করছে। দশ ড্যামেজ, মোতায়েনের জন্য প্রস্তুত।",
                type: 'typescript',
                solution: `let damages: number[] = [10, 20, 30];
console.log(damages[0]);`
            },
            {
                id: '3-2',
                title: 'মিশ্র ইনভেন্টরি',
                dialogue: [
                    { speaker: 'Merchant', text: "পোশন, সোনা, তলোয়ার... সব এক ব্যাগে।" },
                    { speaker: 'Compiler', text: "একাধিক সম্ভাব্য টাইপের অ্যারের জন্য ইউনিয়ন টাইপ ব্যবহার করুন।" }
                ],
                story: "আপনার লুট তালিকাভুক্ত করুন।",
                objective: '`inventory: (string | number)[]` ঘোষণা করুন মান ["sword", 5, "potion"] সহ। এটি লগ করুন।',
                hint: '(string | number)[]',
                initCode: ``,
                expectedOutput: ["[\"sword\",5,\"potion\"]"],
                successMessage: "আপনার ব্যাকপ্যাকটি সংগঠিত, তবুও নমনীয়।",
                type: 'typescript',
                solution: `let inventory: (string | number)[] = ["sword", 5, "potion"];
console.log(inventory);`
            },
            {
                id: '3-3',
                title: 'স্থির অবস্থান (টাপল)',
                dialogue: [
                    { speaker: 'Cartographer', text: "স্থানাঙ্ক হতে হবে নিখুঁত: x, তারপর y, তারপর ঐচ্ছিক z।" },
                    { speaker: 'Compiler', text: "টাপল নির্দিষ্ট অবস্থানে দৈর্ঘ্য এবং টাইপ নিশ্চিত করে।" }
                ],
                story: "একটি সঠিক অবস্থান চিহ্নিত করুন।",
                objective: '`position: [number, number]` ঘোষণা করুন মান [100, 200] সহ। এটি লগ করুন।',
                hint: 'let position: [number, number] = [100, 200];',
                initCode: ``,
                expectedOutput: ["[100,200]"],
                successMessage: "ম্যাপ পিনটি ঠিক যেখানে দরকার সেখানেই পড়েছে।",
                type: 'typescript',
                solution: `let position: [number, number] = [100, 200];
console.log(position);`
            },
            {
                id: '3-4',
                title: 'রিড-অনলি ফরমেশন',
                dialogue: [
                    { speaker: 'Strategist', text: "যুদ্ধের পরিকল্পনা একবার ঠিক হলে, আর কোনো পরিবর্তন নয়!" },
                    { speaker: 'Compiler', text: "রিড-অনলি অ্যারে পরিবর্তন প্রতিরোধ করে।" }
                ],
                story: "যুদ্ধের পরিকল্পনা লক করুন।",
                objective: '`readonlyPlan: readonly string[]` ঘোষণা করুন মান ["flank", "charge"] সহ। এতে পুশ করার চেষ্টা করুন (এটি ইরর দেবে)। এটি লগ করুন।',
                hint: 'const readonlyPlan: readonly string[] = ...',
                initCode: `
const readonlyPlan: readonly string[] = ["flank", "charge"];
// readonlyPlan.push("retreat"); // This would error
console.log(readonlyPlan);
`,
                expectedOutput: ["[\"flank\",\"charge\"]"],
                successMessage: "পরিকল্পনাটি অপরিবর্তনীয়। বিজয় নিশ্চিত।",
                type: 'typescript',
                solution: `const readonlyPlan: readonly string[] = ["flank", "charge"];
console.log(readonlyPlan);`
            }
        ]
    },
    {
        id: 'ts-chapter-4',
        title: 'অধ্যায় ৪: বাস্তবতার নকশা',
        description: 'ইন্টারফেস এবং টাইপ এলিয়াস দিয়ে জটিল অবজেক্ট তৈরি করুন। হিরো, মনস্টার এবং আইটেমের কাঠামো নির্ধারণ করুন।',
        levels: [
            {
                id: '4-1',
                title: 'হিরো ইন্টারফেস',
                dialogue: [
                    { speaker: 'Sage', text: "প্রতিটি হিরোর একটি নাম, স্বাস্থ্য এবং শক্তি প্রয়োজন।" },
                    { speaker: 'Compiler', text: "ইন্টারফেস অবজেক্টের আকার নির্ধারণ করে।" }
                ],
                story: "আপনার ক্যারেক্টার শিট তৈরি করুন।",
                objective: '`Hero` ইন্টারফেস ডিফাইন করুন যার `name: string`, `health: number`, `strength: number` আছে। একটি হিরো তৈরি করুন এবং লগ করুন।',
                hint: 'interface Hero { ... }',
                initCode: `
interface Hero {
    name: string;
    health: number;
    strength: number;
}

const myHero: Hero = { name: "You", health: 100, strength: 20 };
console.log(myHero);
`,
                expectedOutput: ["{ name: 'You', health: 100, strength: 20 }"],
                successMessage: "আপনার এখন আকার এবং উদ্দেশ্য আছে।",
                type: 'typescript',
                solution: `interface Hero {
    name: string;
    health: number;
    strength: number;
}
const myHero: Hero = { name: "You", health: 100, strength: 20 };
console.log(myHero);`
            },
            {
                id: '4-1-b',
                title: 'ছদ্মবেশী',
                dialogue: [
                    { speaker: 'Sage', text: "শক্তিহীন হিরো কোনো হিরোই নয়।" },
                    { speaker: 'Compiler', text: "টাইপস্ক্রিপ্ট চিৎকার করবে যদি আপনি একটি প্রয়োজনীয় প্রপার্টি মিস করেন।" }
                ],
                story: "একটি নকল হিরো তৈরি করার চেষ্টা করুন। সিস্টেম এটি প্রত্যাখ্যান করবে।",
                objective: '`Hero` ইন্টারফেস ডিফাইন করুন (name, health, strength)। `fake: Hero = { name: "Fake", health: 100 }` তৈরি করার চেষ্টা করুন। ইরর দেখছেন? এখন strength: 0 যোগ করে এটি ঠিক করুন। লগ করুন।',
                hint: 'অবজেক্ট লিটারেলে strength: 0 যোগ করুন।',
                initCode: `
interface Hero {
    name: string;
    health: number;
    strength: number;
}

// const fake: Hero = { name: "Fake", health: 100 }; // Error!
// নিচে ঠিক করুন:
`,
                expectedOutput: ["{ name: 'Fake', health: 100, strength: 0 }"],
                successMessage: "ইরর চলে গেছে। চুক্তি পূরণ হয়েছে।",
                type: 'typescript',
                solution: `interface Hero {
    name: string;
    health: number;
    strength: number;
}
const fake: Hero = { name: "Fake", health: 100, strength: 0 };
console.log(fake);`
            },
            {
                id: '4-2',
                title: 'ঐচ্ছিক সরঞ্জাম',
                dialogue: [
                    { speaker: 'Armorer', text: "কিছু হিরো ঢাল বহন করে। সবাই নয়।" },
                    { speaker: 'Compiler', text: "'?' দিয়ে ঐচ্ছিক প্রপার্টি।" }
                ],
                story: "সব হিরোর সব আইটেম দরকার নেই।",
                objective: '`Hero` কে ঐচ্ছিক `shield?: boolean` দিয়ে প্রসারিত করুন। দুটি হিরো তৈরি করুন, একটির ঢাল থাকবে।',
                hint: 'shield?: boolean',
                initCode: `
interface Hero {
    name: string;
    health: number;
    shield?: boolean;
}

// দুটি হিরো তৈরি এবং লগ করুন
`,
                expectedOutput: ["{ name: 'Warrior', health: 120 }", "{ name: 'Guardian', health: 100, shield: true }"],
                successMessage: "বিশৃঙ্খলা ছাড়াই নমনীয়তা।",
                type: 'typescript',
                solution: `interface Hero {
    name: string;
    health: number;
    shield?: boolean;
}
const warrior: Hero = { name: "Warrior", health: 120 };
const guardian: Hero = { name: "Guardian", health: 100, shield: true };
console.log(warrior);
console.log(guardian);`
            },
            {
                id: '4-3',
                title: 'টাইপ এলিয়াস',
                dialogue: [
                    { speaker: 'Scholar', text: "মাঝে মাঝে একটি আকার একবারই ব্যবহৃত হয়। 'type' দিয়ে এর নাম দিন।" },
                    { speaker: 'Compiler', text: "'type' এলিয়াস ইউনিয়নের জন্যও নমনীয়।" }
                ],
                story: "একটি জটিল আইটেম টাইপের নাম দিন।",
                objective: '`Weapon` টাইপ তৈরি করুন `{ damage: number; name: string }` হিসেবে। এটি ব্যবহার করুন।',
                hint: 'type Weapon = { ... }',
                initCode: ``,
                expectedOutput: ["{ damage: 30, name: 'Excalibur' }"],
                successMessage: "অস্ত্রটি নিখুঁত নির্দেশের সাথে তৈরি হয়েছে।",
                type: 'typescript',
                solution: `type Weapon = {
    damage: number;
    name: string;
};
const sword: Weapon = { damage: 30, name: "Excalibur" };
console.log(sword);`
            },
            {
                id: '4-4',
                title: 'ইনডেক্স সিগনেচার',
                dialogue: [
                    { speaker: 'Librarian', text: "একটি জাদুর বই যার মন্ত্রের নাম অজানা, কিন্তু শক্তির মাত্রা জানা।" },
                    { speaker: 'Compiler', text: "ডায়নামিক কী-এর জন্য ইনডেক্স সিগনেচার।" }
                ],
                story: "একটি অসীম জাদুর বই তালিকাভুক্ত করুন।",
                objective: '`Spellbook` টাইপ তৈরি করুন `[spellName: string]: number` দিয়ে। কিছু মন্ত্র নির্ধারণ করুন এবং একটি লগ করুন।',
                hint: '[spellName: string]: number',
                initCode: `
type Spellbook = {
    [spellName: string]: number;
};

const book: Spellbook = { fire: 50, ice: 40 };
console.log(book.fire);
`,
                expectedOutput: ["50"],
                successMessage: "বইটি যেকোনো মন্ত্রের নাম গ্রহণ করে, কিন্তু সংখ্যার শক্তি নিশ্চিত করে।",
                type: 'typescript',
                solution: `type Spellbook = {
    [spellName: string]: number;
};
const book: Spellbook = { fire: 50, ice: 40 };
console.log(book.fire);`
            }
        ]
    },
    {
        id: 'ts-chapter-5',
        title: 'অধ্যায় ৫: মৈত্রী এবং পছন্দ',
        description: 'পৃথিবী সাদা-কালো নয়। ইউনিয়ন, ইন্টারসেকশন, লিটারেল এবং ন্যারোয়িং আয়ত্ত করুন।',
        levels: [
            {
                id: '5-1',
                title: 'ইউনিয়ন অস্ত্র',
                dialogue: [
                    { speaker: 'Smith', text: "একটি অস্ত্র তলোয়ার অথবা তীর হতে পারে।" },
                    { speaker: 'Compiler', text: "'|' দিয়ে ইউনিয়ন টাইপ।" }
                ],
                story: "আপনার অস্ত্র নমনীয়ভাবে বেছে নিন।",
                objective: '`Weapon = string | number` টাইপ তৈরি করুন। দাঁড়ান—না, আরও ভালো: `Weapon = "sword" | "bow" | "staff"`। একটি অস্ত্র লগ করুন।',
                hint: 'type Weapon = "sword" | "bow" | "staff";',
                initCode: ``,
                expectedOutput: ["sword"],
                successMessage: "সীমিত পছন্দ অবৈধ অস্ত্র প্রতিরোধ করে।",
                type: 'typescript',
                solution: `type Weapon = "sword" | "bow" | "staff";
const chosen: Weapon = "sword";
console.log(chosen);`
            },
            {
                id: '5-2',
                title: 'টাইপ ন্যারোয়িং',
                dialogue: [
                    { speaker: 'Guard', text: "কে আসছে? স্ট্রিং নাম নাকি নাম্বার আইডি?" },
                    { speaker: 'Compiler', text: "ইউনিয়ন ন্যারো করতে typeof ব্যবহার করুন।" }
                ],
                story: "দর্শনার্থীকে শনাক্ত করুন।",
                objective: 'ফাংশন `identify(id: string | number)`: যদি স্ট্রিং হয় তবে "Name: " + id, নাহলে "ID: " + id লগ করুন। দুটি দিয়েই কল করুন।',
                hint: 'if (typeof id === "string")',
                initCode: `
function identify(id: string | number): void {
    // ন্যারোয়িং লজিক
}
identify("Arthur");
identify(42);
`,
                expectedOutput: ["Name: Arthur", "ID: 42"],
                successMessage: "কোনো ছদ্মবেশী গেট পার হতে পারেনি।",
                type: 'typescript',
                solution: `function identify(id: string | number): void {
    if (typeof id === "string") {
        console.log("Name: " + id);
    } else {
        console.log("ID: " + id);
    }
}
identify("Arthur");
identify(42);`
            },
            {
                id: '5-3',
                title: 'ইন্টারসেকশন মিত্র',
                dialogue: [
                    { speaker: 'Diplomat', text: "একজন প্যালাডিন যোদ্ধা এবং জাদুকর উভয়ই।" },
                    { speaker: 'Compiler', text: "'&' দিয়ে ইন্টারসেকশন।" }
                ],
                story: "শক্তি একত্রিত করুন।",
                objective: 'type Warrior = { strength: number }; type Mage = { mana: number }; type Paladin = Warrior & Mage;',
                hint: 'type Paladin = Warrior & Mage;',
                initCode: `
type Warrior = { strength: number };
type Mage = { mana: number };
type Paladin = Warrior & Mage;

const hero: Paladin = { strength: 20, mana: 50 };
console.log(hero);
`,
                expectedOutput: ["{ strength: 20, mana: 50 }"],
                successMessage: "চূড়ান্ত হাইব্রিড ক্লাসের জন্ম হলো।",
                type: 'typescript',
                solution: `type Warrior = { strength: number };
type Mage = { mana: number };
type Paladin = Warrior & Mage;
const hero: Paladin = { strength: 20, mana: 50 };
console.log(hero);`
            }
        ]
    },
    {
        id: 'ts-chapter-6',
        title: 'অধ্যায় ৬: এনাম এবং ধ্রুবক',
        description: 'কিছু মান পবিত্র এবং সসীম। এনাম দিকনির্দেশ, উপাদান এবং স্ট্যাটাস রক্ষা করে।',
        levels: [
            {
                id: '6-1',
                title: 'কার্ডিনাল দিকনির্দেশ',
                dialogue: [
                    { speaker: 'Explorer', text: "উত্তর, দক্ষিণ, পূর্ব, পশ্চিম—কখনও ভুল করবেন না।" },
                    { speaker: 'Compiler', text: "ডিফল্টভাবে নিউমেরিক এনাম।" }
                ],
                story: "পৃথিবী ভ্রমণ করুন।",
                objective: '`enum Direction { North, South, East, West }`। `Direction.North` লগ করুন (উচিত ০)।',
                hint: 'enum Direction { North, South, East, West }',
                initCode: `
enum Direction {
    North,
    South,
    East,
    West
}
console.log(Direction.North);
`,
                expectedOutput: ["0"],
                successMessage: "কম্পাসটি সত্য।",
                type: 'typescript',
                solution: `enum Direction {
    North,
    South,
    East,
    West
}
console.log(Direction.North);`
            },
            {
                id: '6-2',
                title: 'স্ট্রিং এনাম',
                dialogue: [
                    { speaker: 'Bard', text: "আগুন, জল, পৃথিবী, বাতাসের গান গাও।" },
                    { speaker: 'Compiler', text: "পাঠযোগ্য মানের জন্য স্ট্রিং এনাম।" }
                ],
                story: "উপাদানগুলোর আসল নাম দিন।",
                objective: '`enum Element { Fire = "FIRE", Water = "WATER" }`। `Element.Fire` লগ করুন।',
                hint: 'Fire = "FIRE"',
                initCode: ``,
                expectedOutput: ["FIRE"],
                successMessage: "উপাদানগুলো তাদের আসল নামে কথা বলছে।",
                type: 'typescript',
                solution: `enum Element {
    Fire = "FIRE",
    Water = "WATER"
}
console.log(Element.Fire);`
            }
        ]
    },
    {
        id: 'ts-chapter-7',
        title: 'অধ্যায় ৭: জেনেরিক ম্যাজিক',
        description: 'এক মন্ত্রে অনেক টাইপ শাসন। জেনেরিক আপনাকে পুনঃব্যবহারযোগ্য, টাইপ-সেফ কম্পোনেন্ট তৈরি করতে দেয়।',
        levels: [
            {
                id: '7-1',
                title: 'আইডেন্টিটি মন্ত্র',
                dialogue: [
                    { speaker: 'Wizard', text: "যা দেওয়া হবে, তাই ফেরত দাও, অপরিবর্তিত কিন্তু টাইপ করা।" },
                    { speaker: 'Compiler', text: "<T> সহ জেনেরিক ফাংশন।" }
                ],
                story: "যেকোনো মান নিখুঁতভাবে প্রতিফলন করুন।",
                objective: '`function identity<T>(arg: T): T { return arg; }`। `identity<string>("hello")` এবং `identity(42)` লগ করুন।',
                hint: 'function identity<T>(arg: T): T',
                initCode: `
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("hello"));
console.log(identity(42));
`,
                expectedOutput: ["hello", "42"],
                successMessage: "মন্ত্রটি নিখুঁতভাবে প্রতিফলিত হয়েছে, টাইপ সংরক্ষণ করে।",
                type: 'typescript',
                solution: `function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("hello"));
console.log(identity(42));`
            },
            {
                id: '7-2',
                title: 'জেনেরিক কন্টেইনার',
                dialogue: [
                    { speaker: 'Alchemist', text: "একটি বক্স যা যেকোনো পোশন ধারণ করে, কিন্তু একবারে এক ধরনের।" },
                    { speaker: 'Compiler', text: "জেনেরিক ইন্টারফেস।" }
                ],
                story: "ধনভাণ্ডার নিরাপদে সংরক্ষণ করুন।",
                objective: '`interface Box<T> { value: T }`। `Box<number>` এবং `Box<string>` তৈরি করুন।',
                hint: 'interface Box<T> { value: T }',
                initCode: `
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 100 };
const stringBox: Box<string> = { value: "gold" };
console.log(numberBox.value);
console.log(stringBox.value);
`,
                expectedOutput: ["100", "gold"],
                successMessage: "টাইপ সেফটি না হারিয়ে পুনঃব্যবহারযোগ্য কন্টেইনার।",
                type: 'typescript',
                solution: `interface Box<T> {
    value: T;
}
const numberBox: Box<number> = { value: 100 };
const stringBox: Box<string> = { value: "gold" };
console.log(numberBox.value);
console.log(stringBox.value);`
            },
            {
                id: '7-3',
                title: 'সীমাবদ্ধ জেনেরিক',
                dialogue: [
                    { speaker: 'Enchanter', text: "শুধুমাত্র 'name' থাকা আইটেমগুলো এনচ্যান্ট করা যাবে।" },
                    { speaker: 'Compiler', text: "সীমাবদ্ধতার জন্য extends।" }
                ],
                story: "মন্ত্রের লক্ষ্য সীমিত করুন।",
                objective: '`function enchant<T extends { name: string }>(item: T): void { log "Enchanting " + item.name }`',
                hint: 'T extends { name: string }',
                initCode: `
function enchant<T extends { name: string }>(item: T): void {
    console.log("Enchanting " + item.name);
}
enchant({ name: "Staff of Power" });
`,
                expectedOutput: ["Enchanting Staff of Power"],
                successMessage: "শুধুমাত্র নামযুক্ত আইটেমগুলো এনচ্যান্টমেন্ট গ্রহণ করে।",
                type: 'typescript',
                solution: `function enchant<T extends { name: string }>(item: T): void {
    console.log("Enchanting " + item.name);
}
enchant({ name: "Staff of Power" });`
            }
        ]
    },
    {
        id: 'ts-chapter-8',
        title: 'অধ্যায় ৮: ক্লাস এবং ইনহেরিটেন্স',
        description: 'ক্লাস দিয়ে যোদ্ধা, জাদুকর এবং ড্রাগন তৈরি করুন। ইনহেরিটেন্স এবং অ্যাক্সেস মডিফায়ার ব্যবহার করুন।',
        levels: [
            {
                id: '8-1',
                title: 'বেসিক ক্লাস',
                dialogue: [
                    { speaker: 'Master', text: "একজন যোদ্ধার স্বাস্থ্য আছে এবং সে আক্রমণ করতে পারে।" },
                    { speaker: 'Compiler', text: "ক্লাস স্টেট এবং আচরণ একত্রিত করে।" }
                ],
                story: "আপনার প্রথম ক্লাস তৈরি করুন।",
                objective: '`class Warrior { health = 100; attack() { console.log("Slash!") } }`। ইনস্ট্যানশিয়েট করুন এবং attack কল করুন।',
                hint: 'class Warrior { ... }',
                initCode: `
class Warrior {
    health = 100;
    attack() {
        console.log("Slash!");
    }
}
const w = new Warrior();
w.attack();
`,
                expectedOutput: ["Slash!"],
                successMessage: "যোদ্ধাটি সঠিকভাবে আঘাত করেছে।",
                type: 'typescript',
                solution: `class Warrior {
    health = 100;
    attack() {
        console.log("Slash!");
    }
}
const w = new Warrior();
w.attack();`
            },
            {
                id: '8-2',
                title: 'কনস্ট্রাক্টর এবং প্রপার্টি',
                dialogue: [
                    { speaker: 'Trainer', text: "জন্মের সময় প্রতিটি যোদ্ধাকে একটি নাম দিন।" },
                    { speaker: 'Compiler', text: "কনস্ট্রাক্টর এবং পাবলিক/প্রাইভেট" }
                ],
                story: "আপনার যোদ্ধাদের ব্যক্তিগতকৃত করুন।",
                objective: '`class Warrior { constructor(public name: string, private health: number) {} getHealth() { return this.health; } }`',
                hint: 'constructor(public name: string)',
                initCode: `
class Warrior {
    constructor(public name: string, private health: number = 100) {}
    getHealth() {
        console.log(this.health);
    }
}
const w = new Warrior("Conan");
w.getHealth();
`,
                expectedOutput: ["100"],
                successMessage: "গোপন স্বাস্থ্য সুরক্ষিত।",
                type: 'typescript',
                solution: `class Warrior {
    constructor(public name: string, private health: number = 100) {}
    getHealth() {
        console.log(this.health);
    }
}
const w = new Warrior("Conan");
w.getHealth();`
            },
            {
                id: '8-3',
                title: 'ইনহেরিটেন্স',
                dialogue: [
                    { speaker: 'Legend', text: "একজন প্যালাডিন হলো পবিত্র জাদুর অধিকারী একজন যোদ্ধা।" },
                    { speaker: 'Compiler', text: "extends এবং super" }
                ],
                story: "আপনার ক্লাস বিবর্তিত করুন।",
                objective: '`class Paladin extends Warrior { holyStrike() { console.log("Holy damage!") } }`',
                hint: 'class Paladin extends Warrior',
                initCode: `
class Warrior {
    attack() { console.log("Slash!"); }
}
class Paladin extends Warrior {
    holyStrike() {
        console.log("Holy damage!");
    }
}
const p = new Paladin();
p.attack();
p.holyStrike();
`,
                expectedOutput: ["Slash!", "Holy damage!"],
                successMessage: "রক্তধারা আরও শক্তিশালী হয়েছে।",
                type: 'typescript',
                solution: `class Warrior {
    attack() { console.log("Slash!"); }
}
class Paladin extends Warrior {
    holyStrike() {
        console.log("Holy damage!");
    }
}
const p = new Paladin();
p.attack();
p.holyStrike();`
            }
        ]
    },
    {
        id: 'ts-chapter-9',
        title: 'অধ্যায় ৯: ইউটিলিটি টাইপ এবং অ্যাডভান্সড প্যাটার্ন',
        description: 'টাইপস্ক্রিপ্টের বিল্ট-ইন মন্ত্র আয়ত্ত করুন। ইউটিলিটি টাইপ এবং কন্ডিশনাল লজিক দিয়ে টাইপ রূপান্তর করুন।',
        levels: [
            {
                id: '9-1',
                title: 'আংশিক সরঞ্জাম',
                dialogue: [
                    { speaker: 'Outfitter', text: "শুধুমাত্র কিছু স্ট্যাট আপডেট করুন।" },
                    { speaker: 'Compiler', text: "`Partial<T>` সব প্রপার্টি ঐচ্ছিক করে।" }
                ],
                story: "আপনার হিরোকে প্যাচ করুন।",
                objective: '`type Hero = { name: string; health: number; mana?: number }; function updateHero(hero: Hero, updates: Partial<Hero>)`',
                hint: 'Partial<Hero>',
                initCode: `
type Hero = { name: string; health: number; mana?: number };
function updateHero(hero: Hero, updates: Partial<Hero>): Hero {
    return { ...hero, ...updates };
}
const h = { name: "Link", health: 100 };
const updated = updateHero(h, { health: 150 });
console.log(updated.health);
`,
                expectedOutput: ["150"],
                successMessage: "হিরো নিরাপদে আপগ্রেড হয়েছে।",
                type: 'typescript',
                solution: `type Hero = { name: string; health: number; mana?: number };
function updateHero(hero: Hero, updates: Partial<Hero>): Hero {
    return { ...hero, ...updates };
}
const h = { name: "Link", health: 100 };
const updated = updateHero(h, { health: 150 });
console.log(updated.health);`
            },
            {
                id: '9-2',
                title: 'প্রয়োজনীয় এবং বাছাই',
                dialogue: [
                    { speaker: 'Inspector', text: "সবকিছু উপস্থিত থাকতে হবে। অথবা আমার যা দরকার শুধু তা বেছে নিন।" },
                    { speaker: 'Compiler', text: "`Required<T>` এবং `Pick<T, K>`" }
                ],
                story: "সীমাবদ্ধতা কঠোর করুন।",
                objective: '`type Hero = { name?: string; health?: number }; type StrictHero = Required<Hero>;`',
                hint: 'Required<Hero>',
                initCode: ``,
                expectedOutput: [],
                successMessage: "চুক্তি কঠোর করা হয়েছে।",
                type: 'typescript',
                solution: `type Hero = { name?: string; health?: number };
type StrictHero = Required<Hero>;`
            }
        ]
    }
];
