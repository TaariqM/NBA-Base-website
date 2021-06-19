import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
import "../css/Navigation.css";

const Navigation = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <div className="navbtn-container">
        <div>
          <Link to="/" className="navbtn-container__link">
            HOME
          </Link>
        </div>

        <div>
          <Link to="/search/teams" className="navbtn-container__link">
            TEAMS
          </Link>
        </div>

        <div>
          <Link to="/search/players" className="navbtn-container__link">
            PLAYERS
          </Link>
        </div>
      </div>
      {/* <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/search/:page">
          <SearchPage />
        </Route> */}
      {/* </BrowserRouter> */}
    </>
  );
};

export default Navigation;
