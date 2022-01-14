import './styles.css';

import { Logo } from '../../objects/Logo';
import { Link } from '../../objects/Link';
import { Menu } from '../../objects/Menu';

import logoSVG from '../../img/logo.svg';

export const Header = () => (
  <header className="header">
    <Logo srcImage={logoSVG} textAlt="Logo CollabCode" />
    <Link content="Sobre" />
    <Menu />
  </header>
);
