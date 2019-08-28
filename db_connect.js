const PgConnection = require('postgresql-easy');
const dbConfig = require('./config/db');
const pg = new PgConnection(dbConfig);

module.exports = pg;
