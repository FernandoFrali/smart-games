const AppError = require('../errors/AppError');

module.exports = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
