module.exports = {
  msConfig: {
    name: 'api bff admin ingress',
    port: 9001,
    country: 'CL',
    commerce: 'MEDICAL',
    timeOut: 24000,
    requireToken: true,
    originCORS: '*',
  },
  services: {
  },
  managers: {
    login: 'http://localhost:3100/api/manager/login',
    users: {
      urlBase: '',
      get: 'http://localhost:9091/api/v1/user/user-get',
      post: 'http://localhost:9091/api/v1/user/user-add',
      put: 'http://localhost:9091/api/v1/user/user-update',
      delete: 'http://localhost:9091/api/v1/user/user-delete',
      get2: 'http://jsonplaceholder.typicode.com/users',
    }
  },
  clientPublicKey: process.env.RSA_2048_PUBLIC_CLIENT,
  clientPrivateKey: process.env.RSA_2048_PRIVATE_CLIENT
};
