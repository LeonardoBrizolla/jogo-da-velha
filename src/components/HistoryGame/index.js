import { TagGame } from "../../objects/TagGame";
import "./styles.css";

export const HistoryGame = ({ className = "" }) => (
  <ol className={`history-game ${className}`}>
    <li className="action">
      <TagGame content="Adicionou X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou O" />
    </li>
    <li className="action">
      <TagGame content="Adicionou X" />
    </li>
    <li className="action">
      <TagGame content="Adicionou O" />
    </li>
    <li className="action">
      <TagGame content="Empate!" className="-end" />
    </li>
  </ol>
);
