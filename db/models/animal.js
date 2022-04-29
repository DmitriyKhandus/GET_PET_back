'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Animal extends Model {
		static associate({models}) {
		}
	}
	
	Animal.init({
		animal_name: DataTypes.STRING,
		animal_description: DataTypes.TEXT,
		image: DataTypes.TEXT,
		speciesId: DataTypes.INTEGER,
		price: DataTypes.INTEGER,
		userId: DataTypes.INTEGER,
		cityId: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Animal',
	});
	return Animal;
};
