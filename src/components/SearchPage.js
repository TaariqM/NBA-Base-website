import React, { useState, useEffect, useRef } from "react";
import "../css/SearchPage.css";
import { useParams, useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchPlayerResults from "./SearchPlayerResults";
import SearchTeamResults from "./SearchTeamResults";
import { useSelector, useDispatch } from "react-redux";
import { setPlayers } from "../features/players/playersSlice";
import { setTeams } from "../features/teams/teamsSlice";

const SearchPage = () => {
  const dispatch = useDispatch(); //if you want to change a variable in this state, you use useDispatch
  const players = useSelector((state) => state.players.players); //when you want to access a variable in this state, you use useSelector
  const teams = useSelector((state) => state.teams.teams);
  const { page } = useParams();
  const [searchTeams, setSearchTeams] = useState("");
  const [searchPlayers, setSearchPlayers] = useState("");
  const history = useHistory();
  const ref = useRef();
  const formRef = useRef();
  const [results, setResults] = useState([]);

  const handleClickAway = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      dispatch(setPlayers(null));
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleClickAway);
    if (page === "teams") {
      fetch(`https://www.balldontlie.io/api/v1/teams`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setResults(data.data);
        });
    } else if (page === "players") {
      setResults([]);
    }

    return () => {
      document.removeEventListener("mouseup", handleClickAway);
      //removes the event listener when the component unmounts(meaning when youre not on the search page)
    };
  }, [page]); //this array means that whenever an item in this array is updated, this component will refresh

  const handleTeamChange = (e) => {
    setSearchTeams(e.target.value); //value of the input variable. Everytime it gets changed, it updates the value
    const tempTeams = results.filter((result) => {
      if (result.name.toLowerCase().includes(e.target.value.toLowerCase()))
        return true;
      if (result.city.toLowerCase().includes(e.target.value.toLowerCase()))
        return true;
      if (
        result.abbreviation.toLowerCase().includes(e.target.value.toLowerCase())
      )
        return true;
      if (result.full_name.toLowerCase().includes(e.target.value.toLowerCase()))
        return true;
      if (
        result.conference.toLowerCase().includes(e.target.value.toLowerCase())
      )
        return true;
      if (result.division.toLowerCase().includes(e.target.value.toLowerCase()))
        return true;

      return false;
    });

    dispatch(setTeams(tempTeams));
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
      .then((data) => dispatch(setPlayers(data.data)))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleTeamClick = (e) => {
    setSearchTeams(e.target.value);
  };

  const handlePlayerClick = (e) => {
    setSearchPlayers(e.target.value);
    history.push(`/search/players/${e.target.value}`);
    dispatch(setPlayers(null));
  };

  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    setResults(players);
    dispatch(setPlayers(null));
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    setResults(teams);
  };

  return page === "teams" ? (
    <div className="searchpage">
      <div className="searchpage__input-group">
        <SearchBar
          ref={formRef}
          handleSubmit={handleTeamSubmit}
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
        ref={ref}
      >
        {teams
          ? teams.map((team, index) => (
              <button key={index} value={team.name} onClick={handleTeamClick}>
                {team.name}
              </button>
            ))
          : null}
      </div>
      <div className="searchpage__details">
        {results ? <SearchTeamResults teamResults={results} /> : null}
      </div>
    </div>
  ) : (
    <div className="searchpage">
      <div className="searchpage__input-group">
        <SearchBar
          ref={formRef}
          search={searchPlayers}
          handleChange={handlePlayerChange}
          handleSubmit={handlePlayerSubmit}
          placeholder="Search for Players"
        />
      </div>
      <div
        style={{
          height: !players || players.length !== 0 ? "fit-content" : 0,
        }}
        className="searchpage__results"
        ref={ref}
      >
        {players
          ? players.map((player, index) => (
              <button
                key={index}
                value={`${player.first_name} ${player.last_name}`}
                onClick={handlePlayerClick}
              >
                {`${player.first_name} ${player.last_name}`}
              </button>
            ))
          : null}
      </div>
      <div className="searchpage__details">
        {results ? <SearchPlayerResults playerResults={results} /> : null}{" "}
      </div>
    </div>
  );
};

export default SearchPage;
