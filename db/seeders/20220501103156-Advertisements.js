module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Advertisements', [{
      title: 'Микро-пиг Булочка',
      animalDescription: 'Домашнее животное, торг уместен',
      speciesId: 9,
      userId: 1,
      price: 10000,
      phoneNumber: 89105010854,
      city: 'Москва',
      address: 'улица Лестева, 19к1',
      latitude: 55.714191,
      longitude: 37.609505,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Кошка с приданным в дар',
      animalDescription: 'Ищу дом и хорошие заботливые руки для кошки со всем приданым (паспорт, переноска, лотки, корм, наполнитель, когтерез, фурминатор, стронгхолд). Маленькая, вес около 3кг. Возраст примерно 3-4 года.',
      speciesId: 2,
      age: 3,
      price: 0,
      userId: 2,
      phoneNumber: 89660433241,
      city: 'Москва',
      address: 'Пятницкая улица, 33-35с1',
      latitude: 55.739420,
      longitude: 37.628695,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Джесси, собака в дар',
      animalDescription: 'Отдадим в добрые руки тому, кто любит животных и знает как за ними ухаживать. Собака воспитанная, знает команды, любит людей. Стерилизованная. Осталась без хозяина и поэтому ищет себе новый дом. Собака сама домашняя! Девочка:)',
      speciesId: 1,
      price: 0,
      userId: 3,
      phoneNumber: 89852376219,
      city: 'Москва',
      address: 'Мясницкая ул., 7, стр. 2',
      latitude: 55.760591,
      longitude: 37.630953,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Удивительные белочки Дегу',
      animalDescription: 'Доброжелательные и ручные, без неприятных запахов. Продаются вместе с клеткой.',
      speciesId: 3,
      userId: 4,
      price: 3500,
      phoneNumber: 89660436275,
      city: 'Москва',
      address: 'Профсоюзная улица, 133Б',
      latitude: 55.611979,
      longitude: 37.497207,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Крольчата',
      animalDescription: 'Ризен агути, шиншилловые или Гольд.',
      speciesId: 4,
      userId: 5,
      price: 500,
      age: 0.1,
      phoneNumber: 89660450546,
      city: 'Москва',
      address: 'ул. Вавилова, 5',
      latitude: 55.704499,
      longitude: 37.590470,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ящерица',
      animalDescription: 'Размер 35см. Есть доставка по Москве и России. Можно приобрести для него террариум (Размеры 50х30х30см, цена 4500р без ламп).',
      speciesId: 5,
      userId: 3,
      price: 15000,
      phoneNumber: 89258653347,
      city: 'Москва',
      address: 'Сибирский проезд, 2с15',
      latitude: 55.731445,
      longitude: 37.681065,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Щенок в добрые ручки',
      animalDescription: 'Ищем срочно руки для щенка (метис хаски) девочка, 3 месяца, без прививок. У детей аллергия. Сможем привезти.',
      speciesId: 1,
      price: 0,
      userId: 4,
      age: 0.25,
      phoneNumber: 89258653347,
      city: 'Казань',
      address: 'улица Габдуллы Тукая, 75',
      latitude: 55.777105,
      longitude: 49.116583,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Гончий из приюта - нужна семья',
      animalDescription: 'Нежный, ласковый, доброжелательный пёсик. Близкий метис гончей. Возраст около 4х лет. В холке около 60см. Мальчик, кастрирован. Сейчас живет в приюте. С другими собаками дружит. Проживание в приютском вольере для него огромное испытание и жуткий стресс. Ему очень нужна семья',
      speciesId: 1,
      age: 4,
      price: 0,
      userId: 5,
      phoneNumber: 89257764839,
      city: 'Казань',
      address: 'Подгорная улица, 91',
      latitude: 55.776112,
      longitude: 49.154869,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Уникальная Кошка Дейзи',
      animalDescription: 'Это действительно непохожая на других Кошка. Она самый настоящий «хвостик» - будет ходить за вами весь день и требовать внимания, игр, ласки. Мяукает очень звонко, Вы точно её не потеряете в доме.',
      speciesId: 2,
      age: 3,
      price: 0,
      userId: 3,
      city: 'Новосибирск',
      address: 'ул. Московская, 65',
      latitude: 55.019037,
      longitude: 82.927933,
      phoneNumber: 89778973455,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Ручные попугаи корелла',
      animalDescription: 'КОРЕЛЛЫ с щечками и безщекие, ручные и месячные, любого окраса мальчики и девочки.',
      speciesId: 7,
      age: 3,
      price: 3500,
      city: 'Ростов-на-Дону',
      address: 'Пушкинская улица, 174',
      latitude: 47.228302,
      longitude: 39.730911,
      userId: 1,
      phoneNumber: 89857958201,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Волнистый попугай',
      animalDescription: 'Птенцы, подростки и половозрелые. Возможна продажа с клеткой за отдельную плату и доставкой.',
      speciesId: 7,
      userId: 3,
      price: 700,
      age: 3,
      phoneNumber: 89857958221,
      city: 'Санкт-Петербург',
      address: 'Заусадебная улица, 15с5',
      latitude: 59.987907,
      longitude: 30.276873,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Цихлиды фламинго',
      animalDescription: 'Красивые рыбки с оранжево-розовым отливом. Продаю цихлазом фламинго самки от 6-7 см. Неприхотливые в содержании.',
      speciesId: 6,
      userId: 4,
      price: 70,
      age: null,
      phoneNumber: 89857958334,
      city: 'Санкт-Петербург',
      address: 'улица Турку, 9к1',
      latitude: 59.867018,
      longitude: 30.376772,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Молодой Петушок Халф Мун',
      animalDescription: 'Ему 3 месяца. Здоровый, активный. Ищет новый дом.',
      speciesId: 6,
      userId: 5,
      price: 400,
      age: 0.25,
      phoneNumber: 89857958734,
      city: 'Санкт-Петербург',
      address: 'улица Бехтерева, 1с4',
      latitude: 59.903792,
      longitude: 30.405100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Сомики анциструсы',
      animalDescription: 'Разных цветов. Отдам за напиток или другую рыбку.',
      speciesId: 6,
      userId: 5,
      price: 0,
      phoneNumber: 89857858734,
      city: 'Санкт-Петербург',
      address: 'набережная реки Фонтанки, 84',
      latitude: 59.926300,
      longitude: 30.331607,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Теленок Джерси',
      animalDescription: 'Рождённый 27.02.22. У мамы второй отёл. Чистопородная.',
      speciesId: 9,
      userId: 4,
      price: 80000,
      phoneNumber: 89857899734,
      city: 'Пермь',
      address: 'улица Окулова, 6',
      latitude: 58.015906,
      longitude: 56.229319,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Богомолы экзотические, редкие',
      animalDescription: 'Мы - крупнейшие заводчики богомолов с большим выбором разнообразных экзотических видов и доставкой по всей России. Мы делаем всё, чтобы вы получили здорового богомола, поэтому внимательно и трепетно относимся к их содержанию и на каждого богомола даём гарантию.',
      speciesId: 8,
      userId: 3,
      price: 390,
      phoneNumber: 89857139734,
      city: 'Екатеринбург',
      address: 'улица Горького, 24',
      latitude: 56.831645,
      longitude: 60.607778,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Мадагаскарские шипящие тараканы',
      animalDescription: 'Очень неприхотливы в уходе и кормлении: едят фрукты, овощи, корм для животных и т.д. Не требуют много места для содержания, не умеют кусаться, не переносят заразу. Отлично подходят как экзотические домашние питомцы. Довольно крупного размера (до 7см). Подходят для корма ящерицам, грызунам, рыбкам, паукам...',
      speciesId: 8,
      userId: 4,
      price: 5,
      phoneNumber: 89257139734,
      city: 'Омск',
      address: 'улица Масленникова, 68',
      latitude: 54.973450,
      longitude: 73.400884,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Котятки в добрые руки',
      animalDescription: 'Срочно раздаю 3х лапотусечных котят-мальчиков. Малышам месяц с небольшим (родились 2 апреля), трое серышей (в папу, вырастут роскошными крупными пушистыми красавцами) и один рыжий пирожок (не менее красивый, милаш, сейчас миниатюрный, а дальше, как кормить 😁). Все уже ходят в лоток, и умеют кушать из блюдца. Заботливые любящие хозяева, найдитесь! 🙏',
      speciesId: 2,
      userId: 2,
      price: 0,
      age: 0.1,
      phoneNumber: 89257949734,
      city: 'Уфа',
      address: 'Новогорная улица, 21',
      latitude: 54.776140,
      longitude: 56.042495,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Добрый, активный, жизнерадостный парень!',
      animalDescription: 'Шикарный мальчик, 1.5 года. Очень благодарный и преданный друг! Метис стафарла. Здоров, привит с паспортом, кастрирован. В поисках любящей семьи, можно с детьми!',
      speciesId: 1,
      userId: 5,
      price: 0,
      age: 1.5,
      phoneNumber: 89257949733,
      city: 'Челябинск',
      address: 'Северо-Крымская улица, 83',
      latitude: 55.186196,
      longitude: 61.363854,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Макс-умница и красавчик ищет дом',
      animalDescription: 'Макс - невероятно преданный и с отличным характером. Самое главное для Макса - это быть рядом с человеком. Он доверяет людям полностью, и, всегда будет рядом с вами. Жизнь Макса проходит в приюте в холодной клетке. Время идёт, а у Макса так и не появилось шанса прожить счастливую домашнюю жизнь. В приюте он заболел. Ему сделали операцию и вырезали опухоль. Макс мужественно сплавляется со всем в надежде, что он дождётся своего хозяина. Приезжайте знакомиться в приют.',
      speciesId: 1,
      userId: 5,
      price: 0,
      phoneNumber: 89257949553,
      city: 'Самара',
      address: 'улица Карбышева, 77',
      latitude: 53.210635,
      longitude: 50.205377,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Девочка с выразительными глазками',
      animalDescription: 'Щенок в добрые руки, 4 мес. Очень сообразительная, смышленая, легко обучаемая. Отлично ладит с детками, собаками и кошками. Здорова, привита, ветпаспорт.',
      speciesId: 1,
      userId: 3,
      price: 0,
      phoneNumber: 89257969553,
      city: 'Челябинск',
      address: 'улица Труда, 88',
      latitude: 55.761469,
      longitude: 37.655561,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Кошка',
      animalDescription: 'Отдадим кошку в добрые руки. Стерилизованная, к лотку приучена. Станет вам верным другом.',
      speciesId: 2,
      userId: 4,
      price: 0,
      phoneNumber: 89257966553,
      city: 'Нижний Новгород',
      address: 'Нижне-Волжская набережная, 13',
      latitude: 56.330033,
      longitude: 43.990987,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Advertisements', null, {});
  },
};
