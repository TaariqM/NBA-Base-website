import "../css/Button.css";

const Button = () => {
  return (
    <div>
      <div className="team-btn">
        <button className="ui primary button">TEAMS</button>
      </div>

      <div className="players-btn">
        <button className="ui secondary button">PLAYERS</button>
      </div>
    </div>
  );
};

export default Button;
