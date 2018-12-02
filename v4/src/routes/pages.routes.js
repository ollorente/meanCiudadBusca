const routes = require('express').Router();

const Page = require('../models/page.model');

routes.get('/', async (req, res) => {
    const page = await Page.find().sort({name: 'asc'});
    res.json(page);
});

routes.get('/:id', async (req, res) => {
    const page = await Page.findById(req.params.id);
    res.json(page);
});

routes.post('/', async (req, res) => {
    const { name, slug, role, user, country, state, city, address, phone, mobile, web, active, lock } = req.body;
    if (!name || !slug || !role || !user || !country) {
        res.json({error: 'Hay campos faltantes.'});
    } else {
        const page = new Page({ name, slug, role, user, country, state, city, address, phone, mobile, web, active, lock });
        await page.save();
        res.json({success: 'Sitio creado.'});
    }
});

routes.put('/:id', async (req, res) => {
    const { name, slug, role, user, country, state, city, address, phone, mobile, web, active, lock } = req.body;
    if (!name || !slug || !role || !user || !country) {
        res.json({error: 'Hay campos faltantes.'});
    } else {
        const newPage = { name, slug, role, user, country, state, city, address, phone, mobile, web, active, lock };
        await Page.findByIdAndUpdate(req.params.id, newPage);
        res.json({success: 'Sitio actualizado.'});
    }
});

routes.delete('/:id', async (req, res) => {
    await Page.findByIdAndRemove(req.params.id);
    res.json({success: 'Sitio eliminado.'});
});

module.exports = routes;