const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function compressImage(inputPath, outputPath, quality = 80) {
  try {
    await sharp(inputPath)
      .jpeg({ quality })
      .toFile(outputPath);
    console.log(`Compressed ${inputPath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error compressing ${inputPath}:`, error);
  }
}

async function compressImages() {
  // Compress certificate images
  const certificates = [
    'MongoDB.pdf.png',
    'git & github.pdf.png',
    'Node.js E-commerce.pdf.png',
    'SkillsBuild.pdf.png',
    'Coursera 525KM4E4HVXH.pdf.png',
    'full stack.pdf.png'
  ];

  for (const cert of certificates) {
    const inputPath = path.join('public/certificates', cert);
    const outputPath = path.join('public/certificates', cert.replace('.png', '_compressed.jpg'));
    await compressImage(inputPath, outputPath);
  }

  // Compress project images
  const projects = [
    'H ndzz.jpg',
    'A.A.png',
    'Alamia.png'
  ];

  for (const project of projects) {
    const inputPath = path.join('public/projects', project);
    const outputPath = path.join('public/projects', project.replace('.png', '_compressed.jpg').replace('.jpg', '_compressed.jpg'));
    await compressImage(inputPath, outputPath);
  }
}

compressImages().catch(console.error); 