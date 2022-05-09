const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {
    static associate({ Advertisement, Message, Comment }) {
      this.hasMany(Advertisement, { foreignKey: 'userId' });
     
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.belongsToMany(Advertisement, { through: 'Favorite', foreignKey: 'userId' });
    }
  }

  User.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 15],
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false,
        unique: true,
        len: [3, 30],
        is: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i,
      },
    },
    password: {
      type: DataTypes.TEXT,
      validate: {
        allowNull: false,
        is: /(?=^.{6,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      },
    },
    avatarPath: DataTypes.TEXT,
    phoneNumber: DataTypes.STRING,
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
