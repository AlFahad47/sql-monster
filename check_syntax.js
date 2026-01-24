
try {
    const chapters = require('./src/data/chapters_bn.js');
    console.log('Syntax OK. Chapters loaded:', chapters.length || Object.keys(chapters).length);
} catch (error) {
    console.error('Syntax Error:', error.message);
}
