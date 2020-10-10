const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario ({
        nombre: req.body.nombre,
        contrasena: req.body.contrasena,
        tipo: req.body.tipo,
        foto: req.body.foto,
        telefono: req.body.telefono,
        num_reportes: req.body.num_reportes
    });
    console.log(usuario);
    await usuario.save();
    res.json({
        'status': 'Usuario guardado'
    });
};

usuarioCtrl.getUsuario = async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};

usuarioCtrl.editUsuario = async (req, res) => {
    const usuario = {
        nombre: req.body.nombre,
        contrasena: req.body.contrasena,
        tipo: req.body.tipo,
        foto: req.body.foto,
        telefono: req.body.telefono,
        num_reportes: req.body.num_reportes
    };
    await Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true});
    res.json({
        'status': 'Usuario actualizado'
    });
};

usuarioCtrl.deleteUsuario = async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Usuario eliminado'
    });
};

module.exports = usuarioCtrl;