'use strict'

const Schema = use('Schema')

class GamesSchema extends Schema {
  up () {
    this.create('games', (table) => {
      table.increments()
      table.integer('code').notNullable().unique()
      table.string('name').notNullable()
      table.string('slug').notNullable().unique()
      table.string('url').notNullable()
      table.string('summary').notNullable()
      table.string('summary_translated').notNullable()
      table.double('rating').notNullable()
      table.double('popularity').notNullable()
      table.double('total_rating').notNullable()
      table.double('rating_count').notNullable()
      table.integer('developer').notNullable()
      table.integer('category').notNullable()
      table.integer('first_release_date').notNullable()
      table.integer('platform').notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('games')
  }
}

module.exports = GamesSchema
