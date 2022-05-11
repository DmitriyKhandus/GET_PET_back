const { Router } = require('express');
const upload = require('../middlewares/upload');

const multerRouter = Router();

multerRouter.post('/', upload.single('file'), (req, res) => {
  // console.log('multer', req);
  res.sendStatus(200);
});

module.exports = multerRouter;
