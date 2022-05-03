const { ads } = require('./seed/advertisements');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Advertisements', [...ads], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Advertisements', null, {});
  },
};
