const { Animal } = require('../../db/models');

const router = require('express').Router();
const checkAuthor = require('../middlewares/checkAuthor');

router.route('/like/:id')
  .post(async (req, res) => {
    try {
      const item = await Item.findOne({
        where: { id: Number(req.params.id) },
      });
      const userLike = await Like.findOne({
        where: { userId: Number(req.session.user.id), itemId: item.id },
      });
      if (userLike) {
        item.likes -= 1;
        await item.save();
        await userLike.destroy();
        return res.json({ likes: item.likes }); // в базе likeCount // отправляет json c countLike
      }
      await Like.create({ itemId: item.id, userId: req.session.user.id });
      await item.update({ likes: item.likes + 1 });
      res.json({ likes: item.likes });
    } catch (error) {
    }
  });
