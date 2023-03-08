const express = require('express');
const app = express();
const connection = require('./database/database');
const Game = require('./models/Game');

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

app.listen(2020, () => {
  console.log('API online!');
});
