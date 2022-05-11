const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const secretPass = await bcrypt.hash('123', Number(process.env.ROUNDS_HASH));
    await queryInterface.bulkInsert('Users', [{
      name: 'Data',
      email: 'admin@admin.ru',
      password: secretPass,
      role: 'admin',
      isBanned: false,
      aboutUser: 'Я решил считать себя личностью, которая обладает потенциалом быть чем то большим, нежели комплектом схем и субпроцессоров.',
      avatarPath: '/img/user01Avatar.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Дмитрий',
      email: 'user1@user.ru',
      password: secretPass,
      isBanned: false,
      aboutUser: 'Вы пробовали выключить и снова включить?',
      avatarPath: '/img/user02Avatar.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Карина',
      email: 'user2@user.ru',
      password: secretPass,
      isBanned: false,
      aboutUser: 'Я рождена ходить по магазинам, а вынуждена ходить на работу',
      avatarPath: '/img/user03Avatar.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Василий',
      email: 'user3@user.ru',
      password: secretPass,
      isBanned: false,
      avatarPath: '/img/user04Avatar.jpeg',
      aboutUser: 'Табуляция лучше чем пробелы!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Роберт',
      email: 'user4@user.ru',
      password: secretPass,
      isBanned: false,
      avatarPath: '/img/user05Avatar.jpeg',
      aboutUser: 'Не позволяйте никому говорить вам, что вы носите слишком много черного.',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Женя',
      email: 'user5@user.ru',
      password: secretPass,
      isBanned: false,
      avatarPath: '/img/user06Avatar.jpeg',
      aboutUser: 'Я - тимлид. У меня большой опыт по работе со всеми этими... эээ... компьютерными штуками... ну, Вы знаете... e-mail... посылать e-mail, принимать e-mail, удалять e-mail... эм... я могу долго продолжать... Web, использовать мышь, мышки, использовать мышку, щелчок, двойной щелчок, экран компьютера, ну, само собой, клавиатура и... штука, которую ставят на пол...  Жесткий диск.  Точно!',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
