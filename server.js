var moment = require('moment');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var dt = moment().format();
  var name = process.env.MY_NAME || 'unknown';
  res.send('Express JS says "Hello ' + name + '"!<br>' + dt);
});

app.get('/products', function (req, res){
  var products = {
    {"id": 1, "name": "Apples"}
    {"id": 2, "name": "Pears"}
    {"id": 3, "name": "Lemons"}
  };
  res.send(products);
});

var port = process.env.PORT || 1337;
app.listen(port, function(){
  console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
