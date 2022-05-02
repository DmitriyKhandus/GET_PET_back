const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');
const upload = require('../middlewares/upload');
const {
  getAllPost, getAll, addPost, deletePost, getAllFavourites,
} = require('../controllers/search.controller');

const searchRouter = Router();

searchRouter.get('/favourites', getAllFavourites);
searchRouter.get('/', getAll);
searchRouter.post('/', /* checkAuth, */ upload.single('file'), addPost);
searchRouter.delete('/', /* checkAuth, */ deletePost);

module.exports = { searchRouter };
