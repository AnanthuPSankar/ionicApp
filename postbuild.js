const fs = require('fs');
const path = require('path');

// Define paths
const src = path.join(__dirname, 'www', 'browser', 'index.html');
const dest = path.join(__dirname, 'www', 'index.html');

// Check if the file exists
if (fs.existsSync(src)) {
  fs.renameSync(src, dest);
  console.log('Moved index.html to root www folder.');
} else {
  console.log('index.html not found in browser folder.');
}
