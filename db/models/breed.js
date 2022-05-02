const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Breed extends Model {
    static associate({ Species, Advertisement }) {
      this.belongsTo(Species, { foreignKey: 'speciesId' });
      this.hasMany(Advertisement, { foreignKey: 'breedId' });
    }
  }

  Breed.init({
    breed: DataTypes.STRING,
    speciesId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Breed',
  });
  return Breed;
};
