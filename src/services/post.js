const jwt = require('jsonwebtoken');
const { BlogPost } = require('../database/models');
const { getPost } = require('./helpers/getPost');
require('dotenv').config();

const getAllPosts = async () => {
    const posts = await getPost('findAll');
    return { code: 200, data: posts };
};

const getPostById = async (id) => {
    const post = await getPost('findOne', id);
    if (!post) return { error: { code: 404, message: 'Post does not exist' } };
    return { code: 200, data: post };
};

const updatePost = async (id, title, content, token) => {
    if (!title || !content) {
        return { error: { code: 400, message: 'Some required fields are missing' } };
    }

    const post = await getPost('findOne', id);

    const { email } = jwt.verify(token, process.env.JWT_SECRET);

    if (post.user.email !== email) {
        return { error: { code: 401, message: 'Unauthorized user' } };
    }

    await BlogPost.update({ title, content }, { where: { id } });

    const newPost = { ...post.dataValues, title, content };
    return { code: 200, data: newPost };
};

module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
};