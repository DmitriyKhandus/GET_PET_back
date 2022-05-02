const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    static associate({
      Species, Breed, User, Location,
    }) {
      this.belongsTo(Species, { foreignKey: 'speciesId' });
      this.belongsTo(Breed, { foreignKey: 'breedId' });
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Location, { foreignKey: 'locationId' });
      this.belongsToMany(User, {
        through: 'Favorite',
        foreignKey: 'advertisementId',
      });
    }
  }

  Advertisement.init({
    animal_name: DataTypes.STRING,
    animal_description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    speciesId: DataTypes.INTEGER,
    breedId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    age: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};
