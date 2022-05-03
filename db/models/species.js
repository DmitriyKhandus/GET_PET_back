const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Species extends Model {
    static associate({ Advertisement }) {
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
