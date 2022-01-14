import './App.css';

import { About } from './objects/About';
import { Link } from './objects/Link';
import { IconClose } from './objects/IconClose';
import { LogoCollab } from './objects/LogoCollab';
import { Checkbox } from './objects/Checkbox';
import { Header } from './components/Header';
import { Hashtag } from './components/Hashtag';

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" content="Mostrar Eventos" />
    <About>
      <LogoCollab light />
      <Link content="Sobre" className="-light" />
      <IconClose />
    </About>
  </main>
);

export default App;
