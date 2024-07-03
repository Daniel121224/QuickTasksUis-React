var mongoose = require('../conexDB/conn');
var Usuario = require('../models/usuario');

function prueba(req, res){
    res.status(200).send({mensaje: "Probando el controlador de usuarios"});
}

const jwt = require('jsonwebtoken');
const secretKey = 'tu_secreto'; // Cambia esto por una clave secreta más segura

async function authUsuario(req, res) {
    const { correo, contrasena } = req.body;

    // Verificar si el correo existe
    let usuario = await Usuario.findOne({ correo });
    if (!usuario) {
        return res.status(404).json({ message: "El usuario no existe" });
    }

    // Verificar si la contraseña tiene al menos 6 caracteres
    if (contrasena.length < 6) {
        return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres" });
    }

    // Comparar la contraseña en texto claro
    if (contrasena !== usuario.contrasena) {
        return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    // Generar un token JWT
    const payload = {
        id: usuario._id,
        correo: usuario.correo,
        nombre: usuario.nombre
    };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    // Devolver solo el token
    res.status(200).json({ token });
}


async function saveUsuario(req, res) {
    try {
        // Verificar si el correo electrónico ya está registrado
        const existingUser = await Usuario.findOne({ correo: req.body.correo });

        if (existingUser) {
            return res.status(400).send({ message: "El correo electrónico ya está registrado" });
        }

        // Si el correo no está registrado, guardar el usuario
        var myUsuario = new Usuario(req.body);
        var result = await myUsuario.save();
        res.status(200).send({ message: "Usuario guardado con éxito", data: result });
    } catch (err) {
        res.status(500).send({ message: "Error al guardar el usuario", error: err });
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
    deleteUsuario,
    authUsuario
}