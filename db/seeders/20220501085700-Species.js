const { species } = require('./seed/species');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Species', [...species,
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Species', null, {});
  },
};
