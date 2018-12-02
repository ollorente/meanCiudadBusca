const router = require('express').Router();

const Role = require('../models/role.model');

router.get('/', async (req, res) => {
    const roles = await Role.find().sort({name: 'asc'});
    res.json(roles);
});

router.get('/:id', async (req, res) => {
    const role = await Role.findById(req.params.id);
    res.json(role);
});

router.post('/', async (req, res) => {
    const { name, active } = req.body;
    if (!name) {
        res.json({error: 'Hay campos faltantes.'});
    } else {
        const role = new Role({ name, active });
        await role.save();
        res.json({success: 'Rol creado.'});
    }
});

router.put('/:id', async (req, res) => {
    const { name, active } = req.body;
    if (!name) {
        res.json({error: 'Hay campos faltantes.'});
    } else {
        const newRole = { name, active };
        await Role.findByIdAndUpdate(req.params.id, newRole);
        res.json({success: 'Role actualizado.'});
    }

});

router.delete('/:id', async (req, res) => {
    await Role.findByIdAndRemove(req.params.id);
    res.json({success: 'Rol eliminado.'});
});

module.exports = router;