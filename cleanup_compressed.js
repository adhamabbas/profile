const fs = require('fs');
const path = require('path');

const filesToDelete = [
  'public/certificates/MongoDB.pdf_compressed.jpg',
  'public/certificates/full stack.pdf_compressed.jpg',
  'public/certificates/Coursera 525KM4E4HVXH.pdf_compressed.jpg',
  'public/certificates/SkillsBuild.pdf_compressed.jpg',
  'public/certificates/Node.js E-commerce.pdf_compressed.jpg',
  'public/certificates/git & github.pdf_compressed.jpg',
  'public/projects/H ndzz_compressed.jpg',
  'public/projects/A.A_compressed.jpg',
  'public/projects/Alamia_compressed.jpg'
];

filesToDelete.forEach(file => {
  try {
    fs.unlinkSync(file);
    console.log(`Deleted compressed file: ${file}`);
  } catch (error) {
    console.error(`Error deleting ${file}:`, error);
  }
}); 