const { sequelize } = require('../models/index');
const Game = sequelize.models.Game;
const Purchase = sequelize.models.Purchase;
const { NotFoundError, NotSpecifiedError } = require('../errors/index');

class GameController {
  static async getGames(req, res, next) {
    try {
      const games = await Game.findAll({ raw: true });

      if (!games || !games.length) {
        throw new NotFoundError('No games found.');
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

      if (!gameName) {
        throw new NotSpecifiedError('Game name not specified');
      } else if (!gameId) {
        throw new NotSpecifiedError('Game ID not specified');
      }

      const response = await Purchase.create({
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
