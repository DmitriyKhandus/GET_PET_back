require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);
const path = require('path');
const ErrorHandler = require('./src/middlewares/errorsMv');

const authRouter = require('./src/routes/authRouter');
const usersRouter = require('./src/routes/usersRouter');
const { favoriteRouter } = require('./src/routes/favoriteRouter');
const { postRouter } = require('./src/routes/postRouter');
const { tipsRouter } = require('./src/routes/tipsRouter');
const { messageRouter } = require('./src/routes/messageRouter');

const { COOKIE_SECRET, COOKIE_NAME } = process.env;
const app = express();
const sessionConfig = {
  name: COOKIE_NAME,
  secret: COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1e3 * 86400,
  },
};

const sessionParser = session(sessionConfig);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionParser);

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/messages', messageRouter);
app.use('/posts/favorites', favoriteRouter);
app.use('/posts', postRouter);
app.use('/tips', tipsRouter);
app.use(ErrorHandler);

module.exports = {
  app,
  sessionParser,
};
