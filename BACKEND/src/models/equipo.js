var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var equipoSchema = new Schema({
    nombre_equipo: String,
    integrantes: String,
    metodologia: String,
    codigo: String,
});

module.exports = mongoose.model('Equipo', equipoSchema);
