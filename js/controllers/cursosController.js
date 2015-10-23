//Dependencias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cursoSchema = require('../../schemas/cursoSchema.js');
var fs = require('fs');

//---------------------------------------------------
// Asignar Schema de cursos a la variable Curso
var curso = new Schema(cursoSchema);

// Modelo de Mongoose para cursos
var Curso = mongoose.model('cursos', curso);

// Llamar todos los cursos
Curso.find({}, function(err, cursos) {
  if (err) throw err;

  // Consolear todos los curso
  // console.log(cursos);
});

// Funcion para crear nuevos cursos
// y guardarlos en Mongolab
Curso.newCurso = function(body){


  // Crear nuevo Curso
  var curso = new Curso();
  curso.nombrecurso = body.nombrecurso;
  curso.descripcion = body.descripcion;

  // Agregar pasos y adjuntos de cada paso por cantidad
  // de pasos que se hayan agregado enm el formulario de nuevos cursos
  for (var i = 0; i < body.paso.length; i++) {
    curso.pasos.push({contenido:body.paso[i]});
  };


  // Salvar Curso en Mongolab
  curso.save(function(err) {
    if (err)
    {
      throw err;
      console.log('Funco? NOP');
    }
    console.log('Curso Agregado!');
  });
}


module.exports = Curso;
