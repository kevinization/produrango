const Publicacion = require('../models/publicacion');
const Usuario= require('../models/usuario'); 
const publicacionCtrl = {};

publicacionCtrl.getPublicaciones = async (req, res) => {
    const publicaciones = await Publicacion.find({denuncias: {$lt: 5}}).sort({fecha: -1});
    res.json(publicaciones);
};
publicacionCtrl.getP = async (req, res) => {
    var pr = req.params.prvd;
    const a = '*';
    if(req.params.prvd !== undefined){
        let p = pr.split(",")[0];
        let flag = pr.split(",")[1];
        if(p.includes(a)){
                Usuario.findOne({prvd: p}).exec((error, admin) => {
                    if(admin !== null){
                        if(admin.tipo === 'Administrador')
                        {
                            if(flag === 'false' ){
                                Publicacion.find().sort({fecha: -1}).exec((error, publicaciones) => {
                                    if(!error){
                                        res.status(200).json(publicaciones);
                                    }else{
                                        res.status(500).json(publicaciones);
                                    }
                                });
                            }else if(flag === 'true'){
                                Publicacion.find({prvd: p}).sort({fecha: -1}).exec((error, publicaciones) => {
                                    if(!error){
                                        res.status(200).json(publicaciones);
                                    }else{
                                        res.status(500).json(publicaciones);
                                    }
                                });
                            }   
                        }else{
                            if(flag === 'false'){
                                Publicacion.find({denuncias: {$lt: 5}}).sort({fecha: -1}).exec((error, publicaciones) => {
                                    if(!error){ 
                                        res.status(200).json(publicaciones);
                                    }else{   
                                        res.status(500).json(publicaciones); 
                                    }
                                });
                            }
                            else if(flag === 'true'){
                                Publicacion.find({denuncias: {$lt: 5}, prvd: p}).sort({fecha: -1}).exec((error, publicaciones) => {
                                    if(!error){ 
                                        res.status(200).json(publicaciones);
                                    }else{   
                                        res.status(500).json(publicaciones); 
                                    }
                                });
                            }  
                        }
                    }
                    else{
                        res.status(500).json(error);
                    }
                }); 
        }else{
            Publicacion.findById(p).exec((error, publicacion) => {
                console.log(publicacion);
                if(!error){
                     res.status(200).json(publicacion);
                }else{ 
                    res.status(500).json({status: "no hay nada"});
                }
            });
        }
    }
    else{
        res.status(500).json("algo no sirve");
    }
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
publicacionCtrl.editPublicacion = async (req, res) => {
    let publicacion = {};
    if(req.body.flag === true){
        publicacion = {
            denuncias: req.body.denuncias + 1
        };
    }
    else{
        publicacion = {
            titulo: req.body.titulo,
            fecha: req.body.fecha,
            categoria: req.body.categoria,
            descripcion: req.body.descripcion,
            archivos: req.body.archivos,
            latitud: req.body.latitud,
            longitud: req.body.longitud
        };
    }
    console.log(publicacion);
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