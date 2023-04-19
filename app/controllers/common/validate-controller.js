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
      const configServiceName = req.config.serviceName;
      const configHttpMethod = req.config.httpMethod;

      //Create URL
      const baseUrl = '';
      const endpoint = config.managers[configServiceName][configHttpMethod];
      const url = `${baseUrl}${endpoint}`;
      //const uri = "http://jsonplaceholder.typicode.com/posts"; //POST
      //const uriGet ="https://jsonplaceholder.typicode.com/users"; //GET

      //Create Headers
      const headers = {
        country: req.headers.country,
        commerce: req.headers.commerce,
        channel: req.headers.channel,
        sucursal: req.headers.sucursal,
        usuario: req.headers.usuario,
        traceid: uuidv4()
      };

      console.log(`module:${moduleName} | method:${method} Calling service`);
      const axiosController = new AxiosController();

      let response = {};
      if ( configHttpMethod == 'post') {
        response = await axiosController.requestAxiosPost(url, headers, req.body, config.msConfig.timeOut);
      }else if ( configHttpMethod == 'get') {
        response = await axiosController.requestAxiosGet(url, headers, config.msConfig.timeOut);
      }else if ( configHttpMethod == 'delete') {
        response = await axiosController.requestAxiosDelete(url, headers, config.msConfig.timeOut);
      } 
      
      console.log(`module:${moduleName} | method:${method} Service was called successfully`);
      console.log(response.status);

      return response;
    } catch (e) {
      console.log(`module:${moduleName} | method:${method} | Error:${e.message}`);
      throw e;
    }
  }
}

module.exports = ValidateController;
