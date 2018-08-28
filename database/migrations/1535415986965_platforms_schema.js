'use strict'

const Schema = use('Schema')

class PlatformsSchema extends Schema {
  up () {
    this.create('platforms', (table) => {
      table.increments()
      table.integer('code').notNullable().unique()
      table.string('name').notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('platforms')
  }
}

module.exports = PlatformsSchema
