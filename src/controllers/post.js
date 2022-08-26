const postService = require('../services/post');

const getAllPosts = async (_req, res, next) => {
    try {
        const { code, data } = await postService.getAllPosts();
        return res.status(code).json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllPosts,
};