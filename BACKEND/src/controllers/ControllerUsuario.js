var mongoose = require('../conexDB/conn');
var Usuario = require('../models/usuario');

function prueba(req, res){
    res.status(200).send({mensaje: "Probando el controlador de usuarios"});
}

async function saveUsuario(req, res){
    try {
        var myUsuario = new Usuario(req.body);
        var result = await myUsuario.save();
        res.status(200).send({message: "Usuario guardado con éxito", data: result});
    } catch (err) {
        res.status(500).send({message: "Error al guardar el usuario", error: err});
    }
}

module.exports = {
    prueba,
    saveUsuario
}
