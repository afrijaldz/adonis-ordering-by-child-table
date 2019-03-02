'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Jacket extends Model {
  size() {
    return this.belongsTo('App/Models/Size')
  }
}

module.exports = Jacket
