//Dependencies
var express = require('express');
var bodyParser = require('body-parser');


app.set('port', (process.env.PORT || 3000));


//Express
var app = express();
// app.use(bodyParser.urlencoded({ extended:true }));
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

//Routes
app.get('/', function(request,response){
  // res.send('Hello Im working');
  response.render('pages/index')
});
app.get('/cool', function(request, response) {
  response.send("fuck yeah");
});

// Start Server
app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});
