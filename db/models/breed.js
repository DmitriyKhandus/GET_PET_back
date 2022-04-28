'use strict';
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Breed extends Model {
		static associate(models) {
		}
	}
	
	Breed.init({
		breed: DataTypes.STRING,
		speciesId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Breed',
	});
	return Breed;
};
