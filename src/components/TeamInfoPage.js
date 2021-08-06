import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TeamPicture from "./TeamPicture";
import "../css/TeamInfoPage.css";

const TeamInfoPage = () => {
  const { team_name } = useParams();
  //const [all_teams, setAllTeams] = useState([]); //array that contains every NBA Team and its info
  const [specTeam, setSpecTeam] = useState([]); //array that contains a specific NBA teams info
  //let abbreviation = ""; //abbreviation of NBA Team

  useEffect(() => {
    //this function is used to get all the nba teams
    fetch(`https://www.balldontlie.io/api/v1/teams`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data && data.data.length !== 0) {
          console.log("Team Info", data.data);
          console.log("Test 2");
          //setAllTeams(data.data);
          getTeamInfo(data.data, team_name.split(" ")[0]);
        } else {
          setSpecTeam([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getTeamInfo = (teams, team_city) => {
    //console.log(team_city);
    //Loop through all the teams in the array
    for (let i = 0; i < teams.length; i++) {
      //compare the name of the city of the specified team, with the city off each team. If equal, stop looping, o/w continue
      //console.log(i);
      if (teams[i].city == team_city) {
        console.log(i);
        setSpecTeam(teams[i]);
        //setIsLoading(false);
        console.log("Test 3");
        break;
        //abbreviation = teams[i].abbreviation.toLowerCase();
      } else {
        // setSpecTeam([]);
        continue;
      }
    }
  };

  // getTeamInfo(all_teams, team_name.split(" ")[0]);
  // specTeam && specTeam.abbreviation !== ""
  // isLoading == true &&
  // console.log(specTeam);
  // console.log(specTeam.abbreviation);
  console.log("Test 1");
  return (
    <div className="team-info">
      <div className="team-info__stats">
        <div className="team-info__stats__left-col">
          {specTeam && specTeam.abbreviation !== "" ? (
            <TeamPicture abbreviation={specTeam.abbreviation} />
          ) : null}
        </div>

        <div className="team-info__stats__right-col"></div>
      </div>
      {/* <p>Team Info Page</p> */}
    </div>
  );
};

export default TeamInfoPage;
