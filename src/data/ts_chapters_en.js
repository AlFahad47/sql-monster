export const tsChaptersEn = [
    {
        id: 'ts-chapter-1',
        title: 'Chapter I: The Type Awakens',
        description: 'In a world of loose variables and runtime errors, you discover the power of static typing. Learn the basics of TypeScript to bring order to chaos.',
        levels: [
            {
                id: '1-1',
                title: 'Hello Type World',
                dialogue: [
                    { speaker: 'Narrator', text: "The JavaScript chaos swirls around you. Variables changing types at random... chaos." },
                    { speaker: 'Compiler', text: "Greetings, User. I am the Compiler. I bring order." },
                    { speaker: 'You', text: "Order? I just want my code to work." },
                    { speaker: 'Compiler', text: "Then speak clearly. Declare your intent. Start with a simple greeting." }
                ],
                story: "The void of `undefined` threatens to consume you. You must anchor yourself with a string.",
                objective: 'Log "Hello TypeScript" to the console.',
                hint: 'Use console.log("Your Message")',
                initCode: `
// Write your first TypeScript line
`,
                expectedOutput: ["Hello TypeScript"],
                successMessage: "The text solidifies in the void. It is immutable. It is known.",
                type: 'typescript',
                solution: `console.log("Hello TypeScript");`
            },
            {
                id: '1-2',
                title: 'The Iron Variable',
                dialogue: [
                    { speaker: 'Compiler', text: "In the old world, a number could become a string. Here, we forbid such mutation." },
                    { speaker: 'Compiler', text: "Declare a variable 'health' with type 'number' and give it value 100." }
                ],
                story: "Your form flickers. You need a health bar that cannot be corrupted into text.",
                objective: 'Declare a variable `health` of type `number` and assign it 100. Then log it.',
                hint: 'let health: number = 100;',
                initCode: `
let health: number = 100;
// Log the health variable
`,
                expectedOutput: ["100"],
                successMessage: "The health bar appears. It is robust. Trying to assign 'full' to it would now fail. You are safe.",
                type: 'typescript',
                solution: `let health: number = 100;
console.log(health);`
            },
            {
                id: '1-3',
                title: 'Identity Crisis',
                dialogue: [
                    { speaker: 'Glitch', text: "I want to be a string! No, a number! No, a boolean!" },
                    { speaker: 'Compiler', text: "Silence, Glitch. You are a 'string'." },
                    { speaker: 'You', text: "I can enforce that?" }
                ],
                story: "Glitch is shifting wildly. Lock his name into a typed variable.",
                objective: 'Declare `glitchName` as type `string` with value "Glitch". Log it.',
                hint: 'const glitchName: string = "Glitch";',
                initCode: `
// const glitchName: ...
`,
                expectedOutput: ["Glitch"],
                successMessage: "Glitch stabilizes. He looks relieved, if slightly constrained.",
                type: 'typescript',
                solution: `const glitchName: string = "Glitch";
console.log(glitchName);`
            },
            {
                id: '1-4',
                title: 'The Boolean Shield',
                dialogue: [
                    { speaker: 'Compiler', text: "Danger approaches. Is your shield active? Yes or No?" },
                    { speaker: 'Compiler', text: "Not 'maybe', not '1', not 'true' as a string. A strictly boolean value." }
                ],
                story: "Attacks can only be blocked by truth.",
                objective: 'Declare `isShieldUp` as `boolean` set to `true`. Log it.',
                hint: 'let isShieldUp: boolean = true;',
                initCode: ``,
                expectedOutput: ["true"],
                successMessage: "A shimmering barrier erects itself. True and unyielding.",
                type: 'typescript',
                solution: `let isShieldUp: boolean = true;
console.log(isShieldUp);`
            },
            {
                id: '1-5',
                title: 'The Any Trap',
                dialogue: [
                    { speaker: 'Glitch', text: "Let me be free! Use 'any'! I can be anything!" },
                    { speaker: 'Compiler', text: "Careful... 'any' allows chaos to return. But sometimes, it is a necessary evil." },
                    { speaker: 'You', text: "I'll control the chaos." }
                ],
                story: "A shapeshifter appears. You cannot pin its type. You must contain it in a flexible container.",
                objective: 'Declare `chaos` as `any`. Assign it a number, then a string. Log the final string.',
                hint: 'let chaos: any = 5; chaos = "Chaos";',
                initCode: ``,
                expectedOutput: ["Chaos"],
                successMessage: "The variable shifts form before your eyes, but the container holds. You feel a headache coming on.",
                type: 'typescript',
                solution: `let chaos: any = 5;
chaos = "Chaos";
console.log(chaos);`
            }
        ]
    },
    {
        id: 'ts-chapter-2',
        title: 'Chapter II: The Function Forge',
        description: 'Data is static. Logic is dynamic. Forge functions with strict contracts to manipulate the world.',
        levels: [
            {
                id: '2-1',
                title: 'Strict Orders',
                dialogue: [
                    { speaker: 'Blacksmith', text: "I need a function to sharpen swords. It takes damage (number) and adds 5." },
                    { speaker: 'Compiler', text: "Inputs must be typed. Outputs must be typed." }
                ],
                story: "The forge is cold. Reignite it with a precise instruction.",
                objective: 'Create a function `sharpen` that takes `damage: number` and returns `number`. Return `damage + 5`. Log the result of `sharpen(10)`.',
                hint: 'function sharpen(damage: number): number { ... }',
                initCode: `
function sharpen(damage: number): number {
    // return ...
}
console.log(sharpen(10));
`,
                expectedOutput: ["15"],
                successMessage: "The sword glows hotter. 15 damage! Mathematical precision.",
                type: 'typescript',
                solution: `function sharpen(damage: number): number {
    return damage + 5;
}
console.log(sharpen(10));`
            },
            {
                id: '2-2',
                title: 'The Healer\'s Touch',
                dialogue: [
                    { speaker: 'Healer', text: "I can heal... but sometimes I have no target." },
                    { speaker: 'Compiler', text: "Optional parameters. Mark them with '?'." }
                ],
                story: "The healing spell shouldn't crash if cast on nothing.",
                objective: 'Create function `heal` taking `target?: string`. If target exists, log "Healing " + target. Else log "Healing self". Call it without arguments.',
                hint: 'if (target) { ... } else { ... }',
                initCode: `
function heal(target?: string): void {
    // logic here
}
heal();
`,
                expectedOutput: ["Healing self"],
                successMessage: "You cast the spell on yourself. Warmth fills you.",
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
                title: 'Void Contracts',
                dialogue: [
                    { speaker: 'General', text: "Some soldiers just shout battle cries. They produce no value." },
                    { speaker: 'Compiler', text: "A function that returns nothing returns `void`." }
                ],
                story: "Command the troops. Expect no reply.",
                objective: 'Create a function `shout` that logs "CHARGE!". It should return `void`. Call it.',
                hint: 'function shout(): void { ... }',
                initCode: ``,
                expectedOutput: ["CHARGE!"],
                successMessage: "The troops surge forward! No value was returned, but the effect was felt.",
                type: 'typescript',
                solution: `function shout(): void {
    console.log("CHARGE!");
}
shout();`
            },
            {
                id: '2-4',
                title: 'Default Armaments',
                dialogue: [
                    { speaker: 'Quartermaster', text: "Not every warrior brings their own sword. Give them a fallback." },
                    { speaker: 'Compiler', text: "Default parameters let you assume a value when none is provided." }
                ],
                story: "Equip the militia efficiently.",
                objective: 'Create `equipSword` with `damage: number = 10`. Log the damage inside the function. Call it with and without argument.',
                hint: 'function equipSword(damage: number = 10)',
                initCode: `
function equipSword(damage: number = 10): void {
    // log damage
}

// Call twice: once with 20, once without
`,
                expectedOutput: ["20", "10"],
                successMessage: "Every soldier is now armed. Efficiency achieved.",
                type: 'typescript',
                solution: `function equipSword(damage: number = 10): void {
    console.log(damage);
}
equipSword(20);
equipSword();`
            },
            {
                id: '2-5',
                title: 'Arrow Functions',
                dialogue: [
                    { speaker: 'Archer', text: "My shots are quick and concise." },
                    { speaker: 'Compiler', text: "Arrow functions preserve 'this' and offer shorter syntax." }
                ],
                story: "Fire rapid typed arrows.",
                objective: 'Create an arrow function `quickShot` that takes `target: string` and returns `string` "Hit ${target}!" Log `quickShot("dragon")`.',
                hint: 'const quickShot = (target: string): string => ...',
                initCode: ``,
                expectedOutput: ["Hit dragon!"],
                successMessage: "The arrow flies true. Concise and deadly.",
                type: 'typescript',
                solution: `const quickShot = (target: string): string => \`Hit \${target}!\`;
console.log(quickShot("dragon"));`
            }
        ]
    },
    {
        id: 'ts-chapter-3',
        title: 'Chapter III: Armies and Inventories',
        description: 'One warrior is strong. Many warriors, organized, are unstoppable. Master arrays, tuples, and collections.',
        levels: [
            {
                id: '3-1',
                title: 'Army of Numbers',
                dialogue: [
                    { speaker: 'General', text: "Line up the troops! All of them numbers." },
                    { speaker: 'Compiler', text: "Arrays hold many values of the same type." }
                ],
                story: "Form ranks of damage values.",
                objective: 'Declare `damages: number[]` with [10, 20, 30]. Log the array.',
                hint: 'let damages: number[] = [10, 20, 30];',
                initCode: ``,
                expectedOutput: ["[10,20,30]"], // Note: console.log(array) outputs with commas, no spaces by default in Node
                successMessage: "The army stands in perfect formation.",
                type: 'typescript',
                solution: `let damages: number[] = [10, 20, 30];
console.log(damages);`
            },
            {
                id: '3-2',
                title: 'Mixed Inventory',
                dialogue: [
                    { speaker: 'Merchant', text: "Potions, gold, swords... all in one bag." },
                    { speaker: 'Compiler', text: "Use union types for arrays with multiple possible types." }
                ],
                story: "Catalog your loot.",
                objective: 'Declare `inventory: (string | number)[]` with ["sword", 5, "potion"]. Log it.',
                hint: '(string | number)[]',
                initCode: ``,
                expectedOutput: ["[\"sword\",5,\"potion\"]"],
                successMessage: "Your backpack is organized, yet flexible.",
                type: 'typescript',
                solution: `let inventory: (string | number)[] = ["sword", 5, "potion"];
console.log(inventory);`
            },
            {
                id: '3-3',
                title: 'Fixed Positions (Tuples)',
                dialogue: [
                    { speaker: 'Cartographer', text: "Coordinates must be exact: x, then y, then optional z." },
                    { speaker: 'Compiler', text: "Tuples enforce length and types at specific positions." }
                ],
                story: "Mark a precise location.",
                objective: 'Declare `position: [number, number]` with [100, 200]. Log it.',
                hint: 'let position: [number, number] = [100, 200];',
                initCode: ``,
                expectedOutput: ["[100,200]"],
                successMessage: "The map pin drops exactly where intended.",
                type: 'typescript',
                solution: `let position: [number, number] = [100, 200];
console.log(position);`
            },
            {
                id: '3-4',
                title: 'Read-only Formations',
                dialogue: [
                    { speaker: 'Strategist', text: "Once the battle plan is set, no changes!" },
                    { speaker: 'Compiler', text: "Readonly arrays prevent mutation." }
                ],
                story: "Lock the battle plan.",
                objective: 'Declare `readonlyPlan: readonly string[]` with ["flank", "charge"]. Try to push (it should error). Log it.',
                hint: 'const readonlyPlan: readonly string[] = ...',
                initCode: `
const readonlyPlan: readonly string[] = ["flank", "charge"];
// readonlyPlan.push("retreat"); // This would error
console.log(readonlyPlan);
`,
                expectedOutput: ["[\"flank\",\"charge\"]"],
                successMessage: "The plan is immutable. Victory assured.",
                type: 'typescript',
                solution: `const readonlyPlan: readonly string[] = ["flank", "charge"];
console.log(readonlyPlan);`
            }
        ]
    },
    {
        id: 'ts-chapter-4',
        title: 'Chapter IV: Blueprints of Reality',
        description: 'Shape complex objects with interfaces and type aliases. Define the structure of heroes, monsters, and items.',
        levels: [
            {
                id: '4-1',
                title: 'Hero Interface',
                dialogue: [
                    { speaker: 'Sage', text: "Every hero needs a name, health, and strength." },
                    { speaker: 'Compiler', text: "Interfaces define object shapes." }
                ],
                story: "Create your character sheet.",
                objective: 'Define interface `Hero` with `name: string`, `health: number`, `strength: number`. Create a hero and log it.',
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
                successMessage: "You now have form and purpose.",
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
                id: '4-2',
                title: 'Optional Equipment',
                dialogue: [
                    { speaker: 'Armorer', text: "Some heroes carry shields. Not all." },
                    { speaker: 'Compiler', text: "Optional properties with '?'." }
                ],
                story: "Not every hero needs every item.",
                objective: 'Extend `Hero` with optional `shield?: boolean`. Create two heroes, one with shield.',
                hint: 'shield?: boolean',
                initCode: `
interface Hero {
    name: string;
    health: number;
    // add optional shield
}

// Create and log two heroes
`,
                expectedOutput: ["{ name: 'Warrior', health: 120 }", "{ name: 'Guardian', health: 100, shield: true }"],
                successMessage: "Flexibility without chaos.",
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
                title: 'Type Aliases',
                dialogue: [
                    { speaker: 'Scholar', text: "Sometimes a shape is used once. Name it with 'type'." },
                    { speaker: 'Compiler', text: "'type' aliases are flexible for unions too." }
                ],
                story: "Name a complex item type.",
                objective: 'Create type `Weapon` as `{ damage: number; name: string }`. Use it.',
                hint: 'type Weapon = { ... }',
                initCode: ``,
                expectedOutput: ["{ damage: 30, name: 'Excalibur' }"],
                successMessage: "The weapon is forged with perfect specification.",
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
                title: 'Index Signatures',
                dialogue: [
                    { speaker: 'Librarian', text: "A spellbook with unknown spell names, but known power levels." },
                    { speaker: 'Compiler', text: "Index signatures for dynamic keys." }
                ],
                story: "Catalog an infinite spellbook.",
                objective: 'Create type `Spellbook` with `[spellName: string]: number`. Assign a few spells and log one.',
                hint: '[spellName: string]: number',
                initCode: `
type Spellbook = {
    [spellName: string]: number;
};

const book: Spellbook = { fire: 50, ice: 40 };
console.log(book.fire);
`,
                expectedOutput: ["50"],
                successMessage: "The book accepts any spell name, yet enforces numeric power.",
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
        title: 'Chapter V: Alliances and Choices',
        description: 'The world is not black and white. Master unions, intersections, literals, and narrowing.',
        levels: [
            {
                id: '5-1',
                title: 'Union Weapons',
                dialogue: [
                    { speaker: 'Smith', text: "A weapon can be a sword OR a bow." },
                    { speaker: 'Compiler', text: "Union types with '|'" }
                ],
                story: "Choose your weapon flexibly.",
                objective: 'Create type `Weapon = string | number`. Wait—no, better: `Weapon = "sword" | "bow" | "staff"`. Log a weapon.',
                hint: 'type Weapon = "sword" | "bow" | "staff";',
                initCode: ``,
                expectedOutput: ["sword"],
                successMessage: "Limited choices prevent invalid weapons.",
                type: 'typescript',
                solution: `type Weapon = "sword" | "bow" | "staff";
const chosen: Weapon = "sword";
console.log(chosen);`
            },
            {
                id: '5-2',
                title: 'Type Narrowing',
                dialogue: [
                    { speaker: 'Guard', text: "Who approaches? String name or number ID?" },
                    { speaker: 'Compiler', text: "Use typeof to narrow unions." }
                ],
                story: "Identify the visitor.",
                objective: 'Function `identify(id: string | number)`: if string log "Name: " + id, else "ID: " + id. Call with both.',
                hint: 'if (typeof id === "string")',
                initCode: `
function identify(id: string | number): void {
    // narrowing logic
}
identify("Arthur");
identify(42);
`,
                expectedOutput: ["Name: Arthur", "ID: 42"],
                successMessage: "No impostors pass the gate.",
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
                title: 'Intersection Allies',
                dialogue: [
                    { speaker: 'Diplomat', text: "A paladin is both Warrior AND Mage." },
                    { speaker: 'Compiler', text: "Intersection with '&'" }
                ],
                story: "Combine strengths.",
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
                successMessage: "The ultimate hybrid class is born.",
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
        title: 'Chapter VI: Enums and Constants',
        description: 'Some values are sacred and finite. Enums guard the cardinal directions, elements, and statuses.',
        levels: [
            {
                id: '6-1',
                title: 'Cardinal Directions',
                dialogue: [
                    { speaker: 'Explorer', text: "North, South, East, West—never mistake them." },
                    { speaker: 'Compiler', text: "Numeric enums by default." }
                ],
                story: "Navigate the world.",
                objective: 'enum Direction { North, South, East, West }. Log Direction.North (should be 0).',
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
                successMessage: "The compass is true.",
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
                title: 'String Enums',
                dialogue: [
                    { speaker: 'Bard', text: "Sing of Fire, Water, Earth, Air." },
                    { speaker: 'Compiler', text: "String enums for readable values." }
                ],
                story: "Name the elements clearly.",
                objective: 'enum Element { Fire = "FIRE", Water = "WATER" }. Log Element.Fire.',
                hint: 'Fire = "FIRE"',
                initCode: ``,
                expectedOutput: ["FIRE"],
                successMessage: "The elements speak their true names.",
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
        title: 'Chapter VII: Generic Magic',
        description: 'One spell to rule many types. Generics let you create reusable, type-safe components.',
        levels: [
            {
                id: '7-1',
                title: 'Identity Spell',
                dialogue: [
                    { speaker: 'Wizard', text: "Return whatever is given, unchanged but typed." },
                    { speaker: 'Compiler', text: "Generic functions with <T>" }
                ],
                story: "Mirror any value perfectly.",
                objective: 'function identity<T>(arg: T): T { return arg; } Log identity<string>("hello") and identity(42).',
                hint: 'function identity<T>(arg: T): T',
                initCode: `
function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("hello"));
console.log(identity(42));
`,
                expectedOutput: ["hello", "42"],
                successMessage: "The spell reflects perfectly, preserving type.",
                type: 'typescript',
                solution: `function identity<T>(arg: T): T {
    return arg;
}
console.log(identity<string>("hello"));
console.log(identity(42));`
            },
            {
                id: '7-2',
                title: 'Generic Containers',
                dialogue: [
                    { speaker: 'Alchemist', text: "A box that holds any potion, but only one type at a time." },
                    { speaker: 'Compiler', text: "Generic interfaces." }
                ],
                story: "Store treasures safely.",
                objective: 'interface Box<T> { value: T }. Create Box<number> and Box<string>.',
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
                successMessage: "Reusable containers without losing type safety.",
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
                title: 'Constrained Generics',
                dialogue: [
                    { speaker: 'Enchanter', text: "Only items with 'name' can be enchanted." },
                    { speaker: 'Compiler', text: "extends for constraints." }
                ],
                story: "Limit the spell's targets.",
                objective: 'function enchant<T extends { name: string }>(item: T): void { log "Enchanting " + item.name }',
                hint: 'T extends { name: string }',
                initCode: `
function enchant<T extends { name: string }>(item: T): void {
    console.log("Enchanting " + item.name);
}
enchant({ name: "Staff of Power" });
`,
                expectedOutput: ["Enchanting Staff of Power"],
                successMessage: "Only named items accept the enchantment.",
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
        title: 'Chapter VIII: Classes and Inheritance',
        description: 'Forge warriors, mages, and dragons with classes. Wield inheritance and access modifiers.',
        levels: [
            {
                id: '8-1',
                title: 'Basic Class',
                dialogue: [
                    { speaker: 'Master', text: "A Warrior has health and can attack." },
                    { speaker: 'Compiler', text: "Classes combine state and behavior." }
                ],
                story: "Create your first class.",
                objective: 'class Warrior { health = 100; attack() { console.log("Slash!") } } Instantiate and call attack.',
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
                successMessage: "The warrior swings true.",
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
                title: 'Constructors and Properties',
                dialogue: [
                    { speaker: 'Trainer', text: "Give each warrior a name at birth." },
                    { speaker: 'Compiler', text: "constructor and public/private" }
                ],
                story: "Personalize your fighters.",
                objective: 'class Warrior { constructor(public name: string, private health: number) {} getHealth() { return this.health; } }',
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
                successMessage: "Private health is protected.",
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
                title: 'Inheritance',
                dialogue: [
                    { speaker: 'Legend', text: "A Paladin is a Warrior with holy magic." },
                    { speaker: 'Compiler', text: "extends and super" }
                ],
                story: "Evolve your class.",
                objective: 'class Paladin extends Warrior { holyStrike() { console.log("Holy damage!") } }',
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
                successMessage: "The bloodline grows stronger.",
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
        title: 'Chapter IX: Utility Types and Advanced Patterns',
        description: 'Master the built-in spells of TypeScript. Transform types with utility types and conditional logic.',
        levels: [
            {
                id: '9-1',
                title: 'Partial Equipment',
                dialogue: [
                    { speaker: 'Outfitter', text: "Update only some stats." },
                    { speaker: 'Compiler', text: "Partial<T> makes all properties optional." }
                ],
                story: "Patch your hero.",
                objective: 'type Hero = { name: string; health: number; mana?: number }; function updateHero(hero: Hero, updates: Partial<Hero>)',
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
                successMessage: "Hero upgraded safely.",
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
                title: 'Required and Pick',
                dialogue: [
                    { speaker: 'Inspector', text: "Everything must be present. Or select only what I need." },
                    { speaker: 'Compiler', text: "Required<T> and Pick<T, K>" }
                ],
                story: "Enforce completeness.",
                objective: 'Use Required and Pick on a type with optional props.',
                hint: 'Pick<Hero, "name" | "health">',
                initCode: `
type Hero = { name: string; health?: number; mana?: number };
type CoreHero = Pick<Hero, "name" | "health">;
type FullHero = Required<Hero>;

console.log("Types defined");
`,
                expectedOutput: ["Types defined"],
                successMessage: "You now wield precise type transformation.",
                type: 'typescript',
                solution: `type Hero = { name: string; health?: number; mana?: number };
type CoreHero = Pick<Hero, "name" | "health">;
type FullHero = Required<Hero>;
console.log("Types defined");`
            },
            {
                id: '9-3',
                title: 'Conditional Types',
                dialogue: [
                    { speaker: 'Oracle', text: "The type depends on the input." },
                    { speaker: 'Compiler', text: "T extends U ? X : Y" }
                ],
                story: "Prophesy the resulting type.",
                objective: 'type IsString<T> = T extends string ? "yes" : "no"; Log examples.',
                hint: 'T extends string ? "yes" : "no"',
                initCode: `
type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>;
type B = IsString<number>;

console.log("Check console - types are yes and no");
`,
                expectedOutput: ["Check console - types are yes and no"],
                successMessage: "You glimpse the future of types.",
                type: 'typescript',
                solution: `type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>;
type B = IsString<number>;
console.log("Check console - types are yes and no");`
            }
        ]
    },
    {
        id: 'ts-chapter-10',
        title: 'Chapter X: The Final Confrontation',
        description: 'Face the Chaos Dragon. Combine everything you have learned to build a fully typed adventure.',
        levels: [
            {
                id: '10-1',
                title: 'The Ultimate Quest',
                dialogue: [
                    { speaker: 'Compiler', text: "You are ready. Build a small typed game system." },
                    { speaker: 'You', text: "I will bring order to the chaos." }
                ],
                story: "Create a hero factory with generics, classes, unions, and utilities.",
                objective: 'Implement a generic createHero function that returns a class instance with proper types.',
                hint: 'Combine everything!',
                initCode: `
interface BaseStats {
    health: number;
    mana?: number;
}

class Character<T extends BaseStats> {
    constructor(public stats: T, public name: string) {}
    describe() {
        console.log(\`\${this.name} has health: \${this.stats.health}\`);
    }
}

function createHero<T extends BaseStats>(name: string, stats: T): Character<T> {
    return new Character(stats, name);
}

const wizard = createHero("Gandalf", { health: 80, mana: 200 });
wizard.describe();
`,
                expectedOutput: ["Gandalf has health: 80"],
                successMessage: "The Chaos Dragon falls. The world is typed. You are now a TypeScript Master.",
                type: 'typescript',
                solution: `interface BaseStats {
    health: number;
    mana?: number;
}
class Character<T extends BaseStats> {
    constructor(public stats: T, public name: string) {}
    describe() {
        console.log(\`\${this.name} has health: \${this.stats.health}\`);
    }
}
function createHero<T extends BaseStats>(name: string, stats: T): Character<T> {
    return new Character(stats, name);
}
const wizard = createHero("Gandalf", { health: 80, mana: 200 });
wizard.describe();`
            }
        ]
    }
];