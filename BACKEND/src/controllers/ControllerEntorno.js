var mongoose = require('../conexDB/conn');
var Entorno = require('../models/entorno');

async function saveEntorno(req, res){
    try {
        var myEntorno = new Entorno(req.body);
        var result = await myEntorno.save();
        res.status(200).send({message: "Entorno guardado con éxito", data: result});
    } catch (err) {
        res.status(500).send({message: "Error al guardar el Entorno", error: err});
    }
}

async function findEntorno(req, res){
    var idEntorno = req.params.id;
    try {
        var result = await Entorno.findById(idEntorno).exec();
        if (!result) {
            res.status(404).send({message: "Entorno no encontrado"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

async function findAllEntorno(req, res){
    var idEntorno = req.params.idb;
    try {
        var result;
        if(!idEntorno){
            result = await Entorno.find({}).sort('nombre').exec();
        } else {
            result = await Entorno.find({_id: idEntorno}).sort('nombre').exec();
        }
        if (!result) {
            res.status(404).send({message: "Entornos no encontrados"});
        } else {
            res.status(200).send({result});
        }
    } catch (err) {
        res.status(500).send({message: "Error en la petición", error: err});
    }
}

async function updateEntorno(req, res) {
    var idEntorno = req.params.id;
    try {
        var updatedEntorno = await Entorno.findByIdAndUpdate(idEntorno, req.body, { new: true }).exec();
        if (!updatedEntorno) {
            res.status(404).send({ message: "Entorno no encontrado" });
        } else {
            res.status(200).send({ message: "Entorno actualizado con éxito", data: updatedEntorno });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al actualizar el entorno", error: err });
    }
}

async function deleteEntorno(req, res) {
    var idEntorno = req.params.id;
    try {
        var deletedEntorno = await Entorno.findByIdAndDelete(idEntorno).exec();
        if (!deletedEntorno) {
            res.status(404).send({ message: "Entorno no encontrado" });
        } else {
            res.status(200).send({ message: "Entorno eliminado con éxito", data: deletedEntorno });
        }
    } catch (err) {
        res.status(500).send({ message: "Error al eliminar el entorno", error: err });
    }
}

module.exports = {
    saveEntorno,
    findEntorno,
    findAllEntorno,
    updateEntorno,
    deleteEntorno
}