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

async function buscarTarea(req, res){
    var idTarea = req.params.id;
    try {
        var result = await Tarea.findById(idTarea).exec();
        if (!result) {
            res.status(404).send({message: "Tarea no encontrada"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

async function listarAllTarea(req, res){
    var idTarea = req.params.idb;
    try {
        var result;
        if(!idTarea){
            result = await Tarea.find({}).sort('nombre').exec();
        } else {
            result = await Tarea.find({_id: idTarea}).sort('nombre').exec();
        }
        if (!result) {
            res.status(404).send({message: "Tareas no encontradas"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

module.exports = {
    saveTarea,
    buscarTarea,
    listarAllTarea
}