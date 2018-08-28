'use strict'

const Schema = use('Schema')

class FavoriteGamesSchema extends Schema {
  up () {
    this.create('favorite_games', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('favorite_games')
  }
}

module.exports = FavoriteGamesSchema
