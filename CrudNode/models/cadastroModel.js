const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    ano: Number,
    telefone: Number,
    endereço: String,
    cidade: String,
    estado: String,
    status: Boolean
});

module.exports = mongoose.model('users', userSchema);