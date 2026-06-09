const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = 'c:\\xampp\\htdocs\\cambridge_website\\cambridge_bronchure\\Cambridge Education Consultants (Broucher).pdf';

try {
  const instance = new pdf.PDFParse({ verbosity: 0, url: pdfPath });
  
  instance.load().then(() => {
    instance.getText().then(textObj => {
      console.log('Type of textObj:', typeof textObj);
      console.log('Constructor name:', textObj.constructor.name);
      console.log('Keys:', Object.keys(textObj));
      
      // Let's inspect some properties or methods
      if (textObj.pages) {
        console.log('Number of pages:', textObj.pages.length);
        if (textObj.pages[0]) {
          console.log('Page 0 keys:', Object.keys(textObj.pages[0]));
          console.log('Page 0 text snippet:', textObj.pages[0].text ? textObj.pages[0].text.substring(0, 200) : 'No text property');
        }
      }
      
      // Or maybe there is a toString method
      const strVal = textObj.toString();
      console.log('toString length:', strVal.length);
      console.log('toString snippet:', strVal.substring(0, 300));
      
      process.exit(0);
    }).catch(err => {
      console.error("getText failed:", err);
      process.exit(1);
    });
  }).catch(err => {
    console.error("load failed:", err);
    process.exit(1);
  });
} catch (e) {
  console.error("Execution failed:", e);
  process.exit(1);
}
