
var express = require('express');
var router = express.Router();
var Curso = require("../js/controllers/cursosController.js");


// Get Cursos

router.get('/', function (req, res) {
    Curso.find( function (err, cursos) {
        res.render('cursos', {
              titulo: "Todos los Cursos",
              cursos: cursos
            });
        // res.send(docs);
    });
});

router.get('/:_id', function (req, res) {
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

module.exports = router;
