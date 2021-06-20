import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../css/Navigation.css";
// this component creates the Navigation Bar

const Navigation = () => {
  return (
    <>
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
    </>
  );
};

export default Navigation;
