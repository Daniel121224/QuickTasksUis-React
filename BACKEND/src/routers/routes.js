const { Router } = require('express');
var ControllerUsuario = require('../controllers/ControllerUsuario');
var ControllerEntorno = require('../controllers/ControllerEntorno');
var ControllerEquipo = require('../controllers/ControllerEquipo');
var ControllerTarea = require('../controllers/ControllerTarea');
var ControllerUsuario_equipo = require('../controllers/ControllerUsuario_equipo');
const router = Router();

//Usuario
router.get('/prueba', ControllerUsuario.prueba);
router.get('/buscarUsuario/:id', ControllerUsuario.buscarUsuario);
router.get('/listarAllUsuario/:idb?', ControllerUsuario.listarAllUsuario);
router.post('/crearUsuario', ControllerUsuario.saveUsuario);

//Entorno
router.get('/buscarEntorno/:id', ControllerEntorno.buscarEntorno);
router.get('/listarAllEntorno/:idb?', ControllerEntorno.listarAllEntorno);
router.post('/crearEntorno', ControllerEntorno.saveEntorno);

//Equipo
router.get('/buscarEquipo/:id', ControllerEquipo.buscarEquipo);
router.get('/listarAllEquipo/:idb?', ControllerEquipo.listarAllEquipo);
router.post('/crearEquipo', ControllerEquipo.saveEquipo);

//Tarea
router.get('/buscarTarea/:id', ControllerTarea.buscarTarea);
router.get('/listarAllTarea/:idb?', ControllerTarea.listarAllTarea);
router.post('/crearTarea', ControllerTarea.saveTarea);

//Usuario_equipo
router.get('/buscarUsuario_equipo/:id', ControllerUsuario_equipo.buscarUsuario_equipo);
router.get('/listarAllUsuario_equipo/:idb?', ControllerUsuario_equipo.listarAllUsuario_equipo);
router.post('/crearUsuario_equipo', ControllerUsuario_equipo.saveUsuario_equipo);

module.exports = router;