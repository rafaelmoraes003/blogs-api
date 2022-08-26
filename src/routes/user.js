const express = require('express');
const userController = require('../controllers/user');
const { auth } = require('../middlewares/auth');

const user = express.Router();

user.post('/', userController.createUser);

user.use(auth);

user.get('/', userController.getAllUsers);
user.get('/:id', userController.getUserById);

user.delete('/me', userController.deleteMyUser);

module.exports = user;