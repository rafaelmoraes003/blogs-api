const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../../database/models');

const getPostByQuery = async (term) => {
    const posts = await BlogPost.findAll({
        where: {
            [Op.or]: [
                { title: { [Op.substring]: term } },
                { content: { [Op.substring]: term } },
            ],
        },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return posts;
};

module.exports = { getPostByQuery };