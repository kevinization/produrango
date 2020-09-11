const express = require('express');
const router = express.Router();

const baja = require('../controllers/baja.controller');

router.get('/', baja.getBajas);
router.post('/', baja.createBaja);
router.get('/:id', baja.getBaja);
router.put('/:id', baja.editBaja);
router.delete('/:id', baja.deleteBaja);

module.exports = router;