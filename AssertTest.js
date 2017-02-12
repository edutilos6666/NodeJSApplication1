var http = require('http')
var assert = require('assert')


var opts = {
    host: 'localhost',
    port: 8080,
    url: '/send',
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'}
}


var req = http.request(opts, function(res) {
    res.setEncoding('utf8')
    var d = ""
    res.on('data', function(data) {
        d+= data
    })

    res.on('end', function() {
      //  assert.strictEqual(d , '{"status":"ok", "msg":"received"}')
       console.log(d)
    })
})


req.write('tweet=test')
req.end()


