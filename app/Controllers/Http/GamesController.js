'use strict'

const {igdbApi} = require('../../../config/services')

class GamesController {

  /**
   * Show a list of games.
   * GET games
   */
  async index ({ request, params }) {
    //const { page } = request.get()
    let query = params.query

    const { data: games } = await igdbApi.get(`/games/?search=${query}&fields=*`);

    return games
  }
}

module.exports = GamesController
