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
  const [history, setHistory] = useState([]);
  const [isActiveHistory, setIsActiveHistory] = useState(false);

  const handleClickAdd = () => setActiveAbout('-active');
  const handleCLickRemove = () => setActiveAbout('');

  const handleClickAddHistory = (player) => {
    setHistory((state) => [...state, `Adicionou ${player.toUpperCase()}`]);
  };

  const showHideHistory = () => setIsActiveHistory((oldState) => !!!oldState);

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
        <HistoryGame history={history} />
      </HashtagHistoryWrapper>
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleCLickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};
