import { useState } from 'react';
import './styles.css';
import { CardGame } from '../../objects/CardGame';
import { PlayerGame } from '../../objects/PlayerGame';

export const HashtagGame = ({ callback }) => {
  const [nextPlayer, setNextPlayer] = useState('x');
  const [lastRound, setLastRound] = useState(0);
  const [history, setHistory] = useState([
    {
      rounde: 0,
      state: [
        { id: 1, content: '' },
        { id: 2, content: '' },
        { id: 3, content: '' },
        { id: 4, content: '' },
        { id: 5, content: '' },
        { id: 6, content: '' },
        { id: 7, content: '' },
        { id: 8, content: '' },
        { id: 9, content: '' },
      ],
    },
  ]);

  const handleClick = (id) => {
    setHistory((old) => [
      ...old,
      {
        round: lastRound + 1,
        state: history[lastRound].state.map((player) =>
          player.id === id ? { id, content: nextPlayer } : player
        ),
      },
    ]);
    setLastRound((old) => old + 1);
    callback(nextPlayer);
    setNextPlayer((oldPlayer) => (oldPlayer === 'x' ? 'o' : 'x'));
  };

  return (
    <CardGame>
      <ul className="hashtag-game">
        {history[lastRound].state.map(({ id, content }) => (
          <li
            key={id}
            className="item"
            onClick={() => content === '' && handleClick(id)}
          >
            <PlayerGame id={id} content={content} />
          </li>
        ))}
      </ul>
    </CardGame>
  );
};
