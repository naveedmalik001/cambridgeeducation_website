const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.resolve('c:/xampp/htdocs/cambridge_website/cambridge_bronchure/Cambridge Education Consultants (Broucher).pdf');

if (!fs.existsSync(pdfPath)) {
  console.log("PDF not found at:", pdfPath);
  process.exit(1);
}

try {
  const instance = new pdf.PDFParse({ verbosity: 0, url: pdfPath });
  console.log("instance created successfully!");
  
  instance.load().then(() => {
    console.log("Loaded successfully!");
    // getText returns a Promise
    instance.getText().then(text => {
      console.log("text resolved type:", typeof text, text);
      if (text) {
        console.log("keys of text:", Object.keys(text));
      }
      process.exit(0);
      
      const countries = [
        'Tajikistan', 'Kazakhstan', 'Kyrgyzstan', 'Georgia', 'Bangladesh', 'Uzbekistan', 
        'Iran', 'Russia', 'Philippines', 'China', 'Ukraine', 'Armenia', 'Nepal',
        'USA', 'Canada', 'United Kingdom', 'UK', 'Ireland', 'Germany', 'France', 
        'Australia', 'New Zealand', 'Malaysia', 'Singapore'
      ];
      
      console.log("\nSearching country mentions:");
      countries.forEach(c => {
        const regex = new RegExp('\\b' + c + '\\b', 'gi');
        const matches = text.match(regex);
        console.log(`${c}: ${matches ? matches.length : 0}`);
      });
    }).catch(err => {
      console.log("getText failed:", err);
    });
  }).catch(err => {
    console.log("Load failed:", err);
  });
} catch (e) {
  console.log("Creation failed:", e);
}
