const router = require('express').Router();
const { Advertisement, Species, Breed, User, Location } = require('../../db/models');

router.route('/search')
//ПОИСК
.get( async (req, res) => {
	const result = await Advertisement.findAll({ where: { title: { [Op.iLike]: `%${req.body.str}%` } } });
	res.json(result);
});

//ВЫВОД КОТОВ
router.route('/cat-breeds')
	.get(async (req, res) => {
			try {
				const dogs = await Advertisement.findAll({
					include: [{
						model: Species}, {
						model: Breed},{
						model: User},{
						model: Location}],
					where: {speciesId:1}
				})
				res.json({
					content: dogs,
				});
			} catch (err) {
				console.log('breedsRouter', err);
			}
		});
//ВЫВОД СОБАК
router.route('/dog-breeds')
	.get(async (req, res) => {
		try {
			const dogs = await Advertisement.findAll({
				include: [{
				model: Species}, {
					model: Breed},{
					model: User},{
					model: Location}],
				where: {speciesId:2}
			})
			res.json({
				content: dogs,
			});
		} catch (err) {
			console.log('breedsRouter', err);
		}
	});
