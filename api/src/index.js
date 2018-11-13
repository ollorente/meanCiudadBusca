const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Middlewares

// Routes

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.set('port'));
});