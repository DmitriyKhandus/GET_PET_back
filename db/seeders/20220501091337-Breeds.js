const { dogs, cats } = require('./seed/breeds');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Breeds', [...dogs, ...cats,
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Breeds', null, {});
  },
};
