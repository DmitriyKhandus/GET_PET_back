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
    Latitude: DataTypes.FLOAT,
    Longitude: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};
