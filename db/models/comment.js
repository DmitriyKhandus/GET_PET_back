'use strict';
const {
	Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		static associate({User, Animal}) {
			this.belongsTo(User, {
				foreignKey: 'userId',
			}),
			this.belongsTo(Animal, {
				foreignKey: 'animalId',
			})
		}
	}
	
	Comment.init({
		title: DataTypes.STRING,
		text: DataTypes.TEXT,
		userId: DataTypes.INTEGER,
		animalId: DataTypes.INTEGER
	}, {
		sequelize,
		modelName: 'Comment',
	});
	return Comment;
};
