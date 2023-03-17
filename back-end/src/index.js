const app = require('./config/express');
const connection = require('./config/database');
const GameData = require('./seeders/Game');

connection
  .authenticate()
  .then(() => {
    console.log('Connection made to the database!');
  })
  .catch((error) => {
    console.error(error);
  });

app.listen(19001, () => {
  console.log('API online!');
});
