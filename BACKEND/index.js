var app = require('./app');
var conectarDB = require('./src/conexDB/conn');
var cors = require('cors'); // Importa cors

var port = 4000;

// Configuración de CORS
const corsOptions = {
    origin: 'http://localhost:3000', // Dirección del frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions)); // Usa cors con las opciones configuradas

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
