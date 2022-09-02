const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { userSchema } = require('../schemas/user');
require('dotenv').config();

const createUser = async (displayName, email, password, image) => {
    const { error: joiError } = userSchema.validate({ displayName, email, password });

    if (joiError) return { error: { code: 400, message: joiError.details[0].message } };

    const user = await User.findOne({ where: { email } });

    if (user) return { error: { code: 409, message: 'User already registered' } };

    const { dataValues: { id } } = await User.create({ displayName, email, password, image });

    const token = jwt.sign({ id, displayName, email, image }, process.env.JWT_SECRET);

    return { code: 201, token };
};

const getAllUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return { code: 200, data: users };
};

const getUserById = async (id) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
    });
    
    if (!user) {
        return { error: { code: 404, message: 'User does not exist' } };
    }

    return { code: 200, data: user };
};

const deleteMyUser = async (tokenId) => {
    await User.destroy({ where: { id: tokenId } });
    return { code: 204 };
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    deleteMyUser,
};
