var inStream = process.stdin,
	request = require('request'),
	url = process.argv.pop(),
	bytes = 0;

inStream.setEncoding('utf8');
inStream.on('data', function (chunk) {

	//queue until request is complete to 
	//ensure syncronous delivery
	inStream.pause();
 	request({ 
 		method : 'POST', 
 		body: chunk,
 		url : url
 	}, function(e, r, body) {
 		bytes += chunk.length;
		inStream.resume();
 	});

});

(function status() {
	console.log(bytes + " bytes sent");
	setTimeout(status, 1000);
})();

inStream.resume();
