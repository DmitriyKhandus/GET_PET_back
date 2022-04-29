const {Animal} = require("../../db/models");
const router = require('express').Router();
const checkAuthor = require("../middlewares/checkAuthor");


//на одно животное

router.route('/:id') // защита
	.get((req, res) => {
		res.redirect('/');
	})
	.delete(checkAuthor,  async (req, res) => { // если есть кпопки на постах
		const {id} = req.params;
		await Animal.destroy({where: {id}});
		res.sendStatus(200);
	})
	.patch(async (req, res) => {// штучная замена
		const {animal_name, animal_description, image,} = req.body;
		try {
			await Item.update(
				{title, image, description},
				{where: {id: Number(req.params.id)}});
			const result = await Item.findOne({
				where: {id: Number(req.params.id)}, raw:true
			});
			console.log(result);
			res.json(result); // front
		} catch (error) {
			res.render('error', {message: error.message});
		}
	})
	.post(async (req, res) => {
			try {
				const theItem = await Item.findOne({where: {id:req.params.id}});//, raw: true}
				res.json({theItem})
			} catch (error) {
				res.render('error', {message: error})
			}
		}
	)
router.route('/like/:id')
	.post(async (req, res) => {
		try {
			const item = await Item.findOne({
				where: {id: Number(req.params.id)},
			});
			const userLike = await Like.findOne({
				where: {userId: Number(req.session.user.id), itemId: item.id},
			});
			if (userLike) {
				item.likes -= 1;
				await item.save();
				await userLike.destroy();
				return res.json({likes: item.likes}); //в базе likeCount // отправляет json c countLike
			}
			await Like.create({itemId: item.id, userId: req.session.user.id});
			await item.update({likes: item.likes + 1});
			res.json({likes: item.likes});
		} catch (error) {
		}
	})
