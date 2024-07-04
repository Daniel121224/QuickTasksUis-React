const jwt = require('jsonwebtoken');

var mongoose = require('../conexDB/conn');
var Entorno = require('../models/entorno');
process.env.SECRETA='tu_secreto'

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
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({ msg: 'No hay token, permiso no válido' });
        }

        const decoded = jwt.verify(token, process.env.SECRETA);
        req.usuario = decoded.usuario;

        const result = await Entorno.find({}).sort('nombre').exec();
        
        if (!result || result.length === 0) {
            return res.status(404).send({ message: "Entornos no encontrados" });
        }
        
        res.status(200).send({ result });
    } catch (err) {
        console.error("Error en findAllEntorno:", err); // Agrega este console.error para ver el detalle del error en la consola
        res.status(500).send({ message: "Error en la petición", error: err });
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