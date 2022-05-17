require('./Config/Conexion');

const Colegio = require("./Esquemas/Colegio");
const Curso = require("./Esquemas/Curso");
const Persona = require("./Esquemas/Persona");
const Tipo_Persona = require("./Esquemas/TipoPersona");

const express = require('express');
const port = (process.env.port || 3000);
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.set('port', port);
app.use(express.json());

app.use("/colegio", require("./Rutas/Colegio"));
app.use('/curso', require("./Rutas/Curso"));
app.use('/tipoPersona', require("./Rutas/TipoPersona"));
app.use('/persona', require("./Rutas/Persona"));

app.listen(app.get('port'),(error)=>{
    if(error)
    {
        console.log('Error en la conexion'+ error)
    }else{
        console.log('Servidor iniciado en el puerto: '+ port)
    }
})