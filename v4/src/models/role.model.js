const mongoose = require('mongoose');
const { Schema } = mongoose;

const dbSchema = new Schema({
    name: { type: String, required: true, unique: true },
    active: { type: Boolean },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', dbSchema);