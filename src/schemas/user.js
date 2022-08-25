const joi = require('joi');

const userSchema = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password: joi.string().min(6).required(),
});

module.exports = { userSchema };