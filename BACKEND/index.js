var app = require('./app');
var conectarDB = require('./src/conexDB/conn');

var port = 4000;

async function startServer() {
    try {
        await conectarDB(); // Espera a que la conexión a la base de datos se realice correctamente
        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto ${port}`);
        });
    } catch (error) {
        console.error('Error conectando a la base de datos:', error);
    }
}

startServer();
