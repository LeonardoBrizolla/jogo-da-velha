import { useState } from 'react';
import './styles.css';
import { CardGame } from '../../objects/CardGame';
import { PlayerGame } from '../../objects/PlayerGame';

export const HashtagGame = () => {
  const [nextPlayer, setNextPlayer] = useState('x');

  const handleClick = () => {
    console.log('Next player: ' + nextPlayer);

    setNextPlayer((oldPlayer) => (oldPlayer === 'x' ? 'o' : 'x'));
  };

  return (
    <CardGame>
      <ul className="hashtag-game" onClick={handleClick}>
        <li className="item">
          <PlayerGame />
        </li>
        <li className="item">
          <PlayerGame />
        </li>
        <li className="item">
          <PlayerGame />
        </li>
        <li className="item">
          <PlayerGame />
        </li>
        <li className="item">
          <PlayerGame />
        </li>
        <li className="item">
          <PlayerGame />
        </li>
        <li className="item">
          <PlayerGame />
        </li>
        <li className="item">
          <PlayerGame />
        </li>
        <li className="item">
          <PlayerGame />
        </li>
      </ul>
    </CardGame>
  );
};
