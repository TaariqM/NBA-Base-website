import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PlayerPicture from "./PlayerPicture";
import "../css/PlayerInfoPage.css";
import { useSelector, useDispatch } from "react-redux";
import { setPlayers } from "../features/players/playersSlice";

const PlayerInfoPage = () => {
  const { player_name } = useParams();
  const [playerInfo, setPlayerInfo] = useState([]);
  const [playerID, setPlayerID] = useState();
  const [playerStats, setPlayerStats] = useState([]);

  useEffect(() => {
    //this function is used to get the info of a specific player
    fetch(`https://www.balldontlie.io/api/v1/players?search=${player_name}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.length !== 0) {
          setPlayerInfo(data.data[0]);
          setPlayerID(data.data[0].id);
          console.log("Player Info: ", data.data[0]);
          console.log("Player ID: ", data.data[0].id);
        } else {
          setPlayerInfo([]);
          setPlayerID(null);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    //this function is used to get the Season Averages of a specific player // JSON.parse(JSON.stringify(response))
    fetch(
      `https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerID}`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.length !== 0) {
          setPlayerStats(data.data[0]);
          console.log("Player Season Averages: ", data.data[0]);
        } else {
          setPlayerStats([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getPlayerPosition = (pos) => {
    //this function takes the position letter and converts it to its full name
    let playerPos;
    if (pos === "F") {
      playerPos = "Forward";
    } else if (pos === "G") {
      playerPos = "Guard";
    } else if (pos === "C") {
      playerPos = "Center";
    } else {
      playerPos = "Not Available";
    }

    return playerPos;
  };

  return (
    <div className="player-info">
      <div className="player-info__result-card">
        <div className="player-info__result-card__top-row">
          <div className="player-info__result-card__top-row__left-col">
            <PlayerPicture
              firstName={playerInfo.first_name}
              lastName={playerInfo.last_name}
            />
          </div>
          <div className="player-info__result-card__top-row__mid-col">
            <div className="player-info__result-card__top-row__mid-col__left-side">
              <p>First Name: {playerInfo.first_name}</p>
              <p>Last Name: {playerInfo.last_name}</p>
              <p>
                Team:{" "}
                {playerInfo &&
                playerInfo.team &&
                playerInfo.team.full_name !== ""
                  ? playerInfo.team.full_name
                  : "Not Available"}
              </p>
              <p>
                Position:{" "}
                {playerInfo && playerInfo.position !== ""
                  ? getPlayerPosition(playerInfo.position)
                  : "Not Available"}
              </p>
            </div>

            <div className="player-info__result-card__top-row__mid-col__right-side">
              <p>
                Height:{" "}
                {playerInfo.height_feet
                  ? playerInfo.height_feet + "'" + playerInfo.height_inches
                  : "Not Available"}
              </p>
              <p>
                Weight:{" "}
                {playerInfo.weight_pounds
                  ? playerInfo.weight_pounds + " lbs"
                  : "Not Available"}
              </p>
            </div>
          </div>
          <div className="player-info__result-card__top-row__right-col">
            <p>PPG: {playerStats.pts ? playerStats.pts : "N/A"}</p>
            <p>TREB: {playerStats.reb ? playerStats.reb : "N/A"}</p>
            <p>AST: {playerStats.ast ? playerStats.ast : "N/A"}</p>
            <p>STL: {playerStats.stl ? playerStats.stl : "N/A"}</p>
          </div>

          <div className="player-info__result-card__top-row__second-right-col">
            <p>BLK: {playerStats.blk ? playerStats.blk : "N/A"}</p>
          </div>

          <div className="player-info__result-card__top-row__third-right-col">
            <PlayerPicture
              firstName={playerInfo.first_name}
              lastName={playerInfo.last_name}
            />
          </div>
        </div>

        <div className="player-info__result-card__middle-row">
          <p>FGM</p>
          <p>FGA</p>
          <p>3PM</p>
          <p>3PA</p>
          <p>FTM</p>
          <p>FTA</p>
          <p>OREB</p>
          <p>DREB</p>
          <p>TO</p>
          <p>PF</p>
          <p>FG%</p>
          <p>FG3%</p>
          <p>FT%</p>
        </div>

        <div className="player-info__result-card__bottom-row">
          <p>{playerStats.fgm ? playerStats.fgm : "N/A"}</p>
          <p>{playerStats.fga ? playerStats.fga : "N/A"}</p>
          <p>{playerStats.fg3m ? playerStats.fg3m : "N/A"}</p>
          <p>{playerStats.fg3a ? playerStats.fg3a : "N/A"}</p>
          <p>{playerStats.ftm ? playerStats.ftm : "N/A"}</p>
          <p>{playerStats.fta ? playerStats.fta : "N/A"}</p>
          <p>{playerStats.oreb ? playerStats.oreb : "N/A"}</p>
          <p>{playerStats.dreb ? playerStats.dreb : "N/A"}</p>
          <p>{playerStats.turnover ? playerStats.turnover : "N/A"}</p>
          <p>{playerStats.pf ? playerStats.pf : "N/A"}</p>
          <p>{playerStats.fg_pct ? playerStats.fg_pct : "N/A"}</p>
          <p>{playerStats.fg3_pct ? playerStats.fg3_pct : "N/A"}</p>
          <p>{playerStats.ft_pct ? playerStats.ft_pct : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfoPage;
