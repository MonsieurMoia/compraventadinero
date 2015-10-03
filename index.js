//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

//Express
var app = express();
app.set('port', (process.env.PORT || 3000));

// app.use(bodyParser.urlencoded({ extended:true }));
// app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
// app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');
// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

//Routes
var getPathsFor = require('./routes/pathsController.js');
getPathsFor(app);

// Start Server
app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});
