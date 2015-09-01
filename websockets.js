var ws = require('websocket-stream');

var stream = ws('ws://localhost:8099');

var string = "hello\n";

stream.end(string);


