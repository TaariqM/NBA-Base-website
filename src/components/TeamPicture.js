import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Picture.css";

const Picture = ({ abbreviation }) => {
  return (
    <img
      className="displayed-picture"
      src={`http://i.cdn.turner.com/nba/nba/.element/img/1.0/teamsites/logos/teamlogos_500x500/${abbreviation.toLowerCase()}.png`}
      alt="nba-teams-pic"
    />
  );
};

export default Picture;
