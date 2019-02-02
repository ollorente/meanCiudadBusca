'use strict'

// Initializations
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()

// Settings
app.set('port', process.env.PORT || 3001)

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('hbs', hbs({
    defaultLayout: 'default',
    extname: 'hbs'
}))
app.set('view engine', '.hbs')

// Routes
// app.get('/', (req, res) => {
//     res.render('./views/index')
// })

// Start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
})