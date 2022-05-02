const { adv } = require('./seed/advertisements');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Advertisements', [...adv], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Advertisements', null, {});
  },
};
