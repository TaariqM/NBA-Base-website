// import Header from './Header'
// import Button from './Button'
import { Link } from "react-router-dom";
import NBALogo from "../Images/NBA-Logo.png";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <>
      {/* <button className='team-btn'>TEAMS</button> */}
      {/* <Header />
            <Button /> */}
      <div className="button-container">
        <div>
          <Link to="/search/teams" className="button-container__link">
            TEAMS
          </Link>
        </div>

        <div>
          <Link to="/search/players" className="button-container__link">
            PLAYERS
          </Link>
        </div>
      </div>

      <div className="logo-container">
        <img src={NBALogo} alt="nba logo" />
      </div>
    </>
  );
};

export default HomePage;
