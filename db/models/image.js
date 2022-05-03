const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Image extends Model {
    static associate({ Advertisement }) {
      this.belongsTo(Advertisement, { foreignKey: 'advertisementId' });
    }
  }

  Image.init({
    advertisementId: DataTypes.INTEGER,
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
