const fs = require('fs');
const path = require('path');

const pdfPath = path.resolve('c:/xampp/htdocs/cambridge_website/cambridge_bronchure/Cambridge Education Consultants (Broucher).pdf');

if (!fs.existsSync(pdfPath)) {
  console.log("PDF not found at:", pdfPath);
  process.exit(1);
}

console.log("Scanning PDF binary for keywords...");
const buffer = fs.readFileSync(pdfPath);
const contentString = buffer.toString('binary'); // convert to binary string

const countries = [
  'Tajikistan', 'Kazakhstan', 'Kyrgyzstan', 'Georgia', 'Bangladesh', 'Uzbekistan', 
  'Iran', 'Russia', 'Philippines', 'China', 'Ukraine', 'Armenia', 'Nepal',
  'USA', 'Canada', 'United Kingdom', 'UK', 'Ireland', 'Germany', 'France', 
  'Italy', 'Spain', 'Poland', 'Australia', 'New Zealand', 'Malaysia', 'Singapore'
];

const results = {};
countries.forEach(country => {
  // Simple regex search in binary content
  const regex = new RegExp(country, 'gi');
  const matches = contentString.match(regex);
  results[country] = matches ? matches.length : 0;
});

console.log("Country mention counts in PDF:");
console.log(JSON.stringify(results, null, 2));
