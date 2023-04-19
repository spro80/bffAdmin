/* eslint-disable import/newline-after-import */
const Router = require('express').Router;
const config = require('../../../config/index');
const express = require('express');

const { SchemaValidationMiddleware } = require(`../../../middlewares/common/schema-validation-middleware`);
const { ValidateMiddleware } = require('../../../middlewares/common/validate-middleware');

const middlewaresCl = [];
/*if (config.msConfig.requireToken === true) {
}*/
middlewaresCl.push(SchemaValidationMiddleware);
middlewaresCl.push(ValidateMiddleware);

//module.exports = Router().post('/:service', middlewaresCl);


const router = express.Router();
router.post('/:service', middlewaresCl);
router.get('/:service', middlewaresCl);
router.delete('/:service', middlewaresCl);
module.exports = router;

