const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/:id', async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

module.exports = router;