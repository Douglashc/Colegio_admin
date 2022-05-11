const mongoose = require('mongoose');

const Colegio = require("./Colegio");

const cursoSchema = new mongoose.Schema({
    nombreCurso: { type: String },
    paralelo: { type: String},
    colegioID: { type: mongoose.ObjectId, ref: Colegio }
})

const curso = mongoose.model('curso', cursoSchema);

module.exports = curso;
