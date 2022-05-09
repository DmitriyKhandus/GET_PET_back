const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Message extends Model {
    static associate({ User, Room }) {

    }
  }

  Message.init({
    messageBody: DataTypes.TEXT,
    senderId: DataTypes.INTEGER,
    receiverId: DataTypes.INTEGER,
    conversationId: DataTypes.STRING,
    viewed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
