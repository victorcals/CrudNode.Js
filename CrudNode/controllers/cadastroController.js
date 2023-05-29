const Cadastro = require('../models/cadastroModel');

exports.create = async (req, res) => {
    try {
        const { nome, sobrenome, ano, telefone, endereco, cidade, estado, status } = req.body;
        const cadastro = new Cadastro({
            nome,
            sobrenome,
            ano,
            telefone,
            endereco,
            cidade,
            estado,
            status
        });
        await cadastro.save();
        res.status(201).json({ message: 'Cadastro criado com sucesso' });
    } catch (error) {
        console.error('Erro ao criar cadastro:', error);
        res.status(500).json({ message: 'Erro ao criar cadastrOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOo' });
    }
};
