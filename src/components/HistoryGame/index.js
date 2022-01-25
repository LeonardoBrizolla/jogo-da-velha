import { TagGame } from '../../objects/TagGame';
import './styles.css';

export const HistoryGame = ({ history }) => {
  const changeHistory = () => console.log('Hi');

  return (
    <ol className="history-game">
      <li className="action">
        <TagGame content="Start" />
      </li>
      {history.map((content, key) => (
        <li key={key} className="action" onClick={changeHistory}>
          <TagGame content={content} />
        </li>
      ))}
    </ol>
  );
};
