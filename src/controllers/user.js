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

const getAllUsers = async (_req, res, next) => {
    try {
        const { code, data } = await userService.getAllUsers();
        return res.status(code).json(data);
    } catch (error) {
        next(error);
    }
};
const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const { error, code, data } = await userService.getUserById(id);

        if (error) {
            return res.status(error.code).json({ message: error.message });
        }

        return res.status(code).json(data);
    } catch (error) {
        next(error);
    }
};

const deleteMyUser = async (req, res, next) => {
    const { authorization: token } = req.headers;
    try {
        const { code } = await userService.deleteMyUser(token);
        return res.status(code).end();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    deleteMyUser,
};