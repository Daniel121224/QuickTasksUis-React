var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioEquipoSchema = new Schema({
    id_usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }, // Referencia a la colección 'Usuario'
    id_equipo: { type: Schema.Types.ObjectId, ref: 'Equipo' } // Referencia a la colección 'Equipo'
});

module.exports = mongoose.model('UsuarioEquipo', usuarioEquipoSchema);
