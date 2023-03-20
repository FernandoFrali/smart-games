const Sequelize = require('sequelize');
const connection = require('../config/database');

const Purchased = connection.define('purchases', {
  gameId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  gameName: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Purchased.sync({ force: false }).then(() => {
  console.log('Purchased table created!');
});

module.exports = Purchased;
