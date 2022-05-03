const { locations } = require('./seed/locations');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Locations', [...locations], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Locations', null, {});
  },
};
