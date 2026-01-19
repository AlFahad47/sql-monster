export const questions = {
    en: [
        {
            id: 1,
            category: 'Basic',
            question: 'What is the difference between DELETE and TRUNCATE?',
            answer: 'DELETE is a DML command that removes rows based on a WHERE clause and can be rolled back. TRUNCATE is a DDL command that removes all rows from a table, cannot be rolled back (in most DBs), and resets identity columns. TRUNCATE is generally faster.'
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
            question: 'Explain the difference between INNER JOIN and LEFT JOIN.',
            answer: 'INNER JOIN returns only rows where there is a match in BOTH tables. LEFT JOIN returns all rows from the left table, and the matched rows from the right table. If no match is found, the right side will contain NULLs.'
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
            answer: 'A Window Function performs a calculation across a set of table rows that are somehow related to the current row. Unlike aggregate functions, window functions do not cause rows to become grouped into a single output row.'
        },
        {
            id: 6,
            category: 'Advanced',
            question: 'What is a CTE (Common Table Expression)?',
            answer: 'A CTE is a temporary result set that you can reference within another SELECT, INSERT, UPDATE, or DELETE statement. It is defined using the WITH keyword and helps make complex queries more readable.'
        },
        {
            id: 7,
            category: 'Advanced',
            question: 'Explain the difference between RANK(), DENSE_RANK() and ROW_NUMBER()',
            answer: 'ROW_NUMBER() gives a unique integer to each row. RANK() gives the same rank to ties, but skips the next numbers (1, 1, 3). DENSE_RANK() gives the same rank to ties but does NOT skip numbers (1, 1, 2).'
        },
        {
            id: 8,
            category: 'Performance',
            question: 'What is an Index and why is it used?',
            answer: 'An index is a data structure (like B-Tree) that improves the speed of data retrieval operations on a database table. It comes at the cost of additional storage and slower writes (INSERT/UPDATE).'
        }
    ],
    bn: [
        {
            id: 1,
            category: 'Basic',
            question: 'DELETE এবং TRUNCATE এর মধ্যে পার্থক্য কি?',
            answer: 'DELETE হলো একটি DML কমান্ড যা WHERE ক্লজের উপর ভিত্তি করে সারি মুছে ফেলে এবং রোলব্যাক করা যায়। TRUNCATE হলো একটি DDL কমান্ড যা একটি টেবিলের সমস্ত সারি মুছে ফেলে, (বেশিরভাগ DB-তে) রোলব্যাক করা যায় না এবং আইডেন্টিটি কলাম রিসেট করে। TRUNCATE সাধারণত দ্রুত কাজ করে।'
        },
        {
            id: 2,
            category: 'Basic',
            question: 'Primary Key কি?',
            answer: 'Primary Key হলো একটি কলাম (বা কলামের সেট) যা একটি টেবিলের প্রতিটি সারিকে অনন্যভাবে শনাক্ত করে। এটিতে NULL মান থাকতে পারে না এবং এটি অবশ্যই অনন্য হতে হবে।'
        },
        {
            id: 3,
            category: 'Intermediate',
            question: 'INNER JOIN এবং LEFT JOIN এর মধ্যে পার্থক্য ব্যাখ্যা করুন।',
            answer: 'INNER JOIN শুধুমাত্র সেই সারিগুলো ফিরিয়ে দেয় যেখানে উভয় টেবিলে মিল রয়েছে। LEFT JOIN বাম টেবিলের সমস্ত সারি এবং ডান টেবিলের মিলে যাওয়া সারিগুলো ফিরিয়ে দেয়। যদি কোনো মিল না পাওয়া যায়, তবে ডান দিকে NULL থাকবে।'
        },
        {
            id: 4,
            category: 'Intermediate',
            question: 'Foreign Key কি?',
            answer: 'Foreign Key হলো একটি টেবিলের ফিল্ড যা অন্য টেবিলের Primary Key-র সাথে লিঙ্ক করে। এটি রেফারেন্সিয়াল ইন্টিগ্রিটি বা তথ্যের অখণ্ডতা নিশ্চিত করে।'
        },
        {
            id: 5,
            category: 'Advanced',
            question: 'Window Function কি?',
            answer: 'Window Function টেবিলের সারিগুলোর একটি সেটের উপর গণনা করে যা কোনোভাবে বর্তমান সারির সাথে সম্পর্কিত। অ্যাগ্রিগেট ফাংশনগুলির বিপরীতে, উইন্ডো ফাংশনগুলো সারিগুলিকে একটি আউটপুট সারিতে গ্রুপ করে না।'
        },
        {
            id: 6,
            category: 'Advanced',
            question: 'CTE (Common Table Expression) কি?',
            answer: 'CTE হলো একটি অস্থায়ী রেজাল্ট সেট যা আপনি অন্য SELECT, INSERT, UPDATE বা DELETE স্টেটমেন্টের মধ্যে উল্লেখ করতে পারেন। এটি WITH কিওয়ার্ড ব্যবহার করে সংজ্ঞায়িত করা হয় এবং জটিল কোয়েরিগুলোকে আরও পাঠযোগ্য করতে সাহায্য করে।'
        },
        {
            id: 7,
            category: 'Advanced',
            question: 'RANK(), DENSE_RANK() এবং ROW_NUMBER() এর মধ্যে পার্থক্য ব্যাখ্যা করুন',
            answer: 'ROW_NUMBER() প্রতিটি সারিকে একটি অনন্য পূর্ণসংখ্যা দেয়। RANK() টাই (tie) হলে একই র‍্যাঙ্ক দেয়, কিন্তু পরবর্তী সংখ্যাগুলো বাদ দেয় (১, ১, ৩)। DENSE_RANK() টাই হলে একই র‍্যাঙ্ক দেয় কিন্তু সংখ্যা বাদ দেয় না (১, ১, ২)।'
        },
        {
            id: 8,
            category: 'Performance',
            question: 'Index কি এবং কেন এটি ব্যবহৃত হয়?',
            answer: 'ইনডেক্স হলো একটি ডেটা স্ট্রাকচার (যেমন B-Tree) যা ডাটাবেস টেবিলে ডেটা পুনরুদ্ধারের গতি উন্নত করে। এর বিনিময়ে অতিরিক্ত স্টোরেজ খরচ হয় এবং রাইট অপারেশন (INSERT/UPDATE) ধীর হতে পারে।'
        }
    ]
};
