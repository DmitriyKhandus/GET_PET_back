const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Advertisements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      animalName: {
        type: DataTypes.STRING,
      },
      animalDescription: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      speciesId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Species',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      breed: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      address: {
        type: DataTypes.STRING,
      },
      age: {
        type: DataTypes.FLOAT,
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      locationId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Locations',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Advertisements');
  },
};
