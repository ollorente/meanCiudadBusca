const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
// const flash = require('connect-flash');
const passport = require('passport');

const indexRoutes = require('./routes/index.routes');
const countriesRoutes = require('./routes/countries.routes');
const pagesRoutes = require('./routes/pages.routes');
const rolesRoutes = require('./routes/roles.routes');
const usersRoutes = require('./routes/users.routes');

// Initiatizations
const app = express();
require('./config/database');
require('./config/passport');

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(session({
    secret: '452d8db2s48',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());

// Global variables
// app.use((req, res, next) => {
//     res.locals.success_msg = req.flash('success_msg');
//     res.locals.error_msg = req.flash('error_msg');
//     res.locals.error = req.flash('error');
//     res.locals.user = req.user || null;
//     next();
// });

// Routes
app.use(indexRoutes);
app.use('/api/v4/countries', countriesRoutes);
app.use('/api/v4/pages', pagesRoutes);
app.use('/api/v4/roles', rolesRoutes);
app.use('/api/v4/users', usersRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});