'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userName: { //userName
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        is: /(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i,
        //Строчные и прописные латинские буквы, цифры, спецсимволы. Минимум 6 символов
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        len: [3, 30],
        is: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
        len: [6, 20]
      },
      avatarPath: {
        type: Sequelize.TEXT,
      },
      phone: {
        type: Sequelize.TEXT,
        unique:true
      },
      about_user: {
        type: Sequelize.TEXT,
      },
      role: {
        type: Sequelize.TEXT,
        defaultValue: 'taker'
      },
      isBanned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      // для чата
      isActive: {
        type: Sequelize.BOOLEAN
      },
      socketID: {
        type: Sequelize.STRING,
        defaultValue:null,
        },
      remember_token: {
        type: Sequelize.STRING,
        //allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
