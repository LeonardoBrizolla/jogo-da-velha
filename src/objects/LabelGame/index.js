import './styles.css';

export const LabelGame = ({ content, htmlFor, onClick }) => (
  <label htmlFor={htmlFor} className="label-game" onClick={onClick}>
    {content}
  </label>
);
