const rutas = require('express').Router();

const Colegio = require('../Esquemas/Colegio');

//Retornar todos los registros de colegios
rutas.get('/', (req, res) => {
    Colegio.find({}).exec()
    .then((list)=>{
        res.json(list);
        console.log(res)
    })
    .catch((error) => console.log(error))
});

//Registro de nuevos colegios
rutas.post('/', (req, res) => {
    Colegio.create(req.body)
    .then((list) =>{
        res.send(list);
        console.log('Registro de colegio exitoso')
    })
    .catch((error) => console.log(error))
});

//Obtener un solo dato de colegio para editar
rutas.get('/:id', (req, res) => {
    Colegio.findById({ _id: req.params.id }).exec()
    .then((list) =>{
        res.json(list);
        console.log(res)
    })
    .catch((error) => console.log(error))
});

//Actualizar datos de colegio
rutas.put('/:id', (req, res) => {
    Colegio.findOneAndUpdate( {_id: req.params.id}, req.body, {
        new: true,
        upsert: true
    }) 
    .then((list) => {
        res.json(list);
        console.log('Se actualizo los datos del colegio exitosamente')
    })
    .catch((error) => console.log(error))
}); 

//Eliminar un colegio
rutas.delete('/:id', (req, res) => {
    Colegio.deleteOne({ _id: req.params.id })
    .then((list) => {
        res.send(list);
        console.log('Se elimino un colegio con exito')
    })
    .catch((error) => console.log(error))
})


module.exports = rutas;
