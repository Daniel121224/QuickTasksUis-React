var mongoose = require('../conexDB/conn');
var UsuarioEquipo = require('../models/usuarioEquipo');

async function saveUsuarioEquipo(req, res){
    try {
        var myUsuarioEquipo = new UsuarioEquipo(req.body);
        var result = await myUsuarioEquipo.save();
        res.status(200).send({message: "UsuarioEquipo guardado con éxito", data: result});
    } catch (err) {
        res.status(500).send({message: "Error al guardar el UsuarioEquipo", error: err});
    }
}

module.exports = {
    saveUsuarioEquipo
}