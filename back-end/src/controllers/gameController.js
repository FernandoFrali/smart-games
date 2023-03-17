const Game = require('../models/Game');
const Purchased = require('../models/Purchased');

class GameController {
  static async getGames(req, res, next) {
    try {
      const games = await Game.findAll({ raw: true });

      if (!games || !games.length) {
        throw new Error('No games found.');
      }

      res.status(200).json(games);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  static async purchaseGames(req, res, next) {
    try {
      const { gameId, gameName } = req.body;

      if (!gameName || !gameId) {
        throw new Error('Game name not found');
      }

      const response = await Purchased.create({
        gameId: req.body.gameId,
        gameName: req.body.gameName,
      });

      res.status(200).json({ ok: true, response });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
}

module.exports = GameController;
