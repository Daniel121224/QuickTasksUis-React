const app = require('./app');
const conectarDB = require('./src/conexDB/conn');

const port = 4000;

// Conectar a la base de datos y luego iniciar el servidor
const startServer = async () => {
    await conectarDB();
    app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`);
    });
};

startServer();
