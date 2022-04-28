'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
    }
  }
  City.init({
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};
