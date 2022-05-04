const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');

const {
  getAllFavourites, addToFavourites, deleteFromFavourites,
} = require('../controllers/post.controller');

const favoriteRouter = Router();

favoriteRouter.get('/favorites/:id', checkAuth, addToFavourites);
favoriteRouter.get('/favorites', checkAuth, getAllFavourites);
favoriteRouter.delete('/favorites/:id', checkAuth, deleteFromFavourites);

module.exports = { favoriteRouter };
