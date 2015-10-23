//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cursoSchema = require('../../schemas/cursoSchema.js');

//---------------------------------------------------
// Schema para cursos
var curso = new Schema(cursoSchema);

// modelo para usuarios
var Curso = mongoose.model('cursos', curso);

// get all the users
Curso.find({}, function(err, cursos) {
  if (err) throw err;

  // object of all the users
  // console.log(cursos);
});

Curso.newCurso = function(body){

  console.log("Me estoy corriendo");
  // create a new user
  // var newCurso = Curso({
  //   nombrecurso: body.nombrecurso,
  //   pasos: {contenido:body.paso},
  //   descripcion: body.descripcion
  // });

  var curso = new Curso();
  curso.nombrecurso = body.nombrecurso;
  for (var i = 0; i < body.paso.length; i++) {
    curso.pasos.push({contenido:body.paso[i]})
  }
  curso.descripcion = body.descripcion;

  // save the user
  curso.save(function(err) {
    if (err)
    {
      throw err;
      console.log('Errrrrrooooooor');
    }
    console.log('Curso created!');
  });
}


module.exports = Curso;
