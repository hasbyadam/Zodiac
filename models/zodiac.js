'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Zodiac extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Zodiac.init({
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    zodiacName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Zodiac',
  });
  return Zodiac;
};