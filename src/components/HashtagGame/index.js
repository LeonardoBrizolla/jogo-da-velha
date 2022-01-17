import "./styles.css";

import { CardGame } from "../../objects/CardGame";
import { PlayerGame } from "../../objects/PlayerGame";

export const HashtagGame = () => (
  <CardGame>
    <ul className="hashtag-game">
      <li className="item">
        <PlayerGame />
      </li>
      <li className="item">
        <PlayerGame />
      </li>
      <li className="item">
        <PlayerGame />
      </li>
      <li className="item">
        <PlayerGame />
      </li>
      <li className="item">
        <PlayerGame />
      </li>
      <li className="item">
        <PlayerGame />
      </li>
      <li className="item">
        <PlayerGame />
      </li>
      <li className="item">
        <PlayerGame />
      </li>
      <li className="item">
        <PlayerGame />
      </li>
    </ul>
  </CardGame>
);
