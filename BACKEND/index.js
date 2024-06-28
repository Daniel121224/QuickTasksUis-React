var app = require('./app');
var port = 4000;
app.listen(port, () => {
    console.log('Servidor corriendo en puerto ' + port);
});