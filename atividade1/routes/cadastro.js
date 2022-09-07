var express = require('express');
var router = express.Router();

/* GET cadastro. */
router.get('/', function(req, res, next) {
  res.render('cadastro',{});
});

/* POST cadastro. */
router.post('/', function(req, res, next) {
    global.livro.push({titulo: req.body.titulo, autor: req.body.autor, ano: req.body.ano})
    res.redirect('/');
  });
  

module.exports = router;