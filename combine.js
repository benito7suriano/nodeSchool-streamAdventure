//call the combiner module

var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

module.exports = function () {

var genres;	
var input = through(write,end);

	return combine(
			split(),
			input,
			zlib.createGzip());


	function write(buf, _, next) {
		if (buf.length === 0) return next();

		var row = JSON.parse(buf);

		if(row.type === 'genre') {

			if (genres) {
				this.push(JSON.stringify(genres) + '\n');
			}

			genres = {
				name : row.name,
				books : []
			};	
			
		} 
		else if (row.type === 'book') {

			genres.books.push(row.name);
		}

		next();
	}

	function end(next) {
		if (genres) { 
			this.push(JSON.stringify(genres) + '\n');
		};
		next();
	}
};


