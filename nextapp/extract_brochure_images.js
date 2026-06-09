const fs = require('fs');
const path = require('path');
const { exportImages } = require('pdf-export-images');

const pdfPath = 'c:\\xampp\\htdocs\\cambridge_website\\cambridge_bronchure\\Cambridge Education Consultants (Broucher).pdf';
const outputDir = 'c:\\xampp\\htdocs\\cambridge_website\\nextapp\\public\\assets\\brochure-gallery';

if (!fs.existsSync(pdfPath)) {
  console.error('PDF not found at:', pdfPath);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

console.log('Starting image extraction from PDF...');

exportImages(pdfPath, outputDir)
  .then((images) => {
    console.log('Successfully extracted images:', images.length);
    images.forEach((img, idx) => {
      console.log(`Image ${idx}: Name = ${img.name}, Path = ${img.path || ''}`);
    });
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error extracting images:', err);
    process.exit(1);
  });
