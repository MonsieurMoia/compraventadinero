var express = require('express');
var router = express.Router();

// Get Form New Cursos
router.get('/', function (req, res) {
  res.render('partials/form_cursos', {title: "Bienvenidos"});
});

module.exports = router;
