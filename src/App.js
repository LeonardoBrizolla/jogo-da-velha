import { useState } from "react";
import "./App.css";

import { LayerDark } from "./objects/LayerDark";
import { InputCheckbox } from "./objects/InputCheckbox";
import { HistoryGame } from "./components/HistoryGame";
import { HeaderGame } from "./components/HeaderGame";
import { HashtagGame } from "./components/HashtagGame";
import { HeaderInternal } from "./components/HeaderInternal";
import { ProfileUser } from "./components/ProfileUser";

export const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleCLickRemove = () => setActiveAbout("");

  return (
    <main id="main" className="app">
      <HeaderGame onClick={handleClickAdd} />
      <HashtagGame />
      <InputCheckbox id="show" value="show" content="Mostrar Eventos" />
      <HistoryGame />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleCLickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};
