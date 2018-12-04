const mongoose = require('mongoose');
const { Schema } = mongoose;

const dbSchema = new Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    role: { type: String, enum: [ 'Grupo', 'Oficina', 'Página', 'País', 'Sitio', 'usuario' ] },
    user: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String },
    city: { type: String },
    address: { type: String },
    phone: { type: String },
    mobile: { type: String },
    web: { type: String },
    active: { type: Boolean },
    lock: { type: Boolean },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

module.exports = mongoose.model('Page', dbSchema);