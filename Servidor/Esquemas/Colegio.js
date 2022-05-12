const mongoose = require('mongoose');

const colegioSchema = new mongoose.Schema({
    nombreColegio: { type: String },
    direccion: { type: String },
    telefono: { type: String}
})

const colegio = mongoose.model('colegio', colegioSchema);

module.exports = colegio;