const Activo = require('../models/activo');

const activoCtrl = {};

activoCtrl.getActivos = async (req, res) => {
    const activos = await Activo.find();
    res.json(activos);
};

activoCtrl.getA = async (req, res) => {
    if((req.body.email) !== undefined || (req.body.provider) !== undefined ){
        const activos = await Activo.findOne({provider: req.body.provider, email: req.body.email}).exec((error, user) => {
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

activoCtrl.createActivo = async (req, res) => {
    if(req.body.provider != undefined && req.body.email != undefined){
        const activo = new Activo ({
            provider: req.body.provider,
            email: req.body.email
        });

        console.log(activo);
    
        Activo.findOne({provider: req.body.provider, email: req.body.email}, function (err, user){
            if(user == null){
                activo.save();
            }
            else{
                res.json({
                    'status': 'usuario logueado'
                });
            }
        });
    }
    else{
        res.json({
            'status': 'No sirve ',
            'provider': req.body.provider,
            'email': 'No sirve ',
        });
    }
};

activoCtrl.deleteActivo = async (req, res) => {
    await Activo.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Usuario cerro sesión'
    });
};

module.exports = activoCtrl;