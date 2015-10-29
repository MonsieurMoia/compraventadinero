
var express = require('express');
var router = express.Router();

// Get Registro
router.get('/', function (req, res) {
  res.render('registro', {title: "Registrarse"});
});

module.exports = router;
