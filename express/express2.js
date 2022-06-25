var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("Hello world! express");
});

app.listen(3002);