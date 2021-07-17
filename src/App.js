import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import "./css/App.css";
import SearchTeamPage from "./components/SearchTeamPage";
import SearchPlayerPage from "./components/SearchPlayerPage";
import PlayerInfoPage from "./components/PlayerInfoPage";
import TeamInfoPage from "./components/TeamInfoPage";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/search/teams">
          {" "}
          {/*The '?' means that this variable is optional*/}
          <SearchTeamPage />
        </Route>
        <Route exact path="/search/players">
          {" "}
          {/*The '?' means that this variable is optional*/}
          <SearchPlayerPage />
        </Route>
        <Route exact path="/player/:player_name">
          <PlayerInfoPage />
        </Route>
        <Route exact path="/team/:team_name">
          <TeamInfoPage />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
