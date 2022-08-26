const express = require('express');
const postController = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const post = express.Router();

post.use(auth);

post.get('/', postController.getAllPosts);
post.get('/:id', postController.getPostById);

module.exports = post;