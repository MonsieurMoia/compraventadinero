//Dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.send('Hello Im working');
});

app.listen( process.env.PORT || 3000 );
console.log("Running");
