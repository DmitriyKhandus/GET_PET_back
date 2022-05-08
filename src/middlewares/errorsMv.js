const { CustomError } = require('../error/errors');

module.exports = function (err, req, res) {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Неизвестная ошибка' });
};
