const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');

const {
  getAllFavourites, addToFavourites, deleteFromFavourites,
} = require('../controllers/ads.controller');

const favoritesRouter = Router();

favoritesRouter.get('/:id', checkAuth, addToFavourites);
favoritesRouter.get('/', checkAuth, getAllFavourites);
favoritesRouter.delete('/:id', checkAuth, deleteFromFavourites);

module.exports = favoritesRouter;
