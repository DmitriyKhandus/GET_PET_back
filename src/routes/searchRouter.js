const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');
const upload = require('../middlewares/upload');
const {
  getAll, addPost, deletePost, getAllFavourites, addToFavourites,
} = require('../controllers/search.controller');

const searchRouter = Router();

searchRouter.get('/favourites/:id', addToFavourites);
searchRouter.get('/favourites', getAllFavourites);
searchRouter.get('/', getAll);
searchRouter.post('/', /* checkAuth, */ upload.array('file', 3), addPost);
searchRouter.delete('/', /* checkAuth, */ deletePost);

module.exports = { searchRouter };
