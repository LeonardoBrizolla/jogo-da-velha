import './styles.css';

import { LogoCollab } from '../../objects/LogoCollab';
import { Link } from '../../objects/Link';
import { Menu } from '../../objects/Menu';

import logoSVG from '../../img/logo.svg';

export const Header = () => (
  <header className="header">
    <LogoCollab srcImage={logoSVG} />
    <Link content="Sobre" />
    <Menu />
  </header>
);
