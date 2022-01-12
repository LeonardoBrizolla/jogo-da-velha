import './style.css';
import { Card } from '../../objects/Card';
import { Player } from '../../objects/Player';

export const Hashtag = () => {
  return (
    <Card>
      <ul className="hashtag">
        <li className="item">
          <Player player="x" />
        </li>
        <li className="item">
          <Player player="o" />
        </li>
        <li className="item">
          <Player player="x" />
        </li>

        <li className="item">
          <Player player="o" />
        </li>
        <li className="item">
          <Player player="x" />
        </li>
        <li className="item">
          <Player player="o" />
        </li>

        <li className="item">
          <Player player="x" />
        </li>
        <li className="item">
          <Player player="o" />
        </li>
        <li className="item">
          <Player player="x" />
        </li>
      </ul>
    </Card>
  );
};
