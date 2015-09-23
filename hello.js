var http = require('http');

http.createServer(function(request,response) {
  response.writeHead(200); // Status Code in Header
  response.write("Hello, this is an awesome start"); // Response Body
  response.end(); // Close Connection
}).listen(8080); // Listen for connections on this port

console.log('Listening on port 8080 ....');