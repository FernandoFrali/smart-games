'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Game.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    urlImg: DataTypes.TEXT,
    price: DataTypes.STRING,
    platforms: DataTypes.STRING,
    stores: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};