const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');
const upload = require('../middlewares/upload');
const {
  getAd, getAllAds, getAllSpecies, addAd, deleteAd, editAd,
} = require('../controllers/post.controller');

const postRouter = Router();

postRouter.get('/species', getAllSpecies);
postRouter.get('/:id', getAd);
postRouter.get('/', getAllAds);
postRouter.post('/', checkAuth, upload.array('file', 3), addAd);
postRouter.delete('/:id', checkAuthor, deleteAd);
postRouter.patch('/:id', checkAuthor, editAd);

module.exports = postRouter;
