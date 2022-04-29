'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({User, Room}) {
      this.belongsTo(User, { foreignKey: 'userId' }),
      this.belongsTo(Room, { foreignKey: 'roomId' })
      }
    }
  Message.init({
    message_body: DataTypes.TEXT,
    sender_id: DataTypes.INTEGER,
    receiver_id: DataTypes.INTEGER,
    conversation_id: DataTypes.STRING,
    viewed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
