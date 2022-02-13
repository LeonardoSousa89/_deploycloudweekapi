const dbConfig   = require('../knexfile')['production']
const db = require('knex')(dbConfig)

module.exports = db