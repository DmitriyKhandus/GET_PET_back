const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Advertisement, Message, Comment }) {
      this.hasMany(Advertisement, { foreignKey: 'userId' });
      this.hasMany(Message, { foreignKey: 'userId' });
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.belongsToMany(Advertisement, { through: 'Favorite', foreignKey: 'userId' });
    }
  }

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    avatarPath: DataTypes.TEXT,
    phone: DataTypes.STRING,
    aboutUser: DataTypes.TEXT,
    role: DataTypes.TEXT,
    isBanned: DataTypes.BOOLEAN,
    isActive: DataTypes.BOOLEAN,
    socketID: DataTypes.STRING,
    rememberToken: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
