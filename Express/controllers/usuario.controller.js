const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res) => {
    let  AT = req.body.authT;
    const usuario = new Usuario ({
        authT: req.body.authT,
        name: req.body.name,
        email: req.body.email,
        foto: req.body.foto
    });
    console.log(usuario);

    await Usuario.findOne({authT: AT}).exec((error, admin) => {
        if(!error){
            res.status(200).json(admin);
        }else{
            usuario.save();
            res.json({
                'status': 'Usuario guardado'
            });
        }
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