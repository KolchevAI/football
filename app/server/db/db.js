const { Pool } = require('pg');

// Настройка подключения к базе данных
const pool = new Pool({
  user: 'yourUsername',
  host: 'localhost',
  database: 'yourDatabase',
  password: 'yourPassword',
  port: 5432,
});

module.exports = pool;
