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

async function findTarea(req, res){
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

async function findAllTarea(req, res){
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

async function updateTarea(req, res) {
    var idTarea = req.params.id;
    try {
        var updatedTarea = await Tarea.findByIdAndUpdate(idTarea, req.body, { new: true }).exec();
        if (!updatedTarea) {
            res.status(404).send({ message: "Tarea no encontrada" });
        } else {
            res.status(200).send({ message: "Tarea actualizada con éxito", data: updatedTarea });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al actualizar la tarea", error: err });
    }
}

async function deleteTarea(req, res) {
    var idTarea = req.params.id;
    try {
        var deletedTarea = await Tarea.findByIdAndDelete(idTarea).exec();
        if (!deletedTarea) {
            res.status(404).send({ message: "Tarea no encontrada" });
        } else {
            res.status(200).send({ message: "Tarea eliminada con éxito", data: deletedTarea });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al eliminar la tarea", error: err });
    }
}

module.exports = {
    saveTarea,
    findTarea,
    findAllTarea,
    updateTarea,
    deleteTarea
}