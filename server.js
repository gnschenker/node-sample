var moment = require('moment');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var dt = moment().format();
  res.send('Express JS says "Hello World"!<br>' + dt);
});

var port = process.env.PORT || 1337;
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});

/*
var http = require('http')
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  var dt = moment().format();
  res.end('Node JS says "Hello World"\n' + dt);
}).listen(port);
*/
