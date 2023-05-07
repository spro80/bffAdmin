// const config = require('../../config/index');

const axios = require('axios');

class AxiosController {
  requestAxiosPost(uri, headers, body, timeout) {
    return axios({
      method: 'post', url: uri, headers, data: body, timeout, responseType: 'json',
    });
  }

  requestAxiosPut(uri, headers, body, timeout) {
    return axios({
      method: 'put', url: uri, headers, data: body, timeout, responseType: 'json',
    });
  }

  requestAxiosGet(uri, headers, timeout) {
    return axios({
      url: uri, headers, timeout
    });
  }

  requestAxiosDelete(uri, headers, timeout) {
    return axios.delete(uri);
  }
}

module.exports = AxiosController;
