
var express = require('express');
var router = express.Router();

// Get Entrar
router.get('/', function (req, res) {
  res.render('entrar', {titulo: "Ingresar"});
});

module.exports = router;
