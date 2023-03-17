const express = require('express');
const router = express.Router();
const GameController = require('../controllers/gameController');
const errorHandler = require('../utils/errorHandler');

router.get('/games', GameController.getGames);

router.post('/purchased', GameController.purchaseGames);

router.use(errorHandler);

module.exports = router;
