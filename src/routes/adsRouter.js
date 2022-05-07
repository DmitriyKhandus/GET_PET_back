const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');
const upload = require('../middlewares/upload');
const {
  getAd, getAllAds, getAllSpecies, addAd, deleteAd, editAd,
} = require('../controllers/ads.controller');

const adsRouter = Router();

adsRouter.get('/:id', getAd);
adsRouter.get('/', getAllAds);
adsRouter.get('/species', getAllSpecies);
adsRouter.post('/', checkAuth, upload.array('file', 3), addAd);
adsRouter.delete('/:id', checkAuthor, deleteAd);
adsRouter.patch('/:id', checkAuthor, editAd);

module.exports = adsRouter;
