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

async function buscarUsuario(req, res){
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

async function listarAllUsuario(req, res){
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

module.exports = {
    prueba,
    saveUsuario,
    buscarUsuario,
    listarAllUsuario
}