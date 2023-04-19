const Joi = require('joi');

const schema = Joi.object().keys({
  userId: Joi.number().required()
});

module.exports = {
  usersPOST: schema
};
