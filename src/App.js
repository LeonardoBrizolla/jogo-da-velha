import Logo from './objects/Logo';
import imgLogo from './img/logo.svg';
import Sobre from './objects/Sobre';

const App = () => {
  return (
    <>
      <Logo srcImage={imgLogo} textAlt="Logo CollabCode" />
      <Sobre content="Sobre" />
    </>
  );
};

export default App;
