const { Router } = require('express');
const checkAuth = require('../middlewares/checkAuth');
const checkAuthor = require('../middlewares/checkAuthor');
const upload = require('../middlewares/upload');
const {
  getOnePost, getAll, getAllSpecies, addPost, deletePost, editPost,
} = require('../controllers/post.controller');

const postRouter = Router();

postRouter.get('/species', getAllSpecies);
postRouter.get('/:id', getOnePost);
postRouter.get('/', getAll);
postRouter.post('/', checkAuth, upload.array('file', 3), addPost);
postRouter.delete('/:id', checkAuthor, deletePost);
postRouter.patch('/:id', checkAuthor, editPost);

module.exports = { postRouter };
