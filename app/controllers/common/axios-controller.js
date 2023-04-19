// const config = require('../../config/index');

const axios = require('axios');

class AxiosController {
  requestAxiosPost(uri, headers, body, timeout) {
    return axios({
      method: 'post', url: uri, headers, data: body, timeout, responseType: 'json',
    });
  }

  /*requestAxiosGet(method, uri, headers, timeout) {
    return axios({
      method, url: uri, headers, timeout
    });
  }*/

  requestAxiosGet(uri, headers, timeout) {
    return axios({
      url: uri, headers, timeout
    });
  }

  requestAxiosDelete(uri, headers, timeout) {
    return axios({
      url: uri, headers, timeout
    });
  }
}

module.exports = AxiosController;
