import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setEastTeams } from "../features/teams/eastTeamsSlice";
import { setEastID } from "../features/teams/eastIDSlice";
import TeamPicture from "./TeamPicture";
import "../css/TeamInfoPage.css";

const TeamInfoPage = () => {
  const eastTeams = useSelector((state) => state.eastTeams.eastTeams);
  const eastID = useSelector((state) => state.eastID.eastID);
  const westID = useSelector((state) => state.westID.westID);
  const westTeams = useSelector((state) => state.westTeams.westTeams);
  const show = useSelector((state) => state.show.show); //this variable is used to check if a team in the eastern conference was clicked
  const dispatch = useDispatch();
  const { team_index } = useParams();

  const getEastBasicInfo = (id) => {
    // this function returns the basic info about a specific team. It finds this team info using the team ID
    for (let i = 0; i < eastID.length; i++) {
      if (id === eastID[i].teamId) {
        //checks if the id parameter is equal to the id of a team in the east
        return eastID[i];
      }
    }
  };

  const getWestBasicInfo = (id) => {
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
      {show ? (
        <div className="team-info">
          <div className="team-info__result-card">
            <div className="team-info__result-card__top-row">
              <div className="team-info__result-card__top-row__left-col">
                <img
                  key={eastTeams[parseInt(team_index)].teamId}
                  src={
                    getEastBasicInfo(eastTeams[parseInt(team_index)].teamId)
                      .logo
                  }
                />
              </div>
              <div className="team-info__result-card__top-row__mid-col">
                <p>
                  Name:{" "}
                  {
                    getEastBasicInfo(eastTeams[parseInt(team_index)].teamId)
                      .fullName
                  }
                </p>
                <p>
                  Nickname:{" "}
                  {
                    getEastBasicInfo(eastTeams[parseInt(team_index)].teamId)
                      .nickname
                  }
                </p>
                <p>
                  Short Name:{" "}
                  {
                    getEastBasicInfo(eastTeams[parseInt(team_index)].teamId)
                      .shortName
                  }
                </p>
                <p>
                  City:{" "}
                  {
                    getEastBasicInfo(eastTeams[parseInt(team_index)].teamId)
                      .city
                  }
                </p>
              </div>
              <div className="team-info__result-card__top-row__right-col">
                <p>
                  Conference:{" "}
                  {
                    getEastBasicInfo(eastTeams[parseInt(team_index)].teamId)
                      .leagues.standard.confName
                  }
                </p>
                <p>
                  Division:{" "}
                  {
                    getEastBasicInfo(eastTeams[parseInt(team_index)].teamId)
                      .leagues.standard.divName
                  }
                </p>
              </div>
              <div className="team-info__result-card__top-row__right-most-col">
                <img
                  key={eastTeams[parseInt(team_index)].teamId}
                  src={
                    getEastBasicInfo(eastTeams[parseInt(team_index)].teamId)
                      .logo
                  }
                />
              </div>
            </div>
            <div className="team-info__result-card__mid-row">
              <p>W</p>
              <p>L</p>
              <p>WIN%</p>
              <p>LOSS%</p>
              <p>GB</p>
              <p>CONF</p>
              <p>DIV</p>
              <p>HOME</p>
              <p>ROAD</p>
              <p>LAST 10</p>
            </div>
            <div className="team-info__result-card__bottom-row">
              <p>{eastTeams[parseInt(team_index)].win}</p>
              <p>{eastTeams[parseInt(team_index)].loss}</p>
              <p>{eastTeams[parseInt(team_index)].winPercentage}</p>
              <p>{eastTeams[parseInt(team_index)].lossPercentage}</p>
              <p>{parseInt(eastTeams[parseInt(team_index)].gamesBehind)}</p>
              <p>
                {eastTeams[parseInt(team_index)].conference.win}
                {"-"}
                {eastTeams[parseInt(team_index)].conference.loss}
              </p>
              <p>
                {eastTeams[parseInt(team_index)].division.win}
                {"-"}
                {eastTeams[parseInt(team_index)].division.loss}
              </p>
              <p>
                {eastTeams[parseInt(team_index)].home.win}
                {"-"}
                {eastTeams[parseInt(team_index)].home.loss}
              </p>
              <p>
                {eastTeams[parseInt(team_index)].away.win}
                {"-"}
                {eastTeams[parseInt(team_index)].away.loss}
              </p>
              <p>
                {eastTeams[parseInt(team_index)].lastTenWin}
                {"-"}
                {eastTeams[parseInt(team_index)].lastTenLoss}
              </p>
            </div>
          </div>
          {/* <p>Team Info Page</p> */}
        </div>
      ) : (
        <div className="team-info">
          <div className="team-info__result-card">
            <div className="team-info__result-card__top-row">
              <div className="team-info__result-card__top-row__left-col">
                <img
                  key={westTeams[parseInt(team_index)].teamId}
                  src={
                    getWestBasicInfo(westTeams[parseInt(team_index)].teamId)
                      .logo
                  }
                />
              </div>
              <div className="team-info__result-card__top-row__mid-col">
                <p>
                  Name:{" "}
                  {
                    getWestBasicInfo(westTeams[parseInt(team_index)].teamId)
                      .fullName
                  }
                </p>
                <p>
                  Nickname:{" "}
                  {
                    getWestBasicInfo(westTeams[parseInt(team_index)].teamId)
                      .nickname
                  }
                </p>
                <p>
                  Short Name:{" "}
                  {
                    getWestBasicInfo(westTeams[parseInt(team_index)].teamId)
                      .shortName
                  }
                </p>
                <p>
                  City:{" "}
                  {
                    getWestBasicInfo(westTeams[parseInt(team_index)].teamId)
                      .city
                  }
                </p>
              </div>
              <div className="team-info__result-card__top-row__right-col">
                <p>
                  Conference:{" "}
                  {
                    getWestBasicInfo(westTeams[parseInt(team_index)].teamId)
                      .leagues.standard.confName
                  }
                </p>
                <p>
                  Division:{" "}
                  {
                    getWestBasicInfo(westTeams[parseInt(team_index)].teamId)
                      .leagues.standard.divName
                  }
                </p>
              </div>
              <div className="team-info__result-card__top-row__right-most-col">
                <img
                  key={westTeams[parseInt(team_index)].teamId}
                  src={
                    getWestBasicInfo(westTeams[parseInt(team_index)].teamId)
                      .logo
                  }
                />
              </div>
            </div>
            <div className="team-info__result-card__mid-row">
              <p>W</p>
              <p>L</p>
              <p>WIN%</p>
              <p>LOSS%</p>
              <p>GB</p>
              <p>CONF</p>
              <p>DIV</p>
              <p>HOME</p>
              <p>ROAD</p>
              <p>LAST 10</p>
            </div>
            <div className="team-info__result-card__bottom-row">
              <p>{westTeams[parseInt(team_index)].win}</p>
              <p>{westTeams[parseInt(team_index)].loss}</p>
              <p>{westTeams[parseInt(team_index)].winPercentage}</p>
              <p>{westTeams[parseInt(team_index)].lossPercentage}</p>
              <p>{parseInt(westTeams[parseInt(team_index)].gamesBehind)}</p>
              <p>
                {westTeams[parseInt(team_index)].conference.win}
                {"-"}
                {westTeams[parseInt(team_index)].conference.loss}
              </p>
              <p>
                {westTeams[parseInt(team_index)].division.win}
                {"-"}
                {westTeams[parseInt(team_index)].division.loss}
              </p>
              <p>
                {westTeams[parseInt(team_index)].home.win}
                {"-"}
                {westTeams[parseInt(team_index)].home.loss}
              </p>
              <p>
                {westTeams[parseInt(team_index)].away.win}
                {"-"}
                {westTeams[parseInt(team_index)].away.loss}
              </p>
              <p>
                {westTeams[parseInt(team_index)].lastTenWin}
                {"-"}
                {westTeams[parseInt(team_index)].lastTenLoss}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamInfoPage;
