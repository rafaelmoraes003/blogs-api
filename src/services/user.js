const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { userSchema } = require('../schemas/user');
require('dotenv').config();

const createUser = async (displayName, email, password, image) => {
    const { error: joiError } = userSchema.validate({ displayName, email, password });

    if (joiError) return { error: { code: 400, message: joiError.details[0].message } };

    const user = await User.findOne({ where: { email } });

    if (user) return { error: { code: 409, message: 'User already registered' } };

    await User.create({ displayName, email, password, image });

    const token = jwt.sign({ displayName, email, image }, process.env.JWT_SECRET);

    return { code: 201, token };
};

module.exports = {
    createUser,
};