class CustomError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static notFound(message) {
    return new CustomError(404, message);
  }

  static internalError(message = 'Внутренняя ошибка сервера') {
    return new CustomError(500, message);
  }

  static forbiddenError(message) {
    return new CustomError(403, message);
  }

  static badRequest(message) {
    return new CustomError(400, message);
  }
}

module.exports = { CustomError };
