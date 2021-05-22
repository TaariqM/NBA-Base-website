import React, { useState, useEffect } from "react";
import "../css/SearchPage.css";
import { useParams } from "react-router-dom";
import SearchBar from "./SearchBar";

const SearchPage = () => {
  const { page } = useParams();
  const [teams, setTeams] = useState();
  const [players, setPlayers] = useState();
  const [searchTeams, setSearchTeams] = useState("");
  const [searchPlayers, setSearchPlayers] = useState("");

  const handleTeamChange = (e) => {
    setSearchTeams(e.target.value);
    fetch(
      `https://api-basketball.p.rapidapi.com/teams?search=${e.target.value}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "694b13d17amshbd230d43fbffbd3p16d5a9jsnb8e3754bcb28",
          "x-rapidapi-host": "api-basketball.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setTeams(data.response.slice(0, 10)))
      .catch((err) => {
        console.error(err);
      });
  };

  const handlePlayerChange = (e) => {
    setSearchPlayers(e.target.value);
    fetch(
      `https://www.balldontlie.io/api/v1/players?search=${e.target.value}&per_page=10`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleTeamClick = (e) => {
    setSearchTeams(e.target.value);
  };

  const handlePlayerClick = (e) => {
    setSearchPlayers(e.target.value);
  };

  return page === "teams" ? (
    <div className="searchpage">
      <div className="searchpage__input-group">
        <SearchBar
          search={searchTeams}
          handleChange={handleTeamChange}
          placeholder="Search for Teams"
        />
      </div>
      <div
        style={{
          height: !teams || teams.length !== 0 ? "fit-content" : 0,
        }}
        className="searchpage__results"
      >
        {teams
          ? teams.map((team) => (
              <button value={team.name} onClick={handleTeamClick}>
                {team.name}
              </button>
            ))
          : null}
      </div>
    </div>
  ) : (
    <div className="searchpage">
      <div className="searchpage__input-group">
        <SearchBar
          search={searchPlayers}
          handleChange={handlePlayerChange}
          placeholder="Search for Players"
        />
      </div>
      <div className="searchpage__results">
        {players
          ? players.map((player) => (
              <button
                value={`${player.first_name} ${player.last_name}`}
                onClick={handlePlayerClick}
              >
                {`${player.first_name} ${player.last_name}`}
              </button>
            ))
          : null}
      </div>
    </div>
  );
};

export default SearchPage;
