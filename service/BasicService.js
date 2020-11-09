'use strict';


/**
 * Executes an opeation with two operands and an operator
 * Executes an opeation with two operands and an operator
 *
 * operand1 Integer First operand
 * operator String Operator to execute
 * operand2 Integer Second Operand

 * returns String
 **/
module.exports.calculateoperation = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for calculateoperation'
    });
};


/**
 * Stores a number in the memory
 * Stores a number in the memory
 *
 * value Integer Value to store

 * returns Boolean
 **/
module.exports.storeData = function(req, res, next) {
    //Parameters
    console.log(req);
    res.send({
        message: 'This is the mockup controller for storeData'
    });
};




