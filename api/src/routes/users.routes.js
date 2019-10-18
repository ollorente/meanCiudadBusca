const router = require("express").Router();

const user = require('../controllers/user.controller');

/* USER */
router.post('/', user.createUser);
router.get('/', user.getUsers);
router.get('/:id', user.getUser);
router.put('/:id', user.updateUser);
router.delete('/:id', user.deleteUser);

module.exports = router;