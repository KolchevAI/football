import React from 'react';
import ".././styles/main.css";
import ".././styles/mainPage.css";

function Table() {
  const elements = [
    {id: 1, place: 1, team_id: 1, points: 1, games_played: 1, goals_for: 1, goals_against: 1, goal_dif: 1, wins: 1, draws: 1, losses: 1},
    {id: 2, place: 2, team_id: 2, points: 2, games_played: 2, goals_for: 2, goals_against: 2, goal_dif: 2, wins: 2, draws: 2, losses: 2},
    {id: 3, place: 3, team_id: 3, points: 3, games_played: 3, goals_for: 3, goals_against: 3, goal_dif: 3, wins: 3, draws: 3, losses: 3},
    {id: 4, place: 4, team_id: 4, points: 4, games_played: 4, goals_for: 4, goals_against: 4, goal_dif: 4, wins: 4, draws: 4, losses: 4},
    {id: 5, place: 5, team_id: 5, points: 5, games_played: 5, goals_for: 5, goals_against: 5, goal_dif: 5, wins: 5, draws: 5, losses: 5},
    {id: 6, place: 6, team_id: 6, points: 6, games_played: 6, goals_for: 6, goals_against: 6, goal_dif: 6, wins: 6, draws: 6, losses: 6},
    {id: 7, place: 7, team_id: 7, points: 7, games_played: 7, goals_for: 7, goals_against: 7, goal_dif: 7, wins: 7, draws: 7, losses: 7},
    {id: 8, place: 8, team_id: 8, points: 8, games_played: 8, goals_for: 8, goals_against: 8, goal_dif: 8, wins: 8, draws: 8, losses: 8},
    {id: 9, place: 9, team_id: 9, points: 9, games_played: 9, goals_for: 9, goals_against: 9, goal_dif: 9, wins: 9, draws: 9, losses: 9},
    {id: 10, place: 10, team_id: 10, points: 10, games_played: 10, goals_for: 10, goals_against: 10, goal_dif: 10, wins: 10, draws: 10, losses: 10},
  ];

  const res_1 = elements[0]
  const res_2 = elements[1]
  const res_3 = elements[2]
  const res_4 = elements[3]
  const res_5 = elements[4]
  const res_6 = elements[5]
  const res_7 = elements[6]
  const res_8 = elements[7]
  const res_9 = elements[8]
  const res_10 = elements[9]


  return (
    <table className="Tourn_table">
      <tr className="TH">
        <td>Место</td>
        <td>Название команды</td>
        <td>Очки</td>
        <td>Матчи</td>
        <td>ГЗ</td>
        <td>ГП</td>
        <td>РГ</td>
        <td>В-Н-П</td>
      </tr>
      <tr>
        <td>{res_1.place}</td>
        <td>{res_1.team_id}</td>
        <td>{res_1.points}</td>
        <td>{res_1.games_played}</td>
        <td>{res_1.goals_for}</td>
        <td>{res_1.goals_against}</td>
        <td>{res_1.goal_dif}</td>
        <td>{res_1.wins} - {res_1.draws} - {res_1.losses}</td>
      </tr>
      <tr className="tr_2">
        <td>{res_2.place}</td>
        <td>{res_2.team_id}</td>
        <td>{res_2.points}</td>
        <td>{res_2.games_played}</td>
        <td>{res_2.goals_for}</td>
        <td>{res_2.goals_against}</td>
        <td>{res_2.goal_dif}</td>
        <td>{res_2.wins} - {res_2.draws} - {res_2.losses}</td>
      </tr>
      <tr>
        <td>{res_3.place}</td>
        <td>{res_3.team_id}</td>
        <td>{res_3.points}</td>
        <td>{res_3.games_played}</td>
        <td>{res_3.goals_for}</td>
        <td>{res_3.goals_against}</td>
        <td>{res_3.goal_dif}</td>
        <td>{res_3.wins} - {res_3.draws} - {res_3.losses}</td>
      </tr>
      <tr className="tr_2">
        <td>{res_4.place}</td>
        <td>{res_4.team_id}</td>
        <td>{res_4.points}</td>
        <td>{res_4.games_played}</td>
        <td>{res_4.goals_for}</td>
        <td>{res_4.goals_against}</td>
        <td>{res_4.goal_dif}</td>
        <td>{res_4.wins} - {res_4.draws} - {res_4.losses}</td>
      </tr>
      <tr>
        <td>{res_5.place}</td>
        <td>{res_5.team_id}</td>
        <td>{res_5.points}</td>
        <td>{res_5.games_played}</td>
        <td>{res_5.goals_for}</td>
        <td>{res_5.goals_against}</td>
        <td>{res_5.goal_dif}</td>
        <td>{res_5.wins} - {res_5.draws} - {res_5.losses}</td>
      </tr>
      <tr className="tr_2">
        <td>{res_6.place}</td>
        <td>{res_6.team_id}</td>
        <td>{res_6.points}</td>
        <td>{res_6.games_played}</td>
        <td>{res_6.goals_for}</td>
        <td>{res_6.goals_against}</td>
        <td>{res_6.goal_dif}</td>
        <td>{res_6.wins} - {res_6.draws} - {res_6.losses}</td>
      </tr>
      <tr>
        <td>{res_7.place}</td>
        <td>{res_7.team_id}</td>
        <td>{res_7.points}</td>
        <td>{res_7.games_played}</td>
        <td>{res_7.goals_for}</td>
        <td>{res_7.goals_against}</td>
        <td>{res_7.goal_dif}</td>
        <td>{res_7.wins} - {res_7.draws} - {res_7.losses}</td>
      </tr>
      <tr className="tr_2">
        <td>{res_8.place}</td>
        <td>{res_8.team_id}</td>
        <td>{res_8.points}</td>
        <td>{res_8.games_played}</td>
        <td>{res_8.goals_for}</td>
        <td>{res_8.goals_against}</td>
        <td>{res_8.goal_dif}</td>
        <td>{res_8.wins} - {res_8.draws} - {res_8.losses}</td>
      </tr>
      <tr>
      <td>{res_9.place}</td>
        <td>{res_9.team_id}</td>
        <td>{res_9.points}</td>
        <td>{res_9.games_played}</td>
        <td>{res_9.goals_for}</td>
        <td>{res_9.goals_against}</td>
        <td>{res_9.goal_dif}</td>
        <td>{res_9.wins} - {res_9.draws} - {res_9.losses}</td>
      </tr>
      <tr className="tr_2">
        <td>{res_10.place}</td>
        <td>{res_10.team_id}</td>
        <td>{res_10.points}</td>
        <td>{res_10.games_played}</td>
        <td>1{res_10.goals_for}</td>
        <td>{res_10.goals_against}</td>
        <td>{res_10.goal_dif}</td>
        <td>{res_10.wins} - {res_10.draws} - {res_10.losses}</td>
      </tr>
    </table>
  )
}

export default function TournamentTable() {
  return (
    <section className="table-component">
      <div className="HM">
        <h2 className='Heading_matches'>ТАБЛИЦА</h2>
        <hr />
      </div>
      <Table />
    </section>
  );
};