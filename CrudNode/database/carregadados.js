require("./mongodb");
const mongoose = require("mongoose");
const cadastros = require("./usuarios.json");
const cadastroModel = require("../models/cadastroModel");

async function carregarDados() {
    try {
        await cadastroModel.deleteMany({});
        for (const cadastro of cadastros) {
            await cadastroModel.create(cadastro);
        }
        console.log("Carga de filmes feita!");
    } catch (err) {
        console.log(err);
    } finally {
        process.exit();
    }
}

carregarDados();