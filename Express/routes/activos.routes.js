const express = require('express');
const router = express.Router();

const activo = require('../controllers/activo.controller');

router.get('/', activo.getActivos);
router.get('/:authT', activo.getA);
router.post('/', activo.createActivo);

module.exports = router;