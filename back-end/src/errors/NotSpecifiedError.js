const AppError = require('./AppError');

class NotSpecifiedError extends AppError {
  constructor(message = 'Please send all mandatory data') {
    super(message, 400);
  }
}

module.exports = NotSpecifiedError;
