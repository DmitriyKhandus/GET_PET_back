require('dotenv').config();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const { CustomError } = require('../error/errors');

const { COOKIE_NAME } = process.env;

const signUp = async (req, res, next) => {
  const { name, password, email } = req.body;
  if (name && password && email) {
    try {
      const secretPass = await bcrypt.hash(password, Number(process.env.ROUNDS_HASH));
      const newUser = await User.create({
        name,
        password: secretPass,
        email,
      });
      req.session.user = {
        id: newUser.id,
        name: newUser.name,

      };
      return res.json({ id: newUser.id, name: newUser.name });
    } catch (error) {
      return next(CustomError.internalError('Пользователь не может быть создан с таким email'));
    }
  }
  return next(CustomError.badRequest('Ошибка ввода данных'));
};

const signIn = async (req, res, next) => {
  const { password, email } = req.body;
  if (password && email) {
    try {
      const currentUser = await User.findOne({ where: { email } });
      const isValidPassword = await bcrypt.compare(password, currentUser.password);
      if (currentUser && isValidPassword) {
        req.session.user = {
          id: currentUser.id,
          name: currentUser.name,
        };

        return res.json({ id: currentUser.id, name: currentUser.name });
      }
    } catch (error) {
      return res.sendStatus(500);
    }
  }
  return next(CustomError.internalError());
};

const signOut = async (req, res) => {
  res.clearCookie(COOKIE_NAME);
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);
    return res.sendStatus(200);
  });
};

const checkAuth = async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user.id);
    return res.json({ id: user.id, name: user.name });
  } catch (error) {
    return res.sendStatus(500);
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  checkAuth,
};
