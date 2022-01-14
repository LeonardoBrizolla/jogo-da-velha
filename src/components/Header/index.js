import './styles.css';

import { Logo } from '../../objects/Logo';
import { AboutLink } from '../../objects/AboutLink';
import { Menu } from '../../objects/Menu';

import logoSVG from '../../img/logo.svg';

export const Header = () => (
  <header className="header">
    <Logo srcImage={logoSVG} textAlt="Logo CollabCode" />
    <AboutLink content="Sobre" />
    <Menu />
  </header>
);
