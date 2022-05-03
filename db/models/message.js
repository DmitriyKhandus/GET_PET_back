const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Message extends Model {
    static associate({ User, Room }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Room, { foreignKey: 'roomId' });
    }
  }

  Message.init({
    message_body: DataTypes.TEXT,
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
