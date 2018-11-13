const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    is_superuser: { type: Boolean, default: false },
    is_staff: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    lock: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);