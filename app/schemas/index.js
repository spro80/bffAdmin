/* eslint-disable security/detect-non-literal-fs-filename */

const fs = require('fs');
const path = require('path');
const config = require('../config/index');

const normalizedPath = path.join(__dirname, config.envApp);
const schemas = [];

fs.readdirSync(normalizedPath).forEach((file) => {
  schemas.push(require(`./${config.envApp}/${file}`)); // eslint-disable-line
});

module.exports = schemas;
