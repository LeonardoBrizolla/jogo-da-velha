import { useState } from 'react';
import './styles.css';

import playerXSVG from '../../img/player-x.svg';
import playerOSVG from '../../img/player-o.svg';

export const PlayerGame = ({ player = '' }) => {
  const [statePlayer, setStatePlayer] = useState(player);

  const players = [];

  players['x'] = playerXSVG;
  players['o'] = playerOSVG;

  const handleClick = () => setStatePlayer(player);

  return (
    <button onClick={handleClick} className="player-game">
      {statePlayer && (
        <img
          src={players[statePlayer]}
          alt={`Jogador ${statePlayer.toUpperCase()}`}
        />
      )}
    </button>
  );
};
