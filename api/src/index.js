const cors = require('cors');
const express = require('express');
const app = express();

const indexRoutes = require('./routes/index.routes');
const usersRoutes = require('./routes/users.routes');

// Settings
app.set('port', process.env.PORT || 4000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(indexRoutes);
app.use('/api/v1', usersRoutes);

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.set('port'));
});