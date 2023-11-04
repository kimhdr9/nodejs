const path = require('path');

// Base file name
console.log(path.basename(__filename));
// path_demo.js

// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path Object
console.log(path.parse(__filename));

console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname,'test','hello.html'));
