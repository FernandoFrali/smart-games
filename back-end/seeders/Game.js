const Game = require('../models/Game');
const XLSX = require('xlsx');

const workbook = XLSX.readFile('seeders/games.xlsx');

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const gamesFromExcel = XLSX.utils.sheet_to_json(worksheet);
console.log('AQUI OLHA, OLHA OLHA:', gamesFromExcel);

Game.bulkCreate(gamesFromExcel)
  .then((createdGames) => {
    console.log(`Foram inseridos ${createdGames.length} jogos.`);
  })
  .catch((error) => {
    console.error(error);
  });
