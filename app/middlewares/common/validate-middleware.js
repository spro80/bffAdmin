const ValidateController = require('../../controllers/common/validate-controller');
const moduleName = 'ValidateMiddleware';

async function ValidateMiddleware(req, res, next) {
  const method = 'ValidateMiddleware';
  console.log(`module:[${moduleName}] | method:[${method}] | description: [Init in process]`);
  
  try {
    console.log(`module:[${moduleName}] | method:[${method}] | description: [Calling to validate controller]`);
    const controller = new ValidateController();
    const response = await controller.validate(req);

    console.log(`module:[${moduleName}] | method:[${method}] | description: [validate controller was called successfully]`);
    console.log(`module:[${moduleName}] | method:[${method}] | description: [response] | response:[${response}]`);

    res.locals.response = response.body;

    //next();
    console.log(res);

    return res.json(response);;
  } catch (error) {
    console.log(`module:[${moduleName}] | method:[${method}] | description:[error was found] | error:[${error.message}]`);
    //sendSecureResponseWithError(res);
    return 'TODO';
  }
}

module.exports.ValidateMiddleware = ValidateMiddleware;
