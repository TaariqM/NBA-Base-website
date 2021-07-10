import React, { useState, useEffect, useRef } from "react";
import "../css/SearchPage.css";
import SearchBar from "./SearchBar";
import SearchPlayerResults from "./SearchPlayerResults";
import { useSelector, useDispatch } from "react-redux";
import { setPlayers } from "../features/players/playersSlice";

const SearchPage = () => {
  const dispatch = useDispatch(); //if you want to change a variable in this state, you use useDispatch
  const players = useSelector((state) => state.players.players); //when you want to access a variable in this state, you use useSelector
  const [searchPlayers, setSearchPlayers] = useState("");
  const [results, setResults] = useState([]);

  const handlePlayerChange = (e) => {
    setSearchPlayers(e.target.value);
    if (e.target.value === "") {
      setResults([]);
    } else {
      fetch(
        `https://www.balldontlie.io/api/v1/players?search=${e.target.value}&per_page=10`,
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data && data.data && data.data.length !== 0) {
            setResults(data.data);
          } else {
            setResults([]);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    setResults(players);
    dispatch(setPlayers(null));
  };

  return (
    <div className="searchpage">
      <div className="searchpage__input-group">
        <SearchBar
          search={searchPlayers}
          handleChange={handlePlayerChange}
          handleSubmit={handlePlayerSubmit}
          placeholder="Search for Players"
        />
      </div>

      <div className="searchpage__details">
        {results ? <SearchPlayerResults playerResults={results} /> : null}{" "}
      </div>
    </div>
  );
};

export default SearchPage;
