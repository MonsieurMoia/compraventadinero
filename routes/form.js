var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Curso = require('../js/controllers/cursosController.js');



/* GET form. */
router.get('/', function(req, res) {
  res.render('nuevo_curso', { titulo: 'Formulario' });
  console.log(req.body);
});

/* POST form. */
router.post('/', function(req, res) {

  Curso.newCurso(req.body);
  // .save(function(err, nombrecurso) {
  //   console.log(nombrecurso);
  //   res.redirect('form');
  // });
  res.redirect('nuevo_curso');
});


module.exports = router;
