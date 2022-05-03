const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    static associate({
      Species, User, Location, Image, Favorite,
    }) {
      this.belongsTo(Species, { foreignKey: 'speciesId' });
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Location, { foreignKey: 'locationId' });
      this.hasMany(Image, { foreignKey: 'advertisementId' });
      this.belongsToMany(User, {
        through: 'Favorite',
        foreignKey: 'advertisementId',
      });
    }
  }

  Advertisement.init({
    animalName: DataTypes.STRING,
    animalDescription: DataTypes.TEXT,
    image: DataTypes.TEXT,
    speciesId: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    price: DataTypes.INTEGER,
    address: DataTypes.STRING,
    age: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};
