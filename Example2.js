var net  = require('net')

var server = net.createServer()


server.on('connection', function(client){
    client.write('hello\n')
    client.write('bye\n')
    client.end()
})


server.listen(9000)
console.log('TCP server is listening on port 9000')