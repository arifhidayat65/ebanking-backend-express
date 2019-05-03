var response = require('..response/res');
var customerDao = require ('../dao/customerDao');
var logger = require('..winston');

exports.customers = function(req, res){
    customerDao.getAll(function (error, rows){
        if(error){
            logger.error('error while select: '+error);
            response.err(error, res);
        } else {
            response.ok(rows, res)
        }
    })
}