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
    let updateuser = {};
    
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
        res.status(400);
        res.json({'error': 'bad request'});
    } else {
        db.users.update({_id: mongojs.ObjectId(req.params.id)}, updateuser, {}, (err, user) => {
            if (err) return next(err);
            res.json(user);
        });
    }
});

module.exports = router;