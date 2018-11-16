const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['users']);

router.get('/', (req, res, next) => {
    db.users.find((err, users) => {
        if (err) return next(err);
        res.json(users);
    });
});

router.get('/:id', (req, res, next) => {
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, user) => {
        if (err) return next(err);
        res.json(user);
    });
});

router.post('/', (req, res, next) => {
    const user = req.body;
    if (!user.username || !user.email || !user.password) {
        res.status(400).json({
            'error': 'Bad Data'
        });
    } else {
        db.users.save(user, (err, user) => {
            if (err) return next(err);
            res.json(user);
        });
    }
});

router.delete('/:id', (req, res, next) => {
    db.users.remove({_id: mongojs.ObjectId(req.params.id)}, (err, user) => {
        if (err) return next(err);
        res.json(result);
    });
});

router.put('/:id', (req, res, next) => {
    const user = req.body;
    let updateUser = {};
    
    if(user.username) {
        updateUser.username = user.username;
    }

    if(user.email) {
        updateUser.email = user.email;
    }

    if(user.password) {
        updateUser.password = user.password;
    }
    
    if(user.first_name) {
        updateUser.first_name = user.first_name;
    }

    if(user.last_name) {
        updateUser.last_name = user.last_name;
    }

    if(user.is_superuser) {
        updateUser.is_superuser = user.is_superuser;
    }
    
    if(user.is_staff) {
        updateUser.is_staff = user.is_staff;
    }

    if(user.active) {
        updateUser.active = user.active;
    }

    if(user.lock) {
        updateUser.lock = user.lock;
    }

    if(!updateUser) {
        res.status(400);
        res.json({'error': 'bad request'});
    } else {
        db.users.update({_id: mongojs.ObjectId(req.params.id)}, updateUser, {}, (err, user) => {
            if (err) return next(err);
            res.json(user);
        });
    }
});

module.exports = router;