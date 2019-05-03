const Sequelize = require ('sequelize');

const CustomerModel = require ('../model/customer');


const sequelize = new Sequelize('db_backend_bank_express', 'root','', {
    host : 'localhost',
    dialect : 'mysql',
    operatorAliases: false,

    pool : {
        max : 10,
        min : 0,
        acquire : 300000,
        idle : 10000
    }
})

const Customer = CustomerModel(sequelize, Sequelize);

module.exports = {
    Customer
}