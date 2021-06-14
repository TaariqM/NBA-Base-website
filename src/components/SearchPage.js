import React, { useState, useEffect, useRef } from "react";
import "../css/SearchPage.css";
import { useParams, useHistory } from "react-router-dom";
import SearchBar from "./SearchBar";
import SearchPlayerResults from "./SearchPlayerResults";
import SearchTeamResults from "./SearchTeamResults";

const SearchPage = () => {
  const { page } = useParams();
  const [teams, setTeams] = useState();
  const [players, setPlayers] = useState();
  const [searchTeams, setSearchTeams] = useState("");
  const [searchPlayers, setSearchPlayers] = useState("");
  const history = useHistory();
  const ref = useRef();
  const formRef = useRef();
  const [results, setResults] = useState([]);

  useEffect(() => {
    document.addEventListener("mouseup", handleClickAway);
    fetch(`https://www.balldontlie.io/api/v1/teams`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResults(data.data);
      });

    return () => {
      document.removeEventListener("mouseup", handleClickAway);
      //removes the event listener when the component unmounts(meaning when youre not on the search page)
    };
  }, []); //this array means that whenever an item in this array is updated, this component will refresh

  const handleClickAway = (e) => {
    if (!ref.current.contains(e.target)) {
      setPlayers(null);
      setTeams(null);
    }
  };

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

    setTeams(tempTeams);
    // fetch(
    //   `https://api-basketball.p.rapidapi.com/teams?search=${e.target.value}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-key":
    //         "694b13d17amshbd230d43fbffbd3p16d5a9jsnb8e3754bcb28",
    //       "x-rapidapi-host": "api-basketball.p.rapidapi.com",
    //     },
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => setTeams(data.response.slice(0, 10).reverse()))
    //   .catch((err) => {
    //     console.error(err);
    //   });
    //.filter((team) => team.)
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
      .then((data) => setPlayers(data.data))
      // .then((data) => console.log(data.data))
      .catch((err) => {
        console.error(err);
      });
  };

  const handleTeamClick = (e) => {
    setSearchTeams(e.target.value);
  };

  const handlePlayerClick = (e) => {
    setSearchPlayers(e.target.value);
    // formRef.current.submit();
    history.push(`/search/players/${e.target.value}`);
    setPlayers(null);
  };

  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    //console.log(e);
    //console.log(e.target[0].value);
    //history.push(`/search/players/${e.target[0].value}`);
    setResults(players);
    setPlayers(null);
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // history.push(`/search/teams/${e.target[0].value}`);
    setResults(teams);
    setTeams(null);
  };

  //const updatedArray = () => {
  // const updatedPlayers = results.shift();
  // const newArr = updatedPlayers.slice(1, updatedPlayers.length + 1);
  //const first = Object.keys(results)[0];
  //delete results[first];
  //};

  return page === "teams" ? (
    <div className="searchpage" ref={ref}>
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
        <SearchTeamResults teamResults={results} />
      </div>
    </div>
  ) : (
    <div className="searchpage" ref={ref}>
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
        <SearchPlayerResults playerResults={results} />{" "}
        {/**Changed from results to updatedPlayers. Now I changed 'results' to 'newArr' */}
      </div>
    </div>
  );
};

export default SearchPage;
