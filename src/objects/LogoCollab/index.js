import CollabCode from '../../img/logo.svg';
import CollabCodeLight from '../../img/logo-light.svg';

export const LogoCollab = ({ light = false }) => (
  <img
    src={light ? CollabCodeLight : CollabCode}
    className="logo-collab"
    alt="Logo CollabCode"
  />
);
