var express = require('express');
var router = express.Router();

const cadastroController = require('../controllers/cadastroController');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Baby' });
});


module.exports = router;