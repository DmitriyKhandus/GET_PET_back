const { ads } = require('./seed/advertisements');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Advertisements', [...ads], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Advertisements', null, {});
  },
};
