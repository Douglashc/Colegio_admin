const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/colegio_admin', {useNewUrlParser:true, useUnifiedTopology: true} )
    .then(() => console.log("mongoose funcionando!!") )
    .catch( (error) => console.log(error));

module.exports = mongoose;