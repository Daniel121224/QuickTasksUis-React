var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entornoSchema = new Schema({
    nombre_entorno: String,
    cantidad_participantes: Number,
    creador: { type: Schema.Types.ObjectId, ref: 'Usuario' }, // id_usuario
});

module.exports = mongoose.model('Entorno', entornoSchema);
