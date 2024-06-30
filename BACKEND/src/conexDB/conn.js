const mongoose = require('mongoose');

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/quicktasksuis');
        console.log('La conexión a la base de datos fue correcta...');
    } catch (err) {
        console.error('Error conectando a la base de datos:', err);
        process.exit(1); // Salir del proceso con error
    }
};

module.exports = conectarDB;
