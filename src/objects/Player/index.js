import './style.css';
import playerXSVG from '../../img/player-x.svg';
import playerOSVG from '../../img/player-o.svg';

export const Player = ({ player }) => {
  const players = [];

  players['x'] = playerXSVG;
  players['o'] = playerOSVG;

  return (
    <button className="btn-player">
      <img src={players[player]} alt={`Jogador ${player.toUpperCase()}`} />
    </button>
  );
};
