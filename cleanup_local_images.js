const fs = require('fs');
const path = require('path');

const directoriesToClean = [
  'public/certificates',
  'public/projects'
];

directoriesToClean.forEach(dir => {
  fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      try {
        fs.unlinkSync(path.join(dir, file));
        console.log(`Deleted ${file}`);
      } catch (error) {
        console.error(`Error deleting ${file}:`, error);
      }
    }
  });
}); 