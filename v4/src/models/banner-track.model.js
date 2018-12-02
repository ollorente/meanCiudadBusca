const mongoose = require('mongoose');
const { Schema } = mongoose;

const dbSchema = new Schema({
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BannerTrack', dbSchema);