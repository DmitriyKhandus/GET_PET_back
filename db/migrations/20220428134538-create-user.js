module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        is: /(?=^.{2,10}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[А-ЯЁа-яё]).*$/i,
        // 2-10 символов, возможны цифры, cтрочные и прописные буквы, _-
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        len: [3, 30],
        is: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
        is: /(?=^.{6,15}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        // 6-15 символов; только латиница
        // по крайней мере по 1 штуке: цифры,
        // буквы строчной, буквы заглавной,
        // символу кроме перечисленных;
        // без пробелов и новых строк
      },
      avatarPath: {
        type: Sequelize.TEXT,
      },
      phone: {
        type: Sequelize.TEXT,
        unique: true,
      },
      aboutUser: {
        type: Sequelize.TEXT,
      },
      role: {
        type: Sequelize.TEXT,
        defaultValue: 'taker', // почему не работает?
      },
      isBanned: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      // для чата
      isActive: {
        type: Sequelize.BOOLEAN,
      },
      socketID: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      remember_token: {
        type: Sequelize.STRING,
        // allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
