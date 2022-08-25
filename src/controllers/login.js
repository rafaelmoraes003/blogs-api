const serviceLogin = require('../services/login');

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const { error, code, token } = await serviceLogin.login(email, password);

        if (error) {
            return res.status(error.code).json({ message: error.message });
        }

        return res.status(code).json({ token });
    } catch (error) {
        next(error);
    }
};

module.exports = { login };