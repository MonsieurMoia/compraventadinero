// Database
require('./database.js');

//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongo = require('mongodb');
var mongoose = require('mongoose');
// var Users = require('./js/controllers/usersController.js');
var routes = require('./routes/index');
var cursos = require('./routes/cursos');
var form = require('./routes/form');
var formnewcursos = require('./routes/formnewcursos.js');
var stormpath = require('express-stormpath'); // Manejo de usuarios

// console.log(typeof(Users.newUser));
// Users.newUser("jesus","kwjebnwnleckw");

// var mongoUri = process.env.MONGOLAB_URI ||
//   'mongodb://admin:admin@ds051740.mongolab.com:51740/compraventa';

// Bootstrap express
//Express
var app = express();

app.set('views', __dirname + '/views');
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

// Manejo especial de usuarios.
// app.use(stormpath.init(app, {
//   apiKeyId: '3P9AQUE7UAZ9306NJ48L25YSS',
//   apiKeySecret: 'jhU2xtbYfQ7jF6E3YQbI3TC6PUrOak4iWUr7julv9xo',
//   application: 'https://api.stormpath.com/v1/applications/3mkxCG3iFhO0jjUaUNs0dR',
//   secretKey: 'uyuyuyestoessecreto',
// }));
//


// URLS management
app.use('/',routes);
app.use('/cursos', cursos);
app.use('/nuevo_curso', form);
app.use('/crear', form);
app.use('/formnewcursos', formnewcursos);


// Start the server
app.listen(5000);
console.log('Listening on port 5000');
