const cors = require('cors');
const express = require('express');
const app = express();

const indexRoutes = require('./routes/index');

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

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.set('port'));
});