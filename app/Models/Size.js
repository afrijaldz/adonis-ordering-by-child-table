'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Size extends Model {
  jackets() {
    return this.hasMany('App/Models/Jacket')
  }
}

module.exports = Size
