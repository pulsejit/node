const path = require('path'); // as it's a core module so we don't have to pass like ./path

// base file name
// console.log(path.basename(__filename));

// directory name
// console.log(path.dirname(__filename));

// file extension
// console.log(path.extname(__filename));

// path object
// console.log(path.parse(__filename));

// joining paths
console.log(path.join(__filename, '/var'));