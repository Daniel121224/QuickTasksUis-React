const { Router } = require('express');
var ControllerUsuario = require('../controllers/ControllerUsuario');
var ControllerEntorno = require('../controllers/ControllerEntorno');
var ControllerEquipo = require('../controllers/ControllerEquipo');
var ControllerTarea = require('../controllers/ControllerTarea');
var ControllerUsuarioEquipo = require('../controllers/ControllerUsuarioEquipo');
const router = Router();

router.get('/prueba', ControllerUsuario.prueba);
router.post('/saveUsuario', ControllerUsuario.saveUsuario);
router.post('/saveEntorno', ControllerEntorno.saveEntorno);
router.post('/saveEquipo', ControllerEquipo.saveEquipo);
router.post('/saveTarea', ControllerTarea.saveTarea);
router.post('/saveUsuarioEquipo', ControllerUsuarioEquipo.saveUsuarioEquipo);

module.exports = router;