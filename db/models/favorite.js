const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Favorite extends Model {
    static associate() {

    }
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
