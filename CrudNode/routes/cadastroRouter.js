



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

// router.get('/cadastros', cadastroController.listeAll);

// router.get('/cadastros/:id', cadastroController.buscar);

// router.put('/cadastros/:id', cadastroController.update);

// router.delete('/cadastros/:id', cadastroController.delete);

module.exports = router;






// const express = require('express');
// const router = express.Router();

// // Rota para criar um cadastro
// router.post('/', (req, res) => {
//     // Lógica para criar um cadastro
//     res.send('Rota de criação de cadastro');
// });

// // Rota para listar todos os cadastros
// router.get('/', (req, res) => {
//     // Lógica para listar os cadastros
//     res.send('Rota de listagem de cadastros');
// });

// module.exports = router;
