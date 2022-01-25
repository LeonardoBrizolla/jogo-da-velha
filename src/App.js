import { useState } from 'react';

import { HashtagHistoryWrapper } from './objects/HashtagHistoryWrapper';
import { LayerDark } from './objects/LayerDark';
import { HeaderGame } from './components/HeaderGame';
import { HeaderInternal } from './components/HeaderInternal';
import { ProfileUser } from './components/ProfileUser';

import './App.css';

export const App = () => {
  const [activeAbout, setActiveAbout] = useState('');

  const handleClickAdd = () => setActiveAbout('-active');
  const handleCLickRemove = () => setActiveAbout('');

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagHistoryWrapper />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleCLickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};
