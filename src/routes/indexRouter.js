const router = require('express').Router();
const { Advertisement } = require('../../db/models');

//ВЫВОД ВСЕХ И ДАТЫ
router.route('/')
  .get(async (req, res) => {
    try {
      const today = new Date();
      function getWeekDay() {
        const daysOfWeek = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return daysOfWeek[today.getDay()];
      }
      const date = today.toLocaleDateString('en-GB');
      const dateInFull = `${getWeekDay()}, ${date}`;
      
      const ads = await Advertisement.findAll();
      res.json({
        content: ads, dateInFull
      });
      
    } catch (err) {
      console.log('indexRouter', err);
    }
  });

//ПОИСК
router.route('/search')
  .get( async (req, res) => {
  const result = await Advertisement.findAll({ where: { title: { [Op.iLike]: `%${req.body.str}%` } } });
  res.json(result);
});

module.exports = router;
