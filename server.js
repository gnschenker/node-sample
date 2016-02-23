var http = require('http')
var moment = require('moment');
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  var dt = moment().format();
  res.end('Node JS says "Hello World"\n' + dt);
}).listen(port);
