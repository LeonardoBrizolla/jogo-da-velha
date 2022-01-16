import { useState } from 'react';
import './App.css';

import { About } from './objects/About';
import { Checkbox } from './objects/Checkbox';
import { Header } from './components/Header';
import { Hashtag } from './components/Hashtag';
import { HeaderInternal } from './components/HeaderInternal';
import { ProfileUser } from './components/ProfileUser';

export const App = () => {
  const [activeAbout, setActiveAbout] = useState('');

  const handleClickAdd = () => setActiveAbout('-active');
  const handleCLickRemove = () => setActiveAbout('');

  return (
    <main className="app">
      <Header onClick={handleClickAdd} />
      <Hashtag />
      <Checkbox id="show" value="show" content="Mostrar Eventos" />
      <About className={activeAbout}>
        <HeaderInternal onClick={handleCLickRemove} />
        <ProfileUser />
      </About>
    </main>
  );
};
