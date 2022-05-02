const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(Model) {}
  }
  Favorite.init({
    userId: DataTypes.INTEGER,
    advertisementId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
