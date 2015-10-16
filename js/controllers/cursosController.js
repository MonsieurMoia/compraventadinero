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
  console.log(cursos);
});

Curso.newCurso = function(nombre, descripcion){

  console.log("Me estoy corriendo");
  // create a new user
  var newCurso = Curso({
    nombre: nombre,
    descripcion: descripcion
  });

  // save the user
  newCurso.save(function(err) {
    if (err)
    {
      throw err;
      console.log('Errrrrrooooooor');
    }
    console.log('User created!');
  });
}


module.exports = Curso;
