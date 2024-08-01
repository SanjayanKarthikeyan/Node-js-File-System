
const fs = require('fs');
const path = require('path');

const folderPath = '/Users/mrmat/OneDrive/Desktop/Node js file system'; 

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  const textFiles = files.filter((file) => {
    
    return path.extname(file).toLowerCase() === '.txt';
  });

  console.log('Text files in the folder:', textFiles);
});