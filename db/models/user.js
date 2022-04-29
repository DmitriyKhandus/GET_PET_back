'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate({Animal, Message, Comment, Favorite, Room}) {
			this.hasMany(Animal, {foreignKey: 'userId'});
			this.hasMany(Message, {foreignKey: 'userId'});
			this.hasMany(Comment, {foreignKey: 'userId'});
			this.belongsToMany(Animal, {through: 'Favorite', foreignKey: 'userId',
			});
		}
	}
	
	User.init({
		userName: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.TEXT,
		avatarPath: DataTypes.TEXT,
		phone: DataTypes.STRING,
		about_user: DataTypes.TEXT,
		role: DataTypes.TEXT,
		isBanned: DataTypes.BOOLEAN,
		isActive: DataTypes.BOOLEAN,
		socketID: DataTypes.STRING,
		remember_token: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'User',
	});
	return User;
};
