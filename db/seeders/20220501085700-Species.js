const { species } = require('./seed/species');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Species', [...species,
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Species', null, {});
  },
};
