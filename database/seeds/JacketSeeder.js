'use strict'

/*
|--------------------------------------------------------------------------
| JacketSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class JacketSeeder {
  async run () {
    await Database.from('jackets')
      .insert([
        {
          name: 'Gabbana Leather',
          size_id: 2
        },
        {
          name: 'Givenchy Studded',
          size_id: 3
        },
        {
          name: 'Balmain Embroidered',
          size_id: 4
        },
        {
          name: 'Enfants Riches Déprimés',
          size_id: 1
        },
        {
          name: 'Mastermind Japan',
          size_id: 6
        }
      ])
  }
}

module.exports = JacketSeeder
