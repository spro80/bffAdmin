const Joi = require('joi');
const schemas = require('../../schemas/index');
const moduleName = 'SchemaValidationMiddleware';

function getSchema(service) {
  const target = schemas.find((schema) => {
    return {}.hasOwnProperty.call(schema, service);
  });
  return target ? Object.values(target) : null;
}

function SchemaValidationMiddleware(req, res, next) {
  const method = 'SchemaValidationMiddleware';
  console.log(`module:[${moduleName}] | method:[${method}] | description: [Init in process]`);
  
  try {
    const service = req.params.service;
    console.log(`module:[${moduleName}] | method:[${method}] | description: [service value] | service:[${service}]`);
  
    console.log(`module:[${moduleName}] | method:[${method}] | description: [calling to getSchema]`);
    const schema = getSchema(service);
    console.log(`module:[${moduleName}] | method:[${method}] | description: [getSchema was called successfully]`);
    
    if (schema) {
      console.log(`module:[${moduleName}] | method:[${method}] | description: [schema was found, calling to joi validate]`);
      const result = Joi.validate(req.body, schema);
  
      if (result.error) {
        console.log(`module:[${moduleName}] | method:[${method}] | description: [joi validate was called successfully] | error:[${result.error.details[0].message}]`);
        return 'TODO';
        //return sendSecureResponseWithError(res);
      }
      console.log(`module:[${moduleName}] | method:[${method}] | description: [the body matched with the schema, joi validate was called successfully, next middleware]`);
      next();
    } else {
      console.log(`module:[${moduleName}] | method:[${method}] | description: [schema was not found]`);
      return 'TODO';
      //return sendSecureResponseWithError(res);
    }
  } catch(error){
    console.log(`module:[${moduleName}] | method:[${method}] | description: [error was found] | error:${error.message}`);
    return 'TODO';
  }
}

module.exports.SchemaValidationMiddleware = SchemaValidationMiddleware;
