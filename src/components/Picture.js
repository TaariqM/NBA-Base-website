// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/Picture.css";

const Picture = ({ firstName, lastName }) => {
  return (
    <img
      className="displayed-picture"
      src={`https://nba-players.herokuapp.com/players/${lastName}/${firstName}`}
      alt="nba-players-pic"
    />
  );
};

export default Picture;
