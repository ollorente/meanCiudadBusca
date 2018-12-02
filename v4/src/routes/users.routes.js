const router = require('express').Router();

const User = require('../models/user.model');

router.get('/', async (req, res) => {
    const users = await User.find().sort({name: 'asc'});
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

router.post('/', async (req, res) => {
    const { username, email, password, password_confirmation, first_name, last_name, is_superuser, is_staff, active, lock } = req.body;
    if (!username || !email || !password) {
        res.json({error: 'Hay campos faltantes.'});
    } else {
        if (password != password_confirmation) {
            res.json({error: 'Password no coincide.'});
        } else {
            const user = new User({ username, email, password, password_confirmation, first_name, last_name, is_superuser, is_staff, active, lock });
            await user.save();
            res.json({success: 'Usuario creado.'});
        }
    }
});

router.put('/:id', async (req, res) => {
    const { username, email, password, password_confirmation, first_name, last_name, is_superuser, is_staff, active, lock } = req.body;
    if (!username || !email || !password) {
        res.json({error: 'Hay campos faltantes.'});
    } else {
        if (password != password_confirmation) {
            res.json({error: 'Password no coincide.'});
        } else {
            const newUser = { username, email, password, password_confirmation, first_name, last_name, is_superuser, is_staff, active, lock };
            await User.findByIdAndUpdate(req.params.id, newUser);
            res.json({success: 'Usuario actualizado.'});
        }
    }
});

router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({success: 'Usuario eliminado.'});
});

module.exports = router;