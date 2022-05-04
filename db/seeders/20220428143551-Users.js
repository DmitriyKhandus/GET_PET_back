const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    const secretPass = await bcrypt.hash('123', Number(process.env.ROUNDS_HASH));
    await queryInterface.bulkInsert('Users', [{
      userName: 'admin',
      email: 'admin@admin.ru',
      password: secretPass,
      role: 'admin',
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userName: 'user1',
      email: 'user1@user.ru',
      password: secretPass,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userName: 'user2',
      email: 'user2@user.ru',
      password: secretPass,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userName: 'user3',
      email: 'user3@user.ru',
      password: secretPass,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userName: 'user4',
      email: 'user4@user.ru',
      password: secretPass,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      userName: 'user5',
      email: 'user5@user.ru',
      password: secretPass,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
