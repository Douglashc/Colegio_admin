const mongoose = require('mongoose');

const tipoPersonaSchema = new mongoose.Schema({
    nombre_tipo_persona: { type: String },
    estado: { type: Boolean}
})

const tipo_persona = mongoose.model('tipo_persona', tipoPersonaSchema);

module.exports = tipo_persona;