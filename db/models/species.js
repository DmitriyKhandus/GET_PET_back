'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Species extends Model {
    static associate({Breeds}) {
      this.hasMany(Breeds, {
        foreignKey: 'breedId',
      })
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
