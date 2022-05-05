const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Location extends Model {
    static associate({ Advertisement }) {
      this.hasMany(Advertisement, { foreignKey: 'locationId' });
    }
  }

  Location.init({
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};
