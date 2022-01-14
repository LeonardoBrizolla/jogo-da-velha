import './styles.css';

const handleClick = () => console.log('click sobre');

export const Link = ({ content = '', className = '' }) => (
  <a href="#to-do" className={`link ${className}`} onClick={handleClick}>
    {content}
  </a>
);
