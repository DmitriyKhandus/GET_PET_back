'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate({Messages}) {
      this.hasMany(Messages, { foreignKey: 'messageId' })
    }
  }
  Room.init({
    room: DataTypes.STRING,
    messageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
