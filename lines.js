//call necessary modules
var through = require('through2');
var split = require('split');

// create stream function
var stream = through(write);

//set up counter that will keep track of odd and even lines
var counter = 1;

//create write and end functions
function write(buffer, encoding, next){
	//change buffer to string
	var string = buffer.toString();

	if(counter % 2 === 0){
		this.push(string.toUpperCase() + '\n');				
		// next();
	} else {
		this.push(string.toLowerCase() + '\n');
		// next();
	};

	counter++;
	next();
		
}

//function end(done) {
//	done();
//}

process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout)
;


//var through = require('through2');
//var split = require('split');
//
//var lineCount = 0;
//var tr = through(function (buf, _, next) {
//    var line = buf.toString();
//    this.push(lineCount % 2 === 0
//        ? line.toLowerCase() + '\n'
//        : line.toUpperCase() + '\n'
//    );
//    lineCount ++;
//    next();
//});
//process.stdin
//    .pipe(split())
//    .pipe(tr)
//    .pipe(process.stdout)
//;

