'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
		}
	}
	
	User.init({
		userName: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.TEXT,
		image: DataTypes.TEXT,
		phone: DataTypes.STRING,
		about_user: DataTypes.TEXT,
		role: DataTypes.TEXT,
		isBanned: DataTypes.BOOLEAN
	}, {
		sequelize,
		modelName: 'User',
	});
	return User;
};
