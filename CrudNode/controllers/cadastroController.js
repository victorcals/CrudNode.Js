const cadastroModel = require('../models/cadastroModel');

class cadastroController {
    async salvar(req, res) {
        let cadastro = req.body;
        const max = await cadastroModel.findOne({}).sort({ id: -1 });
        cadastro.id = max == null ? 1 : max.id + 1;
        const resultado = await cadastroModel.create(cadastro);
        res.status(201).json(resultado);
    }


    async listar(req, res) {
        const resultado = await cadastroModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorNome(req, res) {
        const nome = req.params.nome;
        const resultado = await cadastroModel.findOne({ 'nome': nome });
        res.status(200).json(resultado);
    }

    async buscarPorSobrenome(req, res) {
        const sobrenome = req.params.sobrenome;
        const resultado = await cadastroModel.findOne({ 'sobrenome': sobrenome });
        res.status(200).json(resultado);
    }  
    
    async buscarPorCidade(req, res) {
        const cidade = req.params.cidade;
        const resultado = await cadastroModel.findOne({ 'cidade': cidade });
        res.status(200).json(resultado);
    }  

    async buscarPorEstado(req, res) {
        const estado = req.params.estado;
        const resultado = await cadastroModel.findOne({ 'estado': estado });
        res.status(200).json(resultado);
    }  

    async buscarPorStatus(req, res) {
        const status = req.params.status;
        const resultado = await cadastroModel.findOne({ 'status': status });
        res.status(200).json(resultado);
    } 

    async buscarPorId(req, res) {
        const id = req.params.id;
        const resultado = await cadastroModel.findOne({ 'id': id });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const _id = String((await cadastroModel.findOne({ 'id': id }))._id);
        await cadastroModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.id;
        const _id = String((await cadastroModel.findOne({ 'id': id }))._id);
        await cadastroModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new cadastroController();