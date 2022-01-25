import { useState } from 'react';
import './App.css';

import { LayerDark } from './objects/LayerDark';
import { InputCheckbox } from './objects/InputCheckbox';
import { HashtagHistoryWrapper } from './objects/HashtagHistoryWrapper';
import { HistoryGame } from './components/HistoryGame';
import { HeaderGame } from './components/HeaderGame';
import { HashtagGame } from './components/HashtagGame';
import { HeaderInternal } from './components/HeaderInternal';
import { ProfileUser } from './components/ProfileUser';

export const App = () => {
  const [activeAbout, setActiveAbout] = useState('');
  const [history, setHistory] = useState(['Start']);
  const [isActiveHistory, setIsActiveHistory] = useState(false);

  const handleClickAdd = () => setActiveAbout('-active');
  const handleCLickRemove = () => setActiveAbout('');

  const handleClickAddHistory = (player) => {
    setHistory((state) => [...state, `Adicionou ${player.toUpperCase()}`]);
  };

  const showHideHistory = () => setIsActiveHistory((oldState) => !!!oldState);

  const changeHistory = (key) => setHistory((old) => old.splice(0, key + 1));

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagHistoryWrapper isActiveHistory={isActiveHistory}>
        <HashtagGame callback={handleClickAddHistory} />
        <InputCheckbox
          onClick={showHideHistory}
          id="show"
          value="show"
          content="Mostrar Eventos"
        />
        <HistoryGame history={history} onClick={changeHistory} />
      </HashtagHistoryWrapper>
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleCLickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};
