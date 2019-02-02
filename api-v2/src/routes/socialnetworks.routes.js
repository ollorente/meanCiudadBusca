const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['socialnetworks']);

router.get('/', (req, res, next) => {
    db.socialnetworks.find((err, socialnetworks) => {
        if (err) return next(err);
        res.json(socialnetworks);
    });
});

router.get('/:id', (req, res, next) => {
    db.socialnetworks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, socialnetwork) => {
        if (err) return next(err);
        res.json(socialnetwork);
    });
});

router.post('/', (req, res, next) => {
    const socialnetwork = req.body;
    if (!socialnetwork.name) {
        res.status(400).json({
            'error': 'Bad Data'
        });
    } else {
        db.socialnetworks.save(socialnetwork, (err, socialnetwork) => {
            if (err) return next(err);
            res.json(socialnetwork);
        });
    }
});

router.delete('/:id', (req, res, next) => {
    db.socialnetworks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, socialnetwork) => {
        if (err) return next(err);
        res.json(result);
    });
});

router.put('/:id', (req, res, next) => {
    const socialnetwork = req.body;
    let updateSocialnetwork = {};
    
    if(socialnetwork.name) {
        updateSocialnetwork.name = socialnetwork.name;
    }

    if(socialnetwork.lactive) {
        updateSocialnetwork.active = socialnetwork.active;
    }

    if(!updateSocialnetwork) {
        res.status(400);
        res.json({'error': 'bad request'});
    } else {
        db.socialnetworks.update({_id: mongojs.ObjectId(req.params.id)}, updateSocialnetwork, {}, (err, socialnetwork) => {
            if (err) return next(err);
            res.json(socialnetwork);
        });
    }
});

module.exports = router;