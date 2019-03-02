'use strict'

const JacketModel = use('App/Models/Jacket')
const Database = use('Database')

class JacketController {
  async all ({ response }) {
    const jackets = await JacketModel.query()
      .select('jackets.*', Database.raw(`(SELECT sort FROM sizes WHERE jackets.size_id = sizes.id) as sort`))
      .with('size')
      .orderBy('sort', 'DESC')
      .fetch()

    response.json(jackets)
  }
}

module.exports = JacketController
