/*
* Primary file for the API
*
*
*/

//Dependecies
var http = require('http');

// The server should respond to all requests with a string
var server = http.createServer(function(rew, res){
	res.end('Hello\n');
})


// Start the server, and have it listen on a port 3000
server.listen(3000, function(){
	console.log("The server is listening on port 3000")
})