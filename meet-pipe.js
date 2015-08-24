//call fs module
fs = require('fs');
//create var to store filename
var file = process.argv[2];

fs.createReadStream(file).pipe(process.stdout);

