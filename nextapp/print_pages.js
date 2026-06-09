const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = 'c:\\xampp\\htdocs\\cambridge_website\\cambridge_bronchure\\Cambridge Education Consultants (Broucher).pdf';

try {
  const instance = new pdf.PDFParse({ verbosity: 0, url: pdfPath });
  
  instance.load().then(() => {
    instance.getText().then(textObj => {
      console.log('--- Printing Pages ---');
      textObj.pages.forEach((page, index) => {
        console.log(`\n================ PAGE ${page.num} (Index ${index}) ================`);
        console.log(page.text);
      });
      process.exit(0);
    }).catch(err => {
      console.error(err);
      process.exit(1);
    });
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });
} catch (e) {
  console.error(e);
  process.exit(1);
}
