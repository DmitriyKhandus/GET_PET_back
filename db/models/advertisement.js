'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Advertisement extends Model {
		static associate({Species, Breed, User, Location}) {
			this.hasOne(Species,{ foreignKey: 'speciesId' }),
			this.hasOne(Breed,{ foreignKey: 'breedId' }),
			this.belongsTo(User, { foreignKey: 'userId' }),
			this.hasOne(Location, { foreignKey: 'locationId'})
			this.belongsToMany(User, {
				through: 'Favorite',
				foreignKey: 'advertisementId',
			});
		}
	}
	
	Advertisement.init({
		animal_name: DataTypes.STRING,
		animal_description: DataTypes.TEXT,
		image: DataTypes.TEXT,
		speciesId: DataTypes.INTEGER,
		breedId: DataTypes.INTEGER,
		price: DataTypes.INTEGER,
		userId: DataTypes.INTEGER,
		locationId: DataTypes.INTEGER,
	}, {
		sequelize,
		modelName: 'Advertisement',
	});
	return Advertisement;
};
