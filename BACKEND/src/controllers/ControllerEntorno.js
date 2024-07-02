var mongoose = require('../conexDB/conn');
var Entorno = require('../models/entorno');

async function saveEntorno(req, res){
    try {
        var myEntorno = new Entorno(req.body);
        var result = await myEntorno.save();
        res.status(200).send({message: "Entorno guardado con éxito", data: result});
    } catch (err) {
        res.status(500).send({message: "Error al guardar el Entorno", error: err});
    }
}

module.exports = {
    saveEntorno
}