'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({models}) {
      // this.hasMany(models.Post, {
      //   foreignKey: 'author',
      // });
    }
  }
  Animal.init({
    animal_name: DataTypes.STRING,
    animal_description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    speciesId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};
