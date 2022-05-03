const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Room extends Model {
    static associate({ Message }) {
      this.hasMany(Message, { foreignKey: 'messageId' });
    }
  }

  Room.init({
    room: DataTypes.STRING,
    messageId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
