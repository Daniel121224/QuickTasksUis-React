const { Router } = require('express');
var ControllerUsuario = require('../controllers/ControllerUsuario');
var ControllerEntorno = require('../controllers/ControllerEntorno');
var ControllerEquipo = require('../controllers/ControllerEquipo');
var ControllerTarea = require('../controllers/ControllerTarea');
var ControllerUsuario_equipo = require('../controllers/ControllerUsuario_equipo');
const auth = require('../middleware/auth'); // Importamos el middleware auth.js
const router = Router();

//Usuario
router.get('/prueba', ControllerUsuario.prueba);
router.get('/buscarUsuario/:id', ControllerUsuario.findUsuario);
router.get('/listarAllUsuario/:idb?', ControllerUsuario.findAllUsuario);
router.post('/crearUsuario', ControllerUsuario.saveUsuario);
router.post('/auth', ControllerUsuario.authUsuario); // Ruta para la autenticación
router.put('/actualizarUsuario/:id', ControllerUsuario.updateUsuario);
router.delete('/eliminarUsuario/:id', ControllerUsuario.deleteUsuario);

// Entorno
router.get('/buscarEntorno/:id', auth, ControllerEntorno.findEntorno);
router.get('/listarAllEntorno/:idb?', auth, ControllerEntorno.findAllEntorno); // Protege esta ruta con el middleware auth
router.post('/crearEntorno', ControllerEntorno.saveEntorno);
router.put('/actualizarEntorno/:id', auth, ControllerEntorno.updateEntorno);
router.delete('/eliminarEntorno/:id', auth, ControllerEntorno.deleteEntorno);

//Equipo
router.get('/buscarEquipo/:id', ControllerEquipo.findEquipo);
router.get('/listarAllEquipo/:idb?', ControllerEquipo.findAllEquipo);
router.post('/crearEquipo', ControllerEquipo.saveEquipo);
router.put('/actualizarEquipo/:id', ControllerEquipo.updateEquipo);
router.delete('/eliminarEquipo/:id', ControllerEquipo.deleteEquipo);

//Tarea
router.get('/buscarTarea/:id', ControllerTarea.findTarea);
router.get('/listarAllTarea/:idb?', ControllerTarea.findAllTarea);
router.post('/crearTarea', ControllerTarea.saveTarea);
router.put('/actualizarTarea/:id', ControllerTarea.updateTarea);
router.delete('/eliminarTarea/:id', ControllerTarea.deleteTarea);

//Usuario_equipo
router.get('/buscarUsuario_equipo/:id', ControllerUsuario_equipo.findUsuario_equipo);
router.get('/listarAllUsuario_equipo/:idb?', ControllerUsuario_equipo.findAllUsuario_equipo);
router.post('/crearUsuario_equipo', ControllerUsuario_equipo.saveUsuario_equipo);
router.put('/actualizarUsuario_equipo/:id', ControllerUsuario_equipo.updateUsuario_equipo);
router.delete('/eliminarUsuario_equipo/:id', ControllerUsuario_equipo.deleteUsuario_equipo);

module.exports = router;