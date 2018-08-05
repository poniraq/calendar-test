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
  }
}
