import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//матчи

router.get("/matches", async (req, res) => {
  try {
    const upcomingMatches = await pool.query(
      `SELECT *
        FROM matches
        WHERE match_date >= NOW()
        ORDER BY match_date ASC`
    );
    res.json(upcomingMatches.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error getting upcoming matches" });
  }
});

router.get("/matches/:id", async (req, res) => {
  const matchId = req.params.id;

  try {
    const match = await pool.query(
      `SELECT *
        FROM matches
        WHERE match_id = $1`,
      [matchId]
    );

    if (match.rows.length === 0) {
      return res.status(404).json({ error: "Match not found" });
    }

    res.json(match.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Error getting match details" });
  }
});

module.exports = router;


  
//таблица
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

