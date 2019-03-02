'use strict'

/*
|--------------------------------------------------------------------------
| SizeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class SizeSeeder {
  async run () {
    await Database
      .from('sizes')
      .insert([
        {
          title: 'XXS',
          sort: 1,
        },
        {
          title: 'L',
          sort: 5,
        },
        {
          title: 'XL',
          sort: 6,
        },
        {
          title: 'M',
          sort: 4,
        },
        {
          title: 'XS',
          sort: 2,
        },
        {
          title: 'XXL',
          sort: 7,
        },
      ])
  }
}

module.exports = SizeSeeder
