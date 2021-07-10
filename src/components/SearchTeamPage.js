import React, { useState, useEffect, useRef } from "react";
import "../css/SearchPage.css";
import SearchBar from "./SearchBar";
import SearchTeamResults from "./SearchTeamResults";
import { useSelector, useDispatch } from "react-redux";
import { setTeams } from "../features/teams/teamsSlice";

const SearchPage = () => {
  const dispatch = useDispatch(); //if you want to change a variable in this state, you use useDispatch

  const teams = useSelector((state) => state.teams.teams);

  const [searchTeams, setSearchTeams] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    dispatch(setTeams());
  }, []); //this array means that whenever an item in this array is updated, this component will refresh

  const handleTeamChange = (e) => {
    setSearchTeams(e.target.value); //value of the input variable. Everytime it gets changed, it updates the value

    if (e.target.value === "") {
      setResults([]);
    } else if (teams && teams.length !== 0)
      setResults(
        teams.filter((result) => {
          if (result.name.toLowerCase().includes(e.target.value.toLowerCase()))
            return true;
          if (result.city.toLowerCase().includes(e.target.value.toLowerCase()))
            return true;
          if (
            result.abbreviation
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
            return true;
          if (
            result.full_name
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
            return true;
          if (
            result.conference
              .toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
            return true;
          if (
            result.division.toLowerCase().includes(e.target.value.toLowerCase())
          )
            return true;

          return false;
        })
      );
  };

  return (
    <div className="searchpage">
      <div className="searchpage__input-group">
        <SearchBar
          search={searchTeams}
          handleChange={handleTeamChange}
          placeholder="Search for Teams"
        />
      </div>

      <div className="searchpage__details">
        <SearchTeamResults teamResults={results} />
      </div>
    </div>
  );
};

export default SearchPage;
