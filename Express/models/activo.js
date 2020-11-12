const mongoose = require('mongoose');
const { Schema } = mongoose;

const activoSchema = new Schema({
    _id: {type: String},
    authT: { type: String, required: true }
});

module.exports = mongoose.model('Activo', activoSchema);