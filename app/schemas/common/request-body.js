const Joi = require('joi');

module.exports = Joi.object().keys({
  i: Joi.string().required(),
  m: Joi.string().required(),
  p: Joi.string().required(),
  s: Joi.string().required()
});
