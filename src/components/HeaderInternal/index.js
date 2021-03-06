import './styles.css';

import { AboutLink } from '../../objects/AboutLink';
import { IconClose } from '../../objects/IconClose';
import { LogoCollab } from '../../objects/LogoCollab';

export const HeaderInternal = ({ onClick }) => (
  <header className="header-internal">
    <LogoCollab light />
    <AboutLink className="-light" onClick={onClick} />
    <IconClose onClick={onClick} />
  </header>
);
