const { locations } = require('./seed/locations');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Locations', [...locations], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
