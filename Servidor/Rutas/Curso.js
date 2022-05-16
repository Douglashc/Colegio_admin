const rutas = require('express').Router();

const Curso = require('../Esquemas/Curso');

//Retornar todos los registros de cursos
rutas.get('/', (req, res) => {
    Curso.find({}).exec()
    .then((list)=>{
        res.json(list);
        console.log(res)
    })
    .catch((error) => console.log(error))
});

//Registro de nuevos cursos
rutas.post('/', (req, res) => {
    Curso.create(req.body)
    .then((list) =>{
        res.send(list);
        console.log('Registro de curso exitoso')
    })
    .catch((error) => console.log(error))
});

//Obtener un solo dato de curso para editar
rutas.get('/:id', (req, res) => {
    Curso.findById({ _id: req.params.id }).exec()
    .then((list) =>{
        res.json(list);
        console.log(res)
    })
    .catch((error) => console.log(error))
});

//Actualizar datos de curso
rutas.put('/:id', (req, res) => {
    Curso.findOneAndUpdate( {_id: req.params.id}, req.body, {
        new: true,
        upsert: true
    }) 
    .then((list) => {
        res.json(list);
        console.log('Se actualizo los datos del curso exitosamente')
    })
    .catch((error) => console.log(error))
}); 

//Eliminar un curso
rutas.delete('/:id', (req, res) => {
    Curso.deleteOne({ _id: req.params.id })
    .then((list) => {
        res.send(list);
        console.log('Se elimino un curso con exito')
    })
    .catch((error) => console.log(error))
})


module.exports = rutas;
