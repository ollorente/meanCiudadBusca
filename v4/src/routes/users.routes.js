const router = require('express').Router();

const User = require('../models/user.model');

router.get('/', async (req, res) => {
    const users = await User.find().sort({name: 'asc'});
    res.status(200).json(users);
});

router.get('/:id', async (req, res) => {
    await User.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).json({error: 'Error al realizar la petición.'});
        if (!user) return res.status(404).json({error: 'Usuario no encontrado.'});

        res.status(200).json(user);
    });
});

router.post('/', async (req, res) => {
    const { username, email, password, password_confirmation, first_name, last_name, is_superuser, is_staff, active, lock } = req.body;
    if (!username || !email || !password) {
        res.status(500).json({error: 'Hay campos faltantes.'});
    } else {
        if (password != password_confirmation) {
            res.status(500).json({error: 'Password no coincide.'});
        } else {
            const updated_at = new Date;
            const user = new User({ username, email, password, password_confirmation, first_name, last_name, is_superuser, is_staff, active, lock, updated_at });
            await user.save();
            res.status(200).json({success: 'Usuario creado.'});
        }
    }
});

router.put('/:id', async (req, res) => {
    const { username, email, password, password_confirmation, first_name, last_name, is_superuser, is_staff, active, lock } = req.body;
    if (!username || !email || !password) {
        res.status(500).json({error: 'Hay campos faltantes.'});
    } else {
        if (password != password_confirmation) {
            res.status(500).json({error: 'Password no coincide.'});
        } else {
            const updated_at = new Date;
            const newUser = { username, email, password, password_confirmation, first_name, last_name, is_superuser, is_staff, active, lock, updated_at };
            await User.findByIdAndUpdate(req.params.id, newUser);
            res.status(200).json({success: 'Usuario actualizado.'});
        }
    }
});

router.delete('/:id', async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.status(200).json({success: 'Usuario eliminado.'});
});

module.exports = router;