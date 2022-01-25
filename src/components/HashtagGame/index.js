import { CardGame } from '../../objects/CardGame';
import { PlayerGame } from '../../objects/PlayerGame';

import './styles.css';

export const HashtagGame = ({ lastRound, onClick, historyGame }) => (
  <CardGame>
    <ul className="hashtag-game">
      {historyGame[lastRound].state.map(({ id, content }) => (
        <li
          key={id}
          className="item"
          onClick={() => content === '' && onClick(id)}
        >
          <PlayerGame id={id} content={content} />
        </li>
      ))}
    </ul>
  </CardGame>
);
