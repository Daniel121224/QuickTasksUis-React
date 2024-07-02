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

async function findEquipo(req, res){
    var idEquipo = req.params.id;
    try {
        var result = await Equipo.findById(idEquipo).exec();
        if (!result) {
            res.status(404).send({message: "Equipo no encontrado"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

async function findAllEquipo(req, res){
    var idEquipo = req.params.idb;
    try {
        var result;
        if(!idEquipo){
            result = await Equipo.find({}).sort('nombre').exec();
        } else {
            result = await Equipo.find({_id: idEquipo}).sort('nombre').exec();
        }
        if (!result) {
            res.status(404).send({message: "Equipos no encontrados"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

async function updateEquipo(req, res) {
    var idEquipo = req.params.id;
    try {
        var updatedEquipo = await Equipo.findByIdAndUpdate(idEquipo, req.body, { new: true }).exec();
        if (!updatedEquipo) {
            res.status(404).send({ message: "Equipo no encontrado" });
        } else {
            res.status(200).send({ message: "Equipo actualizado con éxito", data: updatedEquipo });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al actualizar el equipo", error: err });
    }
}

async function deleteEquipo(req, res) {
    var idEquipo = req.params.id;
    try {
        var deletedEquipo = await Equipo.findByIdAndDelete(idEquipo).exec();
        if (!deletedEquipo) {
            res.status(404).send({ message: "Equipo no encontrado" });
        } else {
            res.status(200).send({ message: "Equipo eliminado con éxito", data: deletedEquipo });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al eliminar el equipo", error: err });
    }
}

module.exports = {
    saveEquipo,
    findEquipo,
    findAllEquipo,
    updateEquipo,
    deleteEquipo
}