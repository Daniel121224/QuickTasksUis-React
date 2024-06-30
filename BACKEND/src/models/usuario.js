var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: String,
    documento: String,
    email: String,
    contrasena: String,
});

module.export = mongoose.model('Usuario', usuarioSchema); // Exportar el modelo de usuario