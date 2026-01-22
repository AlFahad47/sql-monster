
export const seedMockDatabase = (db) => {
    if (!db) return;

    // Helper to safely run queries
    const run = (query) => {
        try {
            db.run(query);
        } catch (e) {
            console.error("Seed Error:", e);
        }
    };

    // DROP ALL to start fresh
    run("DROP TABLE IF EXISTS users;");
    run("DROP TABLE IF EXISTS orders;");
    run("DROP TABLE IF EXISTS products;");
    run("DROP TABLE IF EXISTS employees;");
    run("DROP TABLE IF EXISTS customers;");
    run("DROP TABLE IF EXISTS logs;");
    run("DROP TABLE IF EXISTS colors;");
    run("DROP TABLE IF EXISTS sizes;");

    // USERS
    run(`CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT,
        age INTEGER,
        country TEXT,
        active INTEGER
    );`);
    run(`INSERT INTO users VALUES 
        (1, 'Alice', 'alice@example.com', 22, 'USA', 1),
        (2, 'Bob', 'bob@test.com', 30, 'UK', 1),
        (3, 'Charlie', 'charlie@sample.com', 25, 'USA', 0),
        (4, 'David', 'david@test.com', 40, 'Canada', 1),
        (5, 'Eve', 'eve@example.com', 35, 'UK', 1);`);

    // ORDERS
    run(`CREATE TABLE orders (
        id INTEGER PRIMARY KEY,
        user_id INTEGER,
        amount INTEGER
    );`);
    run(`INSERT INTO orders VALUES (101, 1, 500), (102, 1, 300), (103, 2, 150), (104, 3, 1200), (105, 5, 200);`);

    // PRODUCTS
    run(`CREATE TABLE products (
        id INTEGER PRIMARY KEY,
        name TEXT,
        price INTEGER
    );`);
    run(`INSERT INTO products VALUES (1, 'Laptop', 1000), (2, 'Mouse', 20), (3, 'Keyboard', 50), (4, 'Monitor', 200), (5, 'USB Cable', 5);`);

    // EMPLOYEES
    run(`CREATE TABLE employees (
        id INTEGER PRIMARY KEY,
        name TEXT,
        salary INTEGER,
        manager_id INTEGER,
        dept TEXT
    );`);
    run(`INSERT INTO employees VALUES 
        (1, 'John Boss', 100000, NULL, 'IT'),
        (2, 'Sarah Dev', 80000, 1, 'IT'),
        (3, 'Mike Tester', 60000, 1, 'IT'),
        (4, 'Jane HR', 70000, NULL, 'HR'),
        (5, 'Tom Sales', 55000, 4, 'Sales');`);

    // CUSTOMERS
    run(`CREATE TABLE customers (
        id INTEGER PRIMARY KEY,
        name TEXT,
        country TEXT,
        city TEXT,
        email TEXT
    );`);
    run(`INSERT INTO customers VALUES 
        (1, 'Cust A', 'USA', 'New York', 'a@cust.com'),
        (2, 'Cust B', 'USA', 'Chicago', NULL),
        (3, 'Cust C', 'France', 'Paris', 'c@cust.com'),
        (4, 'Cust D', 'France', 'Paris', 'd@cust.com'),
        (5, 'Cust E', 'Germany', 'Berlin', NULL);`);

    // LOGS
    run(`CREATE TABLE logs (id INTEGER PRIMARY KEY, message TEXT);`);
    run(`INSERT INTO logs VALUES (1, 'System started'), (2, 'Error logged');`);

    // COLORS & SIZES (For Cross Join)
    run(`CREATE TABLE colors (id INTEGER, name TEXT);`);
    run(`INSERT INTO colors VALUES (1, 'Red'), (2, 'Blue');`);
    run(`CREATE TABLE sizes (id INTEGER, size TEXT);`);
    run(`INSERT INTO sizes VALUES (1, 'S'), (2, 'M'), (3, 'L');`);
};
