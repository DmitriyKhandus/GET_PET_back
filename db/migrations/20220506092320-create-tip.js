module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.TEXT,
      },
      tipText: {
        type: Sequelize.TEXT,
      },
      webSite: {
        type: Sequelize.TEXT,
      },
      speciesId: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tips');
  },
};
