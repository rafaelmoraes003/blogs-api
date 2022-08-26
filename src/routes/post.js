const express = require('express');
const postController = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const post = express.Router();

post.use(auth);

post.get('/', postController.getAllPosts);

module.exports = post;