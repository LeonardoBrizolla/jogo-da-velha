import './styles.css';

import { Link } from '../../objects/Link';
import { IconClose } from '../../objects/IconClose';
import { LogoCollab } from '../../objects/LogoCollab';

export const HeaderInternal = () => (
  <header className="header-internal">
    <LogoCollab light />
    <Link content="Sobre" className="-light" />
    <IconClose />
  </header>
);
