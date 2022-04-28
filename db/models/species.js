'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Species extends Model {
    static associate(models) {
    }
  }
  Species.init({
    species: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Species',
  });
  return Species;
};
