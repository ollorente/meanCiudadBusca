const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-cb';

mongoose.connect(URI)
    .then(db => console.log('DB is connect'))
    .catch(err => console.error(err));

module.exports = mongoose;