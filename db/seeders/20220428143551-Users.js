const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const secretPass = await bcrypt.hash('123', Number(process.env.ROUNDS_HASH));
    await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'admin@admin.ru',
      password: secretPass,
      role: 'admin',
      isBanned: false,
      aboutUser: 'Администратор',
      avatarPath: '/img/user01Avatar.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Дмитрий',
      email: 'user1@user.ru',
      password: secretPass,
      isBanned: false,
      aboutUser: 'Гений, миллионер, плейбой, филантроп… Безумец?',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Карина',
      email: 'user2@user.ru',
      password: secretPass,
      isBanned: false,
      aboutUser: 'Я рождена ходить по магазинам, а вынуждена ходить на работу',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Анастасия',
      email: 'user3@user.ru',
      password: secretPass,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Илья',
      email: 'user4@user.ru',
      password: secretPass,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Вероника',
      email: 'user5@user.ru',
      password: secretPass,
      isBanned: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
