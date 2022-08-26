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

const createPost = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const { tokenId } = req;
    try {
        const { error, code, data } = await postService.createPost(
            title, content, categoryIds, tokenId,
        );

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
    const { tokenId } = req;

    try {
        const { error, code, data } = await postService.updatePost(id, title, content, tokenId);

        if (error) {
            return res.status(error.code).json({ message: error.message });
        }

        return res.status(code).json(data);
    } catch (error) {
        next(error);
    }
};

const deletePost = async (req, res, next) => {
    const { id } = req.params;
    const { tokenId } = req;
    try {
        const { error, code } = await postService.deletePost(id, tokenId);

        if (error) {
            return res.status(error.code).json({ message: error.message });
        }

        return res.status(code).end();
    } catch (error) {
        next(error);
    }
};

const getPostByTerm = async (req, res, next) => {
    const { q: searchTerm } = req.query;
    try {
        const { code, data } = await postService.getPostByTerm(searchTerm);
        return res.status(code).json(data);
    } catch (error) {
       next(error); 
    }
};

module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
    getPostByTerm,
};