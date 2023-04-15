/* eslint-disable security/detect-non-literal-fs-filename */
const fs = require('fs');

const env = process.env.NODE_ENV || 'local'; // || 'local';
const envApp = process.env.NODE_ENV_APP || 'default'; // || 'default';

if (!fs.existsSync(`${__dirname}/${envApp}/`)) {
  throw new Error('the folder was not found, set correctly the env variable NODE_ENV_APP');
}

const configPath = `${__dirname}/${envApp}/config.${env}`;
if (!fs.existsSync(configPath) && !fs.existsSync(`${configPath}.js`)) {
  throw new Error('the config file was not found, set correctly the env variable NODE_ENV');
}

const cfg = require(`./${envApp}/config.${env}`); // eslint-disable-line
const commonConfig = cfg;
commonConfig.env = env;
commonConfig.envApp = envApp;

module.exports = Object.freeze(commonConfig);
