var events = require('events');

var emitter = new events.EventEmitter();

var listener1 = function() {
    console.log("listener1 was invoked");
}

var listener2 = function() {
    console.log("listener2 was invoked.");
}


emitter.on("edutilos", listener1);
emitter.addListener("edutilos", listener2);
emitter.addListener("edutilos", function()  {
    console.log("anonymous listener was invoked.");
});

console.log("listener count for edutilos = "+ emitter.listenerCount("edutilos"));
emitter.emit("edutilos");
emitter.removeListener("edutilos", listener1);
console.log("listener count for edutilos = "+ emitter.listenerCount("edutilos"));



