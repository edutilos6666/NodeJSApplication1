var http = require('http');

http.createServer(function(req, resp){
    resp.writeHead(200, {'Content-Type': 'text/html'});
    resp.end("hello world by pako");
}).listen(8080);



console.log("server is listening on port 8080");
