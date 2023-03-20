const app = require('./config/express');
const connection = require('./config/database');
const GameData = require('./seeders/Game');
const { GameModel, PurchaseModel } = require('./models/index');

connection
  .authenticate()
  .then(() => {
    console.log('Connection made to the database!');
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(4040, () => {
  console.log('API online!');
});
