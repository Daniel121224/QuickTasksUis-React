var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: String,
    documento: String,
    email: String,
    contrasena: String,
});

module.exports = mongoose.model('Usuario', usuarioSchema);