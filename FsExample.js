var fs = require('fs');


/*
fs.stat('Example2.js', function(err, stats) {
    if(err) return console.log(err);
    var isDirectory = stats.isDirectory();
    var isFile = stats.isFile();
    var isSymlink = stats.isSymbolicLink();
    console.log("isDirectory = "+ isDirectory);
    console.log("isFile = "+ isFile);
    console.log("isSymlink = "+ isSymlink);
});
*/

/*
fs.readFile("Example2.js", function(err, data) {
     if(err) return console.log(err);
    console.log(data.toString());
});*/

fs.writeFile("temp.txt", "Hello World", function(err) {
    if(err) console.log(err);
});

fs.readFile("temp.txt", function(err, data){
    if(err) return console.log(err);
    console.log(data.toString());
});




fs.readdir("C:/users/edutilos/Desktop", function(err, files) {
    if(err) return console.log(err);
    files.forEach(function(file) {
        console.log(file)
    });
});
