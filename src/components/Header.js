import "../css/Header.css";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="segment">
      <div>
        <Link to="/" className="segment__nba-header">
          NBA Base
        </Link>
      </div>
      <Navigation />
    </div>
  );
};

export default Header;
