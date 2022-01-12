import Logo from './objects/Logo';
import imgLogo from './img/logo.svg';
import Sobre from './objects/Sobre';
import Menu from './objects/Menu';

const App = () => {
  return (
    <>
      <Logo srcImage={imgLogo} textAlt="Logo CollabCode" />
      <Sobre content="Sobre" />
      <Menu />
    </>
  );
};

export default App;
