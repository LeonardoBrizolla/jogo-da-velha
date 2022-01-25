import { useState } from 'react';

import { HashtagGame } from '../../components/HashtagGame';
import { InputCheckbox } from '../../objects/InputCheckbox';
import { HistoryGame } from '../../components/HistoryGame';

export const HashtagHistoryWrapper = () => {
  const [history, setHistory] = useState(['Start']);
  const [isActiveHistory, setIsActiveHistory] = useState(false);

  const handleClickAddHistory = (player) => {
    setHistory((state) => [...state, `Adicionou ${player.toUpperCase()}`]);
  };
  const showHideHistory = () => setIsActiveHistory((oldState) => !!!oldState);
  const changeHistory = (key) => setHistory((old) => old.splice(0, key + 1));

  return (
    <div
      className={`hashtagHistory-wrapper ${isActiveHistory ? '-active' : ''}`}
    >
      <HashtagGame callback={handleClickAddHistory} />
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
