import './styles.css';

export const Label = ({ content, htmlFor }) => (
  <label htmlFor={htmlFor} className="label">
    {content}
  </label>
);
