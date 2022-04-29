'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Advertisements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      animal_name: {
        type: Sequelize.STRING
      },
      animal_description: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      speciesId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Species",
          key:"id"
        },
        onDelete:"CASCADE"
      },
      breedId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Breeds",
          key:"id"
        },
        onDelete:"CASCADE"
      },
      price: {
        type: Sequelize.INTEGER,
        defaultValue:"0"
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Users",
          key:"id"
        },
        onDelete:"CASCADE"
      },
      locationId: {
        type: Sequelize.INTEGER,
        references:{
          model:"Locations",
          key:"id"
        },
        onDelete:"CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Advertisements');
  }
};
