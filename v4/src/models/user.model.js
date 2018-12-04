const mongoose = require('mongoose');
const { Schema } = mongoose;

const dbSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    is_superuser: { type: Boolean },
    is_staff: { type: Boolean },
    active: { type: Boolean },
    lock: { type: Boolean },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date }
});

module.exports = mongoose.model('User', dbSchema);