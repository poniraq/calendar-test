const resolve = require('path').resolve;

module.exports = {
  development: {
    driver: 'pg',
    username: 'postgres',
    password: null,
    database: 'calendar_dev',
    host: 'localhost',
    dialect: 'postgres',

    modelPaths: [
      resolve(__dirname, '../models/**/*.model.js')
    ]
  },

  production: {
    driver: 'pg',
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
    dialectOptions: {
      ssl: true
    },

    modelPaths: [
      resolve(__dirname, '../models/**/*.model.js')
    ]
  }
}
