const fs = require('fs');
const path = require('path');

const filesToDelete = [
  'public/profile.png',
  'public/certificates/MongoDB.pdf.png',
  'public/certificates/git & github.pdf.png',
  'public/certificates/Node.js E-commerce.pdf.png',
  'public/certificates/SkillsBuild.pdf.png',
  'public/certificates/Coursera 525KM4E4HVXH.pdf.png',
  'public/certificates/full stack.pdf.png',
  'public/projects/H ndzz.jpg',
  'public/projects/A.A.png',
  'public/projects/Alamia.png'
];

filesToDelete.forEach(file => {
  try {
    fs.unlinkSync(file);
    console.log(`Deleted ${file}`);
  } catch (error) {
    console.error(`Error deleting ${file}:`, error);
  }
}); 