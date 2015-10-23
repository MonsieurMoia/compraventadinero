var cursoSchema = {
  nombrecurso: String,
  pasos: [{
    contenido : String,
    adjunto: { data: Buffer, contentType : String}
  }],
  descripcion: String
}

module.exports = cursoSchema;
