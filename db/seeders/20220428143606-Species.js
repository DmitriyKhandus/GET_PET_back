'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      species: "Собака",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        species: "Кошка",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: "Другие",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
