module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Images', [{
      advertisementId: 1,
      image: '/img/1.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      advertisementId: 1,
      image: '/img/2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 1,
      image: '/img/3.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 2,
      image: '/img/4.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 2,
      image: '/img/5.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 2,
      image: '/img/6.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 3,
      image: '/img/7.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 3,
      image: '/img/8.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 3,
      image: '/img/9.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 4,
      image: '/img/10.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 4,
      image: '/img/11.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 4,
      image: '/img/12.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 5,
      image: '/img/13.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 5,
      image: '/img/14.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 6,
      image: '/img/15.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 6,
      image: '/img/16.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 6,
      image: '/img/17.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 7,
      image: '/img/18.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 7,
      image: '/img/19.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 8,
      image: '/img/20.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 8,
      image: '/img/21.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      advertisementId: 9,
      image: '/img/22.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 9,
      image: '/img/23.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      advertisementId: 9,
      image: '/img/24.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ], {});
  },

  async down(queryInterface) {
  },
};
