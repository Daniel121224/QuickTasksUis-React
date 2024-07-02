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

async function buscarUsuario_equipo(req, res){
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

async function listarAllUsuario_equipo(req, res){
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

module.exports = {
    saveUsuario_equipo,
    buscarUsuario_equipo,
    listarAllUsuario_equipo
}