import "./styles.css";

import playerXSVG from "../../img/player-x.svg";
import playerOSVG from "../../img/player-o.svg";

export const PlayerGame = ({ player }) => {
  const players = [];

  players["x"] = playerXSVG;
  players["o"] = playerOSVG;

  return (
    <button className="player-game">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </button>
  );
};
