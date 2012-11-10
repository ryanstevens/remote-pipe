
var fs = require('fs'),
	end = parseInt(process.argv[2]),
	file = fs.createWriteStream("test.out", {'flags': 'a'});
	itr = 0;

(function write() {
	if (itr === end) process.exit();

	file.write('\nFile written '+ (itr++), function() {
	    setTimeout(write, 50);
	}); 
})();