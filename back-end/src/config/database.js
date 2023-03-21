const Sequelize = require('sequelize');

const connection = new Sequelize('smartgamesdb', 'nandin', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

module.exports = connection;
