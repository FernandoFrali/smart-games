'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Purchase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Purchase.init({
    gameId: DataTypes.INTEGER,
    gameName: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Purchase',
  });
  return Purchase;
};