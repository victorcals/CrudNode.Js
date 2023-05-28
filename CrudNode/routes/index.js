var express = require('express');
var router = express.Router();

const cadastroController = require('../controllers/cadastroController');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Baby' });
});





// Listar todos os usuários
// Listar um único usuário por Codigo. 
// Listar usuários por Nome, Sobrenome, Cidade, Estado e Status.
// Deletar um usuário (Deletar do banco)

router.post('/cadastros', cadastroController.create);

// router.get('/cadastros', cadastroController.listar);

// router.get('/cadastros/:id', cadastroController.buscarPorId);

// router.put('/cadastros/:id', cadastroController.update);

// router.delete('/cadastros/:id', cadastroController.delete);

module.exports = router;
