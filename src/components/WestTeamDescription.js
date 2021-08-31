import React, { useEffect, useState } from "react";
import "../css/TeamDescription.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setShow } from "../features/teams/showTeamSlice";

const WestTeamDescription = ({ basicTeamInfo, extraTeamInfo, number }) => {
  //basicTeamInfo contains:
  // city, full name, team id, nickname, logo, shortname
  //extraTeamInfo contains:
  //wins & losses, win percentage, loss percentage, rank within conference, division, wins & losses at home, wins & losses away
  // const [easternTeam, setEasternTeam] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setShow(false));
        history.push(`/team/${number - 1}`);
      }}
      className="result-card"
    >
      <div className="result-card__number">{number}</div>

      <div className="result-card__image">
        {basicTeamInfo && basicTeamInfo.length !== 0 ? (
          <img src={basicTeamInfo.logo} />
        ) : null}
      </div>

      <div className="result-card__team-name">
        {basicTeamInfo && basicTeamInfo.length !== 0
          ? basicTeamInfo.fullName
          : null}
      </div>

      <div className="result-card__wins">
        <p>W</p>
        <p>
          {extraTeamInfo && extraTeamInfo.length !== 0
            ? extraTeamInfo.win
            : null}
        </p>
      </div>

      <div className="result-card__losses">
        <p>L</p>
        <p>
          {extraTeamInfo && extraTeamInfo.length !== 0
            ? extraTeamInfo.loss
            : null}
        </p>
      </div>
    </div>
  );
};

export default WestTeamDescription;
