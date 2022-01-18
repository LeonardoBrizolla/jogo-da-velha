import { useState } from 'react';
import './styles.css';
import { CardGame } from '../../objects/CardGame';
import { PlayerGame } from '../../objects/PlayerGame';

export const HashtagGame = () => {
  const [nextPlayer, setNextPlayer] = useState('x');
  const [players, setPlayers] = useState([
    { id: 1, content: '' },
    { id: 2, content: '' },
    { id: 3, content: '' },
    { id: 4, content: '' },
    { id: 5, content: '' },
    { id: 6, content: '' },
    { id: 7, content: '' },
    { id: 8, content: '' },
    { id: 9, content: '' },
  ]);

  const handleClick = (id) => {
    setPlayers((oldPlayers) =>
      oldPlayers.map((oldPlayer) =>
        oldPlayer.id === id ? { id, content: nextPlayer } : oldPlayer
      )
    );

    setNextPlayer((oldPlayer) => (oldPlayer === 'x' ? 'o' : 'x'));
  };

  return (
    <CardGame>
      <ul className="hashtag-game">
        {players.map(({ id, content }) => (
          <li key={id} onClick={() => handleClick(id)} className="item">
            <PlayerGame id={id} content={content} />
          </li>
        ))}
      </ul>
    </CardGame>
  );
};
