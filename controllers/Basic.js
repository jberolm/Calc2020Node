




'use strict';

var Basic = require('../service/BasicService');

module.exports.calculateoperation = function calculateoperation (req, res, next) {

    Basic.calculateoperation(req.swagger.params, res, next);

};

module.exports.storeData = function storeData (req, res, next) {

    Basic.storeData(req.swagger.params, res, next);

};
