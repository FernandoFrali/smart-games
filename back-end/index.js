const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./database/database');
const GameData = require('./seeders/Game');
const routes = require('./controllers/routes');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

connection
  .authenticate()
  .then(() => {
    console.log('Connection made to the database!');
  })
  .catch((error) => {
    console.error(error);
  });

app.use('/', routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error.' });
});

app.listen(19001, () => {
  console.log('API online!');
});
