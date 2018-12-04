const routes = require('express').Router();

const Page = require('../models/page.model');

routes.get('/', async (req, res) => {
    const page = await Page.find({active: true, lock: false}).sort({name: 'asc'});
    res.status(200).json(page);
});

routes.get('/:slug', async (req, res) => {
    await Page.findOne({slug: req.params.slug, active: true, lock: false}, (err, page) => {
        if (err) return res.status(500).json({error: 'Error al realizar la petición.'});
        if (!page) return res.status(404).json({error: 'Sitio no encontrado.'});

        res.status(200).json(page);
    });
});

routes.post('/', async (req, res) => {
    const { name, slug, role, user, country, state, city, address, phone, mobile, web, active, lock } = req.body;
    if (!name || !slug || !role || !user || !country) {
        res.status(500).json({error: 'Hay campos faltantes.'});
    } else {
        const updated_at = new Date;
        const page = new Page({ name, slug, role, user, country, state, city, address, phone, mobile, web, active, lock, updated_at });
        await page.save();
        res.status(200).json({success: 'Sitio creado.'});
    }
});

routes.put('/:slug', async (req, res) => {
    const { name, slug, role, user, country, state, city, address, phone, mobile, web, active, lock } = req.body;
    if (!name || !slug || !role || !user || !country) {
        res.status(500).json({error: 'Hay campos faltantes.'});
    } else {
        const updated_at = new Date;
        const newPage = { name, slug, role, user, country, state, city, address, phone, mobile, web, active, lock, updated_at };
        await Page.findOneAndUpdate({slug: req.params.slug}, newPage);
        res.status(200).json({success: 'Sitio actualizado.'});
    }
});

routes.delete('/:slug', async (req, res) => {
    await Page.findOneAndRemove({slug: req.params.id});
    res.status(200).json({success: 'Sitio eliminado.'});
});

module.exports = routes;