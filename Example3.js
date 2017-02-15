var fs = require('fs');

fs.readFile('Example1.js', function(err, data) {
    if(err) return console.log(err);
    console.log(data.toString());
});



var events = require('events');

var eventTypes = ["connection_opened", "connection_closed"];

var eventEmitter = new events.EventEmitter();

eventEmitter.on(eventTypes[0], function(){
    console.log("connection opened.");
});

eventEmitter.on(eventTypes[1], function() {
    console.log("connection closed.");
});


eventEmitter.emit(eventTypes[0]);
eventEmitter.emit(eventTypes[1]);



function listener1 () {
    console.log("listener1 was invoked.");
}


function listener2() {
    console.log("listener2 was invoked.");
}

eventEmitter.addListener("edutilos",listener1);
eventEmitter.addListener("edutilos", listener2);

eventEmitter.emit("edutilos");

console.log("listener count = " + eventEmitter.listenerCount("edutilos"));

eventEmitter.removeListener("edutilos", listener1);
console.log("listener count = " + eventEmitter.listenerCount("edutilos"));

