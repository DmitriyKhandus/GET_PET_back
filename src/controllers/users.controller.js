const { User } = require('../../db/models');
const { CustomError } = require('../error/errors');

const editUser = async (req, res, next) => {
  // console.log('editUser', req.file);
  let updatedFields = Object.entries(req.body).filter((el) => el[1]);
  if (updatedFields.length) {
    updatedFields = Object.fromEntries(updatedFields);
    updatedFields.avatarPath = `/img/${req.file.path.slice(6)}`;
    try {
      const [, updatedUser] = await User.update(updatedFields, {
        where: { id: req.session.user.id },
        returning: true,
        plain: true,
        raw: true,
      });
      return res.json(updatedUser);
    } catch (error) {
      return next(CustomError.internalError());
    }
  }
  return next(CustomError.badRequest('Ошибка ввода данных'));
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const obj = await User.findByPk(id, { attributes: ['name', 'avatarPath', 'aboutUser', 'email', 'phoneNumber'] });
    // console.log('getUser', obj);
    if (obj === null) { return next(CustomError.badRequest('Пользователь не найден')); }
    return res.json(
      obj,
    );
  } catch (error) {
    return next(CustomError.internalError());
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    return res.json(allUsers);
  } catch (error) {
    return next(CustomError.internalError());
  }
};

module.exports = {
  editUser,
  getUser,
  getAllUsers,
};
