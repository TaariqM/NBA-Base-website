import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEastTeams } from "../features/teams/eastTeamsSlice";
import { setEastID } from "../features/teams/eastIDSlice";
import TeamDescription from "./TeamDescription";
import "../css/TeamStandings.css";

const TeamStandings = () => {
  const eastTeams = useSelector((state) => state.eastTeams.eastTeams); //gets all the teams in the eastern conference. Contains extra info about teams in eastern conference
  const eastID = useSelector((state) => state.eastID.eastID); //contains basic info about teams in the eastern conference
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEastTeams());
  }, []);

  useEffect(() => {
    dispatch(setEastID());
  }, []);

  const getBasicInfo = (id) => {
    // this function returns the basic info about a specific team. It finds this team info using the team ID
    for (let i = 0; i < eastID.length; i++) {
      if (id === eastID[i].teamId) {
        //checks if the id parameter is equal to the id of a team in the east
        return eastID[i];
      }
    }
  };

  return (
    <>
      {eastTeams.map((item, index) => {
        return (
          <div key={item.teamId} className="standings-container">
            <ul>
              <li>
                <TeamDescription
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

export default TeamStandings;
