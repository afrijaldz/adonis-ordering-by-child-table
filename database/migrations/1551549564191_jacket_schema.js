'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JacketSchema extends Schema {
  up () {
    this.create('jackets', (table) => {
      table.increments()
      table.string('name')
      table
        .integer('size_id')
        .unsigned()
        .references('id')
        .inTable('sizes')
    })
  }

  down () {
    this.drop('jackets')
  }
}

module.exports = JacketSchema
