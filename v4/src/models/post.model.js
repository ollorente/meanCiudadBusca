const mongoose = require('mongoose');
const { Schema } = mongoose;

const dbSchema = new Schema({
    status: { type: String, enum: ['Privado', 'Público', 'Registrado', 'Seguidores'] },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', dbSchema);