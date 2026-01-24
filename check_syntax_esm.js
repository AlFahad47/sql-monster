
import { chaptersBn } from './src/data/chapters_bn.js';

try {
    console.log('Syntax OK. Chapters loaded:', chaptersBn.length);
    chaptersBn.forEach((chapter, index) => {
        console.log(`Chapter ${index + 1}: ${chapter.title} (Levels: ${chapter.levels ? chapter.levels.length : 0})`);
    });
} catch (error) {
    console.error('Runtime Error:', error.message);
}
