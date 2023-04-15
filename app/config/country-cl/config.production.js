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
  },
  clientPublicKey: process.env.RSA_2048_PUBLIC_CLIENT,
  clientPrivateKey: process.env.RSA_2048_PRIVATE_CLIENT
};
