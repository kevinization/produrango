const Activo = require('../models/activo');

const activoCtrl = {};

activoCtrl.getActivos = async (req, res) => {
    const activos = await Activo.find();
    res.json(activos);
};

activoCtrl.setFalse = async (req, res) => {
    try{
        const active = {
            provider: req.body.provider,
            log: req.body.log
        }
        console.log(active);
        await Activo.findOneAndUpdate(req.params.provider, {$set: active}, {new: true});
        res.json({
            'status': 'usuario cerro sesión'
        });
    }catch(e){
        res.json({
            'status': 'FFFFff'
        });
    }
};

activoCtrl.createActivo = async (req, res) => {
    if(req.body.provider != undefined && req.body.log != undefined){
        const activo = new Activo ({
            provider: req.body.provider,
            log: req.body.log
        });

        console.log(activo);
    
        Activo.findOne({provider: req.body.provider, log: req.body.log}, function (err, user){
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