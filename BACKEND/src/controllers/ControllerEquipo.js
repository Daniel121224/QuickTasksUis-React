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

async function buscarEquipo(req, res){
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

async function listarAllEquipo(req, res){
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

module.exports = {
    saveEquipo,
    buscarEquipo,
    listarAllEquipo
}