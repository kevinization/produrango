const Comentario = require('../models/comentario');

const comentarioCtrl = {};

comentarioCtrl.getComentarios = async (req, res) => {
    const comentarios = await Comentario.find();
    res.json(comentarios);
};

comentarioCtrl.createComentario = async (req, res) => {
    const comentario = new Comentario (req.body);
    console.log(comentario);
    await comentario.save();
    res.json({
        'status': 'Comentario guardado'
    });
};

comentarioCtrl.getComentario = async (req, res) => {
    const comentario = await Comentario.findById(req.params.id);
    res.json(comentario);
};

comentarioCtrl.editComentario = async (req, res) => {
    const comentario = {
        contenido_comentario: req.body.contenido_comentario,
        nombre_usuario: req.body.nombre_usuario,
    };
    await Comentario.findByIdAndUpdate(req.params.id, {$set: comentario}, {new: true});
    res.json({
        'status': 'Comentario actualizado'
    });
};

comentarioCtrl.deleteComentario = async (req, res) => {
    await Comentario.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Comentario eliminado'
    });
};

module.exports = comentarioCtrl;