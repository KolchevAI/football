const express = require('express');
const router = express.Router();
const pool = require('../db/db');

// Маршрут для получения данных таблицы турнира
router.get('/tournament_table', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tournament_table');
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка при загрузке данных таблицы турнира', err.message);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для получения данных команд
router.get('/teams', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM teams');
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка при загрузке данных команд', err.message);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Маршрут для получения данных матчей
router.get('/matches', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM matches');
    res.json(result.rows);
  } catch (err) {
    console.error('Ошибка при загрузке данных матчей', err.message);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;
