var mongoose = require('../conexDB/conn');
var Usuario_equipo = require('../models/usuario_equipo');

async function saveUsuario_equipo(req, res){
    try {
        var myUsuario_equipo = new Usuario_equipo(req.body);
        var result = await myUsuario_equipo.save();
        res.status(200).send({message: "Usuario_equipo guardado con éxito", data: result});
    } catch (err) {
        res.status(500).send({message: "Error al guardar el usuario_equipo", error: err});
    }
}

async function findUsuario_equipo(req, res){
    var idUsuario_equipo = req.params.id;
    try {
        var result = await Usuario_equipo.findById(idUsuario_equipo).exec();
        if (!result) {
            res.status(404).send({message: "Usuario_equipo no encontrado"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

async function findAllUsuario_equipo(req, res){
    var idUsuario_equipo = req.params.idb;
    try {
        var result;
        if(!idUsuario_equipo){
            result = await Usuario_equipo.find({}).sort('nombre').exec();
        } else {
            result = await Usuario_equipo.find({_id: idUsuario_equipo}).sort('nombre').exec();
        }
        if (!result) {
            res.status(404).send({message: "Usuario_equipos no encontrados"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

async function updateUsuario_equipo(req, res) {
    var idUsuario_equipo = req.params.id;
    try {
        var updatedUsuario_equipo = await Usuario_equipo.findByIdAndUpdate(idUsuario_equipo, req.body, { new: true }).exec();
        if (!updatedUsuario_equipo) {
            res.status(404).send({ message: "Relación Usuario_equipo no encontrada" });
        } else {
            res.status(200).send({ message: "Relación Usuario_equipo actualizada con éxito", data: updatedUsuario_equipo });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al actualizar la relación Usuario_equipo", error: err });
    }
}

async function deleteUsuario_equipo(req, res) {
    var idUsuario_equipo = req.params.id;
    try {
        var deletedUsuario_equipo = await Usuario_equipo.findByIdAndDelete(idUsuario_equipo).exec();
        if (!deletedUsuario_equipo) {
            res.status(404).send({ message: "Usuario_equipo no encontrado" });
        } else {
            res.status(200).send({ message: "Usuario_equipo eliminado con éxito", data: deletedUsuario_equipo });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al eliminar el Usuario_equipo", error: err });
    }
}


module.exports = {
    saveUsuario_equipo,
    findUsuario_equipo,
    findAllUsuario_equipo,
    updateUsuario_equipo,
    deleteUsuario_equipo
}