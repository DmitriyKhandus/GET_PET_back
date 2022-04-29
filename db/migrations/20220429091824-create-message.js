'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message_body: {
        type: Sequelize.TEXT
      },
      sender_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"Users",
          key:"id"
        },
        onDelete:"CASCADE"
      },
      receiver_id: {
        type: Sequelize.INTEGER,
        references:{
          model:"Users",
          key:"id"
        },
        onDelete:"CASCADE"
      },
      conversation_id: {
        type: Sequelize.STRING,
      },
      viewed: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('Messages');
  }
};
