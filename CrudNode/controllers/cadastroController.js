const Cadastro = require('../models/cadastroModel');


exports.create = (req, res) => {
    const { Nome, Sobrenome, ano, Telefone, Endereço, Cidade, Estado, Status } = req.body;

    const novoCadastro = new Cadastro({
        Nome,
        Sobrenome,
        ano,
        Telefone,
        Endereço,
        Cidade,
        Estado,
        Status
    });

    novoCadastro.save()
        .then(() => {
            res.status(201).json({ message: 'Cadastro criado com sucesso' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Ocorreu um erro ao criar o cadastro' });
        });
};