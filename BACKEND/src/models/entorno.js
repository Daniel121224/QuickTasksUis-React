var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entornoSchema = new Schema({
    nombre_entorno: String,
    cantidad_participantes: Number,
    id_equipo: { type: Schema.Types.ObjectId, ref: 'Equipo' }, // Referencia a la colección 'Equipo'
});

module.exports = mongoose.model('Entorno', entornoSchema);
