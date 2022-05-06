require('dotenv').config();
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const FileStore = require('session-file-store')(session);
const path = require('path');

const authRouter = require('./src/routes/authRouter');
const usersRouter = require('./src/routes/usersRouter');
const { favoriteRouter } = require('./src/routes/favoriteRouter');
const { postRouter } = require('./src/routes/postRouter');
const { tipsRouter } = require('./src/routes/tipsRouter');

const app = express();

const { COOKIE_SECRET, COOKIE_NAME } = process.env;
const PORT = process.env.PORT || 4000;

app.set('cookieName', COOKIE_NAME);

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: app.get('cookieName'),
    secret: COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new FileStore(),
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1e3 * 86400,
    },
  }),
);

app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/posts/favorites', favoriteRouter);
app.use('/posts', postRouter);
app.use('/tips', tipsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
