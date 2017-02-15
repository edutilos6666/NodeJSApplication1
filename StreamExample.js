var fs = require("fs");


var data = "" ;

var readerStream = fs.createReadStream("Example1.js");
readerStream.setEncoding('utf-8');

readerStream.on('data', function(chunk){
     data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});


readerStream.on('error', function(err) {
    console.log(err);
});

//writing to stream
var writerStream = fs.createWriteStream('Output.log');
//writerStream.setEncoding('utf-8');
writerStream.write("hello world from node.js", "utf-8");
writerStream.end();

writerStream.on('finish', function() {
    console.log("writing finished.");
});

writerStream.on('error', function(err) {
    console.log(err);
});


//piping example
readerStream = fs.createReadStream("Example1.js");
writerStream = fs.createWriteStream("Output2.log");
readerStream.pipe(writerStream);
console.log("Piping done");


//chaining streams
/*
var zlib = require('zlib');
fs.createReadStream("Example2.js")
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream("compressed.gz"));
console.log("chaining finished.");
*/


/*

var zlib = require('zlib');
fs.createReadStream("compressed.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("uncompressed.txt"));
console.log("chaining finished.");*/




