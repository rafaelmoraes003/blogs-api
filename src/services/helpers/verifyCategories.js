const { Category } = require('../../database/models');

const verifyCategories = async (list) => {
    const { count } = await Category.findAndCountAll({ where: { id: list } });
    if (count !== list.length) {
        return false;
    }
    return true;
};

module.exports = { verifyCategories };