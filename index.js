
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Users = require('./js/controllers/usersController.js');
var Paths = require('./routes/pathsController.js');
var Main = require("./build/js/main.js");

console.log(Main);

console.log(typeof(Users.newUser));

// Users.newUser("jesus","kwjebnwnleckw");


// var mongoUri = process.env.MONGOLAB_URI ||
//   'mongodb://admin:admin@ds051740.mongolab.com:51740/compraventa';

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://admin:admin@ds051740.mongolab.com:51740/compraventa', function (error) {
    if (error) {
        console.log(error);
    }
});

// Bootstrap express
//Express
var app = express();

app.set('views', __dirname + '/views');
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// URLS management
Paths(app);

// Start the server
app.listen(5000);
console.log('Listening on port 5000');
