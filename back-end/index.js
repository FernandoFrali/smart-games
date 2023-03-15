const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./database/database');
const Purchased = require('./models/Purchased');
const Game = require('./models/Game');
const GameData = require('./seeders/Game');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados!');
  })
  .catch((error) => {
    console.error(error);
  });

app.get('/games', async (req, res) => {
  try {
    const games = await Game.findAll({ raw: true });
    res.status(200).json(games);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar jogos.' });
  }
});

app.post('/purchased', async (req, res) => {
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

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno no servidor.' });
});

app.listen(6060, () => {
  console.log('API online!');
});
