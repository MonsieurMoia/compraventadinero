
//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var mongoUri = process.env.MONGOLAB_URI ||
  'mongodb://admin:admin@ds051740.mongolab.com:51740/compraventa';

// Mongoose connection to MongoDB (ted/ted is readonly)
mongoose.connect('mongodb://admin:admin@ds051740.mongolab.com:51740/compraventa', function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var Schema = mongoose.Schema;
var CursoSchema = new Schema({
    nombrecurso: String,
    capitulos: String,
    texto: String
});

// Mongoose Model definition
var Curso = mongoose.model('cursos', CursoSchema);

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

app.get('/', function (req, res) {
    res.render('index');
    res.send("<a href='/cursos'>Show Cursos</a>");
});

app.get('/cursos', function (req, res) {
    Curso.find( function (err, cursos) {
        res.render('cursos', {
              titulo: "Todos los Cursos",
              cursos: cursos
            });
        // res.send(docs);
    });
});

app.get('/cursos/:_id', function (req, res) {
    if (req.params._id) {
        Curso.find({ _id: req.params._id }, function (err, curso) {
            res.render('curso', {
              titulo: "El curso",
              curso: curso
            });
            // res.send(curso);
        });
    }
});

// Start the server
app.listen(5000);
console.log('Listening on port 5000');
