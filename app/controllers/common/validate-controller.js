const config = require('../../config/index');
const { v4: uuidv4 } = require('uuid');

const AxiosController = require('./axios-controller');

const moduleName = 'ValidateController';

class ValidateController {
  async validate(req) {
    const method = 'validate';
    console.log(`module:${moduleName} | method:${method} Init process.`);

    //const utilTime = loggerUtilTime.time();
    try {

      console.log(`module:${moduleName} | method:${method} In try.`);
      /*
      const service = req.params.service;
      const uri = _.get(config.managers, service, '');
      */
      const uri = "http://jsonplaceholder.typicode.com/posts";

      //Create Headers
      const headers = {
        country: req.headers.country,
        commerce: req.headers.commerce,
        channel: req.headers.channel,
        sucursal: req.headers.sucursal,
        usuario: req.headers.usuario,
        traceid: uuidv4()
      };

      //Create Body
      console.log(req.body);
      const body = req.body;

      console.log(`module:${moduleName} | method:${method} Calling service`);
      const axiosController = new AxiosController();
      const response = await axiosController.requestAxiosPost(uri, headers, body, config.msConfig.timeOut);

      console.log(`module:${moduleName} | method:${method} Service was called successfully`);
      console.log(response.status);

      const responseTest = {
        data: {
          status: 201,
          descripcion: 'The resource was created successfully'
        }
      };

      /*
      const response = {
        data: {
          status: 404,
          descripcion: 'The User 14515778 was not found'
        }
      };

      const response = {
        data: {
          status: 400,
          descripcion: 'The Request is not valid'
        }
      };
      const response = {
        data: {
          status: 500,
          descripcion: 'Internal error server'
        }
      };
      */
      return responseTest;
    } catch (e) {
      console.log(`module:${moduleName} | method:${method} | Error:${e.message}`);
      throw e;
    }
  }
}

module.exports = ValidateController;
