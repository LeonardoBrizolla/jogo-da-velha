import './styles.css';

export const Menu = ({ onClick }) => (
  <a href="#to-do" className="menu" onClick={onClick}>
    <span className="center">Menu</span>
  </a>
);
