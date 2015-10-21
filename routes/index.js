
var express = require('express');
var router = express.Router();
var Curso = require("../js/controllers/cursosController.js");

// Get Home
router.get('/', function (req, res) {
  res.render('index', {title: "Bienvenidos"});
});

module.exports = router;
