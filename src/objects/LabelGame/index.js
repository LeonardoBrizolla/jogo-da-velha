import "./styles.css";

export const LabelGame = ({ content, htmlFor }) => (
  <label htmlFor={htmlFor} className="label-game">
    {content}
  </label>
);
