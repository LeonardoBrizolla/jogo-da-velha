import './App.css';

import { About } from './objects/About';
import { Link } from './objects/Link';
import { IconClose } from './objects/IconClose';
import { LogoCollab } from './objects/LogoCollab';
import { Checkbox } from './objects/Checkbox';
import { Header } from './components/Header';
import { Hashtag } from './components/Hashtag';

import logoLightSVG from './img/logo-light.svg';

const App = () => (
  <main className="app">
    <Header />
    <Hashtag />
    <Checkbox id="show" value="show" content="Mostrar Eventos" />
    <About>
      <LogoCollab srcImage={logoLightSVG} />
      <Link content="Sobre" className="-light" />
      <IconClose />
    </About>
  </main>
);

export default App;
