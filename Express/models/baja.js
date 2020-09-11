const mongoose = require('mongoose');
const { Schema } = mongoose;

const bajaSchema = new Schema({
    id_usuario: { type: String, required: true },
    id_publicacion: { type: String, required: true }
});

module.exports = mongoose.model('Baja', bajaSchema);