const joi = require('joi');

const categorySchema = joi.object({
    name: joi.string().required(),
});

module.exports = { categorySchema };