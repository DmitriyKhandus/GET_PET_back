module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Favorites', [{
      userId: 1,
      advertisementId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};
