import './styles.css';

import { LogoCollab } from '../../objects/LogoCollab';
import { AboutLink } from '../../objects/AboutLink';
import { Menu } from '../../objects/Menu';

export const Header = ({ onClick }) => (
  <header className="header">
    <LogoCollab />
    <AboutLink content="Sobre" onClick={onClick} />
    <Menu onClick={onClick} />
  </header>
);
