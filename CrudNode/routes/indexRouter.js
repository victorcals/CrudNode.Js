var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Esse Forms não está funcionando, realizar o cadastro via Postman' });
});

module.exports = router;