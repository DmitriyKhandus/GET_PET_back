const router = require('express').Router();
const axios = require('axios');
const fetch = require('node-fetch');

const { User, Animal } = require('../../db/models');
const { setUser, checkForLogIn } = require('../middleware/middlewares');

router.route('/')
  .get(setUser, async (req, res) => {
    try {
      const today = new Date();
      function getWeekDay() {
        const daysOfWeek = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        return daysOfWeek[today.getDay()];
      }

      const date = today.toLocaleDateString('en-GB');
      const dateInFull = `${getWeekDay()}, ${date}`;
      res.render('index', { dateInFull });
    } catch (err) {
      console.log('indexRouter', err);
    }
  });
router.route('/')
  .get(async (req, res) => {
    console.log('index router user ---->>>', req.session.user);
    const animal = await Animal.findAll({ raw: true });

    const comments = postsOrigin.map((el) => ({ ...el, owner: el.userId === req.session.user.id }));
    console.log(posts, req.session.user);
    res.render('index', { posts });
  });

// 	.post(checkForLogIn,  //upload.single('img'), загрузить фото
// 		async (req, res) => {
// 			try {
// 				console.log(req.body)
// 				const event = await Event.create(
// 					{...req.body, userId: req.session.user.id, likes: 0},
// 				);
// 				res.sendStatus(200);
// 			} catch (error) {
// 				res.render('error', {
// 					message: 'Не удалось создать'
// 				})
// 			}
// 		})

module.exports = router;
