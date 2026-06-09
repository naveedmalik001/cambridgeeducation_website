const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'c:\\xampp\\htdocs\\cambridge_website\\nextapp\\public\\assets\\brochure-gallery';
const destDir = 'c:\\xampp\\htdocs\\cambridge_website\\nextapp\\public\\assets\\gallery-optimized';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Select only actual photos (size > 100KB)
const files = fs.readdirSync(srcDir);
const photoFiles = files.filter(file => {
  const stat = fs.statSync(path.join(srcDir, file));
  return stat.size > 100000 && file.endsWith('.png');
});

console.log(`Found ${photoFiles.length} photos to optimize.`);

async function optimize() {
  for (const file of photoFiles) {
    const srcPath = path.join(srcDir, file);
    const filenameNoExt = path.basename(file, '.png');
    const destPath = path.join(destDir, `${filenameNoExt}.webp`);
    
    try {
      await sharp(srcPath)
        .resize(1000, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 80 })
        .toFile(destPath);
        
      const oldSize = (fs.statSync(srcPath).size / 1024 / 1024).toFixed(2);
      const newSize = (fs.statSync(destPath).size / 1024).toFixed(2);
      console.log(`Optimized ${file}: ${oldSize}MB -> ${newSize}KB`);
    } catch (e) {
      console.error(`Error optimizing ${file}:`, e.message);
    }
  }
  console.log('All images optimized successfully!');
}

optimize();
