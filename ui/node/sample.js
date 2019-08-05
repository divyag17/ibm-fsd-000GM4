var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
 
  
  response.end("hello");
});
// var request = require("request");

// request("http://www.sitepoint.com", function(error, response, body) {
//   console.log(body);
// });

server.listen(80);
console.log("Server is listening");