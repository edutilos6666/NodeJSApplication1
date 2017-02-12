var net = require('net')

var server = net.createServer()

var clientList = []

server.on('connection' , function(client) {
    client.name = client.remoteAddress + ' : ' + client.remotePort
    clientList.push(client)

    client.on('data' , function(data) {
       broadcast(client, data)
    })

    client.on('end', function() {
       clientList.splice(clientList.indexOf(client), 1)
    })

    client.on('error', function(e) {
         console.log(e)
    })
})


function broadcast(client , data) {
    for(var i=0 ; i< clientList.length; ++i) {
        if(client != clientList[i]) {
            if(clientList[i].writable) {
                clientList[i].write(data)
            } else {
                clientList[i].destroy()
            }
        }
    }
}

server.listen(9000)

console.log('sevrer is listening on port 9000')