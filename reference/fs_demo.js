const fs = require('fs');
const path = require('path');

// Create a folder
fs.mkdir(path.join(__dirname,'first'), {}, err => {
  if(err) throw err;
  console.log('Folder created...');
});