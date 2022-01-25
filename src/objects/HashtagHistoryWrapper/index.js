import { useState } from 'react';

import { HashtagGame } from '../../components/HashtagGame';
import { InputCheckbox } from '../../objects/InputCheckbox';
import { HistoryGame } from '../../components/HistoryGame';

export const HashtagHistoryWrapper = () => {
  const [history, setHistory] = useState(['Start']);
  const [isActiveHistory, setIsActiveHistory] = useState(false);

  const [nextPlayer, setNextPlayer] = useState('x');
  const [lastRound, setLastRound] = useState(0);
  const [historyGame, setHistoryGame] = useState([
    {
      round: 0,
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

  const handleClickAddHistory = (player) => {
    setHistory((state) => [...state, `Adicionou ${player.toUpperCase()}`]);
  };
  const showHideHistory = () => setIsActiveHistory((oldState) => !!!oldState);
  const changeHistory = (key) => {
    setLastRound(key);
    setHistory((old) => old.splice(0, key + 1));
    setHistoryGame((old) => old.splice(0, key + 1));
  };
  const handleClick = (id) => {
    setHistoryGame((old) => [
      ...old,
      {
        round: lastRound + 1,
        state: historyGame[lastRound].state.map((player) =>
          player.id === id ? { id, content: nextPlayer } : player
        ),
      },
    ]);
    setLastRound((old) => old + 1);
    handleClickAddHistory(nextPlayer);
    setNextPlayer((oldPlayer) => (oldPlayer === 'x' ? 'o' : 'x'));
  };

  return (
    <div
      className={`hashtagHistory-wrapper ${isActiveHistory ? '-active' : ''}`}
    >
      <HashtagGame
        lastRound={lastRound}
        onClick={handleClick}
        historyGame={historyGame}
      />
      <InputCheckbox
        onClick={showHideHistory}
        id="show"
        value="show"
        content="Mostrar Eventos"
      />
      <HistoryGame history={history} onClick={changeHistory} />
    </div>
  );
};
