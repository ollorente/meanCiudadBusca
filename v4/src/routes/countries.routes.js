const router = require('express').Router();

const Country = require('../models/country.model');

router.get('/', async (req, res) => {
    const countries = await Country.find().sort({name: 'asc'});
    res.json(countries);
});

router.get('/:id', async (req, res) => {
    const country = await Country.findById(req.params.id);
    res.json(country);
});

router.post('/', async (req, res) => {
    const { name, currency, phone_code, active } = req.body;
    if (!name) {
        res.json({error: 'Hay campos faltantes.'});
    } else {
        const country = new Country({ name, currency, phone_code, active });
        await country.save();
        res.json({success: 'País creado.'});
    }
});

router.put('/:id', async (req, res) => {
    const { name, currency, phone_code, active } = req.body;
    if (!name) {
        res.json({error: 'Hay campos faltantes.'});
    } else {
        const newCountry = { name, currency, phone_code, active };
        await Country.findByIdAndUpdate(req.params.id, newCountry);
        res.json({success:'País actualizado.'});
    }
});

router.delete('/:id', async (req, res) => {
    await Country.findByIdAndRemove(req.params.id);
    res.json({success:'País eliminado.'});
});

module.exports = router;