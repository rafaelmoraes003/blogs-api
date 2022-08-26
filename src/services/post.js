const jwt = require('jsonwebtoken');
const { BlogPost } = require('../database/models');
const { getPost } = require('./helpers/getPost');
const { getPostByQuery } = require('./helpers/getPostByQuery');
const { verifyCategories } = require('./helpers/verifyCategories');
const { createTransaction } = require('./helpers/createTransaction');
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

const createPost = async (title, content, categoryIds, token) => {
    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    if (!title || !content || !categoryIds) {
        return { error: { code: 400, message: 'Some required fields are missing' } };
    }

    const areCategoriesValid = await verifyCategories(categoryIds);
    if (!areCategoriesValid) {
        return { error: { code: 400, message: '"categoryIds" not found' } };
    }

    const { dataValues } = await createTransaction(title, content, categoryIds, id);
    return { code: 201, data: dataValues };
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

    await BlogPost.update({ title, content, updated: new Date() }, { where: { id } });

    const newPost = { ...post.dataValues, title, content, updated: new Date() };
    return { code: 200, data: newPost };
};

const deletePost = async (id, token) => {
    const { id: tokenId } = jwt.verify(token, process.env.JWT_SECRET);

    const post = await getPost('findOne', id);

    if (!post) {
        return { error: { code: 404, message: 'Post does not exist' } };
    }

    if (post.user.id !== tokenId) {
        return { error: { code: 401, message: 'Unauthorized user' } };
    }

    await BlogPost.destroy({ where: { id } });
    return { code: 204 };
};

const getPostByTerm = async (term) => {
    if (!term) {
        const allPosts = await getPost('findAll');
        return { code: 200, data: allPosts };
    }

    const post = await getPostByQuery(term);

    if (!post) return { code: 200, data: [] };
    return { code: 200, data: post };
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    getPostByTerm,
};