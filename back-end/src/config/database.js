const Sequelize = require('sequelize');

const connection = new Sequelize('smartgamesdb', 'root', 'oliveira', {
  host: 'db',
  dialect: 'mysql',
  port: 3306,
});

module.exports = connection;
