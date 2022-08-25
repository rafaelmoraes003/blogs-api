const express = require('express');
const categoryController = require('../controllers/category');
const { auth } = require('../middlewares/auth');

const category = express.Router();

category.use(auth);

category.post('/', categoryController.createCategory);

category.get('/', categoryController.getAllCategories);

module.exports = category;