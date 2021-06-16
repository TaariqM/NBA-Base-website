import "../css/Header.css";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="segment">
      <div className="segment__nba-header">NBA Base</div>
      <Navigation />
      {/* <h1 className='ui header'>NBA Base</h1> */}
    </div>
  );
};

export default Header;
