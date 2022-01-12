import './style.css';
import playerXSVG from '../../img/player-x.svg';

export const Player = () => {
  return (
    <button className="btn-player">
      <img src={playerXSVG} alt="Jogador X" />
    </button>
  );
};
