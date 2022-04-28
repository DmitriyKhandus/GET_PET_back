'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      userName: 'admin',
      email: 'admin@admin.ru',
      password: '123',
      role: 'admin',
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  async down (queryInterface, Sequelize) {

  }
};
