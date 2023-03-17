const app = require('../config/express');

module.exports = (err, req, res, next) => {
  if (err.message === 'No games found.') {
    return res.status(500).json({ error: err.message });
  } else if (err.message === 'Game name not found') {
    res.status(404).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({ error: 'Internal server error.' });
  }
};
