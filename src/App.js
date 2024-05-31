import "./styles/main.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MatchComponent from "./components/Matches"
import TournamentTable from "./components/Table"
import Team from "./components/Teams"

function App() {
  return (
    <div className="main">
      <Header />
      <MatchComponent />
      <TournamentTable />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
