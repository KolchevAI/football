import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TournamentTable from './components/TournamentTable';
import TeamCards from './components/TeamCards';
import Matches from './components/Matches';

// Основной компонент приложения
function App() {
  return (
    <div>
      {/* Навбар */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Логотип</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Переводство</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Организаторам</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        {/* Заголовок */}
        <div className="d-flex justify-content-between align-items-center">
          <img src="logo.png" alt="Логотип" className="img-fluid" />
          <h1>РУССКИЙ МЕДВЕЖОНОК</h1>
        </div>

        {/* Матчи */}
        <Matches />

        {/* Таблица турнира */}
        <div className="mt-4">
          <TournamentTable />
        </div>

        {/* Карточки команд */}
        <TeamCards />

        {/* Футер */}
        <footer className="footer mt-4">
          <a href="#" className="text-light">Обратная связь</a>
          <div className="d-flex justify-content-end">
            <a href="#"><i className="fab fa-facebook text-light mx-2"></i></a>
            <a href="#"><i className="fab fa-twitter text-light mx-2"></i></a>
            <a href="#"><i className="fab fa-instagram text-light mx-2"></i></a>
            <a href="#"><i className="fab fa-linkedin text-light mx-2"></i></a>
            <a href="#"><i className="fab fa-youtube text-light mx-2"></i></a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
