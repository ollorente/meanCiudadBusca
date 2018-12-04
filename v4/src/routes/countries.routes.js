const router = require('express').Router();

const Country = require('../models/country.model');

router.get('/', async (req, res) => {
    const countries = await Country.find({active: true}).sort({name: 'asc'});
    res.status(200).json(countries);
});

router.get('/:id', async (req, res) => {
    await Country.findOne({_id: req.params.id, active: true}, (err, country) => {
        if (err) return res.status(500).json({error: 'Error al realizar la petición.'});
        if (!country) return res.status(404).json({error: 'País no encontrado.'});

        res.status(200).json(country);
    });
});

router.post('/', async (req, res) => {
    const { name, currency, phone_code, active } = req.body;
    if (!name) {
        res.status(500).json({error: 'Hay campos faltantes.'});
    } else {
        const country = new Country({ name, currency, phone_code, active });
        await country.save();
        res.status(200).json({success: 'País creado.'});
    }
});

router.put('/:id', async (req, res) => {
    const { name, currency, phone_code, active } = req.body;
    if (!name) {
        res.status(500).json({error: 'Hay campos faltantes.'});
    } else {
        const newCountry = { name, currency, phone_code, active };
        await Country.findByIdAndUpdate(req.params.id, newCountry);
        res.status(200).json({success:'País actualizado.'});
    }
});

router.delete('/:id', async (req, res) => {
    await Country.findByIdAndRemove(req.params.id);
    res.status(200).json({success:'País eliminado.'});
});

module.exports = router;