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
      get: "https://jsonplaceholder.typicode.com/users",
      post: "http://jsonplaceholder.typicode.com/posts"
    }
  },
  clientPublicKey: process.env.RSA_2048_PUBLIC_CLIENT,
  clientPrivateKey: process.env.RSA_2048_PRIVATE_CLIENT
};
