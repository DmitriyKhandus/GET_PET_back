const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        is: /(?=^.{2,10}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[А-ЯЁа-яё]).*$/i,
        // 2-10 символов, возможны цифры, cтрочные и прописные буквы, _-
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        len: [3, 30],
        is: /^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,4}$/i,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        is: /(?=^.{6,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        // 6-15 символов; только латиница
        // по крайней мере по 1 штуке: цифры,
        // буквы строчной, буквы заглавной,
        // символу кроме перечисленных;
        // без пробелов и новых строк
      },
      avatarPath: {
        type: DataTypes.TEXT,
      },
      phone: {
        type: DataTypes.TEXT,
        unique: true,
      },
      aboutUser: {
        type: DataTypes.TEXT,
      },
      role: {
        type: DataTypes.TEXT,
        defaultValue: 'taker', // почему не работает?
      },
      isBanned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      // для чата
      isActive: {
        type: DataTypes.BOOLEAN,
      },
      socketID: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      remember_token: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Users');
  },
};
