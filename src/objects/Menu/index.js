import './styles.css';

const handleClick = () => console.log('click menu');

export const Menu = () => (
  <a href="#to-do" className="menu" onClick={handleClick}>
    <span className="center">Menu</span>
  </a>
);
