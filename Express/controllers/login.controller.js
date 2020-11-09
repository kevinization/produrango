const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.createUsuario = async (req, res) => {
    const usuario = new Usuario ({
        authT: req.body.authT,
        name: req.body.name,
        email: req.body.email,
        foto: req.body.foto
    });
    debugger
    console.log(usuario);

    await Usuario.findOne({authT: req.body.authT}).exec((error, admin) => {
        if(!error){
            res.status(200).json(admin);
        }else{
            usuario.save();
            await;
            res.json({
                'status': 'Usuario guardado'
            });
        }
    });
};