const { CustomError } = require('../error/errors');

module.exports = (error, req, res) => {
  if (error instanceof CustomError) {
    return res.status(error.status).json({ message: error.message });
  }
  return res.status(500).json({ message: 'Неизвестная ошибка' });
};
