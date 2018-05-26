/*var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(8080);

console.log('Server running on port 8080');*/

var static = require('node-static');

var file = new static.Server('.', { cache: 0, headers: {'X-Hello':'World!'} });

require('http').createServer(function (request, response) {
	request.url = "www/" + request.url;
	//console.error("www/" + request.url);
	file.serve(request, response, function (err, res) {
		if (err) { // An error as occured
			console.error("> Error serving " + request.url + " - " + err.message);
			response.writeHead(err.status, err.headers);
			response.end();
		} else { // The file was served successfully
			console.log("> " + request.url + " - " + res.message);
		}
	});
}).listen(8000);

console.log("> node-static is listening on http://127.0.0.1:8000");
