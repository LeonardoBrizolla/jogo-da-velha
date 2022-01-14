import './styles.css';

export const AboutLink = ({ className = '', onClick }) => (
  <a href="#to-do" className={`about-link ${className}`} onClick={onClick}>
    Sobre
  </a>
);
