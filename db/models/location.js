'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
    }
  }
  Location.init({
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};
