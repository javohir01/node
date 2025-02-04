const path = require('path');

console.log('File name:', path.dirname(__filename), __filename);

console.log(path.parse(__filename).base);