var mongoose = require('../conexDB/conn');
var Tarea = require('../models/tarea');

async function saveTarea(req, res){
    try {
        var myTarea = new Tarea(req.body);
        var result = await myTarea.save();
        res.status(200).send({message: "Tarea guardada con éxito", data: result});
    } catch (err) {
        res.status(500).send({message: "Error al guardar la tarea", error: err});
    }
}

module.exports = {
    saveTarea
}