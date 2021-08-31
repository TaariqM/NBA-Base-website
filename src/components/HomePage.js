import NBALogo from "../Images/NBA-Logo.png";
import { Link, useHistory, useParams } from "react-router-dom";
import "../css/HomePage.css";
import { useState, useEffect, useRef } from "react";
import forwaredInfo from "./NewsPage";
import { setNews } from "../features/news/newsSlice";
import { useSelector, useDispatch } from "react-redux";

const HomePage = () => {
  const history = useHistory();
  const news = useSelector((state) => state.news.news); //accessing news
  const dispatch = useDispatch(); //allows you to make changes to it

  useEffect(() => {
    dispatch(setNews());
  }, []);

  return (
    <div className="home-feed">
      <div className="home-feed__header-title">
        <p>Recent News</p>
      </div>
      <div className="home-feed__results">
        {news.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                history.push(`/news/${index}`);
              }}
              className="home-feed__results__result-card"
            >
              <div className="home-feed__results__result-card__top-row">
                <div className="home-feed__results__result-card__top-row__img">
                  <img key={item.id} src={item.img}></img>
                </div>
              </div>
              <div className="home-feed__results__result-card__bottom-row">
                <div className="home-feed__results__result-card__bottom-row__title">
                  <p>{item.tit}</p>
                </div>
                <div className="home-feed__results__result-card__bottom-row__author">
                  <p>{item.aut}</p>
                </div>
                <div className="home-feed__results__result-card__bottom-row__descr">
                  <p>{item.des}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
