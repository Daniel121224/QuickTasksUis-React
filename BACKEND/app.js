require('dotenv').config();
const secreta = process.env.SECRETA;
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var routes = require('./src/routers/routes'); // Asegúrate de que la ruta sea correcta

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, x-auth-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Rutas
app.use('/', routes); 

// Exportar
module.exports = app;
