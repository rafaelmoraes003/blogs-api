const { Category } = require('../database/models');
const { categorySchema } = require('../schemas/category');

const createCategory = async (name) => {
    const { error } = categorySchema.validate({ name });

    if (error) {
        return { error: { code: 400, message: error.details[0].message } };   
    }

    const { id } = await Category.create({ name });

    return { code: 201, data: { id, name } };
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return { code: 200, data: categories };
};

module.exports = {
    createCategory,
    getAllCategories,
};