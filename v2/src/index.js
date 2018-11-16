const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

const indexRoutes = require('./routes/index.routes');
const usersRoutes = require('./routes/users.routes');
const countriesRoutes = require('./routes/countries.routes');
const rolesRoutes = require('./routes/roles.routes');
const socialnetworksRoutes = require('./routes/socialnetworks.routes');
const statusPostsRoutes = require('./routes/status-posts.routes');

// settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 4000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use(indexRoutes);
app.use('/api/v2/users', usersRoutes);
app.use('/api/v2/countries', countriesRoutes);
app.use('/api/v2/roles', rolesRoutes);
app.use('/api/v2/socialnetworks', socialnetworksRoutes);
app.use('/api/v2/status-posts', statusPostsRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'dist')));

// Start server
app.listen(app.get('port'), () => {
    console.log('server on port ', app.get('port'));
});