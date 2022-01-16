import "./styles.css";

export const LayerDark = ({ children, className }) => (
  <article className={`layer-dark ${className}`}>{children}</article>
);
