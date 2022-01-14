import './styles.css';

export const Link = ({ content = '', className = '' }) => (
  <a href="#to-do" className={`link ${className}`}>
    {content}
  </a>
);
