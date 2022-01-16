import { useState } from "react";
import "./App.css";

import { LayerDark } from "./objects/LayerDark";
import { Checkbox } from "./objects/Checkbox";
import { Header } from "./components/Header";
import { Hashtag } from "./components/Hashtag";
import { HeaderInternal } from "./components/HeaderInternal";
import { ProfileUser } from "./components/ProfileUser";

export const App = () => {
  const [activeAbout, setActiveAbout] = useState("");

  const handleClickAdd = () => setActiveAbout("-active");
  const handleCLickRemove = () => setActiveAbout("");

  return (
    <main className="app">
      <Header onClick={handleClickAdd} />
      <Hashtag />
      <Checkbox id="show" value="show" content="Mostrar Eventos" />
      <LayerDark className={activeAbout}>
        <HeaderInternal onClick={handleCLickRemove} />
        <ProfileUser />
      </LayerDark>
    </main>
  );
};
