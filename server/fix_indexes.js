
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sql-monster';

const fixIndexes = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const collection = mongoose.connection.collection('userprogresses');

        // Check existing indexes
        const indexes = await collection.indexes();
        console.log('Current indexes:', indexes);

        // Drop the 'uid_1' index if it exists
        const uidIndex = indexes.find(idx => idx.name === 'uid_1');
        if (uidIndex) {
            console.log('Dropping incorrect unique index on uid...');
            await collection.dropIndex('uid_1');
            console.log('Dropped uid_1 index.');
        } else {
            console.log('uid_1 index not found, skipping drop.');
        }

        console.log('Index fix complete. Please restart the server if it is running.');
        process.exit(0);
    } catch (err) {
        console.error('Error fixing indexes:', err);
        process.exit(1);
    }
};

fixIndexes();
