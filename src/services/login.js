const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const login = async (email, password) => {
    if (!email || !password) {
        return { error: { code: 400, message: 'Some required fields are missing' } };
    }

    const user = await User.findOne({
        where: { email, password },
    });

    if (!user) {
        return { error: { code: 400, message: 'Invalid fields' } };
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    return { code: 200, token };
};

module.exports = { login };