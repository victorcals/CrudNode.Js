const mongoose = require('mongoose');
const URL = 'mongodb://0.0.0.0:27017/cadastro';
const db = mongoose.connect(URL);
const con = mongoose.connection;


mongoose.connect('mongodb://localhost:27017/cadastro', {
    bufferTimeoutMS: 30000 // Aumente o tempo limite para 30 segundos (ou o valor desejado)
});
con.on('open', function () {
    console.log('Conectado ao MongoDB!');
});

con.on('error', function () {
    console.log('Erro na conexão com o MongoDB!');
});

con.on('close', function () {
    console.log('Desconetado do MongoDB!');
});

module.exports = db;