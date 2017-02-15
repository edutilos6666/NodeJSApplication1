var buf1 = new Buffer("hello world");

var length = buf1.length ;
var str = buf1.toString();
var json = buf1.toJSON();


console.log("length = "+ length);
console.log("str = "+ str);
console.log("json = "+ json.toString());


buf1 = new Buffer("hello");
var buf2 = new Buffer(" ");
var buf3 = new Buffer("world");
var concat = Buffer.concat([buf1, buf2, buf3]);
console.log("concat = "+ concat.toString());


var buf4 = new Buffer(concat.length);
concat.copy(buf4);
console.log("buf4 = "+ buf4.toString());

var sliced = concat.slice(0, "hello".length);
console.log("sliced = "+ sliced);

var res = Buffer.compare(sliced, concat);
console.log("res = "+ res);
res = Buffer.compare(concat , sliced);
console.log("res = "+ res);


