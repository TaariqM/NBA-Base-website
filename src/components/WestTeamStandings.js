import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setWestTeams } from "../features/teams/westTeamsSlice";
import { setWestID } from "../features/teams/westIDSlice";
import WestTeamDescription from "./WestTeamDescription";
import "../css/TeamStandings.css";

const WestTeamStandings = () => {
  const westTeams = useSelector((state) => state.westTeams.westTeams); //gets all the teams in the western conference. Contains extra info about teams in western conference
  const westID = useSelector((state) => state.westID.westID); //contains basic info about teams in the western conference
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWestTeams());
  }, []);

  useEffect(() => {
    dispatch(setWestID());
  }, []);

  const getBasicInfo = (id) => {
    // this function returns the basic info about a specific team. It finds this team info using the team ID
    for (let i = 0; i < westID.length; i++) {
      if (id === westID[i].teamId) {
        //checks if the id parameter is equal to the id of a team in the east
        return westID[i];
      }
    }
  };

  return (
    <>
      {westTeams.map((item, index) => {
        return (
          <div key={item.teamId} className="standings-container">
            <ul>
              <li>
                <WestTeamDescription
                  basicTeamInfo={getBasicInfo(item.teamId)}
                  extraTeamInfo={item}
                  number={index + 1}
                />
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default WestTeamStandings;
