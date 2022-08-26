const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
    const { authorization: token } = req.headers;
    try {
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }

        jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { auth };