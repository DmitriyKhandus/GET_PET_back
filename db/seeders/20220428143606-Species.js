'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Species', [
      {
      species: "Dog",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        species: "Cat",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        species: "Other",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
