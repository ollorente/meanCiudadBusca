const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mean-ciudadbusca', ['countries']);

router.get('/', (req, res, next) => {
    db.countries.find((err, countries) => {
        if (err) return next(err);
        res.json(countries);
    });
});

router.get('/:id', (req, res, next) => {
    db.countries.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, country) => {
        if (err) return next(err);
        res.json(country);
    });
});

router.post('/', (req, res, next) => {
    const country = req.body;
    if (!country.name || !country.slug) {
        res.status(400).json({
            'error': 'Bad Data'
        });
    } else {
        db.countries.save(country, (err, country) => {
            if (err) return next(err);
            res.json(country);
        });
    }
});

router.delete('/:id', (req, res, next) => {
    db.countries.remove({_id: mongojs.ObjectId(req.params.id)}, (err, country) => {
        if (err) return next(err);
        res.json(result);
    });
});

router.put('/:id', (req, res, next) => {
    const country = req.body;
    let updateCountry = {};
    
    if(country.name) {
        updateCountry.name = country.name;
    }

    if(country.code) {
        updateCountry.code = country.code;
    }

    if(country.phone_code) {
        updateCountry.phone_code = country.phone_code;
    }
    
    if(country.slug) {
        updateCountry.slug = country.slug;
    }

    if(country.lactive) {
        updateCountry.active = country.active;
    }

    if(!updateCountry) {
        res.status(400);
        res.json({'error': 'bad request'});
    } else {
        db.countries.update({_id: mongojs.ObjectId(req.params.id)}, updateCountry, {}, (err, country) => {
            if (err) return next(err);
            res.json(country);
        });
    }
});

module.exports = router;