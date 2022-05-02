const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Species extends Model {
    static associate({ Breed, Advertisement }) {
      this.hasMany(Breed, { foreignKey: 'speciesId' });
      this.hasMany(Advertisement, { foreignKey: 'speciesId' });
    }
  }
  Species.init({
    species: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Species',
  });
  return Species;
};
