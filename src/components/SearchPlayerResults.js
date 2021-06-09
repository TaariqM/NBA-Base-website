// eslint-disable-next-line
// import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Picture from "./Picture";
import "../css/SearchResults.css";

const SearchResults = ({ playerResults }) => {
  console.log(playerResults);
  return (
    <>
      {playerResults.map((playerResult) => {
        return (
          <div className="result-card">
            <div className="result-card__left-col">
              <Picture
                firstName={playerResult.first_name}
                lastName={playerResult.last_name}
              />
            </div>
            <div className="result-card__right-col">
              <ul>
                <li>
                  <div className="result-card__right-col__detail-container">
                    <p>FirstName</p>
                    <p>{playerResult.first_name}</p>
                  </div>
                </li>

                <li>
                  <div className="result-card__right-col__detail-container">
                    <p>LastName</p>
                    <p>{playerResult.last_name}</p>
                  </div>
                </li>

                <li>
                  <div className="result-card__right-col__detail-container">
                    <p>Height</p>
                    <p>
                      {playerResult.height_inches === null
                        ? "Not Available"
                        : playerResult.height_inches}
                    </p>
                  </div>
                </li>

                <li>
                  <div className="result-card__right-col__detail-container">
                    <p>Position</p>
                    <p>
                      {playerResult.position === ""
                        ? "Not Available"
                        : playerResult.position}
                    </p>
                  </div>
                </li>
                {/* Object.keys(playerResult).map((detail) => {
                  return (
                    <li>
                      
                      {detail}: {JSON.stringify(playerResult[detail])}
                    </li>
                  );
                }) */}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SearchResults;
