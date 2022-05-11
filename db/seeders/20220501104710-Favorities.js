module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Favorites', [{
      userId: 5,
      advertisementId: 19,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 5,
      advertisementId: 22,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 4,
      advertisementId: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      advertisementId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 3,
      advertisementId: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 6,
      advertisementId: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      advertisementId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userId: 2,
      advertisementId: 16,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Favorites', null, {});
  },
};
