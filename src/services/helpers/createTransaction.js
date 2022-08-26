const Sequelize = require('sequelize');
const { BlogPost, PostCategory } = require('../../database/models');
const config = require('../../database/config/config');

const sequelize = new Sequelize(config.development);

const createTransaction = async (title, content, categoryId, id) => {
    const result = await sequelize.transaction(async (t) => {
        const blogPost = await BlogPost.create({
            title, content, userId: id,
        }, { t });

        const categories = categoryId.map((category) => (
            { postId: blogPost.dataValues.id, categoryId: category }
        ));

        await PostCategory.bulkCreate(categories, { t });
        return blogPost;
    });
    return result;
};

module.exports = { createTransaction };