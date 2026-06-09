import fs from 'fs';
import path from 'path';
import { getDocument, OPS } from 'pdfjs-dist/legacy/build/pdf.mjs';
import sharp from 'sharp';

const pdfPath = 'c:\\xampp\\htdocs\\cambridge_website\\cambridge_bronchure\\Cambridge Education Consultants (Broucher).pdf';
const outputDir = 'c:\\xampp\\htdocs\\cambridge_website\\nextapp\\public\\assets\\brochure-gallery';

if (!fs.existsSync(pdfPath)) {
  console.error('PDF not found at:', pdfPath);
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function extractImages() {
  console.log('Loading PDF document...');
  const doc = await getDocument(pdfPath).promise;
  const pageCount = doc.numPages;
  console.log(`PDF loaded successfully. Total pages: ${pageCount}`);

  for (let p = 1; p <= pageCount; p++) {
    const page = await doc.getPage(p);
    const ops = await page.getOperatorList();
    console.log(`Processing Page ${p}/${pageCount}...`);

    for (let i = 0; i < ops.fnArray.length; i++) {
      if (ops.fnArray[i] === OPS.paintImageXObject || ops.fnArray[i] === OPS.paintInlineImageXObject) {
        const name = ops.argsArray[i][0];
        
        let img = null;
        let isCommon = false;
        
        // Polling loop to wait for the pdfjs-dist worker to resolve the image object
        for (let retry = 0; retry < 50; retry++) {
          isCommon = page.commonObjs.has(name);
          try {
            img = isCommon ? page.commonObjs.get(name) : page.objs.get(name);
            if (img) break;
          } catch (e) {
            if (e.message && e.message.includes("resolved yet")) {
              await new Promise(r => setTimeout(r, 100));
            } else {
              throw e;
            }
          }
        }

        if (!img) {
          console.warn(`  [Warning] Could not resolve image ${name} on page ${p}`);
          continue;
        }

        const { width, height } = img;
        const bytes = img.data.length;
        const channels = bytes / width / height;

        if (!(channels === 1 || channels === 3 || channels === 4)) {
          // Skip invalid channels (like metadata streams or non-image objects)
          continue;
        }

        const filename = `page-${p}-${name}.png`;
        const destFile = path.join(outputDir, filename);

        try {
          await sharp(img.data, {
            raw: { width, height, channels }
          }).toFile(destFile);
          console.log(`  [Extracted] Saved page ${p} image -> ${filename}`);
        } catch (err) {
          console.error(`  [Error] Failed to save image ${filename}:`, err.message);
        }
      }
    }
  }
}

extractImages()
  .then(() => {
    console.log('Successfully completed image extraction!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Image extraction failed:', err);
    process.exit(1);
  });
