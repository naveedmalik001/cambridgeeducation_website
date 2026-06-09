const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const INPUT_IMAGE = path.join(__dirname, '../public/assets/logo/logo_circle.jpeg');
const OUTPUT_PNG = path.join(__dirname, '../app/icon.png');
const OUTPUT_ICO = path.join(__dirname, '../app/favicon.ico');

async function processIcons() {
  if (!fs.existsSync(INPUT_IMAGE)) {
    console.error('Source circular logo image not found:', INPUT_IMAGE);
    return;
  }

  console.log('Generating favicon assets...');
  try {
    // 1. Convert logo_circle.jpeg to a 48x48 PNG icon.png in app directory
    // This allows Next.js to auto-detect and generate high-definition link tags for modern browsers
    await sharp(INPUT_IMAGE)
      .resize(48, 48)
      .png()
      .toFile(OUTPUT_PNG);
    console.log('  - Generated nextapp/app/icon.png (48x48 PNG)');

    // 2. Overwrite nextapp/app/favicon.ico with the circular logo
    // Legacy support for browser bookmark bar queries
    if (fs.existsSync(OUTPUT_ICO)) {
      fs.unlinkSync(OUTPUT_ICO);
      console.log('  - Removed old favicon.ico');
    }
    
    await sharp(INPUT_IMAGE)
      .resize(32, 32)
      .png()
      .toFile(OUTPUT_ICO);
    console.log('  - Generated nextapp/app/favicon.ico (32x32 PNG)');
    
    console.log('Favicon update completed successfully!');
  } catch (err) {
    console.error('Error processing favicon:', err.message);
  }
}

processIcons();
