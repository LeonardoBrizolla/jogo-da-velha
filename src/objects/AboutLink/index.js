import './styles.css';

const handleClick = () => console.log('click sobre');

export const AboutLink = ({ className = '' }) => (
  <a href="#to-do" className={`about-link ${className}`} onClick={handleClick}>
    Sobre
  </a>
);
