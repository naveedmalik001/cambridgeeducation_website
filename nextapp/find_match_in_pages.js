const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const extractedDir = path.join(__dirname, 'public', 'assets', 'avicenna-extracted');
const refImgPath = path.join(__dirname, 'public', 'assets', 'universities', 'avicenna-tajik-state-medical-university.png');

async function searchAllPages() {
  try {
    const refMeta = await sharp(refImgPath).metadata();
    console.log(`Reference image size: ${refMeta.width}x${refMeta.height}`);

    const files = fs.readdirSync(extractedDir).filter(f => f.endsWith('.png'));

    for (const file of files) {
      const p = path.join(extractedDir, file);
      const bigMeta = await sharp(p).metadata();

      const scaleBig = 200 / bigMeta.width;
      const bigW = 200;
      const bigH = Math.round(bigMeta.height * scaleBig);
      const bigBuffer = await sharp(p).resize(bigW, bigH).removeAlpha().raw().toBuffer();

      let minErr = Infinity;
      let bestW = 0;
      let bestX = 0;
      let bestY = 0;

      // Try different widths for the crop window in the downscaled image
      for (let testW = 30; testW <= 200; testW += 10) {
        const testH = Math.round(testW * (refMeta.height / refMeta.width));
        if (testH > bigH) break;

        const refBuffer = await sharp(refImgPath).resize(testW, testH).removeAlpha().raw().toBuffer();

        for (let y = 0; y <= bigH - testH; y += 5) {
          for (let x = 0; x <= bigW - testW; x += 5) {
            let err = 0;
            for (let dy = 0; dy < testH; dy += 2) {
              for (let dx = 0; dx < testW; dx += 2) {
                const bigIdx = ((y + dy) * bigW + (x + dx)) * 3;
                const refIdx = (dy * testW + dx) * 3;

                err += Math.abs(bigBuffer[bigIdx] - refBuffer[refIdx]);
                err += Math.abs(bigBuffer[bigIdx + 1] - refBuffer[refIdx + 1]);
                err += Math.abs(bigBuffer[bigIdx + 2] - refBuffer[refIdx + 2]);
              }
            }

            const pixelsCompared = Math.ceil(testH / 2) * Math.ceil(testW / 2);
            const avgErr = err / (pixelsCompared * 3);

            if (avgErr < minErr) {
              minErr = avgErr;
              bestW = testW;
              bestX = x;
              bestY = y;
            }
          }
        }
      }

      console.log(`File: ${file} -> Best match: W=${bestW}, X=${bestX}, Y=${bestY}, AvgErr=${minErr.toFixed(2)}`);
    }
  } catch (e) {
    console.error('Error during search:', e.message);
  }
}

searchAllPages();
