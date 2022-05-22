const rutas = require('express').Router();

const Persona = require('../Esquemas/Persona');

//Retornar todos los registros de persona
rutas.get('/:id', (req, res) => {
    Persona.find({ cursoID: req.params.id }).populate('cursoID').populate('tipo_personaID').exec()
    .then((list)=>{
        res.json(list);
        console.log(res)
    })
    .catch((error) => console.log(error))
});

//Registro de nuevos persona
rutas.post('/', (req, res) => {
    Persona.create(req.body)
    .then((list) =>{
        res.send(list);
        console.log('Registro de persona exitoso')
    })
    .catch((error) => console.log(error))
});

//Obtener un solo dato de persona para editar
rutas.get('/:id', (req, res) => {
    Persona.findById({ _id: req.params.id }).populate('cursoID').populate('tipo_personaID').exec()
    .then((list) =>{
        res.json(list);
        console.log(res)
    })
    .catch((error) => console.log(error))
});

//Actualizar datos de persona
rutas.put('/:id', (req, res) => {
    Persona.findOneAndUpdate( {_id: req.params.id}, req.body, {
        new: true,
        upsert: true
    }) 
    .then((list) => {
        res.json(list);
        console.log('Se actualizo los datos de la persona exitosamente')
    })
    .catch((error) => console.log(error))
}); 

//Eliminar un persona
rutas.delete('/:id', (req, res) => {
    Persona.deleteOne({ _id: req.params.id })
    .then((list) => {
        res.send(list);
        console.log('Se elimino la persona con exito')
    })
    .catch((error) => console.log(error))
})


module.exports = rutas;
