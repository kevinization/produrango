const mongoose = require('mongoose');
const { Schema } = mongoose;

const activoSchema = new Schema({
    provider: { type: String, required: true },
    email: { type: String, required: true }
});

module.exports = mongoose.model('Activo', activoSchema);