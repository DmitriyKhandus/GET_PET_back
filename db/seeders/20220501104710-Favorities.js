module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Favorites', [{
      userId: 1,
      advertisementId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};
