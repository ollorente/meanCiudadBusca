const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

const indexRoutes = require('./routes/index.routes');
const usersRoutes = require('./routes/users.routes');

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 4000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(indexRoutes);
app.use('/api/v1/users', usersRoutes);
app.get('/*', (req, res) => {
    res.status(404).json({ error: `Page not found!.` })
})

// Static Files
app.use('/public', express.static(path.join(__dirname, 'public')))

// Starting server
app.listen(app.get('port'), () => {
    console.log(`>>> [meanCiudadBusca] API v1 | Server on port ${app.set('port')} <<<`);
});