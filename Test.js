var express = require('express')
var bodyParser= require('body-parser')
var app = express()

app.listen(8080)


var tweets = []

app.get('/',function(req, res) {
  res.send("hello world by express")
})


app.post('/send', function(req, res) {
    console.log("posted")
  if(req.body && req.body.tweet) {
      tweets.push(req.body.tweet)
      res.send({'status':'ok', 'msg':'received'})
  } else {
        res.send({'status':'nok', 'msg': 'not received'})
  }
})


app.get('/tweets', function(req, res) {
    res.send(tweets)
})


console.log("Server is listening on port 8080.")