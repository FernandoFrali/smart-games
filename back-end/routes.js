const express = require('express');
const router = express.Router();
const Purchased = require('./models/Purchased');
const Game = require('./models/Game');

router.get('/games', async (req, res) => {
  try {
    const games = await Game.findAll({ raw: true });
    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar jogos.' });
  }
});

router.post('/purchased', async (req, res) => {
  try {
    const response = await Purchased.create({
      gameId: req.body.gameId,
      gameName: req.body.gameName,
    });
    res.status(200).json({ ok: true, response });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ ok: false, error: 'Erro ao criar registro de compra.' });
  }
});

module.exports = router;
