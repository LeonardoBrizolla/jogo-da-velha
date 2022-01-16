import "./styles.css";

import { LogoCollab } from "../../objects/LogoCollab";
import { AboutLink } from "../../objects/AboutLink";
import { MenuGame } from "../../objects/MenuGame";

export const HeaderGame = ({ onClick }) => (
  <header className="header-game">
    <LogoCollab />
    <AboutLink content="Sobre" onClick={onClick} />
    <MenuGame onClick={onClick} />
  </header>
);
