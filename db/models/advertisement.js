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
    animal_name: DataTypes.STRING,
    animal_description: DataTypes.TEXT,
    speciesId: DataTypes.INTEGER,
    breed: DataTypes.STRING,
    price: DataTypes.INTEGER,
    street: DataTypes.STRING,
    number: DataTypes.STRING,
    age: DataTypes.FLOAT,
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};
