const express = require('express');
const categoryController = require('../controllers/category');

const category = express.Router();

category.post('/', categoryController.createCategory);

category.get('/', categoryController.getAllCategories);

module.exports = category;