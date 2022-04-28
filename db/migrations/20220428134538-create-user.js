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
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        len: [4, 20],
        is: /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i,
        //Начинается и кончается на букву/цифру и содержит не более двух "_"/"-" и не подряд.
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
      image: {
        type: Sequelize.TEXT
      },
      phone: {
        type: Sequelize.TEXT,
        unique:true
      },
      about_user: {
        type: Sequelize.TEXT,
      },
      role: {
        type: Sequelize.TEXT
      },
      isBanned: {
        type: Sequelize.BOOLEAN
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
