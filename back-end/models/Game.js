const Sequelize = require('sequelize');
const connection = require('../database/database');

const Game = connection.define('games', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  urlImg: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  platforms: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  stores: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Game.sync({ force: false }).then(() => {
  console.log('Table created!');
});

module.exports = Game;
