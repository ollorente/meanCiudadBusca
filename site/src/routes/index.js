'use strict'

const express = require('express')
const pageCtrl = require('../controllers/page')
const router = express.Router()

// Routes
router.get('/', (req, res) => {
    res.render('index')
})
router.get('/:slug', pageCtrl.getPage)

module.exports = router