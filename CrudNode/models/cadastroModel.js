const mongoose = require('mongoose');

const cadastroSchema = new mongoose.Schema({
    id: Number,
    Nome: String,
    Sobrenome: String,
    ano: Number,
    Telefone: Number,
    Endereço: String,
    Cidade: String,
    Estado: String,
    Status: Boolean
});

module.exports = mongoose.model('users', cadastroSchema);