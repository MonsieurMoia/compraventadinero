//
//Paths
//
var Curso = require("../js/controllers/cursosController.js");


var paths = function(app){
  app.get('/', function (req, res) {
    res.render('index');
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
};

module.exports = paths;
