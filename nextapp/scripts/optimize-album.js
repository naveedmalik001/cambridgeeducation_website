const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_GALLERY_DIR = path.join(__dirname, '../../album');
const SOURCE_OFFICE_DIR = path.join(__dirname, '../../album/office album');

const TARGET_GALLERY_DIR = path.join(__dirname, '../public/assets/gallery-new');
const TARGET_CEO_DIR = path.join(__dirname, '../public/assets/ceo');
const TARGET_OFFICE_DIR = path.join(__dirname, '../public/assets/office');

// Ensure target directories exist
[TARGET_GALLERY_DIR, TARGET_CEO_DIR, TARGET_OFFICE_DIR].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created target directory: ${dir}`);
  }
});

// Original gallery images to process
const galleryImages = [
  {
    input: 'IMG-20251014-WA0091.jpg.jpeg',
    output: 'gallery-1.webp',
    rotate: null
  },
  {
    input: 'IMG-20251019-WA0046.jpg.jpeg',
    output: 'gallery-2.webp',
    rotate: null
  },
  {
    input: 'IMG-20260529-WA0122.jpg.jpeg',
    output: 'gallery-3.webp',
    rotate: null
  },
  {
    input: 'IMG_20251017_125915.jpg.jpeg',
    output: 'gallery-4.webp',
    rotate: 180
  },
  {
    input: 'IMG_20251017_131108.jpg.jpeg',
    output: 'gallery-5-fixed.webp',
    rotate: 90
  },
  {
    input: 'IMG_20251017_131905.jpg.jpeg',
    output: 'gallery-6-fixed.webp',
    rotate: 90
  },
  {
    input: 'IMG_20251017_133929.jpg.jpeg',
    output: 'gallery-7.webp',
    rotate: null
  },
  {
    input: 'IMG_20251017_162542.jpg.jpeg',
    output: 'gallery-8.webp',
    rotate: null
  },
  {
    input: 'IMG_20251018_143456.jpg.jpeg',
    output: 'gallery-9.webp',
    rotate: null
  },
  {
    input: '20260524_161127(0).jpg.jpeg',
    output: 'gallery-10.webp',
    rotate: null
  }
];

// New CEO and Office images to process
const officeImages = [
  {
    input: 'Mr. Suhail Wahid Malik CEO - Cambridge.jpeg',
    output: 'ceo-suhail-wahid.webp',
    targetDir: TARGET_CEO_DIR,
    width: 1000,
    rotate: null
  },
  {
    input: 'WhatsApp Image 2026-06-08 at 2.16.04 PM (1).jpeg',
    output: 'office-1.webp',
    targetDir: TARGET_OFFICE_DIR,
    width: 1000,
    rotate: null
  },
  {
    input: 'WhatsApp Image 2026-06-08 at 2.16.04 PM.jpeg',
    output: 'office-2.webp',
    targetDir: TARGET_OFFICE_DIR,
    width: 1000,
    rotate: null
  },
  {
    input: 'WhatsApp Image 2026-06-08 at 2.18.24 PM.jpeg',
    output: 'office-3.webp',
    targetDir: TARGET_OFFICE_DIR,
    width: 1000,
    rotate: null
  },
  {
    input: 'WhatsApp Image 2026-06-08 at 2.18.39 PM.jpeg',
    output: 'office-4.webp',
    targetDir: TARGET_OFFICE_DIR,
    width: 1000,
    rotate: null
  },
  {
    input: 'WhatsApp Image 2026-06-08 at 2.19.35 PM.jpeg',
    output: 'office-5.webp',
    targetDir: TARGET_OFFICE_DIR,
    width: 1000,
    rotate: null
  },
  {
    input: 'WhatsApp Image 2026-06-08 at 2.20.24 PM.jpeg',
    output: 'office-6.webp',
    targetDir: TARGET_OFFICE_DIR,
    width: 1000,
    rotate: null
  }
];

async function processImage(img, sourceDir, targetDir) {
  const inputPath = path.join(sourceDir, img.input);
  const outputPath = path.join(targetDir, img.output);

  if (!fs.existsSync(inputPath)) {
    console.error(`Error: Source file not found: ${inputPath}`);
    return false;
  }

  console.log(`Processing: ${img.input} -> ${img.output}`);
  try {
    let pipeline = sharp(inputPath);

    // Apply rotation if explicitly provided, else auto-orient
    if (img.rotate !== undefined && img.rotate !== null) {
      pipeline = pipeline.rotate(img.rotate);
      console.log(`  - Applied rotation of ${img.rotate} degrees`);
    } else {
      pipeline = pipeline.rotate(); // Auto-orient
    }

    // Resize keeping aspect ratio
    const targetWidth = img.width || 1200;
    pipeline = pipeline.resize({
      width: targetWidth,
      withoutEnlargement: true,
      fit: 'inside'
    });

    // Compress to webp format
    await pipeline
      .webp({ quality: 80 })
      .toFile(outputPath);

    const oldStats = fs.statSync(inputPath);
    const newStats = fs.statSync(outputPath);
    const reduction = ((oldStats.size - newStats.size) / oldStats.size * 100).toFixed(1);

    console.log(`  - Success! Size: ${(oldStats.size / 1024).toFixed(1)} KB -> ${(newStats.size / 1024).toFixed(1)} KB (Reduced by ${reduction}%)`);
    return true;
  } catch (err) {
    console.error(`  - Failed to process image ${img.input}:`, err.message);
    return false;
  }
}

async function run() {
  console.log('--- Starting Image Optimization Process ---');
  let successCount = 0;

  // 1. Process Gallery Images (only if they exist)
  console.log('\nChecking gallery images...');
  for (const img of galleryImages) {
    const success = await processImage(img, SOURCE_GALLERY_DIR, TARGET_GALLERY_DIR);
    if (success) successCount++;
  }

  // 2. Process CEO & Office Images
  console.log('\nChecking office and CEO images...');
  for (const img of officeImages) {
    const success = await processImage(img, SOURCE_OFFICE_DIR, img.targetDir);
    if (success) successCount++;
  }

  console.log(`\nOptimization completed. Successfully processed ${successCount} images.`);
}

run();
