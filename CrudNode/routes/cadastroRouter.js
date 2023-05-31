const express = require('express');
const router = express.Router();
const cadastroController = require('../controllers/cadastroController');




router.get('/', cadastroController.listar)
router.post('/', cadastroController.salvar)
router.get('/:id', cadastroController.buscarPorId)
router.get('/nome/:nome', cadastroController.buscarPorNome)
router.get('/sobrenome/:sobrenome', cadastroController.buscarPorSobrenome)
router.get('/cidade/:cidade', cadastroController.buscarPorCidade)
router.get('/estado/:estado', cadastroController.buscarPorEstado)
router.get('/status/:status', cadastroController.buscarPorStatus)
router.put('/:id', cadastroController.atualizar)
router.delete('/:id', cadastroController.excluir)



module.exports = router;
