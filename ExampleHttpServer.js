var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {
  var pathname = url.parse(req.url).pathname;
    console.log("pathname = "+ pathname);

    var filename = pathname.substring(1);
    fs.readFile(filename, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(data.toString());
        }
        res.end();
    });

});


server.listen(8080);

console.log("Server is listening on port 8080");