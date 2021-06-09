// eslint-disable-next-line
// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../css/SearchResults.css";

const SearchResults = ({ teamResults }) => {
  return (
    <>
      {teamResults.map((teamResult) => {
        console.log(teamResult);
        return (
          <div className="result-card">
            <div className="result-card__left-col">
              <img src={teamResult.logo} />
            </div>
            <div className="result-card__right-col">
              <ul>
                <li>
                  <div className="result-card__right-col__detail-container">
                    <p>Name</p>
                    <p>{teamResult.name}</p>
                  </div>
                </li>

                <li>
                  <div className="result-card__right-col__detail-container">
                    <p>Country</p>
                    <p>{teamResult.country.name}</p>
                  </div>
                </li>

                <li>
                  <div className="result-card__right-col__detail-container">
                    <p></p>
                    <p>
                      <img src={teamResult.country.flag} />
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SearchResults;
