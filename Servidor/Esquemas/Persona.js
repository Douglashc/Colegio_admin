const mongoose = require('mongoose');

const Curso = require("./Curso");
const Tipo_Persona = require("./TipoPersona");

const personaSchema = new mongoose.Schema({
    nombrePersona: { type: String },
    apellido_paterno: { type: String},
    apellido_materno: { type: String},
    genero: { type: String, enum: ['masculino', 'femenino'], default: 'masculino' },
    fecha_nacimiento: { type: String },
    ci: { type: String },
    email: { type: String },
    celular: { type: String },
    direccion_domicilio: { type: String },
    foto: { type: String },
    estado: { type: Boolean },
    cursoID: { type: mongoose.ObjectId, ref: Curso },
    tipo_personaID: { type: mongoose.ObjectId, ref: Tipo_Persona }
})

const persona = mongoose.model('persona', personaSchema);

module.exports = persona;
