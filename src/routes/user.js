const express = require('express');
const userController = require('../controllers/user');

const user = express.Router();

user.post('/', userController.createUser);

module.exports = user;