const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-start',
    'root',
    '',
    {
    dialect: 'mysql' ,
    host: 'localhost'
    }
    );

    module.exports = sequelize;