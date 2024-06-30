var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tareaSchema = new Schema({
    nombre_tarea: String,
    descripcion_tarea: String,
    clasificacion_tarea: String,
    id_usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }, // Referencia a la colección 'Usuario'
    id_entorno: { type: Schema.Types.ObjectId, ref: 'Entorno' } // Referencia a la colección 'Entorno'
});

module.exports = mongoose.model('Tarea', tareaSchema);
