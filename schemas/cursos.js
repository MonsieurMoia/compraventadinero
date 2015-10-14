var mongoose = require('mongoose');

module.exports = mongoose.model('Cursos', {
  "id": Number,
  "nombre": String,
  "descripcion": String,
  "textoPasos": String 
})
