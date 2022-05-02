const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate({ Advertisement }) {
      this.hasMany(Advertisement, { foreignKey: 'locationId' });
    }
  }
  Location.init({
    location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};
