var BufferStream = require('buffer-stream');

process.stdin.resume();
process.stdin.setEncoding('utf8');
var buffer = BufferStream().buffer();


process.stdin.on('data', function (chunk) {
 	buffer.write(chunk);
});

setTimeout(function() {
	buffer.empty(process.stdout);
}, 2000);