module.exports = {
  msConfig: {
    name: 'api bff admin ingress',
    port: 3000,
    country: 'CL',
    commerce: 'MEDICAL',
    timeOut: 24000,
    requireToken: false,
    originCORS: '*',
  },
  services: {
  },
  managers: {
    login: 'http://localhost:3100/api/manager/login',
    users: {
      urlBase: '',
      get2: 'http://jsonplaceholder.typicode.com/users',
      get: 'http://localhost:9091/api/v1/user/user-get',
      post: 'http://localhost:9091/api/v1/user/user-add',
      put: 'http://localhost:9091/api/v1/user/user-update',
      delete: 'http://localhost:9091/api/v1/user/user-delete'
    }
  },
  clientPublicKey: process.env.RSA_2048_PUBLIC_CLIENT,
  clientPrivateKey: process.env.RSA_2048_PRIVATE_CLIENT
};
