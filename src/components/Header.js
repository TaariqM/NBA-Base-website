import "../css/Header.css";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="segment">
      {/* <div className="segment__nba-header">NBA Base</div> */}
      <div>
        <Link to="/" className="segment__nba-header">
          NBA Base
        </Link>
      </div>
      <Navigation />
      {/* <h1 className='ui header'>NBA Base</h1> */}
    </div>
  );
};

export default Header;
