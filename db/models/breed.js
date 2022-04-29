'use strict';
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Breed extends Model {
		static associate({Species}) {
			this.belongsTo(Species, {
				foreignKey: 'breedId',
			})
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
