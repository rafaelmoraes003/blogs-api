const express = require('express');
const postController = require('../controllers/post');
const { auth } = require('../middlewares/auth');

const post = express.Router();

post.use(auth);

post.get('/', postController.getAllPosts);
post.get('/search', postController.getPostByTerm);
post.get('/:id', postController.getPostById);

post.post('/', postController.createPost);

post.put('/:id', postController.updatePost);

post.delete('/:id', postController.deletePost);

module.exports = post;