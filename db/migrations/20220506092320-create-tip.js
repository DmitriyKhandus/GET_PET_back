const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Tips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.TEXT,
      },
      tipText: {
        type: DataTypes.TEXT,
      },
      webSite: {
        type: DataTypes.TEXT,
      },
      speciesId: {
        type: DataTypes.INTEGER,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Tips');
  },
};
