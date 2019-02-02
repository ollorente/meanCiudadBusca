const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password_digest: { type: String, required: true },
    first_name: { type: String },
    last_name: { type: String },
    is_superuser: { type: Boolean, default: false },
    is_staff: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
    lock: { type: Boolean, default: false },
    created_at: { type: Date, default: new Date },
    updated_at: { type: Date, default: new Date }
});

module.exports = mongoose.model('User', UserSchema);