const app = require('express').Router();

app.createUser = async (req, res, next) => {
    res.status(200).json({ data: 'createUser' })
};

app.getUsers = async (req, res, next) => {
    res.status(200).json({ data: 'getUsers' })
};

app.getUser = async (req, res, next) => {
    res.status(200).json({ data: 'getUser' })
};

app.updateUser = async (req, res, next) => {
    res.status(200).json({ data: 'updateUser' })
};

app.deleteUser = async (req, res, next) => {
    res.status(200).json({ data: 'deleteUser' })
};

module.exports = app;