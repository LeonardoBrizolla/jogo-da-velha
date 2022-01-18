import './styles.css';

import playerXSVG from '../../img/player-x.svg';
import playerOSVG from '../../img/player-o.svg';

export const PlayerGame = ({ content = '' }) => {
  const players = [];

  players[''] = '';
  players['x'] = playerXSVG;
  players['o'] = playerOSVG;

  return (
    <button className="player-game">
      {players[content] && (
        <img src={players[content]} alt={`Jogador ${content}`} />
      )}
    </button>
  );
};
