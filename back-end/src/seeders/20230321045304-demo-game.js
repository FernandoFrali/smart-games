'use strict';

const XLSX = require('xlsx');

const workbook = XLSX.readFile('seeders/games.xlsx');

const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const gamesFromExcel = XLSX.utils.sheet_to_json(worksheet);

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Games', gamesFromExcel);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Games', null, {});
  },
};
