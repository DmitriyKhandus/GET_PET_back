module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Advertisements', [{
      title: 'Домашнее животное',
      animalDescription: 'Мини пиг, торг уместен',
      speciesId: 9,
      userId: 1,
      locationId: 1,
      price: 10000,
      phoneNumber: 89105010854,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Кошка в дар',
      animalDescription: 'Ищу дом и хорошие заботливые руки для кошки со всем приданым (паспорт, переноска, лотки, корм, наполнитель, когтерез, фурминатор, стронгхолд). Маленькая, вес около 3кг. Возраст примерно 3-4 года',
      speciesId: 2,
      userId: 2,
      locationId: 2,
      phoneNumber: 89660433241,
      age: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Собака в дар',
      animalDescription: 'Отдадим в добрые руки тому, кто любит животных и знает как за ними ухаживать. Собака воспитанная, знает команды, любит людей. Стерилизованная. Осталась без хозяина и поэтому ищет себе новый дом. Собака сама домашняя! Зовут Джесси, девочка:)',
      speciesId: 1,
      userId: 3,
      locationId: 3,
      phoneNumber: 89852376219,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Домашние животные грызуны',
      animalDescription: 'Удивительные белочки Дегу. Доброжелательные и ручные, без неприятных запахов. Продаются вместе с клеткой.',
      speciesId: 3,
      userId: 4,
      price: 3500,
      locationId: 4,
      phoneNumber: 89660436275,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ризен',
      animalDescription: 'Крольчата, Ризен агути, шиншилловые или серые, Гольд',
      speciesId: 4,
      userId: 5,
      price: 500,
      age: 0.1,
      locationId: 5,
      phoneNumber: 89660450546,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ящерица',
      animalDescription: 'Размер 35м цена 15000р. есть доставка по Москве и России. Можно приобрести для него террариум. Размеры 50х30х30см цена 4500р без ламп.',
      speciesId: 5,
      userId: 3,
      price: 15000,
      locationId: 6,
      phoneNumber: 89258653347,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      title: 'Собака в добрые руки щенок',
      animalDescription: 'Ищем срочно ручки для щенка ( метис хаски) девочка, 3 месяца, без прививок. У детей аллергия. Сможем привезти.',
      speciesId: 1,
      userId: 4,
      price: null,
      locationId: 7,
      age: 0.25,
      phoneNumber: 89258653347,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      title: 'Гончий из приюта - нужна семья',
      animalDescription: 'Близкий метис гончей. Мальчик. Возраст около 4х лет. В холке около 60см. Кастрирован. Сейчас живет в приюте. Нежный, ласковый, доброжелательный пёсик. С другими собаками дружит. Проживание в приютском вольере для него огромное испытание и жуткий стресс. Ему очень нужна семья',
      speciesId: 1,
      userId: 1,
      price: null,
      locationId: 8,
      age: 4,
      phoneNumber: 89257764839,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      title: 'Уникальная Кошка Дейзи',
      animalDescription: 'Уникальная Кошка Дейзи - это действительно непохожая на других Кошка. Она самый настоящий «хвостик» - будет ходить за вами весь день и требовать внимания, игр, ласки. Мяукает очень звонко, вы точно ее не потеряете в доме.',
      speciesId: 2,
      userId: 3,
      locationId: 3,
      age: 3,
      phoneNumber: 89778973455,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Advertisements', null, {});
  },
};
