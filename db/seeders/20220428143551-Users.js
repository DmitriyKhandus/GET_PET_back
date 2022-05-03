module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'admin@getpet.com',
      password: 'GetPet_01', // не заносит роль по дефолту
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'user',
      email: 'user@getpet.com',
      password: '2GetPet_01',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'user2',
      email: 'user2@getpet.com',
      password: '2GetPet_01',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'user3',
      email: 'user3@getpet.com',
      password: '2GetPet_01',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
