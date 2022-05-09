module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Species', [{
      species: 'Собаки',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      species: 'Кошки',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      species: 'Грызуны',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      species: 'Кролики',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      species: 'Ящерицы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      species: 'Рыбы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      species: 'Птицы',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      species: 'Насекомые',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      species: 'Скотный двор',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Species', null, {});
  },
};
