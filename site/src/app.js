'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('hbs', hbs({
    defaultLayout: 'default',
    extname: 'hbs'
}))
app.set('view engine', '.hbs')

// Routes
app.get('/', (req, res) => {
    res.render('index')
})

module.exports = app