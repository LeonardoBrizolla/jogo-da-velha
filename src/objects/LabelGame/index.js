import "./styles.css";

export const LabelGame = ({ content, htmlFor, onClick }) => (
  <label onClick={onClick} htmlFor={htmlFor} className="label-game">
    {content}
  </label>
);
