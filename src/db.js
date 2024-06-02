const { db } = require('pg');
const db = new db({
user: 'postgres', host: 'localhost',
database: 'football', password: 'postgres',
port: 3000,
});
module.exports = db;