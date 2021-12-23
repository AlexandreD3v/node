/*
* Primary file for the API
* Author: Alexandre J. Corrêa
* Date: 21/12/2021
*/

//Dependecies
var http = require('http'),
	url = require('url');

// The server should respond to all requests with a string
var server = http.createServer(function(req, res){
// Get the URL and parse ir
var parsedUrl = url.parse(req.url, true);

// Get the path
var path = parsedUrl.pathname,
	trimmedpath = path.replace(/^\/+|\/+$/g, '');

// Get the query string as a object
var queryStringObject = parsedUrl.query;

// Get de HTTP method
var method = req.method.toLowerCase();

// Get the headers as an object
var headers = req.headers;

// Send the response
	res.end('Hello\n');

// Log the request path
//console.log('Request received on path: ' + trimmedpath + ' with the method: ' + method + ' with these query string params: ', queryStringObject);
console.log('Request received with these headers: ', headers);

});


// Start the server, and have it listen on a port 3000
server.listen(3000, function(){
	console.log("The server is listening on port 3000")
});