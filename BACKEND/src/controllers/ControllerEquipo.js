var mongoose = require('../conexDB/conn');
var Equipo = require('../models/equipo');

async function saveEquipo(req, res){
    try {
        var myEquipo = new Equipo(req.body);
        var result = await myEquipo.save();
        res.status(200).send({message: "Equipo guardado con éxito", data: result});
    } catch (err) {
        res.status(500).send({message: "Error al guardar el Equipo", error: err});
    }
}

module.exports = {
    saveEquipo
}