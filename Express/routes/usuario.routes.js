const express = require('express');
const router = express.Router();

const usuario = require('../controllers/usuario.controller');


//modificar que solo se guarde provider*email
router.get('/', usuario.getUsuarios);
router.post('/', usuario.createUsuario);
router.post('/login', usuario.login);
router.post('/authenticate', usuario.authenticate);
//router.get('/:provider', usuario.getUsuarios);
router.get('/:id', usuario.getU);
router.put('/:id', usuario.editUsuario);
router.delete('/:id', usuario.deleteUsuario);

module.exports = router;