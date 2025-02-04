const fs = require('fs');
const path = require('path');
  
fs.deleteFile(path.join(__dirname,'first','helloworld.txt'), err => {
  if(err) throw err;
  console.log('File deleted...');
});
