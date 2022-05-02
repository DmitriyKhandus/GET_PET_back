module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Breeds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      breed: {
        type: Sequelize.STRING,
      },
      speciesId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Species',
          key: 'id',
        },
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Breeds');
  },
};
