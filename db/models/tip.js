const {
  Model, DataTypes,
} = require('sequelize');

module.exports = (sequelize) => {
  class Tip extends Model {
    static associate({ Species }) {
      this.belongsTo(Species);
    }
  }

  Tip.init({
    title: DataTypes.STRING,
    tipText: DataTypes.TEXT,
    webSite: DataTypes.TEXT,
    image: DataTypes.TEXT,
    speciesId: DataTypes.INTEGER,
    timestamps: false,
  }, {
    sequelize,
    modelName: 'Tip',
  });
  return Tip;
};
