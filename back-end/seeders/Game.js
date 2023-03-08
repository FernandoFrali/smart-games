const Game = require('../models/Game');
const XLSX = require('xlsx');

const workbook = XLSX.readFile('seeders/games.xlsx');

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const gamesFromExcel = XLSX.utils.sheet_to_json(worksheet);

Game.count()
  .then((count) => {
    if (count === 0) {
      return Game.bulkCreate(gamesFromExcel);
    } else {
      console.log('A tabela games já possui registros.');
      return null;
    }
  })
  .then((createdGames) => {
    if (createdGames) {
      console.log(`Foram inseridos ${createdGames.length} jogos.`);
    }
  })
  .catch((error) => {
    console.error(error);
  });
