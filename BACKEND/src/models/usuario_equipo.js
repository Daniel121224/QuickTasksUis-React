var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuario_equipoSchema = new Schema({
    id_usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }, // Referencia a la colección 'Usuario'
    id_equipo: { type: Schema.Types.ObjectId, ref: 'Equipo' } // Referencia a la colección 'Equipo'
});

module.exports = mongoose.model('Usuario_equipo', usuario_equipoSchema);
