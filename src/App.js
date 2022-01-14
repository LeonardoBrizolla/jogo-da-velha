import './App.css';
import AvatarProfile from './img/avatar-profile.jpeg';

import { About } from './objects/About';
import { Checkbox } from './objects/Checkbox';
import { Header } from './components/Header';
import { Hashtag } from './components/Hashtag';
import { HeaderInternal } from './components/HeaderInternal';
import { AvatarProvider } from './objects/AvatarProfile';

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" content="Mostrar Eventos" />
    <About>
      <HeaderInternal />
      <AvatarProvider
        src={AvatarProfile}
        alt="Avatar profile Leonardo Brizolla"
      />
    </About>
  </main>
);

export default App;
