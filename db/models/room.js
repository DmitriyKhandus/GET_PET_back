'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    static associate({Message}) {
      this.hasMany(Message, { foreignKey: 'messageId' })
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
