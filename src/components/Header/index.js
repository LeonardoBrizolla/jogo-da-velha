import Logo from '../../objects/Logo';
import ImgLogo from '../../img/logo.svg';
import Sobre from '../../objects/Sobre';
import Menu from '../../objects/Menu';
import './style.css';

const Header = () => {
  return (
    <header className="header">
      <Logo srcImage={ImgLogo} textAlt="Logo CollabCode" />
      <Sobre content="Sobre" />
      <Menu />
    </header>
  );
};

export default Header;
