//_dirname,
//_filename,
//require,
//console,
//buffer,
//module,
//exports

var main = require('./main');
console.log(__dirname);
console.log(__filename);
console.log(main.abc);

//Note: Checkout why the module was exported in main.js and how it was called in this file!