'use strict'

const { igdbApi } = require('../../../config/services')
const moment = require('moment')
const translate = require('google-translate-api')
const Game = use('App/Models/Game')

class GamesController {
  /**
   * Show a list of games.
   * GET games
   */
  async index ({ request, params }) {
    // const { page } = request.get()
    let query = params.query

    const { data: games } = await igdbApi.get(
      `/games/?search=${query}&fields=*`
    )

    games.forEach(async g => {
      try {
        const gameDB = await Game.where('id')
          .eq(g.id)
          .fetch()

        if (
          !gameDB.first() ||
          moment().diff(
            moment(gameDB.first().translated_at, 'YYYY-MM-DD'),
            'days'
          ) > 7
        ) {
          const { text: translated } = await translate(g.summary, {
            from: 'en',
            to: 'pt'
          })
          g.translated_summary = translated
          g.translated_at = moment().format('YYYY-MM-DD')

          let game = new Game()
          game = g

          await Game.create(game)
        }
      } catch (error) {
        console.log(error)
      }
    })

    return games
  }
}

module.exports = GamesController
