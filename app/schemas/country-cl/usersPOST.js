const Joi = require('joi');

const schema = Joi.object().keys({
  userId: Joi.string().required(),
  rut: Joi.string().required(),
  userName: Joi.string().required(),
  password: Joi.string().required(),
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  valid: Joi.bool().required(),
  profile: {
    profileId: Joi.number().required(),
    profileStatus: Joi.bool().required(),
    profileDateInit: Joi.string().required(),
    profileDateEnd: Joi.string().required(),
    profileAllTime: Joi.bool().required(),
  }
});

module.exports = {
  usersPOST: schema
};
