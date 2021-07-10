//import logo from './logo.svg';
//import './App.css';
//import Header from './components/Header'
// import HomePage from './components/HomePage'
import Header from "./components/Header";
//import Button from "./components/Button";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import "./css/App.css";
import SearchTeamPage from "./components/SearchTeamPage";
import SearchPlayerPage from "./components/SearchPlayerPage";

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
      </BrowserRouter>

      {/* <Button /> */}
    </div>
  );
}

export default App;
