const router = require('express').Router();

router.get('/users', (req, res, next) => {
    res.send('API here');
});

module.exports = router;