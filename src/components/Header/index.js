import './style.css';
import { Logo } from '../../objects/Logo';
import { Sobre } from '../../objects/Sobre';
import { Menu } from '../../objects/Menu';
import logoSVG from '../../img/logo.svg';

export const Header = () => (
  <header className="header">
    <Logo srcImage={logoSVG} textAlt="Logo CollabCode" />
    <Sobre content="Sobre" />
    <Menu />
  </header>
);
