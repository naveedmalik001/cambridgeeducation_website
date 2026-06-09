const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = 'c:\\xampp\\htdocs\\cambridge_website\\cambridge_bronchure\\Cambridge Education Consultants (Broucher).pdf';
const outputTextPath = path.join(__dirname, 'brochure_text.txt');

if (!fs.existsSync(pdfPath)) {
  console.error('PDF not found at:', pdfPath);
  process.exit(1);
}

const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
  fs.writeFileSync(outputTextPath, data.text);
  console.log('Text extracted successfully to:', outputTextPath);
  console.log('Total pages:', data.numpages);
}).catch(err => {
  console.error('Error parsing PDF:', err);
});
