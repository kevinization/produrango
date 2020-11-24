const Usuario = require('../models/usuario');
const jwt = require('jsonwebtoken');
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
        foto: req.body.foto,
        tipo: req.body.tipo
    });
    console.log(usuario);

    Usuario.findOne({provider: req.body.provider, email: req.body.email}).exec((error, admin) => {
            if(admin != null){
                //ya esta registrado
                jwt.sign({user:usuario},'secretkey',{expiresIn: '1h'},(err, token )=>{
                    res.json({
                        token: token,
                        user: admin
                    });
                });
            }else{
                //registra usuario
                usuario.save();
                jwt.sign({user:usuario},'secretkey',{expiresIn: '1h'},(err, token )=>{
                    res.json({
                        token: token,
                        user: usuario
                    });
                });
            }
    });
};

usuarioCtrl.authenticate = async (req, res) => {
        const user = {
            id: 1,
            nombre : "Henry",
            email: "henry@email.com"
        }
    
        jwt.sign({user}, 'secretkey', {expiresIn: '60s'}, (err, token) => {
            res.json({
                token
            });
        });
};

usuarioCtrl.login = checkToken, (req, res ) => {
    console.log(req);

};

// Authorization: Bearer <token>
function checkToken(req, res, next){
    const bearerHeader =  req.headers['authorization'];
    
     if(typeof bearerHeader !== undefined){
          const bearerToken = bearerHeader.split(" ")[1];
          jwt.verify(req.token, 'secretkey', (error, authData ) => {
            if(error){
                res.sendStatus(403);
            }else{
                res.json({
                    token: req.token,
                    authData: authData
                });
            }
        });
        next();
     }else{
         res.sendStatus(403);
     }
}

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