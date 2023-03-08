const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./database/database');
const Game = require('./models/Game');
const GameTable = require('./models/Game');
const GameData = require('./seeders/Game');

app.use(cors());

connection
  .authenticate()
  .then(() => {
    console.log('Conexão feita com o banco de dados!');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('ola');
});

app.get('/games', (req, res) => {
  Game.findAll({ raw: true }).then((games) => {
    res.statusCode = 200;
    res.json(games);
  });
});

app.listen(6060, () => {
  console.log('API online!');
});
