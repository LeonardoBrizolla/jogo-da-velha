import './styles.css';

import { LogoCollab } from '../../objects/LogoCollab';
import { Link } from '../../objects/Link';
import { Menu } from '../../objects/Menu';

export const Header = () => (
  <header className="header">
    <LogoCollab />
    <Link content="Sobre" />
    <Menu />
  </header>
);
