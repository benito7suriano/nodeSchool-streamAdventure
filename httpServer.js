var http = require('http');
var through = require('through2');

var port = process.argv[2];

var server = http.createServer(function(req,res) {
	
	var stream = through(write,end);

	function write (buff, encoding, next) {
			var string = buff.toString();
			this.push(string.toUpperCase());
			next();
		}

	function end(done) {
		done();
	}

	if(req.method === 'POST'){
		req.pipe(stream).pipe(res);	
	}
	
});

server.listen(port);

