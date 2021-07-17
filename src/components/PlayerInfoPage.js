import { useHistory, useParams } from "react-router-dom";

const PlayerInfoPage = ({ playersInfo }) => {
  const { player_name } = useParams();

  const getPlayerId = () => {};

  return (
    <div>
      <p>{player_name}</p>
    </div>
  );
};

export default PlayerInfoPage;
