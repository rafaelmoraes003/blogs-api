const userService = require('../services/user');

const createUser = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;
    try {
        const { error, code, token } = await userService
            .createUser(displayName, email, password, image);

        if (error) {
            return res.status(error.code).json({ message: error.message });
        }

        return res.status(code).json({ token });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser,
};