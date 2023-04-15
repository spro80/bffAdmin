const schemas = require('../schemas/index');
const config = require('../config/index');
const { _ } = require('lodash');

function getSchema(service) {
  const target = schemas.find((schema) => {
    return {}.hasOwnProperty.call(schema, service);
  });
  return target ? Object.values(target) : null;
}

function getOriginByHost(request) {
  if (_.includes(config.msConfig.localhostOriginDomains, _.get(request, 'headers.host', ''))) {
    return true;
  }
  return _.includes(config.msConfig.executiveOriginDomains, _.get(request, 'headers.host', ''));
}

module.exports = {
  getSchema,
  getOriginByHost
};
