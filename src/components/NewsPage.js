import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "../css/NewsPage.css";

const NewsPage = () => {
  const news = useSelector((state) => state.news.news);
  const { news_index } = useParams();

  return (
    <div className="news-feed">
      <div className="news-feed__result-card">
        <div className="news-feed__result-card__results">
          <div className="news-feed__result-card__results__title">
            <p>{news[parseInt(news_index)].tit}</p>
          </div>

          <div className="news-feed__result-card__results__descr">
            <p>{news[parseInt(news_index)].des}</p>
          </div>

          <div className="news-feed__result-card__results__auth">
            <p>Author: {news[parseInt(news_index)].aut}</p>
          </div>

          <div className="news-feed__result-card__results__image">
            <img
              key={news[parseInt(news_index)].id}
              src={news[parseInt(news_index)].img}
            />
          </div>

          <div className="news-feed__result-card__results__content">
            <p>
              {news[parseInt(news_index)].con
                .replaceAll("<p>", "")
                .replaceAll("</p>", " ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
