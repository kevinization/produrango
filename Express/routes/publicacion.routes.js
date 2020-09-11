const express = require('express');
const router = express.Router();

const publicacion = require('../controllers/publicacion.controller');

router.get('/', publicacion.getPublicaciones);
router.post('/', publicacion.createPublicacion);
router.get('/:id', publicacion.getPublicacion);
router.put('/:id', publicacion.editPublicacion);
router.delete('/:id', publicacion.deletePublicacion);

module.exports = router;