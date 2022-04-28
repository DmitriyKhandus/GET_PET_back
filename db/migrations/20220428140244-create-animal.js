'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Animals', {
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
      species_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"Species",
          key:"id"
        },
        onDelete:"CASCADE"
      },
      city_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"City",
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
    await queryInterface.dropTable('Animals');
  }
};
