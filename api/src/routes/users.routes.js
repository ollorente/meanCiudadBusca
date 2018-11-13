const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['users']);

router.get('/users', (req, res, next) => {
    db.users.find((err, users) => {
        if (err) return next(err);
        res.json(users);
    });
});

router.get('/users/:id', (req, res, next) => {
    db.users.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

router.post('/users', (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        is_superuser: req.body.is_superuser,
        is_staff: req.body.is_staff,
        active: req.body.active,
        lock: req.body.lock
    });
    if(!user.username || !(user.email || !user.password)) {
        res.status(400).json({
            error: 'Bad data'
        });
    } else {
        db.users.save(user, (err, user) => {
            if (err) return next(err);
            res.json(user);
        });
    }
});

router.delete('/users/:id', (req, res, next) => {
    db.users.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

router.put('/users/:id', (req, res, next) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        is_superuser: req.body.is_superuser,
        is_staff: req.body.is_staff,
        active: req.body.active,
        lock: req.body.lock
    }
    const updateuser = {};

    if(user.username) {
        updateuser.username = user.username;
    }

    if(user.email) {
        updateuser.email = user.email;
    }

    if(user.password) {
        updateuser.password = user.password;
    }

    if(user.first_name) {
        updateuser.first_name = user.first_name;
    }

    if(user.last_name) {
        updateuser.last_name = user.last_name;
    }

    if(user.is_superuser) {
        updateuser.is_superuser = user.is_superuser;
    }

    if(user.is_staff) {
        updateuser.is_staff = user.is_staff;
    }

    if(user.active) {
        updateuser.active = user.active;
    }

    if(user.lock) {
        updateuser.lock = user.lock;
    }

    if(!updateuser) {
        res.status(400).json({
            error: 'Bad Request'
        });
    } else {
        db.users.update({ _id: mongojs.ObjectId(req.params.id) }, updateuser, (err, user) => {
            if (err) return next(err);
            res.json(user);
        });
    }

});

module.exports = router;