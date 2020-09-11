const Baja = require('../models/baja');

const bajaCtrl = {};

bajaCtrl.getBajas = async (req, res) => {
    const bajas = await Baja.find();
    res.json(bajas);
};

bajaCtrl.createBaja = async (req, res) => {
    const baja = new Baja (req.body);
    console.log(baja);
    await baja.save();
    res.json({
        'status': 'Baja guardada'
    });
};

bajaCtrl.getBaja = async (req, res) => {
    const baja = await Baja.findById(req.params.id);
    res.json(baja);
};

bajaCtrl.editBaja = async (req, res) => {
    const baja = {
        id_usuario: req.body.id_usuario,
        id_publicacion: req.body.id_publicacion,
    };
    await Baja.findByIdAndUpdate(req.params.id, {$set: baja}, {new: true});
    res.json({
        'status': 'Baja actualizada'
    });
};

bajaCtrl.deleteBaja = async (req, res) => {
    await Baja.findByIdAndRemove(req.params.id);
    res.json({
        'status': 'Baja eliminada'
    });
};

module.exports = bajaCtrl;