import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PlayerPicture from "./PlayerPicture";
import "../css/PlayerInfoPage.css";
import { useSelector, useDispatch } from "react-redux";
import { setPlayers } from "../features/players/playersSlice";

const PlayerInfoPage = () => {
  //const dispatch = useDispatch();
  //const players_info = useSelector((state) => state.players.players);
  const { player_name } = useParams();
  const [playerInfo, setPlayerInfo] = useState([]);
  const [playerID, setPlayerID] = useState();
  // let playerPos;
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
      <div className="player-info__stats">
        <div className="player-info__stats__top-row">
          <div className="player-info__stats__top-row__left-col">
            <PlayerPicture
              firstName={playerInfo.first_name}
              lastName={playerInfo.last_name}
            />
          </div>

          <div className="player-info__stats__top-row__middle-col">
            <div className="player-info__stats__top-row__middle-col__left-side">
              <ul>
                <li>
                  <div
                    className="player-info__stats__top-row__middle-col__left-side__detail"
                    style={{ color: "white" }}
                  >
                    <p>FirstName: {playerInfo.first_name}</p>
                  </div>
                </li>

                <li>
                  <div
                    className="player-info__stats__top-row__middle-col__left-side__detail"
                    style={{ color: "white" }}
                  >
                    <p>LastName: {playerInfo.last_name}</p>
                  </div>
                </li>

                <li>
                  <div
                    className="player-info__stats__top-row__middle-col__left-side__detail"
                    style={{ color: "white" }}
                  >
                    <p>
                      Team:{" "}
                      {playerInfo &&
                      playerInfo.team &&
                      playerInfo.team.full_name !== ""
                        ? playerInfo.team.full_name
                        : "Not Available"}
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    className="player-info__stats__top-row__middle-col__left-side__detail"
                    style={{ color: "white" }}
                  >
                    <p>
                      Position:{" "}
                      {playerInfo && playerInfo.position !== ""
                        ? getPlayerPosition(playerInfo.position)
                        : "Not Available"}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="player-info__stats__top-row__middle-col__right-side">
              <ul>
                <li>
                  <div
                    className="player-info__stats__top-row__middle-col__right-side__detail"
                    style={{ color: "white" }}
                  >
                    <p>
                      Height:{" "}
                      {playerInfo.height_feet
                        ? playerInfo.height_feet +
                          "'" +
                          playerInfo.height_inches
                        : "Not Available"}
                    </p>
                  </div>
                </li>

                <li>
                  <div
                    className="player-info__stats__top-row__middle-col__right-side__detail"
                    style={{ color: "white" }}
                  >
                    <p>
                      Weight:{" "}
                      {playerInfo.weight_pounds
                        ? playerInfo.weight_pounds + " lbs"
                        : "Not Available"}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="player-info__stats__top-row__right-col">
            <ul>
              <li>
                <div
                  className="player-info__stats__top-row__right-col__detail"
                  style={{ color: "white" }}
                >
                  <p>
                    PPG: {playerStats.pts ? playerStats.pts : "Not Available"}
                  </p>
                </div>
              </li>

              <li>
                <div
                  className="player-info__stats__top-row__right-col__detail"
                  style={{ color: "white" }}
                >
                  <p>
                    TREB: {playerStats.reb ? playerStats.reb : "Not Available"}
                  </p>
                </div>
              </li>

              <li>
                <div
                  className="player-info__stats__top-row__right-col__detail"
                  style={{ color: "white" }}
                >
                  <p>
                    AST: {playerStats.ast ? playerStats.ast : "Not Available"}
                  </p>
                </div>
              </li>

              <li>
                <div
                  className="player-info__stats__top-row__right-col__detail"
                  style={{ color: "white" }}
                >
                  <p>
                    STL: {playerStats.stl ? playerStats.stl : "Not Available"}
                  </p>
                </div>
              </li>

              <li>
                <div
                  className="player-info__stats__top-row__right-col__detail"
                  style={{ color: "white" }}
                >
                  <p>
                    BLK: {playerStats.blk ? playerStats.blk : "Not Available"}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="player-info_stats__bottom-row"></div>
      </div>
    </div>
  );
};

export default PlayerInfoPage;
