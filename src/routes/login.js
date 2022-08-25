const express = require('express');
const loginController = require('../controllers/login');

const login = express.Router();

login.post('/', loginController.login);

module.exports = login;