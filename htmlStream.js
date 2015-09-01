//call modules
var trumpet = require('trumpet');
var through = require('through2');

var tr = trumpet();

var transform = through(write,end);

function write (buf, _,next){

	var string = buf.toString();
	this.push(string.toUpperCase());
	
	next();
};

function end (done) {
	
	done();
};

process.stdin.pipe(tr).pipe(process.stdout);

//writing a trumpet element stream replaces the innerHtml of the
// matched element.
var stream = tr.select('.loud').createStream();
stream.pipe(transform).pipe(stream);

//var trumpet = require('trumpet');
//  var through = require('through2');
//  var tr = trumpet();
  
//  var loud = tr.select('.loud').createStream();

//  loud.pipe(through(function (buf, _, next) {
//      this.push(buf.toString().toUpperCase());
//      next();
//  })).pipe(loud);
//  
//  process.stdin.pipe(tr).pipe(process.stdout);