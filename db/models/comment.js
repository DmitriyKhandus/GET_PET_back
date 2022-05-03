const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Comment extends Model {
    static associate({ User, Advertisement }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Advertisement, { foreignKey: 'advertisementId' });
    }
  }

  Comment.init({
    title: DataTypes.STRING,
    text: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    advertisementId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
