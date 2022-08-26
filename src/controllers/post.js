const postService = require('../services/post');

const getAllPosts = async (_req, res, next) => {
    try {
        const { code, data } = await postService.getAllPosts();
        return res.status(code).json(data);
    } catch (error) {
        next(error);
    }
};

const getPostById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const { error, code, data } = await postService.getPostById(id);

        if (error) {
            return res.status(error.code).json({ message: error.message });
        }

        return res.status(code).json(data);
    } catch (error) {
        next(error);
    }
};

const updatePost = async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const { authorization: token } = req.headers;

    try {
        const { error, code, data } = await postService.updatePost(id, title, content, token);

        if (error) {
            return res.status(error.code).json({ message: error.message });
        }

        return res.status(code).json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
};