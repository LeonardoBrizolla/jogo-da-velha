import { TagGame } from '../../objects/TagGame';
import './styles.css';

export const HistoryGame = ({ history }) => (
  <ol className="history-game">
    {history.map((content, key) => (
      <li key={key} className="action">
        <TagGame content={content} />
      </li>
    ))}

    <li className="action">
      <TagGame content="Empate!" className="-end" />
    </li>
  </ol>
);
