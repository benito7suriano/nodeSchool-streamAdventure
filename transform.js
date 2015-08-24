//call through2 module
through = require('through2');
//create a through stream with a 'write' and 'end' function
var stream = through(write,end);

//create write and end functions

function write(buffer, encoding, next) {
	var string = buffer.toString();
	this.push(string.toUpperCase());
	next();
};

function end(done) {
	done();
};

process.stdin.pipe(stream).pipe(process.stdout);


//var through = require('through2');
//  var tr = through(function (buf, _, next) {
//      this.push(buf.toString().toUpperCase());
//      next();
//  });
//  process.stdin.pipe(tr).pipe(process.stdout);



