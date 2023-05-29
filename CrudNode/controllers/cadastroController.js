const Cadastro = require('../models/cadastroModel');

exports.create = (req, res) => {
    const { nome, sobrenome, ano, telefone, endereco, cidade, estado, status } = req.body;

    const novoCadastro = new Cadastro({
        nome,
        sobrenome,
        ano,
        telefone,
        endereco,
        cidade,
        estado,
        status
    });

    novoCadastro.save()
        .then(() => {
            res.status(201).json({ message: 'Cadastro criado com sucesso' });
        })
        .catch((error) => {
            res.status(500).json({ error: 'Ocorreu um erro ao criar o cadastro' });
        });
};

exports.listar = (req, res) => {
    Cadastro.find({})
        .then((cadastros) => {
            res.status(200).json(cadastros);
        })
        .catch((error) => {
            res.status(500).json({ error: 'Ocorreu um erro ao listar os cadastros' });
        });
}