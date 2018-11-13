const User = require('../models/users');
const userController = {};

userController.getUsers = async (req, res, next) => {
    const users = await User.find();
    res.json(users);
}

userController.createUser = async (req, res, next) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        is_superuser: req.body.is_superuser,
        is_staff: req.body.is_staff,
        active: req.body.active,
        lock: req.body.lock
    });
    await user.save();
    res.json({
        "status": "User created"
    });
}

userController.getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userController.updateUser = async (req, res, next) => {
    const { id } = req.params;
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        is_superuser: req.body.is_superuser,
        is_staff: req.body.is_staff,
        active: req.body.active,
        lock: req.body.lock
    }
    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({
        "status": "User updated"
    });
}

userController.deleteUser = async (req, res, next) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({
        "status": "User deleted"
    });
}

module.exports = userController;