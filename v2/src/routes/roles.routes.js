const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['roles']);

router.get('/', (req, res, next) => {
    db.roles.find((err, roles) => {
        if (err) return next(err);
        res.json(roles);
    });
});

router.get('/:id', (req, res, next) => {
    db.roles.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, role) => {
        if (err) return next(err);
        res.json(role);
    });
});

router.post('/', (req, res, next) => {
    const role = req.body;
    if (!role.name) {
        res.status(400).json({
            'error': 'Bad Data'
        });
    } else {
        db.roles.save(role, (err, role) => {
            if (err) return next(err);
            res.json(role);
        });
    }
});

router.delete('/:id', (req, res, next) => {
    db.roles.remove({_id: mongojs.ObjectId(req.params.id)}, (err, role) => {
        if (err) return next(err);
        res.json(result);
    });
});

router.put('/:id', (req, res, next) => {
    const role = req.body;
    let updateRole = {};
    
    if(role.name) {
        updateRole.name = role.name;
    }

    if(role.lactive) {
        updateRole.active = role.active;
    }

    if(!updateRole) {
        res.status(400);
        res.json({'error': 'bad request'});
    } else {
        db.roles.update({_id: mongojs.ObjectId(req.params.id)}, updateRole, {}, (err, role) => {
            if (err) return next(err);
            res.json(role);
        });
    }
});

module.exports = router;