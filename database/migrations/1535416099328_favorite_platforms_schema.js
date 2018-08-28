'use strict'

const Schema = use('Schema')

class FavoritePlatformsSchema extends Schema {
  up () {
    this.create('favorite_platforms', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('favorite_platforms')
  }
}

module.exports = FavoritePlatformsSchema
