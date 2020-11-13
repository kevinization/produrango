const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
};

usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario ({
        provider: req.body.provider,
        name: req.body.name,
        email: req.body.email,
        foto: req.body.foto
    });
    console.log(usuario);

    await Usuario.findOne({provider: req.body.provider, email: req.body.email}).exec((error, admin) => {
        if(admin != null){
            res.json({
                'status': 'Usuario existente'
            });
        }else{
            usuario.save();
            res.json({
                'status': 'Usuario guardado'
            });
        }
    });
};

usuarioCtrl.getU = async (req, res) => {
    if((req.params.authT) !== undefined || (req.params.authT) !== "" ){
        const usuario = await Usuario.findOne({authT: req.params.aT}).exec((error, user) => {
            if(!error){
                if(user != null){
                    res.json(user);
                }
            }
            else{
                res.status(500).json(error);
            }
        });
    }
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