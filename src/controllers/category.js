const categoryService = require('../services/category');

const createCategory = async (req, res, next) => {
    const { name } = req.body;
    try {
        const { error, code, data } = await categoryService.createCategory(name);

        if (error) {
            return res.status(error.code).json({ message: error.message });
        }

        return res.status(code).json(data);
    } catch (error) {
        next(error);
    }
};

const getAllCategories = async (_req, res, next) => {
    try {
        const { code, data } = await categoryService.getAllCategories();
        return res.status(code).json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createCategory,
    getAllCategories,
};