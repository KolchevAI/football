import React from 'react';
import ".././styles/main.css";
import ".././styles/mainPage.css";

function Matches() {
  const matches = [
    {id: 1, date: '1 Июня', time: '17:00', stadium_id: 'a', home_team_id: 'aa', away_team_id: 'ba', score: '0:0'},
    {id: 2, date: '2 Июня', time: '18:00', stadium_id: 'b', home_team_id: 'ab', away_team_id: 'bb', score: '1:0'},
    {id: 3, date: '3 Июня', time: '19:00', stadium_id: 'c', home_team_id: 'ac', away_team_id: 'bc', score: '0:1'},
  ];

  /*const displayMatches = matches.slice(0,6);*/
  const displayMatches_1 = matches[0]
  const displayMatches_2 = matches[1]
  
  /*let res = displayMatches.map(function(item) {
    return <p key={item.id}>
      <span>{item.date}</span>
      <span>{item.time}</span>
      <span>{item.home_team_id}</span>
      <span>{item.score}</span>
      <span>{item.away_team_id}</span>
    </p>;
  });*/

  return (
    <main className= "match-table">
      <div className= "block_1">
        <div className="wrapper">
          <ul className="match_1">
            <hr />
            <li className="date_time">{displayMatches_1.date}</li>
            <li className="date_time">{displayMatches_1.time}</li>
            <li className="match_data">{displayMatches_1.home_team_id}</li>
            <li className="match_data">{displayMatches_1.score}</li>
            <li className="match_data">{displayMatches_1.away_team_id}</li>
            <hr />
          </ul>
        </div>
        <div className="wrapper_2">
          <ul className="match_2">
            <li className="date_time">{displayMatches_2.date}</li>
            <li className="date_time">{displayMatches_2.time}</li>
            <li className="match_data">{displayMatches_2.home_team_id}</li>
            <li className="match_data">{displayMatches_2.score}</li>
            <li className="match_data">{displayMatches_2.away_team_id}</li>
          </ul>
        </div>
        <div className="wrapper_3">
          <ul className="match_3">
            <hr />
            <li className="date_time">{displayMatches_1.date}</li>
            <li className="date_time">{displayMatches_1.time}</li>
            <li className="match_data">{displayMatches_1.home_team_id}</li>
            <li className="match_data">{displayMatches_1.score}</li>
            <li className="match_data">{displayMatches_1.away_team_id}</li>
            <hr />
          </ul>
        </div>
      </div>

      <div className="block_1">
        <div className="wrapper_4">
          <ul className="match_4">
            <hr />
            <li className="date_time">{displayMatches_1.date}</li>
            <li className="date_time">{displayMatches_1.time}</li>
            <li className="match_data">{displayMatches_1.home_team_id}</li>
            <li className="match_data">{displayMatches_1.score}</li>
            <li className="match_data">{displayMatches_1.away_team_id}</li>
            <hr />
          </ul>
        </div>
        <div className="wrapper_5">
          <ul className="match_5">
            <li className="date_time">{displayMatches_2.date}</li>
            <li className="date_time">{displayMatches_2.time}</li>
            <li className="match_data">{displayMatches_2.home_team_id}</li>
            <li className="match_data">{displayMatches_2.score}</li>
            <li className="match_data">{displayMatches_2.away_team_id}</li>
          </ul>
        </div>
        <div className="wrapper_6">
          <ul className="match_6">
            <hr />
            <li className="date_time">{displayMatches_1.date}</li>
            <li className="date_time">{displayMatches_1.time}</li>
            <li className="match_data">{displayMatches_1.home_team_id}</li>
            <li className="match_data">{displayMatches_1.score}</li>
            <li className="match_data">{displayMatches_1.away_team_id}</li>
            <hr />
          </ul>
        </div>
      </div>
    </main>
  );


/*  return <div>
    {res}
  </div>;*/
}

export default function MatchComponent() {
  return (
    <section className="match-component">
      <h1 className="TournamentName">РУССКИЙ МЕДВЕЖОНОК</h1>
      <div className="HM">
        <h2 className="Heading_matches">МАТЧИ</h2>
        <hr />
      </div>
      <Matches />
    </section>
  );
};