import './styles.css';

export const About = ({ children, className }) => (
  <article className={`about ${className}`}>{children}</article>
);
