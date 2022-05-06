const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');

const {
  getAllFavourites, addToFavourites, deleteFromFavourites,
} = require('../controllers/post.controller');

const favoriteRouter = Router();

favoriteRouter.get('/:id', checkAuth, addToFavourites);
favoriteRouter.get('/', checkAuth, getAllFavourites);
favoriteRouter.delete('/:id', checkAuth, deleteFromFavourites);

module.exports = { favoriteRouter };
