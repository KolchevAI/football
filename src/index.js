import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const express = require('express');
const app = express();
const port = 3000;
const pg = require('pg');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'posgres',
  password: 'postgres',
  database: 'football'
});

app.get('/tournament-table', async (req, res) => {
  const teams = await getTeams();
  const matches = await getMatches();
  const table = calculateTable(teams, matches);
  res.send(table);
});

async function getTeams() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM teams', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

async function getMatches() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM matches', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function calculateTable(teams, matches) {
  const table = [];
  for (const team of teams) {
    const teamMatches = matches.filter(match => match.home_team_id === team.id || match.away_team_id === team.id);

    let points = 0;
    let goalsFor = 0;
    let goalsAgainst = 0;
    let wins = 0;
    let draws = 0;
    let losses = 0;

    for (const match of teamMatches) {
      if (match.home_team_id === team.id) {
        goalsFor += match.home_team_goals;
        goalsAgainst += match.away_team_goals;
      } else {
        goalsFor += match.away_team_goals;
        goalsAgainst += match.home_team_goals;
      }

      if (match.home_team_goals > match.away_team_goals) {
        wins++;
      } else if (match.home_team_goals === match.away_team_goals) {
        draws++;
      } else {
        losses++;
      }
      
      points += match.home_team_goals > match.away_team_goals ? 3 : match.home_team_goals === match.away_team_goals ? 1 : 0;
    }

    table.push({
      team: team.name,
      points: points,
      matchesPlayed: teamMatches.length,
      goalsFor: goalsFor,
      goalsAgainst: goalsAgainst,
      goalDifference: goalsFor - goalsAgainst,
      wins: wins,
      draws: draws,
      losses: losses
    });
  }

  table.sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    } else if (a.goalDifference !== b.goalDifference) {
      return b.goalDifference - a.goalDifference;
    } else if (a.goalsFor !== b.goalsFor) {
      return b.goalsFor - a.goalsFor;
    } else if (a.wins !== b.wins) {
      return b.wins - a.wins;
    } else {
      return 0;
    }
  });

  return table;
}

app.listen(port, () => {
  console.log();
});

