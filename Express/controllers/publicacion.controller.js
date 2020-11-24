const Publicacion = require('../models/publicacion');

const publicacionCtrl = {};

publicacionCtrl.getPublicaciones = async (req, res) => {
    const publicaciones = await Publicacion.find();
    res.json(publicaciones);
};

publicacionCtrl.createPublicacion = async (req, res) => {
    const publicacion = new Publicacion ({
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        archivos: req.body.archivos,
        latitud: req.body.latitud,
        longitud: req.body.longitud,
        prvd: req.body.prvd,
        denuncias: req.body.denuncias,
        reincidencias: req.body.reincidencias,
        confirmacion_reincidencias: req.body.confirmacion_reincidencias,
        contenido_comentario: req.body.contenido_comentario,
        nombre_usuario: req.body.nombre_usuario
    });
    console.log(publicacion);
    await publicacion.save();
    res.json({
        'status': 'Publicacion guardada'
    });
};

publicacionCtrl.getPublicacion = async (req, res) => {
    const publicacion = await Publicacion.findById(req.params.id);
    res.json(publicacion);
};

publicacionCtrl.editPublicacion = async (req, res) => {
    const publicacion = {
        titulo: req.body.titulo,
        fecha: req.body.fecha,
        categoria: req.body.categoria,
        descripcion: req.body.descripcion,
        archivos: req.body.archivos,
        latitud: req.body.latitud,
        longitud: req.body.longitud
    };
    await Publicacion.findByIdAndUpdate(req.params.id, {$set: publicacion}, {new: true});
    res.json({
        'status': 'Publicación actualizada'
    });
};

publicacionCtrl.deletePublicacion = async (req, res) => {
    await Publicacion.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Publicacion eliminada'
    });
};


module.exports = publicacionCtrl;