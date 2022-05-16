const rutas = require('express').Router();

const TipoPersona = require('../Esquemas/TipoPersona');

//Retornar todos los registros de Tipo Persona
rutas.get('/', (req, res) => {
    TipoPersona.find({}).exec()
    .then((list)=>{
        res.json(list);
        console.log(res)
    })
    .catch((error) => console.log(error))
});

//Registro de nuevo Tipo Persona
rutas.post('/', (req, res) => {
    TipoPersona.create(req.body)
    .then((list) =>{
        res.send(list);
        console.log('Registro de Tipo Persona exitoso')
    })
    .catch((error) => console.log(error))
});

//Obtener un solo dato de Tipo Persona para editar
rutas.get('/:id', (req, res) => {
    TipoPersona.findById({ _id: req.params.id }).exec()
    .then((list) =>{
        res.json(list);
        console.log(res)
    })
    .catch((error) => console.log(error))
});

//Actualizar datos de Tipo Persona
rutas.put('/:id', (req, res) => {
    TipoPersona.findOneAndUpdate( {_id: req.params.id}, req.body, {
        new: true,
        upsert: true
    }) 
    .then((list) => {
        res.json(list);
        console.log('Se actualizo los datos de Tipo Persona exitosamente')
    })
    .catch((error) => console.log(error))
}); 

//Eliminar un Tipo Persona
rutas.delete('/:id', (req, res) => {
    TipoPersona.deleteOne({ _id: req.params.id })
    .then((list) => {
        res.send(list);
        console.log('Se elimino un Tipo Persona con exito')
    })
    .catch((error) => console.log(error))
})


module.exports = rutas;
