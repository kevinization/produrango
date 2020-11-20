const express = require('express');
const router = express.Router();

const activo = require('../controllers/activo.controller');

router.get('/', activo.getActivos);
router.put('/:provider', activo.setFalse);
router.get('/:provider', activo.searchActivo);
router.post('/', activo.createActivo);

module.exports = router;