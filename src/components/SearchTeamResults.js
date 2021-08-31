// eslint-disable-next-line
// import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../css/SearchTeams.css";
import Picture from "../components/TeamPicture";

const SearchResults = ({ teamResults }) => {
  return (
    <div className="team">
      {teamResults.map((teamResult) => {
        return (
          <div key={teamResult.id} className="team__result-card">
            <div className="team__result-card__top-row">
              <p>{teamResult.full_name}</p>
            </div>

            <div className="team__result-card__bottom-row">
              <div className="team__result-card__bottom-row__left-col">
                <Picture abbreviation={teamResult.abbreviation} />
              </div>
              <div className="team__result-card__bottom-row__right-col">
                <ul>
                  <li>
                    <div className="team__result-card__bottom-row__right-col__detail-container">
                      <p>Name</p>
                      <p>{teamResult.full_name}</p>
                    </div>
                  </li>

                  <li>
                    <div className="team__result-card__bottom-row__right-col__detail-container">
                      <p>Division</p>
                      <p>{teamResult.division}</p>
                    </div>
                  </li>

                  <li>
                    <div className="team__result-card__bottom-row__right-col__detail-container">
                      <p>Conference</p>
                      <p>{teamResult.conference}</p>
                    </div>
                  </li>

                  <li>
                    <div className="team__result-card__bottom-row__right-col__detail-container">
                      <p>City</p>
                      <p>{teamResult.city}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
