const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    ano: { type: Number, required: true },
    telefone: { type: String, required: true },
    endereco: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    status: { type: Boolean, required: true }
});

const Cadastro = mongoose.model('Cadastro', cadastroSchema);

module.exports = Cadastro;
