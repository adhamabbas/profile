const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, quality = 60) {
  try {
    await sharp(inputPath)
      .jpeg({ 
        quality,
        mozjpeg: true,
        chromaSubsampling: '4:4:4'
      })
      .resize(1200, 800, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .toFile(outputPath);
    console.log(`Optimized ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function cleanupDuplicateCompressed() {
  const filesToDelete = [
    'public/projects/Alamia_compressed_compressed.jpg',
    'public/projects/A.A_compressed_compressed.jpg'
  ];

  for (const file of filesToDelete) {
    try {
      fs.unlinkSync(file);
      console.log(`Deleted duplicate file: ${file}`);
    } catch (error) {
      console.error(`Error deleting ${file}:`, error);
    }
  }
}

async function optimizeImages() {
  // Optimize MongoDB certificate (largest file)
  await optimizeImage(
    'public/certificates/MongoDB.pdf_compressed.jpg',
    'public/certificates/MongoDB.pdf_optimized.jpg',
    60
  );

  // Optimize other certificates
  const certificates = [
    'full stack.pdf_compressed.jpg',
    'Coursera 525KM4E4HVXH.pdf_compressed.jpg',
    'SkillsBuild.pdf_compressed.jpg',
    'Node.js E-commerce.pdf_compressed.jpg',
    'git & github.pdf_compressed.jpg'
  ];

  for (const cert of certificates) {
    const inputPath = path.join('public/certificates', cert);
    const outputPath = path.join('public/certificates', cert.replace('_compressed.jpg', '_optimized.jpg'));
    await optimizeImage(inputPath, outputPath, 70);
  }

  // Optimize project images
  const projects = [
    'H ndzz_compressed.jpg',
    'A.A_compressed.jpg',
    'Alamia_compressed.jpg'
  ];

  for (const project of projects) {
    const inputPath = path.join('public/projects', project);
    const outputPath = path.join('public/projects', project.replace('_compressed.jpg', '_optimized.jpg'));
    await optimizeImage(inputPath, outputPath, 80);
  }
}

async function main() {
  await cleanupDuplicateCompressed();
  await optimizeImages();
}

main().catch(console.error); 