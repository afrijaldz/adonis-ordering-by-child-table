'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SizeSchema extends Schema {
  up () {
    this.create('sizes', (table) => {
      table.increments()
      table.string('title')
      table.integer('sort').unique()
    })
  }

  down () {
    this.drop('sizes')
  }
}

module.exports = SizeSchema
