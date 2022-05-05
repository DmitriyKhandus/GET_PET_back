const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Advertisement extends Model {
    static associate({
      Species, User, Location, Image,
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
    title: DataTypes.STRING,
    animalDescription: DataTypes.TEXT,
    age: DataTypes.FLOAT,
    image: DataTypes.TEXT,
    speciesId: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};
