export const questions = {
    sql: {
        en: [
            {
                id: 1,
                category: 'Basic',
                type: 'code',
                question: 'Write a SQL query to delete the user with id = 1.',
                answer: 'DELETE FROM users WHERE id = 1;',
                code: `DELETE FROM users WHERE id = 1;`
            },
            {
                id: 2,
                category: 'Basic',
                question: 'What is a Primary Key?',
                answer: 'A Primary Key is a column (or set of columns) that uniquely identifies each row in a table. It cannot contain NULL values and must be unique.'
            },
            {
                id: 3,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to left join users and orders on user_id.',
                answer: 'SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;',
                code: `SELECT users.name, orders.id FROM users LEFT JOIN orders ON users.id = orders.user_id;`
            },
            {
                id: 4,
                category: 'Intermediate',
                question: 'What is a Foreign Key?',
                answer: 'A Foreign Key is a field in one table that links to the Primary Key in another table. It enforces referential integrity.'
            },
            {
                id: 5,
                category: 'Advanced',
                question: 'What is a Window Function?',
                answer: 'A Window Function performs a calculation across a set of table rows that are somehow related to the current row. Unlike aggregate functions, window functions do not cause rows to become grouped into a single output row.',
                code: `SELECT name, salary, \nRANK() OVER (ORDER BY salary DESC) as rank \nFROM employees;`
            },
            {
                id: 6,
                category: 'Advanced',
                question: 'What is a CTE? Provide syntax.',
                answer: 'A CTE (Common Table Expression) is a temporary result set that you can reference within another SELECT, INSERT, UPDATE, or DELETE statement.',
                code: `WITH HighSalary AS (\n  SELECT * FROM employees WHERE salary > 50000\n)\nSELECT * FROM HighSalary;`
            },
            {
                id: 7,
                category: 'Advanced',
                question: 'Explain RANK() vs DENSE_RANK()',
                answer: 'RANK() skips numbers after ties (1, 1, 3). DENSE_RANK() does not skip numbers (1, 1, 2).',
                code: `Value: 10, 10, 20\nRANK(): 1, 1, 3\nDENSE_RANK(): 1, 1, 2`
            },
            {
                id: 8,
                category: 'Performance',
                question: 'What is an Index?',
                answer: 'An index is a data structure (like B-Tree) that improves the speed of data retrieval operations on a database table.'
            },
            {
                id: 9,
                category: 'Basic',
                question: 'What is DISTINCT used for?',
                answer: 'DISTINCT is used to return only different (unique) values.',
                code: `SELECT DISTINCT country FROM customers;`
            },
            {
                id: 10,
                category: 'Intermediate',
                question: 'UNION vs UNION ALL',
                answer: 'UNION removes duplicates. UNION ALL allows duplicates and is faster.',
                code: `SELECT name FROM T1\nUNION ALL\nSELECT name FROM T2;`
            },
            {
                id: 11,
                category: 'Basic',
                question: 'GROUP BY usage',
                answer: 'Groups rows that have the same values into summary rows.',
                code: `SELECT count(id), country \nFROM customers \nGROUP BY country;`
            },
            {
                id: 12,
                category: 'Intermediate',
                question: 'What is a Self-Join?',
                answer: 'A table joined with itself.',
                code: `SELECT A.name as Employee, B.name as Manager\nFROM employees A, employees B\nWHERE A.manager_id = B.id;`
            },
            {
                id: 13,
                category: 'Basic',
                question: 'What are Constraints?',
                answer: 'Rules for data in a table: NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT.'
            },
            {
                id: 14,
                category: 'Advanced',
                question: 'Normalization vs Denormalization',
                answer: 'Normalization minimizes redundancy (many tables). Denormalization adds redundancy for read performance (fewer joins).'
            },
            {
                id: 15,
                category: 'Basic',
                question: 'HAVING Clause',
                answer: 'Used to filter groups after GROUP BY, because WHERE cannot be used with aggregates.',
                code: `SELECT country \nFROM customers \nGROUP BY country \nHAVING COUNT(id) > 5;`
            },
            {
                id: 16,
                category: 'Intermediate',
                question: 'Cross Join',
                answer: 'Cartesian product of two tables.',
                code: `SELECT * FROM colors CROSS JOIN sizes;`
            },
            {
                id: 17,
                category: 'Advanced',
                question: 'Triggers',
                answer: 'Code that automatically executes in response to certain events on a particular table or view.',
                code: `CREATE TRIGGER LogUpdates \nAFTER UPDATE ON Users \nFOR EACH ROW ...`
            },
            {
                id: 18,
                category: 'Advanced',
                question: 'Stored Procedure',
                answer: 'Prepared SQL code that you can save and reuse.',
                code: `EXEC GetCustomerData @CustomerID = 1;`
            },
            {
                id: 19,
                category: 'Intermediate',
                question: 'ACID Properties',
                answer: 'Atomicity, Consistency, Isolation, Durability.'
            },
            {
                id: 20,
                category: 'Advanced',
                question: 'Difference between WHERE and HAVING',
                answer: 'WHERE filters rows before grouping. HAVING filters groups after grouping.',
                code: `SELECT dept, sum(salary)\nFROM emp\nWHERE salary > 1000\nGROUP BY dept\nHAVING sum(salary) > 5000;`
            },
            {
                id: 21,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to select all columns from users where age is greater than 18.',
                answer: 'SELECT * FROM users WHERE age > 18;',
                code: `SELECT * FROM users WHERE age > 18;`
            },
            {
                id: 22,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to count the number of users in each country.',
                answer: 'SELECT country, COUNT(*) FROM users GROUP BY country;',
                code: `SELECT country, COUNT(*) FROM users GROUP BY country;`
            },
            {
                id: 23,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to insert a new user named "John" with age 25.',
                answer: 'INSERT INTO users (name, age) VALUES (\'John\', 25);',
                code: `INSERT INTO users (name, age) VALUES ('John', 25);`
            },
            {
                id: 24,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to update the email of user with id 5.',
                answer: 'UPDATE users SET email = \'new@email.com\' WHERE id = 5;',
                code: `UPDATE users SET email = 'new@email.com' WHERE id = 5;`
            },
            {
                id: 25,
                category: 'Advanced',
                type: 'code',
                question: 'Write a query to find the 3rd highest salary from employees.',
                answer: 'SELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2;',
                code: `SELECT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2;`
            },
            {
                id: 26,
                category: 'Intermediate',
                question: 'What is the glabal keyword used for?',
                answer: 'GLOBAL is used to access global variables.'
            },
            {
                id: 27,
                category: 'Advanced',
                type: 'code',
                question: 'Write a query to drop the table "temp_logs".',
                answer: 'DROP TABLE temp_logs;',
                code: `DROP TABLE temp_logs;`
            },
            {
                id: 28,
                category: 'Basic',
                question: 'Define DML.',
                answer: 'Data Manipulation Language (INSERT, UPDATE, DELETE).'
            },
            {
                id: 29,
                category: 'Basic',
                question: 'Define DDL.',
                answer: 'Data Definition Language (CREATE, ALTER, DROP).'
            },
            {
                id: 30,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to get names starting with "A".',
                answer: 'SELECT name FROM users WHERE name LIKE \'A%\';',
                code: `SELECT name FROM users WHERE name LIKE 'A%';`
            },
            {
                id: 31,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to select unique cities from customers.',
                answer: 'SELECT DISTINCT city FROM customers;',
                code: `SELECT DISTINCT city FROM customers;`
            },
            {
                id: 32,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to find customers with null email.',
                answer: 'SELECT * FROM customers WHERE email IS NULL;',
                code: `SELECT * FROM customers WHERE email IS NULL;`
            },
            {
                id: 33,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to combine first_name and last_name as "Full Name".',
                answer: 'SELECT concat(first_name, \' \', last_name) as "Full Name" FROM users;',
                code: `SELECT concat(first_name, ' ', last_name) as "Full Name" FROM users;`
            },
            {
                id: 34,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to find the average price of products.',
                answer: 'SELECT AVG(price) FROM products;',
                code: `SELECT AVG(price) FROM products;`
            },
            {
                id: 35,
                category: 'Advanced',
                type: 'code',
                question: 'Write a query to get the top 3 spending users.',
                answer: 'SELECT user_id, SUM(amount) FROM orders GROUP BY user_id ORDER BY SUM(amount) DESC LIMIT 3;',
                code: `SELECT user_id, SUM(amount) FROM orders GROUP BY user_id ORDER BY SUM(amount) DESC LIMIT 3;`
            },
            {
                id: 36,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to delete all products with price < 10.',
                answer: 'DELETE FROM products WHERE price < 10;',
                code: `DELETE FROM products WHERE price < 10;`
            },
            {
                id: 37,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to show second highest salary (using subquery).',
                answer: 'SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp);',
                code: `SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp);`
            },
            {
                id: 38,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to add a column "status" to users table.',
                answer: 'ALTER TABLE users ADD status VARCHAR(50);',
                code: `ALTER TABLE users ADD status VARCHAR(50);`
            },
            {
                id: 39,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to rename table "staff" to "employees".',
                answer: 'ALTER TABLE staff RENAME TO employees;',
                code: `ALTER TABLE staff RENAME TO employees;`
            },
            {
                id: 40,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to find users ending with "son".',
                answer: 'SELECT * FROM users WHERE name LIKE \'%son\';',
                code: `SELECT * FROM users WHERE name LIKE '%son';`
            },
            {
                id: 41,
                category: 'Advanced',
                type: 'code',
                question: 'Write a query to count orders per user, strictly having > 2 orders.',
                answer: 'SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > 2;',
                code: `SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > 2;`
            },
            {
                id: 42,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to get current date.',
                answer: 'SELECT CURRENT_DATE;',
                code: `SELECT CURRENT_DATE;`
            },
            {
                id: 43,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to select products between price 10 and 50.',
                answer: 'SELECT * FROM products WHERE price BETWEEN 10 AND 50;',
                code: `SELECT * FROM products WHERE price BETWEEN 10 AND 50;`
            },
            {
                id: 44,
                category: 'Advanced',
                type: 'code',
                question: 'Write a query to delete duplicate rows keeping only distinct id.',
                answer: 'DELETE FROM t1 WHERE id NOT IN (SELECT MIN(id) FROM t1 GROUP BY name);',
                code: `DELETE FROM t1 WHERE id NOT IN (SELECT MIN(id) FROM t1 GROUP BY name);`
            },
            {
                id: 45,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to select users sorted by age desc, then name asc.',
                answer: 'SELECT * FROM users ORDER BY age DESC, name ASC;',
                code: `SELECT * FROM users ORDER BY age DESC, name ASC;`
            },
            {
                id: 46,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to truncate the logs table.',
                answer: 'TRUNCATE TABLE logs;',
                code: `TRUNCATE TABLE logs;`
            },
            {
                id: 47,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to get length of string "Hello".',
                answer: 'SELECT LENGTH(\'Hello\');',
                code: `SELECT LENGTH('Hello');`
            },
            {
                id: 48,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to convert "abc" to uppercase.',
                answer: 'SELECT UPPER(\'abc\');',
                code: `SELECT UPPER('abc');`
            },
            {
                id: 49,
                category: 'Advanced',
                type: 'code',
                question: 'Write a query to create a view "ActiveUsers".',
                answer: 'CREATE VIEW ActiveUsers AS SELECT * FROM users WHERE active = 1;',
                code: `CREATE VIEW ActiveUsers AS SELECT * FROM users WHERE active = 1;`
            },
            {
                id: 50,
                category: 'Advanced',
                type: 'code',
                question: 'Write a query to fetch the first 5 characters of name.',
                answer: 'SELECT SUBSTRING(name, 1, 5) FROM users;',
                code: `SELECT SUBSTRING(name, 1, 5) FROM users;`
            },
            {
                id: 51,
                category: 'Basic',
                question: 'What is a Primary Key?',
                answer: 'A column or a set of columns that uniquely identifies each row in a table.'
            },
            {
                id: 52,
                category: 'Intermediate',
                question: 'What is the difference between TRUNCATE and DELETE?',
                answer: 'DELETE removes rows one by one and records the entry in the transaction log. TRUNCATE removes all rows by deallocating the pages and is faster.'
            },
            {
                id: 53,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to select all users from the "USA".',
                answer: 'SELECT * FROM users WHERE country = \'USA\';',
                code: `SELECT * FROM users WHERE country = 'USA';`
            },
            {
                id: 54,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to find the total salary of all employees.',
                answer: 'SELECT SUM(salary) FROM employees;',
                code: `SELECT SUM(salary) FROM employees;`
            },
            {
                id: 55,
                category: 'Advanced',
                type: 'code',
                question: 'Write a query to find the employee with the highest salary.',
                answer: 'SELECT * FROM employees ORDER BY salary DESC LIMIT 1;',
                code: `SELECT * FROM employees ORDER BY salary DESC LIMIT 1;`
            },
            {
                id: 56,
                category: 'Basic',
                question: 'What is NULL?',
                answer: 'NULL represents a missing or unknown value.'
            },
            {
                id: 57,
                category: 'Intermediate',
                question: 'What is a Foreign Key?',
                answer: 'A field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.'
            },
            {
                id: 58,
                category: 'Advanced',
                question: 'What is an Index?',
                answer: 'An index is a performance-tuning method of allowing faster retrieval of records.'
            },
            {
                id: 59,
                category: 'Basic',
                type: 'code',
                question: 'Write a query to count how many orders user 1 has placed.',
                answer: 'SELECT COUNT(*) FROM orders WHERE user_id = 1;',
                code: `SELECT COUNT(*) FROM orders WHERE user_id = 1;`
            },
            {
                id: 60,
                category: 'Intermediate',
                type: 'code',
                question: 'Write a query to find the average age of users.',
                answer: 'SELECT AVG(age) FROM users;',
                code: `SELECT AVG(age) FROM users;`
            }
        ]
    },
    ts: {
        en: [
            {
                id: 1,
                category: 'Basic',
                question: 'What is the difference between "interface" and "type"?',
                answer: 'Interfaces are primarily for defining object shapes and can be merged (declaration merging). Types are more flexible, can define primitives, unions, and tuples, but strictly cannot be re-opened.',
                code: `interface User { name: string; }\n\ntype ID = string | number;`
            },
            {
                id: 2,
                category: 'Basic',
                question: 'What is "any" type?',
                answer: 'The "any" type allows you to assign any value to a variable, effectively disabling type checking for that variable. It should be avoided when possible.'
            },
            {
                id: 3,
                category: 'Intermediate',
                question: 'Explain "Generics" in TypeScript.',
                answer: 'Generics allow you to create reusable code components that work with a variety of types rather than a single one.',
                code: `function identity<T>(arg: T): T {\n  return arg;\n}`
            },
            {
                id: 4,
                category: 'Basic',
                question: 'What is a "Union Type"?',
                answer: 'A Union Type describes a value that can be one of several types.',
                code: `function printId(id: number | string) {\n  console.log("Your ID is: " + id);\n}`
            },
            {
                id: 5,
                category: 'Advanced',
                question: 'What is the "unknown" type?',
                answer: 'Similar to "any", but safer because you cannot perform arbitrary operations on it without narrowing the type first.',
                code: `let value: unknown;\nvalue = "hello";\n// value.length; // Error\nif (typeof value === "string") {\n  console.log(value.length); // OK\n}`
            },
            {
                id: 6,
                category: 'Intermediate',
                question: 'What is "Partial<T>"?',
                answer: 'A utility type that constructs a type with all properties of T set to optional.',
                code: `interface Todo {\n  title: string;\n  desc: string;\n}\n\nfunction update(fields: Partial<Todo>) { ... }`
            },
            {
                id: 7,
                category: 'Intermediate',
                question: 'Explain "Pick<T, K>"',
                answer: 'Constructs a type by picking the set of properties K from T.',
                code: `type TodoPreview = Pick<Todo, "title" | "completed">;`
            },
            {
                id: 8,
                category: 'Advanced',
                question: 'What are "Mapped Types"?',
                answer: 'A way to create new types based on old ones by transforming properties.',
                code: `type Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};`
            },
            {
                id: 9,
                category: 'Basic',
                question: 'What is "Optional Chaining"?',
                answer: 'Syntax to access nested properties without worrying if an intermediate property is null/undefined.',
                code: `const user = {};\nconsole.log(user?.address?.street); // undefined`
            },
            {
                id: 10,
                category: 'Intermediate',
                question: 'What is "Type Assertion" (as)?',
                answer: 'Telling the compiler "trust me, I know what this type is".',
                code: `const myCanvas = document.getElementById("main") as HTMLCanvasElement;`
            },
            {
                id: 11,
                category: 'Basic',
                question: 'What is an "Enum"?',
                answer: 'Enums allow describing a value which could be one of a set of named constants.',
                code: `enum Direction {\n  Up, Down, Left, Right\n}`
            },
            {
                id: 12,
                category: 'Intermediate',
                question: 'What is the "never" type?',
                answer: 'Represents the type of values that never occur. e.g., a function that always throws an exception.',
                code: `function error(msg: string): never {\n  throw new Error(msg);\n}`
            },
            {
                id: 13,
                category: 'Advanced',
                question: 'What are "Type Guards"?',
                answer: 'Expressions that perform a runtime check that guarantees the type in some scope.',
                code: `function isString(test: any): test is string {\n  return typeof test === "string";\n}`
            },
            {
                id: 14,
                category: 'Basic',
                question: 'Explain "void" type.',
                answer: 'Used for functions that do not return a value.'
            },
            {
                id: 15,
                category: 'Intermediate',
                question: 'What is "Omit<T, K>"?',
                answer: 'Constructs a type by picking all properties from T and then removing K.',
                code: `type TodoPreview = Omit<Todo, "description">;`
            },
            {
                id: 16,
                category: 'Basic',
                question: 'Readonly properties?',
                answer: 'Properties marked with `readonly` can only be written to during creation.',
                code: `interface Point {\n  readonly x: number;\n}`
            },
            {
                id: 17,
                category: 'Advanced',
                question: 'What is "Conditional Types"?',
                answer: 'Types that take the form: T extends U ? X : Y.',
                code: `type TypeName<T> = \n  T extends string ? "string" : \n  T extends number ? "number" : "object";`
            },
            {
                id: 18,
                category: 'Intermediate',
                question: 'What is "keyof" operator?',
                answer: 'Takes an object type and produces a string or numeric literal union of its keys.',
                code: `type Point = { x: number; y: number };\ntype P = keyof Point; // "x" | "y"`
            },
            {
                id: 19,
                category: 'Basic',
                question: 'What is "Tuple" type?',
                answer: 'A tuple type allows you to express an array with a fixed number of elements whose types are known.',
                code: `let x: [string, number];\nx = ["hello", 10];`
            },
            {
                id: 20,
                category: 'Advanced',
                question: 'What is "infer" keyword?',
                answer: 'Used within conditional types to infer a type variable.',
                code: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;`
            },
            {
                id: 21,
                category: 'Basic',
                question: 'What is a Decorator?',
                answer: 'A special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.',
                code: `@sealed\nclass BugReport { ... }`
            },
            {
                id: 22,
                category: 'Basic',
                question: 'What is a Namespace?',
                answer: 'A way to organize code into named groups/scopes to avoid naming collisions.'
            },
            {
                id: 23,
                category: 'Basic',
                type: 'code',
                question: 'Define a type User with name (string) and age (number).',
                answer: 'type User = { name: string; age: number; };',
                code: `type User = { name: string; age: number; };`
            },
            {
                id: 24,
                category: 'Intermediate',
                type: 'code',
                question: 'create an interface called "Car" with a brand string.',
                answer: 'interface Car { brand: string; }',
                code: `interface Car { brand: string; }`
            },
            {
                id: 25,
                category: 'Advanced',
                type: 'code',
                question: 'Create a generic type Wrapper<T> that has a value of type T.',
                answer: 'type Wrapper<T> = { value: T; };',
                code: `type Wrapper<T> = { value: T; };`
            },
            {
                id: 26,
                category: 'Intermediate',
                question: 'What is the "readonly" modifier?',
                answer: 'It marks properties as immutable, meaning they cannot be changed after initialization.',
                code: `interface Point { readonly x: number; }`
            },
            {
                id: 27,
                category: 'Basic',
                question: 'What is type inference?',
                answer: 'TypeScript automatically deduces the type of a variable based on the assigned value.',
                code: `let x = 3; // TypeScript infers x is number`
            },
            {
                id: 28,
                category: 'Advanced',
                question: 'What is a "Discriminated Union"?',
                answer: 'A pattern where union members have a common literal property to distinguish them.',
                code: `type Shape = { kind: "circle", radius: number } | { kind: "square", size: number };`
            },
            {
                id: 29,
                category: 'Intermediate',
                question: 'What is "NonNullable<T>"?',
                answer: 'Constructs a type by excluding null and undefined from T.',
                code: `type T0 = NonNullable<string | number | undefined>; // string | number`
            },
            {
                id: 30,
                category: 'Basic',
                question: 'Can you use "this" in an interface?',
                answer: 'Yes, "this" can be used in interfaces to refer to the type implementation.',
                code: `interface Fluent { method(): this; }`
            }
        ]
    },
    cyber: {
        en: [
            { id: 1, category: 'Basic', question: 'What is CIA Triad?', answer: 'Confidentiality, Integrity, and Availability. The three main pillars of information security.' },
            { id: 2, category: 'Basic', question: 'What is Phishing?', answer: 'A social engineering attack used to steal user data, including login credentials and credit card numbers.' },
            { id: 3, category: 'Intermediate', question: 'Explain SQL Injection (SQLi).', answer: 'A code injection technique where an attacker executes malicious SQL statements that control a web application\'s database.', code: `' OR 1=1 --` },
            { id: 4, category: 'Intermediate', question: 'What is XSS (Cross-Site Scripting)?', answer: 'An attack where malicious scripts are injected into otherwise benign and trusted websites.', code: `<script>alert(document.cookie)</script>` },
            { id: 5, category: 'Basic', question: 'What is a Firewall?', answer: 'A network security device that monitors and filters incoming and outgoing network traffic based on an organization\'s security policies.' },
            { id: 6, category: 'Advanced', question: 'What is CSRF?', answer: 'Cross-Site Request Forgery. Forces an end user to execute unwanted actions on a web application in which they\'re currently authenticated.' },
            { id: 7, category: 'Basic', question: 'HTTPS vs HTTP?', answer: 'HTTPS is HTTP with encryption (TLS/SSL). It secures the data being transferred.' },
            { id: 8, category: 'Intermediate', question: 'What is Hashing?', answer: 'Converting data into a fixed-size string of characters. It is a one-way function (cannot be reversed). Used for passwords.', code: `MD5("hello") = 5d41402abc4b2a76b9719d911017c592` },
            { id: 9, category: 'Advanced', question: 'Symmetric vs Asymmetric Encryption', answer: 'Symmetric uses the SAME key for encryption and decryption. Asymmetric uses a Public key to encrypt and Private key to decrypt.' },
            { id: 10, category: 'Basic', question: 'What is Malware?', answer: 'Malicious software designed to cause damage to a computer, server, client, or computer network (Viruses, Worms, Trojan horses).' },
            { id: 11, category: 'Intermediate', question: 'What is a DDoS attack?', answer: 'Distributed Denial of Service. A malicious attempt to disrupt normal traffic of a targeted server by overwhelming it with a flood of Internet traffic.' },
            { id: 12, category: 'Basic', question: 'What is 2FA?', answer: 'Two-Factor Authentication. Requires two distinct forms of identification to access something (e.g., Password + SMS code).' },
            { id: 13, category: 'Advanced', question: 'What is a Zero Day vulnerability?', answer: 'A flaw in software, hardware or firmware that is unknown to the party or parties responsible for patching or otherwise fixing the flaw.' },
            { id: 14, category: 'Intermediate', question: 'What is a Man-in-the-Middle (MitM) attack?', answer: 'An attack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating with each other.' },
            { id: 15, category: 'Basic', question: 'What is VPN?', answer: 'Virtual Private Network. Extends a private network across a public network and enables users to send and receive data as if their devices were directly connected to the private network.' },
            { id: 16, category: 'Intermediate', question: 'What is Penetration Testing?', answer: 'A simulated cyber attack against your computer system to check for exploitable vulnerabilities.' },
            { id: 17, category: 'Advanced', question: 'Explain Salting in passwords.', answer: 'Adding random data (salt) to the input of a hash function to guarantee a unique output, solving the problem of rainbow table attacks.' },
            { id: 18, category: 'Basic', question: 'What is Social Engineering?', answer: 'The art of manipulating people so they give up confidential information.' },
            { id: 19, category: 'Intermediate', question: 'What is Ransomware?', answer: 'Malware that monitors a user\'s files and encrypts them, demanding a ransom payment to decrypt them.' },
            { id: 20, category: 'Advanced', question: 'What is OWASP Top 10?', answer: 'A standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.' },
            { id: 21, category: 'Basic', question: 'What is a Botnet?', answer: 'A network of private computers infected with malicious software and controlled as a group without the owners\' knowledge.' },
            { id: 22, category: 'Intermediate', question: 'What is Spyware?', answer: 'Software that aims to gather information about a person or organization without their knowledge.' },
            { id: 23, category: 'Advanced', question: 'What is a Rootkit?', answer: 'A collection of computer software, typically malicious, designed to enable access to a computer or an area of its software that is not otherwise allowed.' },
            { id: 24, category: 'Basic', question: 'What is Adware?', answer: 'Software that automatically displays or downloads advertising material (often unwanted) when a user is online.' },
            { id: 25, category: 'Intermediate', question: 'What is Clickjacking?', answer: 'A malicious technique of tricking a user into clicking on something different from what the user perceives they are clicking on.' },
            { id: 26, category: 'Basic', question: 'What is a Strong Password?', answer: 'A password that is at least 12 characters long, includes mix of upper/lowercase, numbers, and symbols.' },
            { id: 27, category: 'Intermediate', question: 'What is Steganography?', answer: 'The practice of concealing a message, file, image, or video within another message, file, image, or video.' },
            { id: 28, category: 'Advanced', question: 'What is Polymorphic Malware?', answer: 'Malware that changes its code to evade detection while retaining its original function.' },
            { id: 29, category: 'Basic', question: 'What is Encryption?', answer: 'The process of encoding information so only authorized parties can access it.' },
            { id: 30, category: 'Intermediate', question: 'What is a Brute Force Attack?', answer: 'An attack that involves guessing passwords or keys by trying every possible combination.' }
        ]
    }
};
