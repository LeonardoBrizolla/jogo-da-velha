import "./styles.css";

export const TagGame = ({ content, className = "" }) => (
  <output className={`tag-game ${className}`}>{content}</output>
);
