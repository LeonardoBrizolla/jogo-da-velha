import { TagGame } from '../../objects/TagGame';
import './styles.css';

export const HistoryGame = ({ history, onClick }) => {
  return (
    <ol className="history-game">
      {history.map((content, key) => (
        <li key={key} className="action" onClick={() => onClick(key)}>
          <TagGame content={content} />
        </li>
      ))}
    </ol>
  );
};
