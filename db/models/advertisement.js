const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Advertisement extends Model {
    static associate({
      Species, User, Image,
    }) {
      this.belongsTo(Species, { foreignKey: 'speciesId' });
      this.belongsTo(User, { foreignKey: 'userId' });
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
    age: DataTypes.STRING,
    speciesId: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    price: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    phoneNumber: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};
