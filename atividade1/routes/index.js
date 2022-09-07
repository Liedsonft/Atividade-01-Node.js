var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!global.livro) global.livro = [];
  res.render('index', { title: 'Livros', livro: global.livro});
  
});

module.exports = router;
