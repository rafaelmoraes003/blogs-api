const { BlogPost, User, Category } = require('../database/models');

const getAllPosts = async () => {
    const posts = await BlogPost.findAll({
        include: [
            {
                model: User,
                as: 'user',
                attributes: { exclude: ['password'] },
            },
            {
                model: Category,
                as: 'categories',
                through: { attributes: [] },
            },
        ],
    });
    return { code: 200, data: posts };
};

const getPostById = async (id) => {
    const post = await BlogPost.findOne({
        where: { id },
        include: [
            {
                model: User,
                as: 'user',
                attributes: { exclude: ['password'] },
            },
            {
                model: Category,
                as: 'categories',
                through: { attributes: [] },
            },
        ],
    });

    if (!post) return { error: { code: 404, message: 'Post does not exist' } };
    return { code: 200, data: post };
};

module.exports = {
    getAllPosts,
    getPostById,
};