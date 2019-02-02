const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
// ADMIN
app.use('/admin/v3/users', require('./routes/admin.user.routes'));
// USERS
app.use('/api/v3/users', require('./routes/user.routes'));
// PUBLIC
app.use('/public/v3/users', require('./routes/public.user.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting server
app.listen(app.get('port'), function() {
    console.log('Server on port', app.get('port'));
});