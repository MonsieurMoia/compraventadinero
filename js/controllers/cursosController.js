//Dependencias
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var cursoSchema = require('../../schemas/cursoSchema.js');
var fs = require('fs');

// Chicken Charlie----------------------------------
var AWS = require('aws-sdk');
// //-----------------------------------------------

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

// Chicken charlie --------------------------------
// Los keys - hay que meter esto en variables por seguridad jeje
AWS.config.update({ accessKeyId: 'AKIAJLYZOLEFPPC2TSRA', secretAccessKey: '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' });

// leer el archivo y preparamos el steam para guardarlo
// var fileStream = fs.createReadStream(body.adjunto.path); // Ocupamos path aqui
var fileStream = fs.createReadStream('/Users/Beta/Pictures/X.jpeg');
fileStream.on('error', function (err) {
  if (err) { throw err; }
});

//abrimos el stream y procedemos a guardar.

fileStream.on('open', function () {
  var s3 = new AWS.S3();

  var params = {
              Bucket: 'compraventa',
              Key: body.adjunto,
              Body: "Funciona"
          };

          s3.putObject(params, function (perr, pres) {
              if (perr) {
                  console.log("Hubo un error al subir el archivo: ", perr);
              } else {
                  console.log("Su archivo se guardó con éxito!");
              }
          });
        });

  //-----------------------------------------------------

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
