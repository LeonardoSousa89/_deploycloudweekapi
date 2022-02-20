/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
 production: {
    client: 'postgresql',
    connection: {
      database: 'd5et1ba2iu689n',
      host:'ec2-18-211-41-100.compute-1.amazonaws.com',
      user:     'sctwvtmozovkwy',
      password: 'b579cbe9cae7cd4306848467e08d5ea87e07e4172d278f0620c4840a71e20051',
      ssl: true
      // ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
 },
 development: {
    client: 'postgresql',
    connection: {
      database: 'dataauthtest',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
 }
};
