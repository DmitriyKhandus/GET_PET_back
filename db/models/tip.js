const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Species }) {
      this.belongsTo(Species);
    }
  }
  Tip.init({
    title: DataTypes.STRING,
    tipText: DataTypes.TEXT,
    webSite: DataTypes.TEXT,
    speciesId: DataTypes.INTEGER,
    timestamps: false,
  }, {
    sequelize,
    modelName: 'Tip',
  });
  return Tip;
};
