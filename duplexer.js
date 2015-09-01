var spawn = require('child_process').spawn;
var duplex = require('duplexer');

module.exports = function (cmd, args) { 
	var something = spawn(cmd,args);

	return duplex(something.stdin,something.stdout);	
};