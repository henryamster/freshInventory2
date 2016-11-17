
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');

var router = express();
var server = http.createServer(router);
var app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/client/index.html');
});

app.get('/productList', function(req,res){
  res.sendfile(__dirname + '/client/productList.html');
})

app.listen(process.env.PORT, process.env.IP, function(){
  console.log('Server up and running at ' +process.env.IP + ' on port ' +process.env.PORT);
});

