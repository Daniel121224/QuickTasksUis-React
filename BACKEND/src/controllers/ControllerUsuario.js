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

async function findUsuario(req, res){
    var idUsuario = req.params.id;
    try {
        var result = await Usuario.findById(idUsuario).exec();
        if (!result) {
            res.status(404).send({message: "Usuario no encontrado"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

async function findAllUsuario(req, res){
    var idUsuario = req.params.idb;
    try {
        var result;
        if(!idUsuario){
            result = await Usuario.find({}).sort('nombre').exec();
        } else {
            result = await Usuario.find({_id: idUsuario}).sort('nombre').exec();
        }
        if (!result) {
            res.status(404).send({message: "Usuarios no encontrados"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

async function updateUsuario(req, res) {
    var idUsuario = req.params.id;
    try {
        var updatedUsuario = await Usuario.findByIdAndUpdate(idUsuario, req.body, { new: true }).exec();
        if (!updatedUsuario) {
            res.status(404).send({message: "Usuario no encontrado"});
        } else {
            res.status(200).send({message: "Usuario actualizado con éxito", data: updatedUsuario});
        }
    } catch (err) {
        res.status(500).send({message: "Error al actualizar el usuario", error: err});
    }
}

async function deleteUsuario(req, res) {
    var idUsuario = req.params.id;
    try {
        var deletedUsuario = await Usuario.findByIdAndDelete(idUsuario).exec();
        if (!deletedUsuario) {
            res.status(404).send({ message: "Usuario no encontrado" });
        } else {
            res.status(200).send({ message: "Usuario eliminado con éxito", data: deletedUsuario });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al eliminar el usuario", error: err });
    }
}


module.exports = {
    prueba,
    saveUsuario,
    findUsuario,
    findAllUsuario,
    updateUsuario,
    deleteUsuario
}