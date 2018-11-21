const express = require('express');
const router = express.Router();

const User = require('../models/user.model');

router.get('/', async (req, res, next) => {
    const users = await User.find({active: true});
    res.json(users);
});

router.get('/:id', async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.json(user);
});

router.post('/', async (req, res, next) => {
    const { username, email, password_digest, first_name, last_name, is_superuser, is_staff, active, lock, created_at, updated_at } = req.body;
    const user = new User({ username, email, password_digest, first_name, last_name, is_superuser, is_staff, active, lock, created_at, updated_at });
    await user.save();
    res.json({ status: 'User saved' });
});

router.put('/:id', async (req, res, next) => {
    const { username, email, password_digest, first_name, last_name, is_superuser, is_staff, active, lock, created_at, updated_at } = req.body;
    const newUser = { username, email, password_digest, first_name, last_name, is_superuser, is_staff, active, lock, created_at, updated_at };
    await User.findByIdAndUpdate(req.params.id, newUser);
    res.json({ status: 'User updated' });
});

router.delete('/:id', async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'User deleted' });
});

module.exports = router;