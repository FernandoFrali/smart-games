const Sequelize = require('sequelize');

const connection = new Sequelize('smartgamesdb', 'nandin', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = connection;