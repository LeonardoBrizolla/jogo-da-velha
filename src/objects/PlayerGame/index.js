import "./styles.css";

import playerXSVG from "../../img/player-x.svg";
import playerOSVG from "../../img/player-o.svg";

const handleClick = () => console.log("ae");

export const PlayerGame = ({ player = false }) => {
  const players = [];

  players["x"] = playerXSVG;
  players["o"] = playerOSVG;

  return (
    <button onClick={handleClick} className="player-game">
      {player && (
        <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
      )}
    </button>
  );
};
