var mongoose = require('mongoose');

var plantaSchema = new mongoose.Schema({
    _id: Number,
    numeroRegisto: Number,
    codigoRua: String,
    rua: String,
    local: String,
    freguesia: String,
    especie: String,
    nomeCientifico: String,
    origem: String,
    dataPlantacao: String,
    estado: String,
    caldeira: String,
    tutor: String,
    implantacao: String,
    gestor: String,
    dataAtualizacao: String,
    numeroIntervencoes: Number,
  });


module.exports = new mongoose.model('planta',plantaSchema);