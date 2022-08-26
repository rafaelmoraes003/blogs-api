const { BlogPost, User, Category } = require('../../database/models');

const getPost = async (method, id) => {
    const posts = await BlogPost[method]({
        ...(id && { where: { id } }),
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

    return posts;
};

module.exports = { getPost };